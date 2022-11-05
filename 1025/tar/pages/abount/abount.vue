<template>
  <view>
    个人页面
    <view v-on:click="change">{{text}}</view>
    <button @click="add">点赞{{num}}</button>
    <button @click="chan">{{title}}</button>
    <!-- <button style="background: pink;">点击</button> -->
    <!-- <button style="background: rgb(22, 255, 255);">点击</button> -->
    <button :style="{background:backgc}" @click="bgchenge">{{title1}}</button>
    <view class="tar">
      <view class="item" :class="aryid==index ? 'active' : ''" v-for="(item,index) in ary" :key="index"
        @click="pick(index)">
        {{item.title}}
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      // p: false
      return {
        text: "我是谁",
        num: 1,
        title: "start",
        title1: "生成0-1000随机数+变色",
        p: false,
        backgc: "#c0c",
        ary: [{
          title: '第一项'
        }, {
          title: '第二项'
        }, {
          title: '第三项'
        }, {
          title: '第四项'
        }, ],
        aryid: ""
      };
    },
    methods: {
      change: function() {
        this.text = "皮卡丘" //改变文字
      },
      add() {
        this.num++ //点赞加一
      },
      chan() {
        if (this.p == false) {
          this.title = "stop"
          this.p = true
        } else {
          this.title = "go on"
          this.p = false
        }
      },
      bgchenge() {
        this.title1 = String(Math.floor(Math.random() * 1000)) //生成0-1000随机数

        let color16 = Math.floor(Math.random() * 16777216).toString(16) //网上抄的生成16进制数  math floor 去整
        console.log(color16)
        if (color16.length < 6) { //判断字符长度
          color16 = "0" + color16 //不够的放0凑数
        }
        this.backgc = "#" + color16 //加个#
      },
      pick(e) {
        console.log(e)
        this.aryid = e
      }
    }

  }
</script>

<style lang="scss">
  .tar {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .item {
      flex: 1;
      line-height: 90rpx;
      background: #F6D5C4;
      text-align: center;

      &.active {
        background: #BBCBDD;
      }
    }
  }
</style>
