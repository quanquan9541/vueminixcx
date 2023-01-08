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
          <text @click="copyText">{{guaming}}</text>
        </view>
      </view>
      <view class="tishi" v-if="status1">
        <text v-if="status1">点击下方太极图开启算卦</text>
      </view>

      <!-- 下面是太极图 style="animation-play-state: paused;"-->
      <view class="taiji" :style="animation" @click="fate"></view>
    </view>
    <view class="buttom">
      <text>如果命运不站在我这边，那么我将站在命运的那一边</text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      let guaObj = {
        '111111': '乾为天',
        '011111': '天风姤',
        '001111': '天山遁',
        '000111': '天地否',
        '000011': '风地观',
        '000001': '山地剥',
        '000101': '火地晋',
        '111101': '火天大有',
        '010010': '坎为水',
        '110010': '水泽节',
        '100010': '水雷屯',
        '101010': '水火既济',
        '101110': '泽火革',
        '101100': '雷火丰',
        '101000': '地火明夷',
        '010000': '地水师',
        '001001': '艮为山',
        '101001': '山火贲',
        '111001': '山天大畜',
        '110001': '山泽损',
        '110101': '火泽睽',
        '110111': '天泽履',
        '110011': '风泽中孚',
        '001011': '风山渐',
        '100100': '震为雷',
        '000100': '雷地豫',
        '010100': '雷水解',
        '011100': '雷风恒',
        '011000': '地风升',
        '011010': '水风井',
        '011110': '泽风大过',
        '100110': '泽雷随',
        '011011': '巽为风',
        '111011': '风天小畜',
        '101011': '风火家人',
        '100011': '风雷益',
        '100111': '天雷无妄',
        '100101': '火雷噬嗑',
        '100001': '山雷颐',
        '011001': '山风蛊',
        '101101': '离为火',
        '001101': '火山旅',
        '011101': '火风鼎',
        '010101': '水火未济',
        '010001': '山水蒙',
        '010011': '风水涣',
        '010111': '天水讼',
        '101111': '天火同人',
        '000000': '坤为地',
        '100000': '地雷复',
        '110000': '地泽临',
        '111000': '地天泰',
        '111100': '雷天大壮',
        '111110': '泽天夬',
        '111010': '水天需',
        '000010': '水地比',
        '110110': '兑为泽',
        '010110': '泽水困',
        '000110': '泽地萃',
        '001110': '泽山咸',
        '001010': '水山蹇',
        '001000': '地山谦',
        '001100': '雷山小过',
        '110100': '雷泽归妹',
      }
      return {
        guaObj,
        guxiang: "", //数组
        status: true,
        status1: true,
        animation: "animation-play-state: paused",
        guaming: ""
        // cesc: "你好"
      }
    },
    onLoad() {

    },
    methods: {
      //复制
      copyText() {
        let text = this.guaming
        uni.setClipboardData({
          data: text,
          success: function(res) {
            console.log('复制的信息：', text);
            uni.showToast({
              title: '复制成功',
            });
          }
        });
      },
      //
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
          console.log(arr) //日志

          //逆序
          let darr = [];
          for (let i = arr.length - 1; i >= 0; i--) {
            let j = arr[i]
            darr.push(j)
          }
          //
          console.log(darr);
          //
          this.guxiang = darr
          //arr.join('')

          let guatou = arr.join('')
          this.guaming = this.guaObj[guatou]

          // this.status = false;//移步定时器输出

          setTimeout(() => { //箭头函数 必须用
            this.status = !this.status; //切换界面
            this.animation = "animation-play-state: paused" //暂停动画
            uni.hideLoading();
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
