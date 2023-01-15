<template>
  <view>
    <view class="list" @click="got">
      <view class="left">{{
        type(item.type)
      }}</view>
      <view class="right">{{item.name}}</view>
      <u-button class='button' type="error" size="mini" shape='circle' text="编辑"></u-button>
    </view>

  </view>
</template>

<script>
  import {
    type
  } from '../../utils/tools.js';
  export default {
    name: "little_list",
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
        title: ""
      };
    },
    methods: {
      type,
    }

  }
</script>

<style lang="scss">
  .list {
    margin: 0 20rpx;
    height: 60rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1rpx solid #a4a4a4;

    .left,
    .right {
      flex: 1;
      padding: 10rpx;
      margin: 10rpx;
      // border: 1rpx solid #ff5500;
      // text-align: center;
    }

    .right {
      text-align: right
    }

    .button {
      margin-left: 40rpx;
      width: 20rpx;
    }
  }
</style>
