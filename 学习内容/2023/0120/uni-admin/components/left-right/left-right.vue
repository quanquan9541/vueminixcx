<template>
  <view>
    <view class="lrbox">
      <view class="left">{{item.ComeraType}}</view>
      <view class="right">{{item.Comeraedit}}</view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "left-right",
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
