<template>
  <view class="content">
    <view>首页</view>
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{title}}</text>
    </view>
    <view class="text-area" v-for=" (item, index) in obj" :key="index">
      姓名： {{ item.text }}
      电话：{{item.tel}}
      金钱：{{item.money}}
    </view>
    <image :src="url"></image>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        url: "../../static/tar/me.png",
        obj: [{

            text: '张三',
            tel: '110',
            money: '100'
          },
          {
            text: '李四',
            tel: '119',
            money: '200'
          },
          {
            text: '王五',
            tel: '120',
            money: '230'
          }
        ],
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {

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
