<template>
  <view class="home">
    <!-- //顶部标签 -->
    <view class="topnav">
      <u-tabs :list="navlist" lineWidth="30" lineColor="#f56c6c" :activeStyle="{
     color: '#303133',
     fontWeight: 'bold',
      transform: 'scale(1.05)'
     }" :inactiveStyle="{
     color: '#606266',
     transform: 'scale(1)'}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @click="clickNav">
      </u-tabs>
    </view>
    <!-- //骨架瓶 -->
    <view class="loadingState" v-show="loadState">
      <u-skeleton rows="3" avatar title loading></u-skeleton>
    </view>
    <!-- //主体内容 -->
    <view class="content">主体</view>
    <!-- //新增按钮 -->
    <view class="edit">
      <text class="iconfont icon-a-21-xiugai"></text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        loadState: false, //骨架瓶显示状态
        navlist: [{ //顶部标签数组
            name: "最新"
          },
          {
            name: "热门"
          }
        ]
      }
    },
    onLoad() {

    },
    methods: {
      clickNav(e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .topnav {
      margin-bottom: 30rpx;
    }

    .loadingState {
      padding: 30rpx;
    }

    .edit {
      width: 120rpx;
      height: 120rpx;
      background-color: #0199fe;
      border-radius: 50%;
      color: #fff;
      position: fixed;
      z-index: 100;
      bottom: 150rpx;
      right: 50rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 20rpx rgba(1, 153, 254, 0.8);

      .iconfont {
        font-size: 50rpx;
      }
    }
  }
</style>
