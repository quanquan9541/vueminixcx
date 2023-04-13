<template>
  <view>
    <view class="ggbottombox">
      <a target="_blank" :href="ganurl">
        <img :src="picurl" />
        <p>粤公网安备
          44010602011302号</p>
      </a>
      <a target="_blank" :href="gxburl">
        <p>鄂ICP备2022007667号-1</p>
      </a>
    </view>
  </view>
</template>

<script>
  export default {
    name: "ggbottombox",
    data() {
      return {
        ganurl: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010602011302',
        picurl: "https://mp-d3b6883a-bc50-4d37-854d-dfb75a1d8a17.cdn.bspapp.com/cloudstorage/c4329217-e4ad-45f2-91b2-057cb15da596.png",
        gxburl: "https://beian.miit.gov.cn/#/Integrated/index"
      };
    }
  }
</script>

<style lang="scss">
  .ggbottombox {
    text-align: center;
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    // position: absolute;
    bottom: 15rpx;
    left: 5%;
    // border: 1px red solid;

    a {
      margin: 0 5px;
      display: inline-block;
      text-decoration: none;
      height: 20px;
      line-height: 20px;

      img {
        float: left
      }

      p {
        float: left;
        height: 20px;
        line-height: 20px;
        color: #939393;
      }
    }
  }
</style>