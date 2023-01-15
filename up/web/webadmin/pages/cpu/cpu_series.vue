<template>
  <view>
    <view>
      <view class="top">
        <view v-for="item in seriesdata" :key="item._id">
          <view class="list" @click="goseries(item)">
            <view class="left">{{item.seriesname}}</view>
            <view class="right">{{item.name}}</view>
            <view class='button' @click.stop="editmau(item)">
              <u-button type="error" size="mini" shape='circle' text="编辑">
              </u-button>
            </view>
          </view>
        </view>
      </view>
      <view>
        <view class="big">
          <cpu_input :data="seriess" :title="title"></cpu_input>
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
        id: "",
        title: "系列",
        //云端数据
        seriesdata: [],
        //按钮文字
        bottontext: '确定',
        //输入数据
        seriess: {
          series: "",
          seriesname: "",
          type: 1
        },
      };
    },
    onLoad(e) {
      id = e
      key = id.id
      let data = uni.getStorageSync(key)
      // console.log(data);
      this.seriess.series = key
      this.seriess.seriesname = data.name
      uni.setNavigationBarTitle({
        title: data.name
      });
      setTimeout(() => {
        uni.startPullDownRefresh();
        console.log('进入系列');
      }, 700)
      uni.startPullDownRefresh();
      console.log('进入系列');
    },
    onShow() {
      // setTimeout(700);
      // uni.startPullDownRefresh();
      // console.log('进入系列');
    },
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
      //点击跳转
      goseries(item) {
        // console.log('点了外面');
        uni.setStorageSync(item._id, item);
        uni.navigateTo({
          url: '/pages/cpu/soc_add?id=' + item._id
        })
      },
      //点击编辑
      editmau(item) {
        this.seriess = item
      },
      //获取数据
      getmaudata() {
        this.seriesdata = ''
        console.log('k值', key);
        this.id = key
        db.collection('mini_cpu').where(`series == "${key}" && type == 1`).orderBy('create_date desc').get().then(
          res => {
            console.log('获取成功', res);
            //赋值
            this.seriesdata = res.result.data
          })
      },
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
        flex: 1;
        padding: 10rpx;
        margin: 10rpx;
        // border: 1rpx solid #ff5500;
        // text-align: center;
      }

      .right {
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
