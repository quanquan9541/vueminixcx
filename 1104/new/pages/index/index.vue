<template>
  <view class="home">
    <view class="centent">
      <view class="item" v-for="(item,index) in 5">
        <view class="text">
          <view class="title">默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题</view>
          <view class="info">
            <text>作者</text>
            <text>2022-11-04</text>
            <text>删除</text>
          </view>
        </view>
        <view class="pic">
          <!-- 图片区域 -->
          <image mode="aspectFill" src="../../static/logo.png"></image>
        </view>
      </view>
    </view>
    <view class="goadd" @click="goadd">+</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {
      goadd() {
        uni.navigateTo({
          url: "/pages/add/add"
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .centent {
      padding: 30rpx;

      .item {
        display: flex;
        justify-content: space-between;
        padding: 20rpx, 0;
        border-bottom: 1rpx solid #eee;

        .text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20rpx;

          .title {
            font-size: 40rpx;
            color: #333;
            //网上抄的两行省略
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            //两行省略结束
          }

          .info {
            font-size: 24rpx;
            color: #888;

            text {
              padding-right: 20rpx;
            }
          }
        }

        .pic {
          width: 260rpx;
          height: 180rpx;

          image {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .goadd {
      width: 100rpx;
      height: 100rpx;
      background: #00ff7f;
      color: #ff0000;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 60rpx;
      position: fixed;
      right: 60rpx;
      bottom: 100rpx;
      box-shadow: 0 0 20rpx rgb(50, 230, 37);
    }
  }
</style>
