<template>
  <view class="detail">
    <view v-if="loading">
      <view class="title">{{detail.title}}</view>
      <view class="info">
        <text>{{detail.author}}</text>
        <text>
          <uni-dateformat :date="detail.posttime"></uni-dateformat>
        </text>
      </view>
      <view class="content">{{detail.content}}</view>
      <view class="pic" v-if="detail.picurls && detail.picurls.length">
        <image v-for="item in detail.picurls" :src="item" mode="widthFix"></image>
      </view>
      <view class="gbutton">
        <button size="mini" @click="goedit">修改</button>
        <button size="mini" type="warn" @click="onremove">删除</button>
      </view>
    </view>
    <view v-else>
      <uni-load-more status="loading"></uni-load-more>
    </view>
  </view>
</template>

<script>
  let id;
  export default {
    data() {
      return {
        detail: {},
        loading: false
      }
    },
    onLoad(e) {
      console.log(e)
      id = e.id

    },
    onShow() {
      this.getDetail()
    },
    methods: {
      //跳转到修改页面
      goedit() {
        uni.navigateTo({
          url: "/pages/edit/edit?id=" + id
        })
      },
      //点击删除
      onremove() {
        uni.showModal({
          title: "警告",
          content: "是否确认删除",
          success: res => {
            if (res.confirm) {
              this.removefun() //调用封装函数
            }
          }
        })
      },
      //封装删除云函数
      removefun() {
        uniCloud.callFunction({
          name: "art_remove_row",
          data: {
            id
          }
        }).then(res => {
          console.log(res);
          uni.showToast({
            icon: 'success',
            title: '删除成功'
          })
          setTimeout(() => {
            uni.reLaunch({
              url: "/pages/index/index"
            })
          }, 1000)

        })
      },
      //获取详情
      getDetail() {
        uniCloud.callFunction({
          name: "art_get_row",
          data: {
            id
          }
        }).then(res => {
          console.log(res)
          this.detail = res.result.data[0]
          this.loading = true
          uni.setNavigationBarTitle({
            title: this.detail.title
          });

        }).catch(() => {
          uni.showToast({
            icon: 'error',
            title: "参数错误"
          })
          setTimeout(() => {
            uni.reLaunch({
              url: "/pages/index/index"
            })
          }, 1000)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail {
    padding: 30rpx;

    .title {
      font-size: 48rpx;
      color: #000;
      // text-align: center;
      line-height: 1.5em;
    }

    .info {
      padding: 30rpx 0 60rpx;
      color: #6a6a6a;

      text {
        font-size: 20rpx;
        padding-right: 30rpx;
      }
    }

    .content {
      font-size: 28rpx;
      line-height: 1.5em;
    }

    .pic {
      padding-top: 50rpx;

      image {
        width: 100%;
        display: block;
        margin-bottom: 30rpx;
      }
    }

    .gbutton {
      padding: 50rpx 0;

      button {
        margin-right: 50rpx;
      }
    }
  }
</style>
