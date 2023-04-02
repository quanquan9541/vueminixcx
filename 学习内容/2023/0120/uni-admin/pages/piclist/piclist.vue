<template>
  <view>
    <view class="father">
      <view class="check">按钮包</view>
      <view class="piclist">
        <view class="title">
          <view class="ptitle">
            华为
          </view>
          <view class="cname">P60</view>
          <view class="bctext">
            <view class="time">2023.03.36</view>
            <view class="text">
              <text>仅供参考</text>
              <text>by略懂少年</text>
            </view>
          </view>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .father {
    margin-left: 20rpx;

    .check {
      height: 100rpx;
    }

    .piclist {
      width: 1920rpx;
      height: 1080rpx;
      border: 1px red solid;

      .title {
        margin-top: 25rpx;
        width: 100%;
        height: 175rpx;
        border: 1px blue solid;
      }
    }
  }
</style>