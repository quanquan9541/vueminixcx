(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile"],{"3ab6":function(n,t,e){"use strict";(function(n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("e040"),u={data:function(){return{formData:{mobile:"",code:"",captcha:""},focusMobile:!0,logo:"/static/logo.png"}},computed:{tipText:function(){return"验证码已通过短信发送至 ".concat(this.formData.mobile,"。密码为6 - 20位")}},onLoad:function(n){},onReady:function(){},methods:{submit:function(){var t=this;if(!/^1\d{10}$/.test(this.formData.mobile))return this.focusMobile=!0,n.showToast({title:"手机号码格式不正确",icon:"none"});if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsForm.focusSmsCodeInput=!0,n.showToast({title:"验证码格式不正确",icon:"none"});console.log(this.formData);var e=o.importObject("uni-id-co");e.bindMobileBySms(this.formData).then((function(e){console.log(e),n.showToast({title:e.errMsg,icon:"none"});t.getOpenerEventChannel();i.mutations.setUserInfo(t.formData),n.navigateBack()})).catch((function(n){console.log(n),"uni-id-captcha-required"==n.errCode&&t.$refs.popup.open()})).finally((function(n){t.formData.captcha=""}))}}};t.default=u}).call(this,e("543d")["default"],e("a9ff")["default"])},5960:function(n,t,e){"use strict";e.r(t);var o=e("3ab6"),i=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=i.a},a118:function(n,t,e){},d709:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}));var o={uniEasyinput:function(){return e.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(e.bind(null,"fb75"))},uniIdPagesSmsForm:function(){return e.e("uni_modules/uni-id-pages/components/uni-id-pages-sms-form/uni-id-pages-sms-form").then(e.bind(null,"c32a"))},uniPopupCaptcha:function(){return e.e("uni_modules/uni-captcha/components/uni-popup-captcha/uni-popup-captcha").then(e.bind(null,"4749"))}},i=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.focusMobile=!1})},u=[]},ed1c:function(n,t,e){"use strict";var o=e("a118"),i=e.n(o);i.a},f346:function(n,t,e){"use strict";(function(n){e("8a9f"),e("a9ff");o(e("66fd"));var t=o(e("f5b9"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},f5b9:function(n,t,e){"use strict";e.r(t);var o=e("d709"),i=e("5960");for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);e("ed1c");var a,c=e("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=s.exports}},[["f346","common/runtime","common/vendor"]]]);