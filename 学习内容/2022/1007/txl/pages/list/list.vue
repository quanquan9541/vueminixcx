<template>
  <view>
    <unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" collection="contacts">
      <view v-if="error">{{error.message}}</view>
      <view v-else>
        <uni-list>
          <uni-list-item v-for="item in data" @longpress.native="updateFn(item)" :key="item._id" :title="item.name"
            :note="item.phone">
          </uni-list-item>
          <!-- @longpress.native 长按删除 -->
        </uni-list>
      </view>
    </unicloud-db>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      updateFn(item) {
        uni.navigateTo({
          url: '../update/update?item' + JSON.stringify(item),
          success: res => {},
          fail: () => {},
          complete: () => {}
        });
      },
      confirmDelete(id) {
        this.$refs.udb.remove(id)
      }

    }
  }
</script>

<style>

</style>
