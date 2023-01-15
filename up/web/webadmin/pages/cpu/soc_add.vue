<template>
  <view>
    <view>
      <view class="top">
        <view v-for="item in socdata" :key="item._id">
          <view class="list" @click="editmau(item)">
            <view class="left">{{item.manufacturername}} {{item.seriesname}} {{item.name}}</view>
            <view class="right">{{item.Cpuvalue}}</view>
          </view>
        </view>
      </view>
      <view>
        <view class="big">
          <cpu_input :data="soc" :title="title"></cpu_input>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  const db = uniCloud.database();
  let id;
  let key;
  export default {
    data() {
      return {
        socdata: [],
        title: '芯片',
        soc: {
          manufacturer: "",
          manufacturername: "",
          series: "",
          seriesname: "",
          type: 2
        }
      };
    },
    onLoad(e) {
      id = e
      key = id.id
      let data = uni.getStorageSync(key)
      // console.log(data);
      this.soc.manufacturer = data.series
      this.soc.manufacturername = data.seriesname
      this.soc.series = key
      this.soc.seriesname = data.name
      uni.setNavigationBarTitle({
        title: data.seriesname + data.name
      });
      setTimeout(() => {
        uni.startPullDownRefresh();
        console.log('进入系列');
      }, 700);

    },
    onShow() {},
    onPullDownRefresh() {
      this.getmaudata()
      setTimeout(function() {
        uni.stopPullDownRefresh();
        console.log('下拉刷新');
      }, 1200);
    },
    onUnload() {
      uni.removeStorageSync(key)
      console.log('离开了');
    },
    methods: {
      //点击编辑
      editmau(item) {
        this.soc = item
      },
      //获取云端数据
      getmaudata() {
        console.log(key);
        db.collection('mini_cpu').where(` series == "${key}" && type == 2`).orderBy('create_date desc').get().then(
          res => {
            console.log('获取成功', res);
            //赋值
            this.socdata = res.result.data
          })
      }
    }
  }
</script>

<style lang="scss">
  .top {
    padding-bottom: 320rpx;
    // border: 1rpx solid #ff57f4;

    .list {
      margin: 0 20rpx;
      height: 60rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1rpx solid #a4a4a4;

      .left,
      .right {
        padding: 10rpx;
        margin: 10rpx;
        // border: 1rpx solid #ff5500;
        // text-align: center;
      }

      .left {
        flex: 2
      }

      .right {
        flex: 1;
        text-align: right
      }

      .button {
        margin: 0 20rpx;
        padding-right: 10rpx;
        width: 60rpx;
      }
    }
  }

  .big {
    width: 100%;
    background: #fff;
    padding: 10rpx 20rpx;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
</style>
