<template>
  <view class="content">
    <view class="bigbox">
      <view class="top">
        <view class="koujue" v-show="status">
          <text>乾三连（☰） 坤六断（☷）</text>
          <text>离中虚（☲） 坎中满（☵）</text>
          <text>震仰孟（☳） 艮覆碗（☶）</text>
          <text>兑上缺（☱） 巽下断（☴）</text>
        </view>
        <view class="guaxiang" v-show="!status">
          <image mode="scaleToFill" :src="'../../static/'+index+'.png'" v-for="(index,item) in  guxiang"></image>
        </view>
      </view>
      <view class="tishi" v-show="status1">
        <text>点击下方太极图开启算卦</text>
      </view>
      <!-- 下面是太极图 style="animation-play-state: paused;"-->
      <view class="taiji" :style="animation" @click="fate"></view>
      <view class="buttom">
        <text>如果命运不站在我这边，那么我将站在命运的那一边</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        guxiang: "", //数组
        status: true,
        status1: true,
        animation: "animation-play-state: paused"
        // cesc: "你好"
      }
    },
    onLoad() {

    },
    methods: {
      fate() {
        this.status1 = false
        if (this.status == true) {
          this.animation = "animation-play-state: running"
          uni.showLoading({
            title: '演算中',
            mask: true //遮罩 禁止触摸
          });
          let arr = [] //放个空数组在这里，等会算八卦
          for (let i = 0; i < 6; i++) { //循环6次
            let num = String(Math.floor(Math.random() * 2)) //求0-1
            arr.push(num) //输出
          }
          // console.log(arr) //日志
          this.guxiang = arr
          // this.status = false;//移步定时器输出

          setTimeout(() => { //箭头函数 必须用
            this.status = false; //切换界面
            this.animation = "animation-play-state: paused" //暂停动画
            uni.hideLoading();
          }, 6400); //定时。6.4秒
        } else {
          this.status = true
        }
      }

    }
  }
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    background-color: #f0f0f0;
    width: 750rpx;
    height: 1334rpx;

    .bigbox {
      width: 750rpx;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0; // position: relative;
      position: relative;

      .top {
        width: 100%;
        height: 500rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        // border: 1px solid #000019;
        padding: 10px 0;

        .koujue {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          border-bottom: 2rpx solid #dfdfdf;
          // border: 1px solid #333333;

          text {
            font-size: 40rpx;
            // border: 1px solid #333333;
          }
        }

        .guaxiang {
          height: 240rpx;
          width: 100%;
          display: flex;
          /* justify-content: space-around; */
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0px, 20px;
          flex: 1;
          align-self: center
        }
      }

      .tishi {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 30rpx;


        text {
          font-size: 7px;
          color: #6b6b6b;
          border-bottom: 2rpx solid #dfdfdf;
        }
      }

      .taiji {
        display: flex;
        align-items: center;
        width: 400rpx;
        height: 400rpx;
        margin: 80rpx 0;
        // padding: 50px 0;
        // border: 1px solid red;
        background-image: linear-gradient(black 50%, white 50%);
        border-radius: 50%;
        animation: identifier 1s linear infinite;
      }

      @keyframes identifier {
        0% {
          transform: rotate(-90deg);
        }

        100% {
          transform: rotate(270deg);
        }
      }

      .taiji::before {
        content: "";
        width: 200rpx;
        height: 200rpx;
        // border: 1px solid red;/注销边框
        border-radius: 50%;
        background-image: radial-gradient(black 20%, white 20%);
      }

      .taiji::after {
        content: "";
        width: 200rpx;
        height: 200rpx;
        // border: 1px solid red;//注销边框
        border-radius: 50%;
        background-image: radial-gradient(white 20%, black 20%);
      }

      .buttom {
        position: absolute; // relative相对定位 absolute 绝对定位 需要配合父的相对定位使用
        bottom: 20rpx;
        padding: 0px;
        margin: 0px;
        // border: 1px solid #333333;

        text {
          font-size: 8px;
          color: #6b6b6b;
        }
      }
    }
  }
</style>
