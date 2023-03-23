<template>
  <view class="content">
    <view class="bigbox">
      <view class="top">
        <view class="koujue" v-if="status">
          <text>乾三连（☰） 坤六断（☷）</text>
          <text>离中虚（☲） 坎中满（☵）</text>
          <text>震仰孟（☳） 艮覆碗（☶）</text>
          <text>兑上缺（☱） 巽下断（☴）</text>
        </view>

        <view class="guaxiang" v-if="!status">
          <image mode="scaleToFill" :src="'../../static/taiji/'+index+'.png'" v-for="(index,item) in  guxiang"></image>
          <text @click="copyText">{{zip.guaming}}卦</text>
        </view>
      </view>
      <view class="tishi" v-if="status1">
        <text v-if="status1">点击下方太极图开启算卦</text>
      </view>

      <!-- 下面是太极图 style="animation-play-state: paused;"-->
      <view class="taiji" :style="animation" @click="fate"></view>
    </view>
    <view class="list">
      <view class="listlist" v-for="(item,index) in zipdata" :key="index" @click="copytext(item)">
        <view class="time">{{item.yymmdd}}</view>
        <view class="text">{{item.guaming}}</view>
      </view>
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
        zipdata: [], //缓存数据
        zip: {
          guaming: "", //挂名
          yymmdd: "", //日期
          ymd: "" //计算日期
        }, //数据包
        guaObj: yinyangdata,
        guxiang: "", //数组
        status: true,
        status1: true,
        animation: "animation-play-state: paused",
        arr: []
        // cesc: "你好"
      }
    },
    onLoad() {},
    onShow() {
      let setdata = uni.getStorageSync('taijibagua')
      // console.log('获取缓存', setdata);
      if (!setdata) {
        this.zipdata = []
        return
      } else {
        this.zipdata = setdata
        // console.log('缓存缓存2', this.zipdata);
      }


    },
    methods: {
      //设置缓存
      setdata() {
        let zipdata = this.zipdata.unshift({
          //向前添加数据  push 向后
          ...this.zip
        })
        uni.setStorageSync("taijibagua", this.zipdata)
        console.log('数据包', zipdata);
      },
      //获取年月日
      ymdget() {
        this.zip.yymmdd = dateFormat(new Date(), 'yyyy-MM-dd')
        this.zip.ymd = dateFormat(new Date(), 'yyyyMMdd')
      },
      //复制以前的
      copytext(e) {
        // console.log(e);
        let text = e.guaming
        this.Copy(text)
      },
      //复制
      copyText() {
        let text = this.zip.guaming
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
        this.ymdget() //显示时间
        if (!this.zipdata.length) {
          console.log("没有值", this.zipdata);
          this.fangdou()
        } else {
          console.log('有值', this.zipdata);
          if (this.zip.ymd - this.zipdata[0].ymd < 1) {
            console.log('一天一次');
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
        // console.log('内部' + arr);
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
          // console.log('ssss' + this.arr);
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
        this.status1 = false
        if (this.status == true) {
          this.animation = "animation-play-state: running"
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
    // background-color: #aaaaff;
    // background-size: 100%;


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
          justify-content: center;
          align-items: center;

          text {
            padding: 20rpx 0;
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

          text {
            padding: 20rpx 0;
            font-family: '华文细黑';
            font-style: normal;
            font-weight: 900;
            font-size: 25px;
            color: #55557f;
            text-align: center;
            text-shadow: 1px 1px 1px #c4c4c4
          }
        }
      }

      .tishi {
        height: 100rpx;

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
        width: 400rpx;
        height: 400rpx;
        margin: 60rpx 0;
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



    }

    .list {
      width: 80vw;
      height: 80rpx;
      // border: red 1px solid;
      overflow: scroll;

      .listlist {

        display: flex;
        justify-content: space-around;

        .time,
        .text {
          padding: 20rpx 0;
          font-family: '华文细黑';
          font-style: normal;
          font-size: 16px;
          color: #555500;
          text-align: center;
          text-shadow: 1px 1px 1px #c4c4c4
        }
      }
    }

    .buttom {

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
