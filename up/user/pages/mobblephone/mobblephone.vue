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
  const uniIdCo = uniCloud.importObject('uni-id-co')

  export default {
    data() {
      return {

      };
    },
    methods: {
      login() {
        uni.login({
          provider: 'weixin',
          onlyAuthorize: true,
          success: async (res) => {
            console.log("code", res.code);
            let data = await uniIdCo.loginByWeixin({
              code: res.code
            })
            console.log('data');

            let appid = 'wx3a7ff2fa29a7d755'
            let secret = 'de4fa96c6d40a67c7a351124ecea4512'
            const url =
              `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${res.code}&grant_type=authorization_code`;
            /**  uni.request({
                url: url,
                success: (res) => {
                  console.log('获取登录', res);
                  //获得token完成登录
                  uni.setStorageSync('token获得', res)
                }
              });**/
          },
          fail: function(err) {
            console.log('错误', err);
            // 登录授权失败  
            // err.c
          },
        });
      }
    }
  }
</script>

<style lang="scss">

</style>