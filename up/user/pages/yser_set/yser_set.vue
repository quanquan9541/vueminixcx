<template>
  <view>
    <view class="user">
      <view class="top">
        <view class="group" @click="toUserInfo">
          <view class="userinfo">
            <view class="pic">
              <image v-if="hasLogin && userInfo.avatar_file && userInfo.avatar_file.url" :src="userInfo.avatar_file.url"
                mode="aspectFill"></image>
              <image v-else src="../../static/iconPath/user-default.png" mode="aspectFill"></image>
            </view>
            <view class="text" v-if="hasLogin">
              <view class="nickname">{{ userInfo.nickname || userInfo.username || userInfo.mobile ||noname }}</view>
              <view class="year">
                <uni-dateformat :date="userInfo.register_date"
                  :threshold="[3600, 99 * 365 * 24 * 60 * 60 * 1000]"></uni-dateformat>
                注册
              </view>
            </view>
            <view class="text" v-else>
              <view class="nickname">点击登录</view>
            </view>
          </view>

          <view class="more"><text class="iconfont icon-you"></text></view>
        </view>

        <view class="bg">
          <image v-if="hasLogin && userInfo.avatar_file && userInfo.avatar_file.url" :src="userInfo.avatar_file.url"
            mode="aspectFill"></image>
          <image v-else src="../../static/iconPath/user-default.png" mode="aspectFill"></image>
        </view>
      </view>

      <view class="main">
        <view class="list">
          <view class="group">
            <!-- 1 -->
            <view class="item" @click="Tshow">
              <view class="left">
                <text class="iconfont icon-shouji1"></text>
                <text class="text">我的手机</text>
              </view>
              <view class="right"><text class="iconfont icon-you"></text></view>
            </view>
            <!-- 2 -->
            <view class="item" @click="Tshow">
              <view class="left">
                <text class="iconfont icon-gongzuo"></text>
                <text class="text">我的工作</text>
              </view>
              <view class="right"><text class="iconfont icon-you"></text></view>
            </view>
          </view>

          <view class="group">
            <view class="item" @click="goabout">
              <view class="left">
                <text class="iconfont icon-question-circle"></text>
                <text class="text">关于</text>
              </view>
              <view class="right"><text class="iconfont icon-you"></text></view>
            </view>
            <view class="item" @click="gofeedback">
              <view class="left">
                <text class="iconfont icon-qrcode"></text>
                <text class="text">意见反馈</text>
              </view>
              <view class="right"><text class="iconfont icon-you"></text></view>
            </view>
            <view class="item" @click="Tshow">
              <view class="left">
                <text class="iconfont icon-rizhi"></text>
                <text class="text">更新日志</text>
              </view>
              <view class="right"><text class="iconfont icon-you"></text></view>
            </view>
          </view>
          <view class="group">
            <view class="item" @click="logout">
              <view class="left">
                <text class="iconfont icon-tuichu1"></text>
                <text class="text">退出登录</text>
              </view>
              <view class="right"><text class="iconfont icon-you"></text></view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    store,
    mutations
  } from '@/uni_modules/uni-id-pages/common/store.js';
  const db = uniCloud.database();
  export default {
    data() {
      return {

      };
    },
    computed: {
      userInfo() {
        return store.userInfo;
      },
      hasLogin() {
        return store.hasLogin;
      },
      noname() {
        return '请编辑用户名' + uni.$u.timeFormat(store.userInfo.register_date, 'mmdd');
      }
    },
    methods: {
      //前往手机信息表
      gophone() {
        const e = "/pages/MuserPhoneValue/add"
        this.golisturl(e)
      },
      //未完成功能提示弹窗
      Tshow() {
        uni.showModal({
          title: '提示',
          content: '功能未完成',
          showCancel: false,
          complete: (res) => { //改箭头函数
          }
        });
      },
      //点击反馈
      gofeedback() {
        uni.showModal({
          title: '问题反馈',
          content: '问题反馈交流群:527854339',
          showCancel: false,
          complete: (res) => { //改箭头函数
            this.copy("527854339", "群号复制成功")
          }
        });
      },

      //复制内容
      /**
       * @param {Object} e 复制内容
       * @param {Object} text  提示信息
       */
      copy(e, text) {
        // console.log('复制');
        // return
        uni.setClipboardData({
          data: e,
          success: function(res) {
            // console.log('复制的信息：', e);
            uni.showToast({
              title: text,
            });
          }
        });
      },
      /**前往某个页面
       * @param {Object} e 页面 url
       */
      golisturl(e) {
        // console.log("跳转");
        uni.navigateTo({
          url: e
        })
      },
      //前往关于页面
      goabout() {
        uni.navigateTo({
          url: '/pages/aboutme/aboutme',
        })
      },
      //编辑个人资料
      toUserInfo() {
        console.log('点击免密登录页面');
        uni.navigateTo({
          url: '/uni_modules/uni-id-pages/pages/userinfo/userinfo'
        });
      },
      //退出登录
      logout() {
        //调用下方判断
        if (this.goLoginpages()) return;

        uni.showModal({
          title: '是否确认退出？',
          success: res => {
            // console.log(res);
            if (res.confirm) {
              mutations.logout();
              uni.showToast({
                title: '退出中',
                mask: true,
                duration: 1000,
                icon: 'loading'
              });
            }
          }
        });
        // mutations.logout();
      },
      //判断是否登录
      goLoginpages() {
        if (!store.hasLogin) {
          uni.showToast({
            title: '未登录',
            mask: true,
            icon: 'error'
          });
          return true;
        }
        return false;
      }
    }
  }
</script>

<style lang="scss">
  .user {
    .top {
      height: 300rpx;
      background: #bbb;
      padding: 0 30rpx;
      padding-top: var(--status-bar-height);
      position: relative;
      display: flex;
      align-items: center;

      .group {
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        color: #fff;

        .userinfo {
          display: flex;
          width: 100%;
          align-items: center;

          .pic {
            width: 120rpx;
            height: 120rpx;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid #fff;

            image {
              width: 100%;
              height: 100%;
            }
          }

          .text {
            padding-left: 20rpx;

            .nickname {
              font-size: 44rpx;
              font-weight: 600;
            }

            .year {
              font-size: 26rpx;
              opacity: 0.6;
              padding-top: 5rpx;
            }
          }
        }

        .more {
          .iconfont {
            font-size: 40rpx;
          }
        }
      }

      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        image {
          width: 100%;
          height: 100%;
          filter: blur(20px);
          transform: scale(2);
          opacity: 0.5;
        }
      }
    }

    .main {
      width: 100%;
      min-height: 200rpx;
      background: #fff;
      border-radius: 30rpx;
      transform: translateY(-30rpx);
      padding: 30rpx 0;

      .list {
        .group {
          padding: 15rpx 30rpx;
          border-bottom: 15rpx solid #f4f4f4;

          .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25rpx 0;
            font-size: 36rpx;
            color: #555;
            border-bottom: 1rpx solid #f8f8f8;

            .left {
              display: flex;
              align-items: center;

              .iconfont {
                font-size: 38rpx;
                margin-right: 10rpx;
              }
            }

            .right {
              .iconfont {
                font-size: 26rpx;
              }
            }
          }

          .item:last-child {
            border: none;
          }
        }

        .group:last-child {
          border: none;
        }
      }
    }
  }
</style>