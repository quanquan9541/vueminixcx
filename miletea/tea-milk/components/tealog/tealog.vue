<template>
  <view>
    <view class="logbox" v-if='logdata.length'>
      <view class="text">
        <view class="loglist" v-for="(item,index) in logdata" :key="index">
          <view class="log">{{item}}</view>
        </view>
      </view>
      <view class="button" @click="clean">
        <view class="clean">清除历史记录</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "tealog",
    props: {
      logdata: {
        type: Array,
        default () {
          return {};
        }
      },
    },
    data() {
      return {

      };
    },
    methods: {
      clean() {
        this.logdata = []
        uni.removeStorageSync('log');
      }
    }
  }
</script>

<style lang="scss">
  .logbox {
    margin: 20rpx;

    .text {
      margin: 5rpx 5rpx 20rpx 5rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      .loglist {
        margin: 0 20rpx;

        .log {
          font-family: '微软雅黑';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          color: #c4c4c4;
          text-align: center;
          word-wrap: normal;
        }
      }
    }

    .button {
      .clean {
        font-family: '微软雅黑';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #9c9c9c;
        white-space: normal;
        text-align: center;
        word-wrap: normal;
      }
    }
  }
</style>
