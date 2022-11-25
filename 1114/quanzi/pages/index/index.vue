<template>
  <view class="home">
    <!-- //顶部标签 -->
    <view class="topnav">
      <u-tabs :list="navlist" lineWidth="30" lineColor="#f56c6c" :activeStyle="{
     color: '#303133',
     fontWeight: 'bold',
      transform: 'scale(1.05)'
     }" :inactiveStyle="{
     color: '#606266',
     transform: 'scale(1)'}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @click="clickNav">
      </u-tabs>
    </view>
    <!-- //骨架瓶 -->
    <view class="loadingState" v-show="loadState">
      <u-skeleton rows="3" avatar title loading></u-skeleton>
    </view>
    <!-- //主体内容 -->
    <view class="content">
      <!-- //每一项 -->
      <view class="item" v-for="item in dataList">
        <blog-item :item="item"></blog-item>
      </view>
    </view>
    <!-- //新增按钮 -->
    <view class="edit" @click="goedit">
      <text class="iconfont icon-a-21-xiugai"></text>
    </view>
  </view>
</template>

<script>
  const db = uniCloud.database() //链接数据库
  export default {
    data() {
      return {
        dataList: [], //主体内容数据
        loadState: true, //骨架瓶显示状态
        navlist: [{ //顶部标签数组
            name: "最新",
            type: "publish_date"
          },
          {
            name: "热门",
            type: "like_count"
          }
        ],
        navActive: 0
      }
    },
    onLoad() {
      this.getData()
    },
    methods: {
      //获取数据
      async getData() {
        let artTemp = db.collection('quanzi_article').field(
          "title,user_id,description,picurls,comment_count,view_count,like_count,publish_date").getTemp();
        let userTemp = db.collection('uni-id-users').field("_id, username, nickname, avatar_file").getTemp();
        await db.collection(artTemp, userTemp).orderBy(this.navlist[this.navActive].type, "desc").get().then(res => {
          console.log(res);
          if (!res.result.data) {
            this.errfun()
            return
          }

          this.dataList = res.result.data
          this.loadState = false
        })
      },
      clickNav(e) {
        console.log(e)
        this.loadState = true
        this.dataList = []
        this.navActive = e.index
        this.getData()
      },
      //跳转到表单
      goedit() {
        uni.navigateTo({
          url: '/pages/edit/edit'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .topnav {
      margin-bottom: 30rpx;
    }

    .loadingState {
      padding: 30rpx;
    }

    .content {
      .item {
        padding: 30rpx;
        border-bottom: 10rpx #e6e6e6 solid; //分割线
      }
    }

    .edit {
      width: 120rpx;
      height: 120rpx;
      background-color: #0199fe;
      border-radius: 50%;
      color: #fff;
      position: fixed;
      z-index: 100;
      bottom: 150rpx;
      right: 50rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 20rpx rgba(1, 153, 254, 0.8);

      .iconfont {
        font-size: 50rpx;
      }
    }
  }
</style>
