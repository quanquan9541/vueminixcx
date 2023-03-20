<template>
  <view class="content">
    <view class="skeleton">
      <u-skeleton rows="5" :loading="loading" title>
      </u-skeleton>
      <text v-if="loading">如无数据，请下拉页面手动刷新</text>
    </view>
    <view class="data" v-if="!loading">
      <u-sticky offset-top="10">
        <view class="top">
          <view class="time" @click="gosearch('time')">
            <u-icon name="clock" color="#0080EF" size="26"></u-icon>
          </view>
          <view class="classname">
            <u-tabs class="classlist" :list="classlist" lineWidth="25" lineHeight="6" :current=" current" :activeStyle="{
              color: '#343C33' , fontWeight: 'bold' , transform: 'scale(1.1)' }" @click="click">
            </u-tabs>
          </view>
          <view class="search" @click="gosearch('text')">
            <u-icon name="search" color="#0080EF" size="30"></u-icon>
          </view>
        </view>
      </u-sticky>
      <view class="kong" v-if='!data.length'>
        <u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png">
        </u-empty>
      </view>
      <view class="listbox" v-else>
        <view class="list" v-for="(item,index) in data" :key="item.id">
          <list :item="item"></list>
        </view>
      </view>
      <view class="loadmore" v-if='noMore'>
        <u-loadmore :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText" :nomore-text="nomoreText"
          color="#009AFF" lineColor="#009AFF" dashed line />
      </view>
    </view>
  </view>
</template>

<script>
  import {
    getdata
  } from '../../tools/getlist.js';
  import {
    debounce
  } from '../../tools/tools.js';
  import {
    interval
  } from '../../tools/judge.js'
  const db = uniCloud.database();
  export default {
    data() {
      return {
        id: "",
        current: "0",
        loading: true,
        classlist: [{
          name: '若无数据'
        }, {
          name: '请手动下拉刷新'
        }],
        data: [],
        noMore: false,
        more: false,
        status: 'loadmore',
        loadingText: '努力加载中',
        loadmoreText: '轻轻上拉',
        nomoreText: '实在没有了'
      }
    },
    onLoad() {
      // console.log('onload启动');
      //启动下拉刷新
      uni.startPullDownRefresh();
      this.noMore = false
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    onPullDownRefresh() {
      if (!interval(5000)) return uni.stopPullDownRefresh();
      this.classlist = []
      this.data = []
      this.getclass() //调用函数
    },
    onReachBottom() {
      if (this.more) return this.status = 'noMore'
      console.log('触底');
      this.getyuntea(this.id)
      this.status = "loading"
    },
    methods: {
      //获取表单数据
      async getclass() {
        let res = await db.collection('tea-milk-class').where(`state==true`).field('_id as id,name as name ,sort')
          .orderBy('sort desc').get()
        this.classlist = res.result.data
        // console.log(this.classlist);
        //停止下拉刷新
        uni.stopPullDownRefresh();
        let id = res.result.data[this.current]
        this.getyuntea(id)
        this.id = res.result.data[this.current]
      },
      //跳转的搜索页面
      gosearch(e) {
        uni.navigateTo({
          url: '/pages/search/search?type=' + e
        })
      },
      //选择分类
      click(item) {
        // console.log(item);
        this.current = item.index
        this.data = []
        this.noMore = false
        this.notification('加载中')
        this.fangdou(item) //调用防抖
        this.id = item
      },
      //弹窗
      notification(e) {
        uni.showLoading({
          title: e || "加载中",
        });
      },
      //使用防抖
      fangdou: debounce(function(item) {
        this.getyuntea(item)
      }, 1000),
      //获取详细数据
      async getyuntea(e) {
        this.more = false
        this.status = "loadmore"
        const skip = this.data.length
        const wer = `category_id=='${e.id}'&&state==true`
        // console.log(wer);
        let data = await getdata(wer, skip, 6)
        // console.log(data);
        let newvalue = data.result.data
        let value = [...this.data, ...newvalue]
        // console.log(value.length);
        // console.log('count', data.result.count);
        // 判断步长相等
        if (value.length == data.result.count) {
          this.more = true
          this.status = "nomore"
          uni.hideLoading();
        }

        this.data = value.map(
          item => {
            return {
              ...item,
              class: e.name
            }
          }
        )
        uni.hideLoading();
        this.loading = false

        if (value.length <= 4) {
          this.noMore = false
        } else {
          this.noMore = true
        }
      },
    }
  }
</script>

<style lang="scss">
  .content {
    margin: 0 20rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .skeleton {
      width: 650rpx;
      margin: 30rpx;
      margin-bottom: 0;
    }

    .data {
      width: 720rpx;

      .top {
        width: 720rpx;
        // border: red 1px solid; //边框
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(99, 225, 93, 0.1);
        border-radius: 14rpx;
        box-shadow: 0px 1px 1px 1px #dbdbdb;

        .classname {
          width: 600rpx;
          margin-left: 0rpx;

          .classlist {
            width: 100%
          }
        }

        .time {
          width: 50rpx;
          height: 100%;
          // border: red 1px solid; //边框
        }

        .search {
          width: 50rpx;
          margin-right: 10rpx;
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

      .loadmore {
        align-self: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

  }
</style>
