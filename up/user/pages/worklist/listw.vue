<template>
  <view class="list">
    <view class="centent">
      <view class="item" v-for="(item,index) in workdatalist" :key="item._id" @click="goworklist(item._id)">
        <view class="text">
          <text class="title">综合分：{{item.workdata}}</text>
          <text class="num">{{index+1}}</text>
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
    // 加载时,不启动减少压力
    // onShow() {
    //   uni.startPullDownRefresh();
    // },
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
          url: '/pages/worklist/work'
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
      async getwork() {
        let skip = this.workdatalist.length
        const db = uniCloud.database()
        await db.collection('worklist').skip(skip).limit(15).orderBy('workdata desc ,wages desc').get().then(res => {
          console.log(res)
          let oldworkdatalist = this.workdatalist
          let allworkdatalist = [...oldworkdatalist, ...res.result.data]
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

    .centent {
      padding: 20rpx;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 20rpx;
        border-radius: 14px;
        // padding: 20rpx;
        border: 1rpx solid #aaaaff;


        .text {
          padding: 20rpx;
          display: flex;
          justify-content: center;
          align-items: center;



          .title {
            flex: 1;
            padding: 40rpx;
            font-size: 28rpx;
            //
            font-family: '微软雅黑';
            font-style: normal;
            font-weight: normal;
            text-decoration: none solid;
            white-space: normal;
            text-overflow: clip;
            word-wrap: normal;
            text-shadow: 0px 2px 7px #bcbcbc
          }

          .num {
            font-family: '微软雅黑';
            font-style: normal;
            font-weight: 900;
            font-size: 48px;
            color: #68949f;
            text-decoration: none solid;
            white-space: normal;
            text-overflow: clip;
            word-wrap: normal;
            text-shadow: 2px 5px 10px #adadad // border: 1rpx solid #ff5500; //定位边线
          }

        }


      }

      .goadd {
        width: 100rpx;
        height: 100rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 60rpx;
        position: fixed;
        right: 60rpx;
        bottom: 60rpx;
        box-shadow: 0 0 20rpx rgb(175, 168, 254);
      }

    }
  }
</style>
