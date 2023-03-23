<template>
  <view>
    <view v-show='show'>1234</view>
    <view v-show='!show'>789</view>
    <button @click="onclick">点击</button>
  </view>

</template>

<script>
  export default {
    data() {
      return {
        show: true
      };
    },
    methods: {
      onclick() {
        console.log('点击');
        this.show = !this.show
      }
    }
  }
</script>

<style lang="scss">

</style>
