<template>
  <view>
    <view class="about">
      <view class="logo">
        <u--image src="/static/logo.png" width="100rpx" height="100rpx" shape="circle" mode="aspectFit"></u--image>
      </view>
      <view class="top">
        <text>哈喽大家好</text>
        <text>这里略懂少年的工具小站</text>
      </view>
      <view class="text">
        <view class="content">
          <text>本工具更新频率不定</text>
          <text>纯属个人娱乐之作</text>
          <view class="newslist">
            <view class="newitem" v-for="(item,index) in picurl" :key="index">
              <u--image :src=item radius="12px" mode="aspectFill" :fade="true" duration="450"
                @click="clickpic(index)"></u--image>
              <text>点击查看原图</text>
            </view>
          </view>
        </view>
      </view>

      <!-- #ifdef H5 -->
      <view class="bottombox">
        <ggbottombox></ggbottombox>
      </view>
      <!-- #endif -->
    </view>
  </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        picurl: [
          "https://mp-d3b6883a-bc50-4d37-854d-dfb75a1d8a17.cdn.bspapp.com/cloudstorage/bf64a0d2-aa31-416f-9ee9-03b233f35c93.png",
          "https://mp-d3b6883a-bc50-4d37-854d-dfb75a1d8a17.cdn.bspapp.com/cloudstorage/d4d89434-b190-4248-8a1e-1227fd0f37f7.jpg"
        ]
      };
    },
    methods: {
      //点击看大图
      clickpic(e) {
        // console.log('点击详情图片', e);
        uni.previewImage({
          urls: this.picurl,
          current: e
        });
      }
    }
  }
</script>

<style lang="scss">
  .about {
    padding: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    .bottombox {}

    .logo {
      padding: 30rpx;
      display: flex;
      justify-content: center;
    }

    .top {
      padding: 20rpx;
      margin-bottom: 20rpx;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 14px;
      // padding: 20rpx;
      border: 1rpx solid #aaaaff;

      text {
        font-family: '微软雅黑';
        font-style: normal;
        font-weight: normal;
        text-decoration: none solid;
        white-space: normal;
        text-overflow: clip;
        word-wrap: normal;
        color: #464555;
        text-shadow: 0px 2px 7px #bcbcbc
      }
    }

    .text {
      flex: 1;
      padding: 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 14px;
      border: 1rpx solid #aaaaff;
      margin-bottom: 5rpx;

      .content {
        text-align: center;
        font-family: '微软雅黑';
        font-style: normal;
        font-weight: normal;
        text-decoration: none solid;
        white-space: normal;
        text-overflow: clip;
        word-wrap: normal;
        color: #464555;
        text-shadow: 0px 2px 7px #bcbcbc;

        text {
          // border: 1px solid red;
          display: block
        }

        .newslist {
          // border: 1rpx solid red;
          // margin-top: 20rpx;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          text {
            font-size: 10px;
          }

          .newitem {
            margin-top: 20rpx;
            // border: 1rpx solid red;
          }
        }

      }
    }
  }
</style>