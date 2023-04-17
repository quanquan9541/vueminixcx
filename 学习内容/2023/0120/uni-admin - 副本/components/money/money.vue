<template>
  <view>
    <view class="lrbox">
      <view class="left">{{item.ram}}+{{item.rom}}</view>
      <view class="right">{{item.money}}</view>
      <button class="but" type="mini" @click="gotocamera(item._id)">
        <text>编辑</text>
      </button>
    </view>
  </view>
</template>

<script>
  export default {
    name: "money",
    props: {
      item: {
        type: Object,
        default () {
          return {};
        }
      },
    },
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .lrbox {
    width: 600rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5rpx;

    .left,
    .right {
      width: 200rpx;
    }

    .but {
      width: 150rpx;
      height: 40rpx;
      font-size: 8px;
      text-align: center;
      line-height: 40rpx;
    }
  }
</style>