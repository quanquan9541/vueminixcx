<template>
  <view class="content">
    <view class="skeleton">
      <u-skeleton rows="5" :loading="loading" title>
      </u-skeleton>
    </view>
    <view class="data" v-if="!loading">
      <u-sticky offset-top="10">
        <view class="top">
          <view class="classname">
            <u-tabs class="classlist" :list="classlist" lineWidth="25" lineHeight="6" :current=" current" :activeStyle="{
              color: '#343C33' , fontWeight: 'bold' , transform: 'scale(1.1)' }" @click="click">
            </u-tabs>
          </view>
          <view class="search" @click="gosearch">
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
  const db = uniCloud.database();
  export default {
    data() {
      return {
        id: "",
        current: "0",
        loading: true,
        classlist: [],
        data: [],
        noMore: true,
        more: false,
        status: 'loadmore',
        loadingText: '努力加载中',
        loadmoreText: '轻轻上拉',
        nomoreText: '实在没有了'
      }
    },
    onLoad() {
      //启动下拉刷新
      // setTimeout(function() {
      //   console.log('start pulldown');
      // }, 1000);
      uni.startPullDownRefresh();
      // 延时3秒钟显示数据
      uni.$u.sleep(3000).then(() => {
        this.loading = false
      })
      //启动下拉刷新
      setTimeout(function() {
        // console.log('start pulldown');
      }, 1000);
      uni.startPullDownRefresh();
    },
    onPullDownRefresh() {
      // console.log('下拉刷新');
      this.classlist = []
      this.data = []
      this.getclass() //调用函数
    },
    onReachBottom() {
      // console.log('触底');
      if (this.more) return this.status = 'noMore'
      this.getyuntea(this.id)
      this.status = "loading"
    },
    methods: {
      //获取表单数据
      async getclass() {
        let res = await db.collection('tea-milk-class').where(`state==true`).field('_id as id,name as name ,sort')
          .orderBy('sort desc').get()
        // console.log(res.result.data);
        this.classlist = res.result.data
        // console.log(this.data.length);
        //停止下拉刷新
        setTimeout(function() {
          uni.stopPullDownRefresh();
        }, 1000);
        if (!this.data.length) { //判断下首页是否有数据
          let id = res.result.data[this.current]
          this.getyuntea(id)
          this.id = res.result.data[this.current]
        }
      },
      //跳转的搜索页面
      gosearch() {
        uni.navigateTo({
          url: '/pages/search/search'
        })
      },
      //选择分类
      click(item) {
        console.log(item);
        this.current = item.index
        this.data = []
        this.getyuntea(item)
        this.id = item
      },
      //获取详细数据
      async getyuntea(e) {
        const skip = this.data.length
        let data = await db.collection('tea-milk-list').where(`category_id=='${e.id}'&&state==true`).field(
          '_id,name,category_id,pic').skip(skip).limit(8).get()
        if (data.result.data.length == 0) {
          this.more = true
          this.status = "nomore"
          return
        }
        let newvalue = data.result.data
        let value = [...this.data, ...newvalue]
        this.data = value.map(
          item => {
            return {
              ...item,
              class: e.name
            }
          }
        )
        this.loading = false
        // this.status = 'loadmore'
        if (value.length <= 6) {
          this.noMore = false
        } else {
          this.noMore = true
        }
        // console.log(this.data)
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
          width: 620rpx;
          // flex: 1;
          // border: blue 1px solid; //边框
          margin-left: 10rpx;


          .classlist {
            width: 620rpx;
          }
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
