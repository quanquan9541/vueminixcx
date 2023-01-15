<template>
  <view>
    <view class="box">
      <view class="vlist" v-for="item in Cpudata" :key="item._id">
        <!-- 15个比较合适 -->
        <list_list class='list' :item="item">
        </list_list>
      </view>
      <view class="button">
        <uni-fab @fabClick="goEdit" :pattern="pattern" :horizontal="horizontal" :vertical="vertical"></uni-fab>
      </view>
    </view>
  </view>
</template>

<script>
  const db = uniCloud.database();
  export default {
    data() {
      return {
        //悬浮按钮的
        horizontal: 'right',
        vertical: 'bottom',
        pattern: {
          color: '#7A7E83',
          backgroundColor: '#fff',
          selectedColor: '#ffaaff',
          buttonColor: '#aaaaff',
          iconColor: '#fff'
        },
        //CPU数据
        Cpudata: ''
      }
    },
    onLoad() {
      //调用获取数据的函数
      this.getCpuData()
    },
    methods: {
      //跳转到新增页面
      goEdit() {
        uni.navigateTo({
          url: '/pages/cpu/cpu_add'
        })
      },

      //获取云端数据
      getCpuData() {
        db.collection('mini_cpu').where('_id!=null').limit(15).get().then(res => {
          // console.log('成功', res);
          //赋值
          this.Cpudata = res.result.data
          console.log(this.Cpudata);
        }).catch(err => {
          console.log('失败', err);
        })
      }

    }
  }
</script>

<style lang="scss">
  .box {
    margin: 30rpx 0;

    .vlist {
      margin-bottom: 20rpx;

      .list {
        margin: 0 20rpx;
      }
    }
  }
</style>
