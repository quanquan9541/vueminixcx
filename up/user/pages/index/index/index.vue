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
      <view class="button">
        <u-button @click="gotowork" type="primary" :plain="true" color='#aaaaff' :hairline="true" shape="circle"
          text="工作计算器">
        </u-button>
      </view>
      <view class="button">
        <u-button @click="gototaiji" type="primary" :plain="true" color='#aaaaff' :hairline="true" shape="circle"
          text="太极八卦图">
        </u-button>
      </view>
      <view class="button">
        <u-button @click="gotojd" type="primary" :plain="true" color='#aaaaff' :hairline="true" shape="circle"
          text="销量查询器">
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

      };
    },
    methods: {
      //跳转到京东链接转化
      gotojd() {
        uni.navigateTo({
          url: '/pages/jdurl/jdurl'
        })
      },
      //跳转到工作排行榜
      gotowork() {
        uni.navigateTo({
          url: "/pages/worklist/listw"
        })
      },
      //跳转到太极图
      gototaiji() {
        uni.navigateTo({
          url: "/pages/taiji/taiji"
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
      float: left // position: relative;
        // border: 1px red solid;
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
