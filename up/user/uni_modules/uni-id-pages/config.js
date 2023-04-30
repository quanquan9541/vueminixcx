export default {
  // 调试模式
  debug: false,
  /*
		登录类型 未列举到的或运行环境不支持的，将被自动隐藏。
		如果需要在不同平台有不同的配置，直接用条件编译即可
	*/
  isAdmin: false, // 区分管理端与用户端
  loginTypes: [
    'weixin',
    'username',
    // "qq",
    // "xiaomi",
    // "sinaweibo",
    // "taobao",
    // "facebook",
    // "google",
    // "alipay",
    // "douyin",

    // #ifdef APP
    'univerify',
    // #endif
    'weixin',
    'username',
    // #ifdef APP
    'apple',
    // #endif
    'smsCode'
  ],
  // 政策协议
  agreements: {
    serviceUrl: 'https://ldlz12.com/markdown-share-docs/2ceef4318ec642eeef2ed4fa70a284d7/', // 用户服务协议链接
    privacyUrl: 'https://ldlz12.com/markdown-share-docs/b987a7ebc565d0443c3a0b5bbf81bf29/', // 隐私政策条款链接
    scope: [
      'register', 'login', 'realNameVerify'
    ]
  },
  // 提供各类服务接入（如微信登录服务）的应用id
  appid: {
    weixin: {
      h5: 'wx3a7ff2fa29a7d755',
      web: 'wx26efc716c9914bfb'
    }
  },
  passwordStrength: 'strong',
  setPasswordAfterLogin: false
}