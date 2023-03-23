<template>
  <view>
    <view class="home">
      <view class="bg">
        <image :src="milktea.picurl[0]" mode="aspectFill"></image>
      </view>
      <view class="top" @click="Copy">
        <text class="title">{{milktea.classname}}</text>
        <text class="text">{{milktea.name}}</text>
      </view>

      <view class="picbox">
        <view class="pic" v-for="(item,index) in milktea.
        picurl" :key="index">
          <u--image class='piclist' :showLoading="true" :src="item" mode="aspectFill" shape="square" radius="10"
            width="720rpx" height="960rpx" @click="clickpic(index)"></u--image>
        </view>
      </view>
      <view class="tttt">
        <text>注1：点击标题可以复制内容</text>
        <text>注2：数据来源小程序街边新品菜单</text>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    dateFormat
  } from '../../js/tools.js';
  const db = uniCloud.database();
  export default {
    data() {
      return {
        milktea: {},
        key: 'milktea'
      };
    },
    onLoad() {
      // console.log('123');
      this.check()
    },
    methods: {
      //判断题
      check() {
        let data = uni.getStorageSync(this.key)
        if (data && dateFormat(new Date(), 'yyyyMMdd') - data.times < 1) {
          this.milktea = data
          return
        }
        this.getone()
      },
      //写缓存
      setdate(e) {
        e.times = dateFormat(new Date(), 'yyyyMMdd')
        uni.setStorageSync(this.key, e)
      },
      //遮罩层
      zzz() {
        uni.showLoading({
          mask: true
        });
      },
      //点击文字复制
      //复制窗
      Copy() {
        // console.log(this.milktea);
        uni.setClipboardData({
          data: this.milktea.classname + this.milktea.name,
          success: function(res) {
            // console.log('复制的信息：', this.milktea);
            uni.showToast({
              title: '复制成功',
            });
          }
        });
      },
      //点击看大图
      clickpic(e) {
        console.log(this.milktea);
        console.log('点击详情图片', e);
        uni.previewImage({
          urls: this.milktea.picurl,
          current: e
        });
      },

      async getone() {
        console.log('调用请求');
        this.zzz()
        let res = await db.collection('tea-milk-list').aggregate().match({
          state: true
        }).addFields({
          picurl: '$pic.url'
        }).sample({
          size: 1
        }).end({
          getOne: true
        })
        // console.log(res.result.data);
        let milktea = res.result.data[0]
        let classid = res.result.data[0].category_id
        let classname = await db.collection('tea-milk-class').where(`_id=='${classid}'`).get({
          getCount: true,
          getOne: true
        })
        // console.log('class', classname);
        milktea.classname = classname.result.data.name
        // console.log(' this.milktea', milktea);
        this.setdate(milktea)
        this.milktea = milktea
        uni.hideLoading();
      }
    }
  }
</script>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;

      image {
        width: 100%;
        height: 100%;
        filter: blur(10px);
        transform: scale(2);
        opacity: 0.5;
      }
    }

    .top {
      width: 720rpx;
      height: 60rpx;
      border-radius: 10px;
      background: #F4EEDB;
      opacity: 0.8;
      // border: 1rpx solid #DAF7A6;
      margin-top: 30rpx;
      text-align: center;
      font-size: 32rpx;
      line-height: 60rpx;
      font-family: '微软雅黑';
      font-style: normal;
      font-weight: normal;
      text-decoration: none solid;
      white-space: normal;
      text-overflow: clip;
      word-wrap: normal;
      text-shadow: 0px 2px 7px #bcbcbc;

      .text,
      .title {
        color: #00769D;
        margin: 0 5rpx;
        display: inline-block;
        // border: red 1px solid;
      }
    }

    .picbox {
      border-radius: 10px;
      height: 1340rpx;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .pic {
        margin-top: 15rpx;


        .piclist {
          margin: 5rpx 0;
        }
      }
    }

    .tttt {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 25rpx;
      text-align: center;
      font-size: 12rpx;
      color: #00D7F6;

      text {}
    }
  }
</style>
