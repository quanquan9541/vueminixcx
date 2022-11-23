<template>
  <view class="home">
    <view class="logo">
      <u--image src="/static/logo.png" width="100rpx" height="100rpx" shape="circle" mode="aspectFit"></u--image>
    </view>
    <view class="top">
      <text>哈喽大家好</text>
      <text>这里略懂少年的工具小程序</text>
    </view>
    <view class="bottom">
      <u-button @click="gotowork" class="button" type="primary" Color="#B2A6FD" :plain="true" text="工作计算器"></u-button>
      <u-button @click="gototaiji" class="button" type="primary" Color="#B2A6FD" :plain="true" text="太极八卦图"></u-button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
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
      box-shadow: 1px 1px 1px 1px rgba(175, 168, 254, 3);
      border-radius: 12px;
      border-width: 1px;
      border-color: #90a2b5;




      text {
        font-family: '华文细黑';
        text-decoration: none;
        letter-spacing: 1px;
        word-spacing: 1px;
        text-shadow: 1px 1px 1px #c4c4c4
      }
    }

    .bottom {
      flex: 1;
      padding: 20rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 1px 1px 1px 1px rgba(175, 168, 254, 3);
      border-radius: 12px;
      border-width: 1px;
      border-color: #90a2b5;

      .button {
        margin: 20rpx 0;
        box-shadow: 0px 2px 1px 1px rgba(175, 168, 254, 3);
        border-radius: 12px;
        border-width: 1px;
        border-color: #90a2b5;
      }
    }
  }
</style>
