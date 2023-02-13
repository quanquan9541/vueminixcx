<template>
  <view class="content">
    <view class="skeleton">
      <u-skeleton rows="5" :loading="loading" title>
      </u-skeleton>
    </view>
    <view class="data" v-if="!loading">
      <view class="top">
        <view class="classname">
          <u-tabs :list="classlist" lineWidth="25" lineHeight="6" :activeStyle="{
              color: '#303133',
              fontWeight: 'bold',
              transform: 'scale(1.1)'
          }" @click="click"></u-tabs>
        </view>
        <view class="search" @click="gosearch">
          <u-icon name="search" color="#55aaff" size="30"></u-icon>
        </view>
      </view>
      <view class="kong" v-if='!data.length'>
        <u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png">
        </u-empty>
      </view>
      <view class="listbox" v-else>
        <view class="list" v-for="(item,index) in data" :key="item.id">
          <list :item="item"></list>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
  const db = uniCloud.database();
  export default {
    data() {
      return {
        loading: true,
        classlist: [],
        data: []
      }
    },
    onLoad() {
      // 延时2秒钟显示数据
      uni.$u.sleep(2000).then(() => {
        this.loading = false
      })
      this.getclass()
      // this.getyuntea(this.classlist[0].id)
    },
    methods: {
      //获取表单数据
      async getclass() {
        let res = await db.collection('tea-milk-class').where(`state==true`).field('_id as id,name as name').orderBy(
          'sort asc').get()
        // console.log(res.result.data);
        this.classlist = res.result.data
        // console.log(this.data.length);
        if (!this.data.length) { //判断下首页是否有数据
          let id = res.result.data[0]
          // console.log(id);
          this.getyuntea(id)
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
        this.data = []
        // console.log('item', item);
        this.getyuntea(item)
      },
      //获取详细数据
      async getyuntea(e) {
        let data = await db.collection('tea-milk-list').where(`category_id=='${e.id}'&&state==true`).field(
          '_id,name,category_id,pic').get()
        let value = data.result.data
        this.data = value.map(
          item => {
            return {
              ...item,
              class: e.name
            }
          }
        )
        this.loading = false
        // console.log(this.data)
      },
    }
  }
</script>

<style lang="scss">
  .content {
    margin: 0 10rpx;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .skeleton {
      width: 720rpx;
      margin-top: 20rpx;
    }

    .data {
      .top {
        width: 720rpx;
        // margin: 5rpx;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background: rgba(99, 225, 93, 0.1);
        border-radius: 14rpx;
        box-shadow: 0px 1px 1px 1px #dbdbdb;

        .classname {
          padding: 0 10rpx;
        }

        .search {
          margin: 0 20rpx 0 10rpx;
          padding-right: 20rpx;
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
          width: 300rpx;
          margin: 10rpx 30rpx;
        }

        .list {
          margin: 10rpx 0;
        }
      }
    }

  }
</style>
