<template>
  <view>
    <view class="listbox" @click="goEdit(item._id)">
      <view class="text">{{item.manufacturer}} {{item.series}} {{item.model}}</view>
      <view class="value">{{item.Cpuvalue}}</view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "list_list",
    props: {
      //传参 父向子
      item: {
        type: Object,
        default () {
          return {};
        }
      },

    },
    data() {
      return {

      };
    },
    methods: {
      goEdit(e) {
        //设置缓存
        uni.setStorageSync('Cpu_key', this.item);
        // console.log('点击成功', e);
        //跳转
        uni.navigateTo({
          url: "/pages/cpu/cpu_add"
        })
      }
    }
  }
</script>

<style lang="scss">
  .listbox {
    height: 50px;
    border: 1px solid #adadad;
    border-radius: 15px;
    box-shadow: 0px 3px 2px 2px rgba(198, 198, 198, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;

    .text,
    .value {
      // border: 1px solid #55aaff;
      height: 60rpx;
      margin: 0 10rpx;
      text-align: center;
      line-height: 50rpx;
    }

    .text {
      flex: 3
    }

    .value {
      flex: 2;
    }
  }
</style>
