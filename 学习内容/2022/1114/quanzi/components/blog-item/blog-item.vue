<template>
  <view class="blogitem">
    <view class="head">
      <view class="userinfo">
        <view class="avatar"><image :src="giveAvatar(item)" mode="aspectFill"></image></view>
        <view class="name">{{ giveName(item) }}</view>
        <view class="time">
          <uni-dateformat :date="item.publish_date" format="MM月dd hh:mm" :threshold="[60000, 3600000 * 24 * 30]"></uni-dateformat>
        </view>
      </view>
      <!-- 三个点 -->
      <view class="more" @click="clickMore"><text class="iconfont icon-ellipsis"></text></view>
    </view>

    <view class="body">
      <view class="title" @click="godetail">{{ item.title }}</view>
      <view class="text" @click="godetail" v-if="item.description">
        <view class="t">{{ item.description }}</view>
      </view>
      <view class="piclist" v-if="item.picurls.length">
        <view class="pic" :class="item.picurls.length == 1 ? 'only' : ''" v-for="(pic, index) in item.picurls" :key="pic">
          <image @click="clickpic(index)" :src="pic" mode="aspectFill"></image>
        </view>
      </view>
    </view>

    <view class="info">
      <view class="box">
        <text class="iconfont icon-a-27-liulan"></text>
        <text>{{ item.view_count }}</text>
      </view>
      <view class="box" @click="godetail">
        <text class="iconfont icon-a-5-xinxi"></text>
        <text>{{ item.comment_count && item.comment_count > 0 ? item.comment_count : '评论' }}</text>
      </view>
      <view class="box" :class="item.islike ? 'active' : ''" @click="clickLike">
        <text class="iconfont icon-a-106-xihuan"></text>
        <text>{{ item.like_count ? item.like_count : '点赞' }}</text>
      </view>
    </view>
    <!-- 点击弹窗 -->
    <u-action-sheet
      cancelText="取消"
      :actions="sheetlist"
      :show="sheetshow"
      :closeOnClickOverlay="true"
      :closeOnClickAction="true"
      @close="onClose"
      @select="Selectsheet"
    ></u-action-sheet>
  </view>
</template>

<script>
import pagesJson from '@/pages.json';
const db = uniCloud.database();
// import indexVue from '../../pages/index/index.vue';这条在小程序必定报错
import { store } from '@/uni_modules/uni-id-pages/common/store.js';
import { giveName, giveAvatar, likefun } from '@/utils/tools.js';
export default {
  name: 'blog-item',
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      sheetlist: [
        {
          name: '修改',
          type: 'edit',
          disabled: true //禁用
          // fontSize: '20'
        },
        {
          name: '删除',
          type: 'del',
          disabled: true, //禁用
          // fontSize: '20',
          color: '#D75D59'
        }
      ],
      sheetshow: false //弹窗控制
    };
  },

  methods: {
    //导入的函数需要放这里 才能调用
    likefun,
    giveName,
    giveAvatar,
    //首页点赞
    clickLike() {
      //判断登录后才能点赞
      if (!store.hasLogin) {
        uni.showModal({
          title: '您还没有登录？',
          success: res => {
            if (res.confirm) {
              console.log('点击确定');
              console.log('/' + pagesJson.uniIdRouter.loginPage);
              uni.navigateTo({
                url: '/' + pagesJson.uniIdRouter.loginPage
              });
            }
          }
        });
        return;
      }

      //
      let time = Date.now();
      if (time - this.liketime < 1500) {
        uni.showToast({
          icon: 'loading',
          title: '操作过于频繁'
        });
        return;
      }
      //
      this.item.islike ? this.item.like_count-- : this.item.like_count++;
      this.item.islike = !this.item.islike;
      this.liketime = time;
      //调用方法
      likefun(this.item._id);
    },
    //点击更多
    clickMore() {
      let uid = uniCloud.getCurrentUserInfo().uid;
      if (uid == this.item.user_id[0]._id || this.uniIDHasRole('webmaster') || this.uniIDHasRole('admin')) {
        this.sheetlist.forEach(item => {
          item.disabled = false;
        });
      }
      this.sheetshow = true;
    },
    //点击选择弹窗内容
    Selectsheet(e) {
      this.sheetshow = false;
      let type = e.type;
      console.log(e);
      if (type == 'del') {
        this.delfun();
      } else if (type == 'edit') {
        this.goedit();
      }
    },
    //跳转到编辑
    goedit() {
      let id = this.item._id;
      uni.navigateTo({
        url: '/pages/edit/edit?id=' + id
      });
    },
    //选择删除
    delfun() {
      uni.showLoading({
        title: '删除中...'
      });
      db.collection('quanzi_article')
        .doc(this.item._id)
        .update({
          delstate: true
        })
        .then(res => {
          console.log(res);
          uni.hideLoading();
          uni.showToast({
            title: '删除成功',
            icon: 'none'
          });
          this.$emit('delEvent', true);
        })
        .catch(err => {
          console.log(err);
          uni.hideLoading();
        });
    },
    //点击关闭弹窗
    onClose() {
      this.sheetshow = false;
    },

    //点击跳转到详情页
    godetail() {
      uni.navigateTo({
        url: '/pages/detail/detail?id=' + this.item._id
      });
    },
    //单击图片
    clickpic(index) {
      uni.previewImage({
        urls: this.item.picurls,
        current: index
      });
    }
  }
};
</script>

<style lang="scss">
.blogitem {
  .head {
    display: flex;
    font-size: 32rpx;
    align-items: center;
    justify-content: space-between;

    .userinfo {
      display: flex;
      align-items: center;

      .avatar {
        width: 40rpx;
        height: 40rpx;
        border-radius: 50%;
        border-radius: 50%;
        overflow: hidden;

        image {
          width: 100%;
          height: 100%;
          display: block;
        }
      }

      .name {
        color: #222;
        padding-left: 10rpx;
      }

      .time {
        color: #888;
        font-size: 22rpx;
        padding-left: 20rpx;
      }
    }

    .more {
      padding: 5rpx;

      .iconfont {
        font-size: 50rpx;
        color: #888;
      }
    }
  }

  .body {
    padding: 15rpx 0 30rpx;

    .title {
      font-size: 44rpx;
      color: #000;
      font-weight: 600;
      text-align: justify;
    }

    .text {
      padding-top: 10rpx;
      padding-bottom: 10rpx;
      font-size: 30rpx;
      text-align: justify;
      color: #888;

      .t {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    .piclist {
      display: flex;
      padding-top: 20rpx;

      .pic {
        width: 225rpx;
        height: 225rpx;
        margin-right: 6rpx;
        overflow: hidden;

        image {
          width: 100%;
          height: 100%;
        }

        &:first-child {
          border-radius: 20rpx 0 0 20rpx;
        }

        &:last-child {
          border-radius: 0 20rpx 20rpx 0;
        }

        &.only {
          border-radius: 20rpx;
        }
      }
    }
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 26rpx;
    color: #333;

    .box {
      display: flex;
      align-items: center;
      padding: 15rpx 0 5rpx;
      flex: 1;
      display: flex;
      justify-content: center;

      .iconfont {
        font-size: 40rpx;
        padding-right: 10rpx;
      }
    }
    .box.active {
      color: #55aaff;
    }
  }
}
</style>
