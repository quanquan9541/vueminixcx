<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title" @click="log">{{single}}</text>
      <view>
        <uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" />
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        single: '',
      }
    },
    onLoad() {

    },
    methods: {
      log() {
        console.log(this.single)
      },
      maskClick(e) {
        this.single = e
        console.log('maskClick事件:', e);

      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
