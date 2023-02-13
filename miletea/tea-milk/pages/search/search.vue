<template>
  <view class="content">
    <view class="searchbox">
      <u-search searchIcon=arrow-down inputAlign="center" height="40" size='18' placeholder="请输出搜索内容" :label=title
        v-model="keyword" :showAction="true" actionText="搜索" :animation="true" @custom='search' @clickIcon="clickIcon">
      </u-search>
    </view>
    <view class="log">
      <tealog :logdata="logdata"></tealog>
    </view>
    <view class="kong" v-if="!data.length">
      <u-empty mode="search" icon="http://cdn.uviewui.com/uview/empty/search.png">
      </u-empty>
    </view>
    <view class="listbox" v-else>
      <view class="list" v-for="item in data" :key="data._id">
        <list :item="item"></list>
      </view>
    </view>
    <view class="type">
      <u-picker :show="show" :columns="columns" keyName="label" @cancel='cancel' @confirm='confirm' @change='change'>
      </u-picker>
    </view>
  </view>
</template>

<script>
  const db = uniCloud.database();
  export default {
    data() {
      return {
        logdata: [], //缓存
        data: [], //云端数据
        keyword: '豆乳玉麒麟',
        title: "产品",
        show: false,
        type: "name",
        columns: [
          [{
            label: '产品',
            type: "name"

          }, {
            label: '配料',
            type: "goods_desc"
          }]
        ],
      };
    },
    onShow() {
      const logdata = uni.getStorageSync('log')
      if (!logdata.length) {
        this.logdata = []
        return
      } else {
        this.logdata = logdata
      }

    },
    methods: {
      //设置缓存
      setdata() {
        const logdata = this.logdata
        const num = logdata.unshift(this.keyword)
        const log = logdata.slice(0, 3)
        console.log(log);
        this.logdata = log
        uni.setStorageSync('log', log);
      },
      //选择器去取消
      cancel() {
        this.show = false
      },
      //点三角
      clickIcon() {
        this.show = true
      },
      //选择器变化
      change(e) {
        // console.log(e);
        this.title = e.value[0].label
        this.type = e.value[0].type
      },
      // 选择器确定
      confirm(e) {
        // console.log('confirm', e)
        this.show = false
        this.title = e.value[0].label
        this.type = e.value[0].type
      },
      //点击搜索
      search() {
        // console.log('点了搜索', this.keyword, this.type);
        if (!this.keyword) {
          uni.showToast({
            icon: "none",
            title: "请输入搜索内容",
            mask: true,
            duration: 900
          })
        } else {
          this.setdata()
          this.getdata(this.type)
        }
      },
      //获取网络数据
      async getdata(e) {
        if (e == "name") {
          const res = await db.collection('tea-milk-list').where(
              `${new RegExp(this.keyword, 'gi')}.test(name) && state==true`)
            .get()
          console.log(res);
          if (!res.result.data.length) {
            uni.showToast({
              icon: "none",
              title: "搜索内容不存在",
              mask: true,
              duration: 900
            })
          }
          this.data = res.result.data
        } else {
          const res = await db.collection('tea-milk-list').where(
              `${new RegExp(this.keyword, 'gi')}.test(goods_desc) && state==true`)
            .get()
          // console.log(res);
          if (!res.result.data.length) {
            uni.showToast({
              icon: "none",
              title: "搜索内容不存在",
              mask: true,
              duration: 900
            })
          }
          this.data = res.result.data
        }

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
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: stretch;
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

    .kong {
      width: 720rpx;
      height: 1080rpx;
      display: flex;
      justify-content: center;
      align-items: center;
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
        width: 290rpx;
        margin: 20rpx;
      }

      .list {
        margin: 10rpx 0;
      }
    }
  }
</style>
