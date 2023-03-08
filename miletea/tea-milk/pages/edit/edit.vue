<template>
  <view>
    <view class="skeleton">
      <view class="skeletons">
        <u-skeleton rows="5" :loading="onloading" title>
        </u-skeleton>
      </view>
    </view>
    <view class="edit" v-if='!onloading'>
      <view class="text">
        <uni-table border :loading='loading' stripe emptyText="暂无更多数据">
          <!-- 表格数据行 -->
          <uni-tr>
            <uni-td>品牌</uni-td>
            <uni-td>
              <view class="txt">{{data.class && data.class[0]}}</view>
            </uni-td>
          </uni-tr>
          <uni-tr>
            <uni-td>产品</uni-td>
            <uni-td>
              <view class="txt">{{data.name}}</view>
            </uni-td>
          </uni-tr>
          <uni-tr>
            <uni-td>上市时间</uni-td>
            <uni-td>
              <view class="txt">
                <uni-dateformat format="yyyy-MM-dd" :date="data.add_date"></uni-dateformat>
              </view>

            </uni-td>
          </uni-tr>
          <uni-tr>
            <uni-td>配料表</uni-td>
            <uni-td>
              <view class="txt" @click="copy('配料表',data.goods_desc)">{{data.goods_desc }}</view>
            </uni-td>
          </uni-tr>
          <uni-tr>
            <uni-td>原文链接</uni-td>
            <uni-td>
              <view class="txt" @click="copy('原文链接',data.url)">{{data.url}}</view>
            </uni-td>
          </uni-tr>
        </uni-table>
      </view>
      <view class=" pic" v-for="(item,index) in data.picurl" :key="index">
        <u--image class='piclist' :showLoading="true" :src="item" width="720rpx" height="960rpx" mode="aspectFill"
          shape="square" radius="10" @click="clickpic(index)"></u--image>
      </view>
    </view>
  </view>
</template>

<script>
  const db = uniCloud.database();
  let id;
  export default {
    data() {
      return {
        onloading: true,
        loading: false,
        data: "",
      };
    },
    onLoad(e) {
      if (!e) {
        uni.navigateBack({
          delta: 1
        });
        return
      }
      id = e.id
      // console.log(e);
      this.getdata(id)
      // // 延时2秒钟显示数据
      // uni.$u.sleep(2000).then(() => {
      //   this.onloading = false
      // })
    },
    methods: {
      //点击复制
      copy(e, data) {
        uni.setClipboardData({
          data: data,
          success: function(res) {
            // console.log('复制的信息：', e);
            uni.showToast({
              title: '复制' + e,
              icon: "success",
              duration: 1500,
              mask: true
            });
          }
        });
      },
      //获取云端数据
      async getdata(id) {
        const list = await db.collection('tea-milk-list').where(`_id=='${id}'`).getTemp()
        const res = await db.collection(list, 'tea-milk-class').field(
          'add_date,name,goods_desc,url,pic.url as picurl,category_id.name as class').get();
        // console.log(res.result.data[0]);
        this.data = res.result.data[0]; //赋值
        // console.log(this.data);
        //设置标题
        uni.setNavigationBarTitle({
          title: res.result.data[0].class + '\xa0\xa0' +
            res.result.data[0].name
        });
        //设置显示
        this.onloading = false
      },
      //点击看大图
      clickpic(e) {
        // console.log('点击详情图片', e);
        uni.previewImage({
          urls: this.data.picurl,
          current: e
        });

      }
    }
  }
</script>

<style lang="scss">
  .skeleton {
    // border: red solid 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    .skeletons {
      width: 720rpx;
    }
  }

  .edit {
    margin: 25rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .text {
      width: 720rpx;
      margin-bottom: 30rpx;
      font-family: '微软雅黑';
      font-style: normal;
      font-weight: normal;
      text-decoration: none solid;
      white-space: normal;
      text-overflow: clip;
      word-wrap: normal;
      text-shadow: 0px 2px 7px #bcbcbc;
      font-size: 16px;
      text-decoration: none;
      text-align: center;
      direction: ltr;
      color: #b0a4e3;

      .txt {
        width: 420rpx;
        text-overflow: clip;
        word-wrap: break-word;
      }
    }

    .pic {
      width: 720rpx;

      .piclist {
        margin-top: 20rpx;
      }
    }
  }
</style>
