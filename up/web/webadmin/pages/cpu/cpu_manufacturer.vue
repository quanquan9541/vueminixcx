<template>
  <view>
    <view class="top">
      <view v-for="item in manufacturerdata" :key="item._id">
        <view class="list" @click="goseries(item)">
          <view class="left">厂商</view>
          <view class="right">{{item.name}}</view>
          <view class='button' @click.stop="editmau(item)">
            <u-button type="error" size="mini" shape='circle' text="编辑">
            </u-button>
          </view>
        </view>
      </view>
    </view>

    <view class="big">
      <cpu_input :data="manufacturer" :title="title"></cpu_input>
    </view>
  </view>
</template>

<script>
  const db = uniCloud.database();
  export default {
    data() {
      return {
        title: '厂商',
        //云端数据
        manufacturerdata: [],
        //按钮文字
        bottontext: '确定',
        //输入数据
        manufacturer: {
          type: 0
        },

      }
    },
    onLoad() {
      setTimeout(700);
      uni.startPullDownRefresh();
    },
    onPullDownRefresh() {
      this.getmaudata()
      setTimeout(function() {
        uni.stopPullDownRefresh();
      }, 1200);
    },
    methods: {
      //点击跳转
      goseries(item) {
        // console.log('点了外面');
        uni.setStorageSync(item._id, item);
        uni.navigateTo({
          url: '/pages/cpu/cpu_series?id=' + item._id
        })
      },
      //点击编辑
      editmau(item) {
        // console.log('点击编辑');
        this.manufacturer = '',
          this.manufacturer = item,
          this.bottontext = '修改'
      },
      //获取厂商数据
      getmaudata() {
        this.manufacturerdata = ''
        db.collection('mini_cpu').where(`_id!=null && type == 0`).orderBy('create_date desc').get().then(res => {
          console.log('获取成功', res);
          //赋值
          this.manufacturerdata = res.result.data
        })
      },


    },

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
    height: 320rpx;
    width: 100%;
    background: #fff;
    padding: 10rpx 20rpx;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
  }

  .button {
    margin: 15rpx 0;
  }
</style>
