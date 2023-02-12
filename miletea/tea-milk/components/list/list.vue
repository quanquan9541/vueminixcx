<template>
  <view class="content" @click="goedit">
    <view class="pic">
      <u--image :showLoading="true" :src="item.pic[0].url
" width="300rpx" height="300rpx" mode="aspectFill" shape="square" radius="10"></u--image>
    </view>
    <view class="text">
      <view class="title">{{item.class}}</view>
      <view class="name">{{item.name}}</view>
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
  .content {
    width: 300rpx;
    height: 400rpx;
    margin: 10rpx 30rpx;
    border-radius: 14rpx;
    box-shadow: 0px 1px 1px 0.1px #CCCCCC;
    background: rgba(153, 153, 153, 0.3); // border: 1rpx red solid;

    .pic {
      width: 300rpx;
      height: 300rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      margin-top: 10rpx;

      .title,
      .name {
        font-family: '微软雅黑';
        font-size: 16px;
        text-decoration: none;
        white-space: normal;
        text-align: center;
        direction: ltr;
        text-shadow: 1px 0px 0px #666666
      }

      .title {
        margin: 4rpx 0 6rpx 0;
        color: #339999;
        font-size: 18px;
      }

      .name {
        color: #FF6666;
      }
    }
  }
</style>
