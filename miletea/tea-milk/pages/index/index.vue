<template>
  <view class="content">
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
    <view class="listbox">
      <view class="list" v-for="(item,index) in data" :key="item.id">
        <list :item="item"></list>
      </view>
    </view>
  </view>
</template>

<script>
  const db = uniCloud.database();
  export default {
    data() {
      return {
        classlist: [],
        data: []
      }
    },
    onLoad() {
      this.getclass()
      // this.getyuntea(this.classlist[0].id)
    },
    methods: {
      //获取表单数据
      async getclass() {
        let res = await db.collection('tea-milk-class').where(`state==true`).field('_id as id,name as name').orderBy(
          'sort asc').get()
        console.log(res.result.data);
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
        console.log(this.data)
      },
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

    .top {
      // width: 720rpx;
      margin: 5rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      background: rgba(99, 225, 93, 0.1);
      border-radius: 14rpx;
      box-shadow: 0px 1px 1px 1px #dbdbdb;
      // border-radius: 14px;

      .classname {
        padding: 0 10rpx;
        // margin: 20rpx;

      }

      .search {
        margin: 0 20rpx 0 10rpx;
        padding-right: 20rpx;
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
