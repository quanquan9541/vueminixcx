<template>
  <view class="content">
    <view class="searchbox">
      <u-search searchIcon=arrow-down inputAlign="center" height="40" size='18' placeholder="请输出搜索内容" :label=title
        v-model="keyword" :showAction="true" actionText="搜索" :animation="true" @custom='search'
        @clickIcon="show = true"></u-search>
    </view>
    <view class="log">
      <tealog></tealog>
    </view>
    <view class="listbox">
      <view class="list" v-for="item in 5">
        <list></list>
      </view>
    </view>
    <view class="type">
      <u-picker :show="show" :columns="columns" keyName="label" @cancel='cancel' @confirm='confirm'></u-picker>
    </view>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        keyword: '豆乳玉麒麟',
        title: "产品",
        show: false,
        columns: [
          [{
            label: '产品',
            type: 1

          }, {
            label: '配料',
            type: 5
          }]
        ],
      };
    },
    methods: {
      //选择器去取消
      cancel() {
        this.show = false
      },
      // 选择器确定
      confirm(e) {
        console.log('confirm', e)
        this.show = false
        this.title = e.value[0].label
      },
      //点击搜索
      search() {
        console.log('点了搜索');
        //
        // this.keyword = null
      }
    }
  }
</script>

<style lang="scss">
  .content {
    margin: 10rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .searchbox {
      width: 720rpx;
      margin: 5rpx;
      background: rgba(151, 151, 151, 0.4);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 1px 1px 1px #cecece;
      border-radius: 20px;


      .classname {
        margin: 0 20rpx;
        width: 700rpx;
      }

      .search {
        margin: 0 10rpx;
      }
    }

    .listbox {
      width: 720rpx;
      height: auto;
      border-radius: 14rpx;
      display: flex;
      flex-direction: row;
      // box-shadow: 0px 1px 1px 1px #dbdbdb;
      margin: 5rpx;
      margin-top: 20rpx;
      // border: 1rpx blue solid;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: stretch;

      &:after {
        content: "";
        width: 320rpx;
        margin: 20rpx;
      }

      .list {
        margin: 0 10rpx;
      }
    }
  }
</style>
