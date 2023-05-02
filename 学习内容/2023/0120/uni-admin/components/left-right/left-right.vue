<template>
  <!-- 相机列表组件 -->
  <view>
    <view class="lrbox">
      <view class="left">
        <block v-for="(i,index) in item.ComeraType" :key="index">
          {{list && list[i]&&list[i].text+"&#160"}}
        </block>
      </view>
      <view class="right">{{item.Comeraedit}}</view>
      <button class="but" type="mini" @click="gotocamera(item._id)">
        <text>编辑</text>
      </button>
    </view>
  </view>
</template>

<script>
  export default {
    name: "left-right",
    props: {
      item: {
        type: Object,
        default () {
          return {};
        }
      },
      list: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {

      };
    },
    methods: {
      gotocamera(e) {
        uni.navigateTo({
          url: '/pages/Mcamera/edit?id=' + e
        })
      }
    }
  }
</script>

<style lang="scss">
  .lrbox {
    width: 1000rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5rpx;

    .left {
      width: 200rpx;
    }

    .right {
      width: 500rpx;
    }

    .but {
      width: 150rpx;
      height: 40rpx;
      font-size: 8px;
      text-align: center;
      line-height: 40rpx;
    }
  }
</style>