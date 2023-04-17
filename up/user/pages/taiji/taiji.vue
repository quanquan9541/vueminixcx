<template>
  <view class="content">
    <view class="bigbox">
      <view class="top">
        <view class="koujue" v-if="!status">
          <text>乾三连（☰） 坤六断（☷）</text>
          <text>离中虚（☲） 坎中满（☵）</text>
          <text>震仰孟（☳） 艮覆碗（☶）</text>
          <text>兑上缺（☱） 巽下断（☴）</text>
        </view>
        <view class="guaxiang" v-else="status">
          <image mode="scaleToFill" :src="'../../static/taiji/'+index+'.png'" v-for="(index,item) in  guxiang"></image>
          <text class="title" @click="copyText">{{zip.guaming.name}}</text>
          <text class="text">{{zip.guaming.title}}</text>
          <text class="edit">{{zip.guaming.edit}}</text>
          <text class="edit">{{zip.guaming.editt}}</text>
          <text class="edit">{{zip.guaming.edits}}</text>
        </view>
      </view>
      <view class="tishi">
        <text v-show="bools">点击下方太极图开启算卦</text>
      </view>
      <view class="taiji" :style="animation" @click="fate"></view>
    </view>
    <view class="buttom">
      <text>如果命运不站在我这边，那么我将站在命运的那一边</text>
    </view>
  </view>
</template>

<script>
  import {
    debounce,
    dateFormat
  } from '../../js/tools.js';
  import colorGradient from '../../uni_modules/uview-ui/libs/function/colorGradient.js';
  import {
    data
  } from '../../uni_modules/uview-ui/libs/mixin/mixin.js';
  const yinyangdata = require('@/datalist/yinyang.json')
  export default {
    data() {
      return {
        dadad: yinyangdata,
        zipdata: {}, //缓存数据
        bools: true, //永久判断
        zip: {
          guaming: {}, //挂名
          ymd: "" //计算日期
        }, //数据包
        guaObj: yinyangdata,
        guxiang: "", //数组
        status: false,
        animation: "animation-play-state: paused",
        arr: []
      }
    },
    onLoad() {
      uni.$u.mpShare.title = '太极八卦图';
      console.log('启动');
      // uni.removeStorageSync('taijibagua')
      let setdata = uni.getStorageSync('taijibaguatu')
      if (!setdata) {
        return
      } else {
        this.bools = false
        this.zip = setdata
      }
    },
    methods: {
      //设置缓存
      setdata() {
        uni.setStorageSync("taijibaguatu", this.zip)
      },
      //获取年月日
      ymdget() {
        this.zip.ymd = dateFormat(new Date(), 'yyyyMMdd')
        // this.zip.ymd = "20230310"
      },
      //复制
      copyText() {
        let text = this.zip.guaming.name
        this.Copy(text)
      },
      //复制窗
      Copy(e) {
        uni.setClipboardData({
          data: e,
          success: function(res) {
            console.log('复制的信息：', e);
            uni.showToast({
              title: '复制成功',
            });
          }
        });
      },
      //点击八卦
      fate() {
        this.bools = false
        if (!this.zip.guaming) {
          this.fangdou()
        } else {
          if (dateFormat(new Date(), 'yyyyMMdd') - this.zip.ymd < 1) {
            // console.log('一天一次');
            uni.showToast({
              title: '一天只能测算一次哦!~',
              icon: "none",
              duration: 2000
            })
            return
          } else {
            this.fangdou()
          }
        }
      },
      //循环64ms*49
      circulate() {
        let arr = [] //放个空数组在这里，等会算八卦
        for (let i = 0; i < 6; i++) { //循环6次
          let num = String(Math.floor(Math.random() * 2)) //求0-1
          arr.push(num) //输出
        }
        return arr
      },
      //定时器
      timers() {
        let num = 0
        let time = setInterval(() => {
          num++
          // console.log(num);
          if (num >= 49) {
            clearInterval(time)
            this.circulate()
          }
          this.arr = this.circulate()
        }, 64);
      },
      //抽取卦象
      arrayguaxiang() {
        this.timers()
        setTimeout(() => {
          //逆序
          let darr = [];
          for (let i = this.arr.length - 1; i >= 0; i--) {
            let j = this.arr[i]
            darr.push(j)
          }
          this.guxiang = darr
          let guatou = this.arr.join('')
          this.zip.guaming = this.guaObj[guatou]
        }, 6000)
        return
      },
      //使用防抖
      fangdou: debounce(function() {
        this.suanfa()
      }),
      // 算卦函数抽取
      suanfa() {
        if (!this.status) {
          this.animation = "animation-play-state: running"
          uni.removeStorageSync('taijibaguatu')
          this.ymdget() //显示时间
          this.arrayguaxiang()
          setTimeout(() => { //箭头函数 必须用
            this.status = !this.status; //切换界面
            this.animation = "animation-play-state: paused" //暂停动画
            this.setdata() //设置缓存
          }, 9000); //定时。9秒
        } else {
          this.status = !this.status
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20rpx;
    height: 100%;

    .bigbox {
      display: flex;
      padding: 10rpx;
      height: 100%;
      margin: 10rpx;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: relative;

      .top {
        margin: 20rpx;
        height: 600rpx;

        .koujue {
          height: 600rpx;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;

          text {
            padding: 10rpx 0;
            font-family: '华文细黑';
            font-style: normal;
            font-weight: 900;
            font-size: 25px;
            color: #f9974c;
            text-align: center;
            text-shadow: 1px 1px 1px #c4c4c4
          }
        }

        .guaxiang {
          height: 600rpx;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          .title,
          .text,
          .edit {
            padding: 15rpx 0;
            font-family: '华文细黑';
            font-style: normal;
            font-weight: 900;
            font-size: 48rpx;
            color: #55557f;
            text-align: center;
            text-shadow: 1px 1px 1px #A2ACBD
          }

          .text {
            font-size: 40rpx;
            padding-top: 0;
            color: #004FB6;
          }

          .edit {
            color: #ACBAD3;
            white-space: normal;
            direction: inherit;
            text-align: center;
            word-wrap: normal;
            writing-mode: horizontal-tb;
            line-height: 20rpx;
            font-size: 18rpx;
            padding-top: 2rpx;
            padding-bottom: 5rpx;
            text-shadow: none;
          }
        }
      }

      .tishi {
        height: 80rpx;

        text {
          padding: 20rpx 0;
          font-family: '华文细黑';
          font-style: normal;
          font-size: 8px;
          color: #55aaff;
          text-align: center;
          text-shadow: 1px 1px 1px #c4c4c4
        }
      }

      .taiji {
        display: flex;
        align-items: center;
        width: 450rpx;
        height: 450rpx;
        margin: 60rpx 0;
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
        width: 225rpx;
        height: 225rpx;
        // border: 1px solid red;/注销边框
        border-radius: 50%;
        background-image: radial-gradient(black 20%, white 20%);
      }

      .taiji::after {
        content: "";
        width: 225rpx;
        height: 225rpx;
        // border: 1px solid red;//注销边框
        border-radius: 50%;
        background-image: radial-gradient(white 20%, black 20%);
      }
    }



    .buttom {
      position: absolute;
      bottom: 25rpx;

      text {
        padding: 20rpx 0;
        font-family: '华文细黑';
        font-style: normal;
        font-size: 8px;
        color: #aaaa7f;
        text-align: center;
        text-shadow: 1px 1px 1px #c4c4c4
      }
    }
  }
</style>