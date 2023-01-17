<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" @click="click"></image>
    <view class="text-area">
      <text class="title">{{title}}</text>
      <uni-data-picker placeholder="请选择处理器" popup-title="请选择处理器型号" collection="mini_cpu" where="
     state == false" field="_id as value, name as text" :step-searh="true" self-field="_id" parent-field="series">
      </uni-data-picker>
      <uni-data-picker placeholder="请选择地址" popup-title="请选择城市" collection="opendb-city-china"
        field="code as value, name as text" orderby="value asc" :step-searh="true" self-field="code"
        parent-field="parent_code" @change="onchange" @nodeclick="onnodeclick">
      </uni-data-picker>
      <button @click="goadd">123</button>
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
      goadd() {
        uni.navigateTo({
          url: '/pages/index/add/add'
        })
      },

      click() {
        uni.navigateTo({
          url: "/pages/cpu/cpu_manufacturer"
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
