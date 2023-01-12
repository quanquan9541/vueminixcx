<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" @click="click"></image>
    <view class="text-area">
      <text class="title">{{title}}</text>
      <uni-data-picker placeholder="请选择处理器" popup-title="请选择处理器型号" collection="mini_cpu"
        field="Cpuvlue as value, model as text" :step-searh="true" self-field="model" parent-field="series">
      </uni-data-picker>
    </view>
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
      click() {
        uni.navigateTo({
          url: "/pages/cpu/cpu_list"
        })
      }
    }
  }
</script>

<style lang="scss">
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
