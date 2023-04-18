<template>
  <view class="content">
    <view class="searchbox" v-if="searchtype=='text'">
      <u-search searchIcon=arrow-down inputAlign="center" height="40" size='18' placeholder="请输出搜索内容" :label=title
        bgColor='#F1FCEF' v-model="keyword" :showAction="true" :clearabled='false' actionText="搜索" @custom='search'
        @clickIcon="clickIcon" @focus="focus">
      </u-search>
    </view>
    <view class="searchtime" v-else-if="searchtype=='time'">
      <uni-datetime-picker class="time" returnType="timestamp" v-model="rangetime" type="daterange" rangeSeparator="至"
        :clear-icon='false' @change="maskClick" />
    </view>
    <!--  <view class="log"> //历史记录组件 没写好
      <tealog :logdata="logdata"></tealog>
    </view> -->
    <view class="kong" v-if="!data.length">
      <u-empty mode="search" icon="http://cdn.uviewui.com/uview/empty/search.png">
      </u-empty>
    </view>
    <block v-else>
      <view class="text">
        <text>共获取{{num}}项结果</text>
      </view>
      <view class="listbox">
        <view class="list" v-for="item in data" :key="data._id">
          <list :item="item"></list>
        </view>
      </view>
    </block>
    <view class="type">
      <u-picker :show="show" :columns="columns" keyName="label" @cancel='cancel' @confirm='confirm'
        @change='changetime'>
      </u-picker>
    </view>
  </view>
</template>

<script>
  const db = uniCloud.database();
  import {
    getdata
  } from '../../tools/getlist.js';
  //引入防抖文件
  import {
    antiShake
  } from '@/tools/antiShake.js'; //防抖
  import text from '../../uni_modules/uview-ui/libs/config/props/text';
  export default {
    data() {
      return {
        searchtype: text,
        rangetime: [new Date() - 604800000, new Date()], //时间
        logdata: [], //缓存
        data: [], //云端数据
        num: "", //记录数量
        keyword: '',
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
        Xx: "",
        More: false
      };
    },
    onLoad(e) {
      uni.$u.mpShare.title = "奶茶搜索"
      // console.log(e);
      this.searchtype = e.type
    },
    onShow() {
      const logdata = uni.getStorageSync('log')
      if (!logdata.length) {
        this.logdata = []
        this.keyword = '奶茶奇缘'
        return
      } else {
        this.keyword = logdata[0] || '奶茶奇缘'
        this.logdata = logdata
      }
    },
    watch: {
      rangetime(newval) {
        // console.log("范围选:", this.rangetime);
      },
    },
    onReachBottom() {
      if (!this.More) return
      // console.log('触底', this.Xx);
      this.getdatalist()
    },
    computed: {
      where() { //计算属性
        return `add_date>=${this.rangetime[0]} && add_date<=${this.rangetime[1]}`
      }
    },
    mounted() {},
    methods: {
      maskClick() {
        uni.showLoading({
          icon: 'loading',
          title: '搜索中',
          mask: true
        });
        setTimeout(() => {
          this.Xx = this.where //就是一个值 不是函数
          this.getdatalist()
        }, 1500)
      },
      //设置缓存
      setdata() {
        const logdata = this.logdata
        const num = logdata.unshift(this.keyword)
        const log = logdata.slice(0, 3)
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
      //点击搜索搜索框获取焦点
      focus() {
        this.keyword = ''
      },
      //给按钮添加防抖
      search: antiShake(function() {
        if (!this.keyword) {
          uni.showToast({
            icon: "error",
            title: "请输入搜索内容",
            mask: true,
            duration: 1500
          })
        } else {
          uni.showLoading({
            icon: 'loading',
            title: '搜索中',
            mask: true
          });
          this.Xx = this.ptype() //判断结果
          this.getdatalist() //调用函数
        }
      }),
      //判断类型
      ptype() {
        if (this.type == "name") {
          const war = {
            name: new RegExp(this.keyword, 'gi'),
            state: true
          }
          return war
        } else {
          const war = {
            goods_desc: new RegExp(this.keyword, 'gi'),
            state: true
          }
          return war
        }
      },
      //获取网络数据
      async getdatalist() {
        this.More = true
        const skip = this.data.length
        const e = this.Xx
        const res = await getdata(e, skip, 6)
        console.log(res);
        uni.hideLoading();
        if (!res.result.count) {
          this.keyword = '' //清空输入框
          return uni.showToast({
            icon: "error",
            title: "没有数据",
            mask: true,
            duration: 900
          })
        }
        this.setdata() //设置缓存
        const newdata = res.result.data
        const olddata = this.data
        this.data = [...newdata, ...olddata]
        this.num = res.result.count
        if (this.data.length == this.num) {
          this.More = false
          uni.showToast({
            icon: "none",
            title: "共" + res.result.count + "条数据",
            mask: true,
            duration: 900
          })
        }
      }

    }
  }
</script>

<style lang="scss">
  .content {
    margin: 30rpx 10rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .searchbox {
      width: 720rpx;
      margin: 5rpx;
      background: rgba(99, 225, 93, 0.1);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: stretch;
      box-shadow: 0px 1px 1px 1px #cecece;
      border-radius: 14px;


      .classname {
        margin: 0 20rpx;
        width: 700rpx;
      }

      .search {
        margin: 0 10rpx;
      }
    }

    .searchtime {
      // border: red 1px solid;
      width: 720rpx;
      height: 68rpx;
      margin: 5rpx;
      display: flex;
      flex-direction: row;
      align-items: center;

      .time {
        // border: blue 1px solid;
        flex: 1
      }
    }

    .kong {
      width: 720rpx;
      height: 1080rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text {
      width: 100%;
      text-align: center;
      color: #ccc;
      font-family: '微软雅黑';
      font-style: normal;
      font-weight: normal;
    }

    .listbox {
      width: 720rpx;
      height: auto;
      display: flex;
      flex-direction: row;
      margin: 5rpx;
      margin-top: 20rpx;
      // border: 1rpx blue solid;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      align-content: flex-start;

      &:after {
        content: "";
        width: 300rpx;
        margin: 10rpx;
      }

      .list {
        // margin: 10rpx 0;
      }
    }
  }
</style>