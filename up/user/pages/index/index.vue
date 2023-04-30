<template>
  <view class="home">
    <view class="top">
      <u-swiper :list="piclist" radius="14px" indicator indicatorMode="dot" interval="5000" :circular=true
        imgMode="aspectFill"></u-swiper>
    </view>
    <view class="bottom">
      <view class="button" v-for="(item,index) in list" :key="index">
        <u-button @click="gototo(item.url)" type="primary" :plain="true" color="#aaaaff" :hairline="true" shape="circle"
          :text="item.text">
        </u-button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            text: "今日幸运茶",
            url: "/pages/teamilk/teamilk"
          },
          /**
                   {
                     text: "手机推荐录",
                     url: "/pages/mobblephone/mobblephone"
                   }, **/
          {
            text: "每天测一卦",
            url: "/pages/taiji/taiji"
          }, {
            text: "销量查询器",
            url: "/pages/jdurl/jdurl"
          },
          /**{
            text: "工作计算器",
            url: "/pages/worklist/listw"
          }**/
        ],
        piclist: [
          "https://mp-d3b6883a-bc50-4d37-854d-dfb75a1d8a17.cdn.bspapp.com/cloudstorage/9ff27368-4f1c-4936-a439-8364ca89b889.jpg",
          "https://mp-d3b6883a-bc50-4d37-854d-dfb75a1d8a17.cdn.bspapp.com/cloudstorage/2bdbd32b-e31d-40e1-a875-ed176f85eb3a.jpg",
          "https://mp-d3b6883a-bc50-4d37-854d-dfb75a1d8a17.cdn.bspapp.com/cloudstorage/2062d8e1-d53b-4613-8985-3a32a2a6c931.jpg"
        ]
      };
    },
    onShow() {
      uni.$u.mpShare.title = "略懂工具箱"
    },
    methods: {
      /**跳转函数
       * @param {Object} e 链接地址
       */
      gototo(e) {
        uni.navigateTo({
          url: e
        })
      },

    },
  }
</script>

<style lang="scss">
  .home {
    overflow: hidden;
    padding: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .top {}

    .bottom {
      margin-top: 20rpx;
      padding: 20rpx;
      height: calc(100vh - 360rpx);
      overflow: scroll;
      display: flex;
      flex-direction: column;
      justify-content: start;
      border-radius: 14px;
      border: 1rpx solid #aaaaff;

      .button {
        margin: 20rpx 0;
      }
    }
  }
</style>