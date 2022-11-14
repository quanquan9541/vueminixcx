<template>
  <view>
    <uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @success="success" @delete="redelete" />
    <button @click="upd">上传</button>
    <text>{{shuju}}</text>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        imageValue: [],
        shuju: []
      }
    },
    methods: {
      // 获取上传状态
      // select(e) {
      //   console.log('选择文件：', e)
      // },
      // // 获取上传进度
      // progress(e) {
      //   console.log('上传进度：', e)
      // },
      // upload() {
      //   this.$refs.files.upload()
      // },
      // 上传成功
      success(e) {
        console.log('成功', e)
        this.shuju = e.tempFilePaths
      },
      redelete(e) {
        console.log('删除', e)
      }
      //
      // upd() {
      //   let shuju = this.shuju
      //   this.upload()
      //   if (shuju != null) {
      //     console.log(shuju)
      //     console.log('其他数据')
      //   }
      // },


    }
  }
</script>

<style>

</style>
