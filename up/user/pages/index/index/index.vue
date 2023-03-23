<template>
  <view class="home">
    <view class="logo">
      <u--image src="/static/logo.png" width="100rpx" height="100rpx" shape="circle" mode="aspectFit"></u--image>
    </view>
    <view class="top">
      <text>哈喽大家好</text>
      <text>这里略懂少年的工具小站</text>
    </view>
    <view class="bottom">
      <view class="button" v-for="(item,index) in list" :key="index">
        <u-button @click="gototo(item.url)" type="primary" :plain="true" color='#aaaaff' :hairline="true" shape="circle"
          :text=item.text>
        </u-button>
      </view>
    </view>
    <!-- #ifdef H5 -->
    <view class="bottombox">
      <ggbottombox></ggbottombox>
    </view>
    <!-- #endif -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            text: "今日幸运茶",
            url: "/pages/teamilk/teamilk"
          }, {
            text: "每天测一卦",
            url: "/pages/taiji/taiji"
          }, {
            text: "销量查询器",
            url: "/pages/jdurl/jdurl"
          },

          {
            text: "工作计算器",
            url: "/pages/worklist/listw"
          }
        ],
      };
    },
    methods: {
      /**跳转函数
       * @param {Object} e 链接地址
       */
      gototo(e) {
        uni.navigateTo({
          url: e
        })
      },

    },
  }
</script>

<style lang="scss">
  .home {
    padding: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bottombox {
      float: left // position: relative; border: 1px red solid;
    }

    .logo {
      padding: 30rpx;
      display: flex;
      justify-content: center;
    }

    .top {
      padding: 20rpx;
      margin-bottom: 20rpx;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 14px;
      // padding: 20rpx;
      border: 1rpx solid #aaaaff;

      text {
        font-family: '微软雅黑';
        font-style: normal;
        font-weight: normal;
        text-decoration: none solid;
        white-space: normal;
        text-overflow: clip;
        word-wrap: normal;
        color: #464555;
        text-shadow: 0px 2px 7px #bcbcbc
      }
    }

    .bottom {
      flex: 1;
      padding: 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 14px;
      border: 1rpx solid #aaaaff;


      .button {
        margin: 20rpx 0;
      }
    }
  }
</style>
