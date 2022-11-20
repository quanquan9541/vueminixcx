<template>
  <view class="list">
    <view class="centent">
      <view class="item" v-for="item in workdatalist" :key="item._id" @click="goworklist(item._id)">
        <view class="text">
          <text class="title">综合分：</text>
          <text class="num">{{item.workdata}}</text>
        </view>
      </view>
      <view class="goadd" @click="gotowork">
        <uni-icons type="plus-filled" size="75" color="#aaaaff"></uni-icons>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        workdatalist: []
      };
    },
    //启动
    onLoad() {
      uni.startPullDownRefresh(); //启动下拉刷新
    },
    // 加载时
    onShow() {
      uni.startPullDownRefresh();
    },
    //下拉刷新 生命周期
    onPullDownRefresh() {
      this.workdatalist = []
      this.getwork()
    },
    //触底
    onReachBottom() {
      this.getwork()
    },
    methods: {
      //跳转转到表单页
      gotowork() {
        uni.navigateTo({
          url: '/pages/index/index'
        })
      },
      //跳转到详情页
      goworklist(e) {
        console.log(e)
        uni.navigateTo({
          url: "/pages/worklist/worklist?id=" + e
        })
      },
      //拉取云端数据
      getwork() {
        let skip = this.workdatalist.length
        const db = uniCloud.database()
        db.collection('worklist').skip(skip).limit(20).orderBy('workdata desc ,wages desc').get().then(res => {
          console.log(res)
          let oldworkdatalist = this.workdatalist
          let allworkdatalist = [...res.result.data, ...oldworkdatalist]
          this.workdatalist = allworkdatalist
          //刷新停止 在这
          uni.stopPullDownRefresh()
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .centent {
      padding: 30rpx;
      width: 700rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;

      .item {
        height: 48px;
        width: 700rpx;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5rpx;
        padding: 20rpx, 0;
        border: 1rpx solid #d0d0d0;
        position: relative;

        .text {
          padding: 20rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          // position: relative;
          // border: 1rpx solid #ff5500;


          .title {
            flex: 5;
            padding: 40rpx;
            font-size: 28rpx;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            /*垂直居中*/
            -ms-flex-align: center;
            /*混合版本*/
            -webkit-align-items: center;
            align-items: center;
            // border: 1rpx solid #ff5500;

          }

          .num {
            font-size: 32rpx;
            // border: 1rpx solid #ff5500;
            position: absolute;
            right: 40rpx;
          }

        }


      }

      .goadd {
        width: 100rpx;
        height: 100rpx;
        // background: #00ff7f;
        // color: #ff0000;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 60rpx;
        position: absolute;
        right: 60rpx;
        bottom: 100rpx;
        box-shadow: 0 0 20rpx rgb(157, 157, 157);
      }

    }
  }
</style>
