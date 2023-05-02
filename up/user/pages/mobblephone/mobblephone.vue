<template>
  <view>
    <view class="mobblephone">
      <view>
        <button type="default" @click="login">登录</button>
      </view>
    </view>
  </view>
</template>

<script>
  const MPhoneValuemax = uniCloud.importObject('MPhoneValueMax')
  const db = uniCloud.database();
  export default {
    data() {
      return {

      };
    },
    methods: {
      async login() {
        try {
          const data = await MPhoneValuemax.PhoneValuemax()
          console.log(data);
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style lang="scss">

</style>