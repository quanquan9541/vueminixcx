<template>
  <view>
    <view class="edit">
      <view class="text">
        <uni-table border :loading='loading' stripe emptyText="暂无更多数据">
          <!-- 表格数据行 -->
          <uni-tr>
            <uni-td>品牌</uni-td>
            <uni-td>{{data.category_id[0].name}}</uni-td>
          </uni-tr>
          <uni-tr>
            <uni-td>产品</uni-td>
            <uni-td>{{data.name}}</uni-td>
          </uni-tr>
          <uni-tr>
            <uni-td>上市时间</uni-td>
            <uni-td>
              <uni-dateformat format="yyyy-MM-dd" :date="data.add_date"></uni-dateformat>
            </uni-td>
          </uni-tr>
          <uni-tr>
            <uni-td>配料表</uni-td>
            <uni-td>点击展开</uni-td>
          </uni-tr>
          <uni-tr>
            <uni-td>原文链接</uni-td>
            <uni-td>点击复制</uni-td>
          </uni-tr>
        </uni-table>
      </view>
      <view class="pic">
        <u--image :showLoading="true" :src="src[0]" width="700rpx" height="700rpx" mode="aspectFill" shape="square"
          radius="10" @click="clickpic(src)"></u--image>
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
        loading: false,
        data: "",
        src: ['https://cdn.uviewui.com/uview/album/1.jpg']
      };
    },
    onLoad(e) {
      id = e.id
      // console.log(id);
      this.getdata(id)
    },
    methods: {
      //获取云端数据
      async getdata(id) {
        const list = await db.collection('tea-milk-list').where(`_id=='${id}'`).getTemp()
        const res = await db.collection(list, 'tea-milk-class').get()
        console.log(res.result.data[0]);
        this.data = res.result.data[0] //赋值
        // console.log(this.data);
      },
      //点击看大图
      clickpic(e) {
        console.log('点击详情图片', e);
        uni.previewImage({
          urls: e,
          current: 0
        });

      }
    }
  }
</script>

<style lang="scss">
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
      font-size: 16px;
      text-decoration: none;
      white-space: normal;
      text-align: center;
      direction: ltr;
      text-shadow: 1px 0px 0px #c4c4c4
    }
  }
</style>
