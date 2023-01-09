<template>
  <view>
    <view class="bg">
      <!--  <image mode="aspectFit" src="../../static/bg/bg1.jpg" v-for="item in [0,1,2,3,4,5]"></image> -->
      <image mode="aspectFit" :src="'../../static/bg/bg'+index+'.jpg'" v-for="(index,item) in bg"></image>

    </view>
    <view class="botton">
      <!-- {{bg[1]}} -->
      <button @click="fate">算命</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        bg: "" //数组
      }
    },
    methods: {
      fate() {
        let arr = [] //放个空数组在这里，等会算八卦
        for (let i = 0; i < 6; i++) { //循环6次
          let num = String(Math.floor(Math.random() * 2)) //求0-1
          arr.push(num) //输出
        }
        console.log(arr) //日志
        this.bg = arr
      }

    }
  }
</script>

<style>
  .bg {
    height: 500rpx;
    width: 750rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 0px, 20px;
  }

  .botton {
    padding: 20px
  }
</style>
