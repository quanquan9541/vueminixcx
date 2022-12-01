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
          <view class="users">
            <template v-for="item in likeUserArr">
              <image v-if="item.user_id[0].avatar_file.url" :src="giveAvatar(item)" mode="aspectFill"></image>
            </template>
          </view>
          <view class="text">
            <text class="num">{{ detailObj.view_count }}</text>
            人看过
          </view>
        </view>
      </view>
    </view>
    <!-- 评论区 -->
    <view class="comment">
      <view v-if="!Commentlist.length && NoComment"><u-empty mode="comment" icon="http://cdn.uviewui.com/uview/empty/comment.png"></u-empty></view>
      <view class="content" v-else>
        <view class="item" v-for="item in Commentlist"><comment-item :item="item" @removeEnv="removeEnv"></comment-item></view>
      </view>
    </view>
    <!-- 评论输入框 -->
    <comment-frame :comment="commentObj" @commentEnv="PcommentEnv"></comment-frame>
  </view>
</template>

<script>
const db = uniCloud.database();
const utils = uniCloud.importObject('utils', {
  customUI: true // 取消自动展示的交互提示界面
});
import { giveName, giveAvatar, likefun } from '../../utils/tools.js';
import { store } from '@/uni_modules/uni-id-pages/common/store.js';
import pagesJson from '@/pages.json';
import { callWithErrorHandling } from 'vue';
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
      detailObj: null,
      likeUserArr: [],
      commentObj: {
        article_id: '',
        comment_type: 0
      },
      Commentlist: [],
      NoComment: false
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
    this.commentObj.article_id = e.id;
    this.getData();
    this.readUpdata();
    this.getLikeuser();
    this.getComment();
  },
  methods: {
    likefun, //导入点赞
    giveName,
    giveAvatar,
    //删除后回调
    removeEnv(e) {
      console.log('删除后回调', e);
      //获取索引值
      let index = this.Commentlist.findIndex(item => {
        return item._id == e.id;
      });
      this.Commentlist.splice(index, 1); //删除索引值为index 1个
    },
    //发布成功后的回调
    PcommentEnv(e) {
      // console.log(e);
      this.Commentlist.unshift({
        ...e,
        ...this.commentObj,
        user_id: [store.userInfo]
      });
    },
    //获取评论
    getComment() {
      let commentTemp = db
        .collection('quanzi_comment')
        .where(`article_id=="${this.artid}"`)
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
          if (res.result.data == 0) this.NoComment = true; //修改
          //
          this.Commentlist = res.result.data;
        });
    },
    //获取点赞用户
    getLikeuser() {
      let likeTemp = db
        .collection('quanzi_like')
        .where(`article_id=="${this.artid}"`)
        .getTemp();
      let userTemp = db
        .collection('uni-id-users')
        .field('_id,avatar_file')
        .getTemp();

      db.collection(likeTemp, userTemp)
        .orderBy('like_date desc')
        .limit(5)
        .get()
        .then(res => {
          res.result.data = res.result.data.reverse(); //数据翻转
          this.likeUserArr = res.result.data;
        });
    },

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
      likefun(this.artid);
    },
    //点赞

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

  .comment {
    padding: 30rpx;
    padding-bottom: 120rpx;
    // border: solid #0199fe 1rpx;
  }
}
</style>
