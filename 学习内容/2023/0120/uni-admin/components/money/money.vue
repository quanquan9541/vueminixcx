<template>
  <view>
    <view class="lrbox">
      <view class="left">{{item.ram}}+{{item.rom}}</view>
      <view class="right">{{item.money}}</view>
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
    width: 400rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }
</style>
