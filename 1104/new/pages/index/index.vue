<template>
  <view class="home">
    <view class="centent">
      <view class="item" @click="godetail(item._id)" v-for="item in listArr" :key="item._id">
        <view class="text">
          <view class="title">{{item.title}}</view>
          <view class="info">
            <text>{{item.author}}</text>
            <text>
              <uni-dateformat :date="item.posttime" format="MM-dd" :threshold="[60000, 3600000]"></uni-dateformat>
            </text>

          </view>
        </view>
        <view class="pic">
          <!-- 图片区域 -->
          <image v-if="item.picurls && item.picurls.length" mode="aspectFill" :src="item.picurls[0]"></image>
          <image v-else mode="aspectFill" src="../../static/logo.png"></image>
        </view>
      </view>
    </view>
    <view class="goadd" @click="goadd">
      <uni-icons type="plus-filled" size="75" color="#5555ff"></uni-icons>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        listArr: [] //云端数据来源
      }
    },
    //启动时加载
    onLoad: function() {
      this.getdata()
      this.onPullDownRefresh()
    },
    //进入页面刷新 上下两种写法格式都可以
    onShow() {
      this.getdata()
      this.onPullDownRefresh()
    },
    //下拉刷新
    onPullDownRefresh() {
      this.listArr = []
      this.getdata()
    },
    //触底
    onReachBottom() {
      this.getdata()
    },
    methods: {
      //跳转到详情页
      godetail(e) {
        console.log(e)
        uni.navigateTo({
          url: "/pages/detail/detail?id=" + e
        })
      },
      //获取云端数据
      getdata() {
        uniCloud.callFunction({
          name: "art_get_all",
          data: {
            skip: this.listArr.length
          }
        }).then(res => {
          console.log(res)
          let oldlistArr = this.listArr
          let alllistArr = [...oldlistArr, ...res.result.data]
          this.listArr = alllistArr //赋值
          uni.stopPullDownRefresh() //关闭下拉刷新
        })
      },
      //跳转页面
      goadd() {
        uni.navigateTo({
          url: "/pages/add/add"
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .centent {
      padding: 30rpx;

      .item {
        display: flex;
        justify-content: space-between;
        padding: 20rpx, 0;
        border-bottom: 1rpx solid #eee;

        .text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20rpx;

          .title {
            font-size: 40rpx;
            color: #333;
            //网上抄的两行省略
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            //两行省略结束
          }

          .info {
            font-size: 24rpx;
            color: #888;

            text {
              padding-right: 20rpx;
            }
          }
        }

        .pic {
          width: 260rpx;
          height: 180rpx;

          image {
            width: 100%;
            height: 100%;
          }
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
      position: fixed;
      right: 60rpx;
      bottom: 100rpx;
      box-shadow: 0 0 20rpx rgb(157, 157, 157);
    }
  }
</style>
