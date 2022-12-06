<template>
  <view class="reply">
    <view class="top">
      <comment-item :item="replyItem" :childState="true" :closeButton="true"></comment-item>
    </view>
    <!-- 二级评论 -->
    <view class="list">
      <view class="row" v-for="item in childrenCommentlist">
        <comment-item :item="item" @removeEnv="removeEnv" :childState="true"></comment-item>
      </view>

    </view>
    <!-- 评论输入框 -->
    <view>
      <comment-frame :comment="commentObj" :placeholder="`回复：${giveName(this.replyItem)}`" @commentEnv="PcommentEnv">
      </comment-frame>
    </view>
  </view>
</template>

<script>
  const db = uniCloud.database();
  import {
    store
  } from '@/uni_modules/uni-id-pages/common/store.js';
  import {
    giveName,
    giveAvatar
  } from '@/utils/tools.js';
  export default {
    data() {
      return {
        childrenCommentlist: [],
        replyItem: null,
        commentObj: {
          article_id: '',
          comment_type: 1,
          reply_user_id: '',
          reply_comment_id: ''
        },
      };
    },
    onLoad() {
      let replyItem = uni.getStorageSync('replyItem')
      if (!replyItem) {
        uni.showToast({
          title: '该评论不存在',
          icon: 'none'
        })
        setTimeout(() => {
          uni.navigateBack()
        }, 800)

        return
      }
      this.replyItem = replyItem || {}
      //

      this.commentObj.article_id = replyItem.article_id
      this.commentObj.reply_comment_id = replyItem._id
      this.commentObj.reply_user_id = replyItem.user_id[0]._id
      this.getComment()
    },
    onUnload() {
      uni.removeStorageSync('replyItem')
    },
    methods: {
      giveName,
      giveAvatar,
      //删除后回调
      removeEnv(e) {
        console.log('删除后回调', e);
        //获取索引值
        let index = this.childrenCommentlist.findIndex(item => {
          return item._id == e.id;
        });
        this.childrenCommentlist.splice(index, 1); //删除索引值为index 1个
      },
      //发布成功后的回调
      PcommentEnv(e) {
        console.log('评论回调', e);
        this.childrenCommentlist.unshift({
          ...e,
          ...this.commentObj,
          user_id: [store.userInfo]
        });
      },
      //获取评论
      getComment() {
        let commentTemp = db
          .collection('quanzi_comment')
          .where(
            `article_id=="${this.replyItem.article_id}" && comment_type == 1 && reply_comment_id=="${this.replyItem._id}"`
          )
          .orderBy('comment_date desc')
          .limit(5)
          .getTemp();
        let userTemp = db
          .collection('uni-id-users')
          .field('_id,username,nickname,avatar_file')
          .getTemp();
        db.collection(commentTemp, userTemp)
          .get()
          .then(res => {
            console.log('评论', res);

            this.childrenCommentlist = res.result.data;
          });
      },
    }
  };
</script>

<style lang="scss">
  .reply {
    .top {
      padding: 30rpx;
      border-bottom: 15rpx #eee solid;
    }

    .list {
      .row {
        margin-left: 60rpx;
        border-bottom: 1rpx #fcfcfc solid;
      }

      padding: 30rpx;
      padding-bottom:120rpx;
      // border: 1rpx red solid;
    }
  }
</style>
