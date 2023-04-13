<template>
  <view class="home">
    <view class="bottom">
      <view class="button" v-for="(item,index) in list" :key="index">
        <u-button @click="gototo(item.url)" type="primary" :plain="true" color='#aaaaff' :hairline="true" shape="circle"
          :text=item.text>
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
          }, {
            text: "每天测一卦",
            url: "/pages/taiji/taiji"
          }, {
            text: "销量查询器",
            url: "/pages/jdurl/jdurl"
          },

          {
            text: "工作计算器",
            url: "/pages/worklist/listw"
          }
        ],
      };
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
    padding: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bottom {
      flex: 1;
      padding: 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 14px;
      border: 1rpx solid #aaaaff;

      .button {
        margin: 20rpx 0;
      }
    }
  }
</style>