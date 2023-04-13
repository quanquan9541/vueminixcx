<template>
  <view>
    <view class="listcbox" @click="goedit">
      <view class="pic">
        <u--image :showLoading="true" :src="item.pic[0].url" width="345rpx" height="400rpx" mode="aspectFill" lazyLoad
          bgColor="#eOeee8" shape="square" radius="10"></u--image>
      </view>
      <view class="text">
        <!-- <view class="title">{{item.class}}</view> 作废-->
        <view class="name">{{item.name}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "list",
    props: {
      item: {
        type: Object,
        default () {
          return {};
        }
      },
    },
    data() {
      return {
        src: 'https://cdn.uviewui.com/uview/album/1.jpg'
      };
    },

    methods: {
      //跳转到详情页
      goedit() {
        // console.log('点击组件');
        uni.navigateTo({
          url: '/pages/edit/edit?id=' + this.item._id
        })
      },
    }
  }
</script>

<style lang="scss">
  .listcbox {
    width: 345rpx;
    height: 455rpx;
    margin: 10rpx 0;
    border-radius: 10px;
    box-shadow: 0px 1px 1px 0.1px #bcbcbc;
    background: rgba(99, 225, 93, 0.1); // border: 1rpx red solid;

    .pic {
      width: 345rpx;
      height: 400rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 10px;
      // border: 1rpx blue solid;
      justify-content: center;
      background: rgba(224, 238, 232, 0.3)
    }

    .text {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 5rpx;

      .name {
        font-family: '微软雅黑';
        font-style: normal;
        font-weight: normal;
        text-decoration: none solid;
        white-space: normal;
        text-overflow: clip;
        word-wrap: normal;
        text-shadow: 0px 2px 4px #bcbcbc;
        font-size: 16px;
        text-decoration: none;
        text-align: center;
        direction: ltr;
        color: #009AFF;
        margin: 5rpx 0;
      }
    }
  }
</style>