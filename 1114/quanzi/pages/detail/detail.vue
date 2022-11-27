<template>
  <view class="detail">
    <view class="container">
      <view v-if="loading"><u-skeleton rows="10" avatar title loading></u-skeleton></view>
      <view v-else>
        <view class="title">{{ detailObj.title }}</view>
        <view class="userinfo">
          <view class="avatar"><image :src="giveAvatar(detailObj)" mode="aspectFill"></image></view>
          <view class="text">
            <view class="name">{{ giveName(detailObj) }}</view>
            <view class="small">
              <uni-dateformat :date="detailObj.publish_date" format="yyyy年MM月dd日 hh:mm:ss"></uni-dateformat>
              发布于{{ detailObj.province }}
            </view>
          </view>
        </view>
        <view class=" content"><u-parse :content="detailObj.content" :tagStyle="style"></u-parse></view>

        <view class="like">
          <view class="btn" :class="detailObj.islike ? 'active' : ''" @click="clickLike">
            <text class="iconfont icon-good-fill"></text>
            <text v-if="detailObj.like_count">{{ detailObj.like_count }}</text>
          </view>
          <view class="users"><image src="../../static/images/user.jpg" mode="aspectFill"></image></view>
          <view class="text">
            <text class="num">{{ detailObj.view_count }}</text>
            人看过
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const db = uniCloud.database();
const utils = uniCloud.importObject('utils', {
  customUI: true // 取消自动展示的交互提示界面
});
import { giveName, giveAvatar } from '../../utils/tools.js';
import { store } from '@/uni_modules/uni-id-pages/common/store.js';
import pagesJson from '@/pages.json';
export default {
  data() {
    return {
      artid: '',
      loading: true,
      style: {
        // 字符串的形式
        p: 'color: red;font-size:32rpx;',
        span: 'font-size: 30rpx',
        img: 'margin:10rpx 0'
      },
      detailObj: null
    };
  },
  onLoad(e) {
    //启动时判断参数
    if (!e.id) {
      this.errfun();
      return;
    }

    console.log(e);
    this.artid = e.id;
    this.getData();
    this.readUpdata();
  },
  methods: {
    giveName,
    giveAvatar,
    //点击点赞
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
      this.detailObj.islike ? this.detailObj.like_count-- : this.detailObj.like_count++;
      this.detailObj.islike = !this.detailObj.islike;
      this.liketime = time;
      //调用方法
      this.likefun();
    },

    //点赞操作数据库的方法
    async likefun() {
      let count = await db
        .collection('quanzi_like')
        .where(`article_id=="${this.artid}" && user_id==$cloudEnv_uid`)
        .count();
      console.log(count);
      if (count.result.total) {
        db.collection('quanzi_like')
          .where(`article_id=="${this.artid}" && user_id==$cloudEnv_uid`)
          .remove();
        utils.operation('quanzi_article', 'like_count', this.artid, -1);
      } else {
        db.collection('quanzi_like').add({
          article_id: this.artid
        });
        utils.operation('quanzi_article', 'like_count', this.artid, 1);
      }
    },

    //阅读量更新
    readUpdata() {
      utils.operation('quanzi_article', 'view_count', this.artid, 1).then(res => {
        console.log(res);
      });
    },

    //错误判断
    errfun() {
      uni.showToast({
        icon: 'error',
        title: '参数错误'
      });
      setTimeout(() => {
        uni.reLaunch({
          url: '/pages/index/index'
        });
      }, 1000);
    },
    //云端数据
    async getData() {
      let artTemp = db
        .collection('quanzi_article')
        .where(`_id=="${this.artid}"`)
        .getTemp();
      let userTemp = db
        .collection('uni-id-users')
        .field('_id, username, nickname, avatar_file')
        .getTemp();
      let likeTemp = db
        .collection('quanzi_like')
        .where(`article_id=="${this.artid}" && user_id==$cloudEnv_uid`)
        .getTemp();

      let tempArr = [artTemp, userTemp];
      if (store.hasLogin) tempArr.push(likeTemp);
      await db
        .collection(...tempArr)
        .get({
          getOne: true
        })
        .then(res => {
          if (!res.result.data) {
            this.errfun();
            return;
          }
          console.log(res);
          this.loading = false;
          let islike = false;
          if (store.hasLogin) islike = res.result.data._id.quanzi_like.length ? true : false;

          res.result.data.islike = islike;
          this.detailObj = res.result.data;

          //设置页面标题
          uni.setNavigationBarTitle({
            title: this.detailObj.title
          });
        })
        .catch(err => {
          console.log(err);
          this.errfun();
        });
    }
  }
};
</script>

<style lang="scss">
.detail {
  background: #f8f8f8;
  min-height: calc(100vh - var(--window-top));

  .container {
    padding: 30rpx;
    background: #fff;

    .title {
      font-size: 46rpx;
      color: #333;
      line-height: 1.4em;
      font-weight: 600;
    }

    .userinfo {
      padding: 20rpx 0 50rpx;
      display: flex;
      align-items: center;

      .avatar {
        width: 60rpx;
        height: 60rpx;
        padding-right: 15rpx;

        image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .text {
        font-size: 28rpx;
        color: #555;

        .small {
          font-size: 20rpx;
          color: #999;
        }
      }
    }

    .content {
    }

    .like {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80rpx 50rpx 50rpx;

      .btn {
        width: 260rpx;
        height: 120rpx;
        background: #e4e4e4;
        border-radius: 100rpx;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 28rpx;

        .iconfont {
          font-size: 50rpx;
        }

        &.active {
          background: #0199fe;
        }
      }

      .text {
        font-size: 26rpx;
        color: #666;

        .num {
          color: #0199fe;
        }

        .spot {
          padding: 0 10rpx;
        }
      }

      .users {
        display: flex;
        justify-content: center;
        padding: 30rpx 0;

        image {
          width: 50rpx;
          height: 50rpx;
          border-radius: 50%;
          border: 3px solid #fff;
          margin-left: -20rpx;
        }
      }
    }
  }
}
</style>
