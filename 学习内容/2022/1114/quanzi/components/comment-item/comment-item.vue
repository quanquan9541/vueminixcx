<template>
  <view>
    <view class="comment-item" @click="goReply">
      <view class="avatar">
        <u-avatar :src="giveAvatar(item)" size="26"></u-avatar>
      </view>

      <view class="wrap">
        <view class="username">
          {{ giveName(item) }}
          <text class="iconfont icon-a-43-guanbi" v-if='!closeButton' @click.stop="delComment"></text>
        </view>
        <view class="comment-content">{{ item.comment_content }}</view>
        <view class="info">
          <view class="reply-btn" v-if='!childState'>{{ item.totalReply}}回复</view>
          <view>
            <uni-dateformat :date="item.comment_date" :threshold="[60000, 3600000 * 24 * 30]"></uni-dateformat>
          </view>
          <view>{{ item.province || '未知区域' }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  const utils = uniCloud.importObject('utils', {
    customUI: true // 取消自动展示的交互提示界面
  });
  const db = uniCloud.database();
  import {
    giveName,
    giveAvatar
  } from '@/utils/tools.js';
  export default {
    name: 'comment-item',
    data() {
      return {};
    },
    props: {
      item: {
        type: Object,
        default () {
          return {};
        }
      },
      childState: {
        type: Boolean,
        default: false
      },
      closeButton: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      giveName,
      giveAvatar,
      //跳转到回复页面
      goReply() {
        if (this.childState) return
        uni.setStorageSync('replyItem', this.item)
        uni.navigateTo({
          url: '/pages/reply/reply'
        });
      },
      //删除评论
      delComment() {
        let uid = uniCloud.getCurrentUserInfo().uid;
        //权限判断
        if (uid == this.item.user_id[0]._id || this.uniIDHasRole('webmaster') || this.uniIDHasRole('admin')) {
          //弹窗
          uni.showModal({
            title: '删除',
            content: '是否确认删除当前评论',
            success: res => {
              console.log('确认', res);
              if (res.confirm) {
                this.remove();
              }
            }
          });
          return;
        }
        uni.showToast({
          title: '无权限',
          icon: 'none'
        });
      },
      //云端删除评论的方法
      remove() {
        db.collection('quanzi_comment')
          .doc(this.item._id)
          .remove()
          .then(res => {
            console.log('删除评论', res);
            uni.showToast({
              title: '删除成功'
            });
            this.$emit('removeEnv', {
              id: this.item._id
            });
            //云对象
            utils.operation('quanzi_article', 'comment_count', this.item.article_id, -1);
          })
          .catch(err => {
            uni.showToast({
              title: '别人的评论',
              icon: 'none'
            });
          });
      }
    }
  };
</script>

<style lang="scss">
  .comment-item {
    display: flex;

    .wrap {
      flex: 1;
      padding-left: 20rpx;
      padding-bottom: 20rpx;

      .username {
        font-size: 26rpx;
        color: #666;
        padding: 10rpx 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .iconfont {
          font-size: 20rpx;
          // border: red 1rpx solid;
          padding: 12rpx;
          color: #999;
        }
      }

      .comment-content {
        font-size: 3#999999;
        color: #111;
        line-height: 1.8em;
      }

      .info {
        font-size: 26rpx;
        color: #666;
        display: flex;
        padding: 10rpx 0;
        align-items: center;

        view {
          margin-right: 25rpx;
        }

        .reply-btn {
          padding: 6rpx 18rpx;
          background: #e4e4e4;
          border-radius: 30rpx;
        }
      }
    }
  }
</style>
