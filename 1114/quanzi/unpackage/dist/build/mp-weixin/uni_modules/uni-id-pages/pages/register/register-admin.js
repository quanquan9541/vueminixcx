(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/register/register-admin"],{3311:function(n,e,t){"use strict";(function(n){t("8a9f"),t("a9ff");u(t("66fd"));var e=u(t("ea3a"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},"47ab":function(n,e,t){},"8c9f":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return u}));var u={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"be72"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"2df4"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"fb75"))},uniCaptcha:function(){return t.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(t.bind(null,"03f6"))},uniIdPagesAgreements:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements").then(t.bind(null,"d069"))}},o=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=function(e){n.focusUsername=!1},n.e1=function(e){n.focusNickname=!1},n.e2=function(e){n.focusPassword=!1},n.e3=function(e){n.focusPassword2=!1})},i=[]},c1e7:function(n,e,t){"use strict";(function(n,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("55d6")),i=a(t("6751"));a(t("5bf9"));function a(n){return n&&n.__esModule?n:{default:n}}var s=n.importObject("uni-id-co",{customUI:!0}),c={mixins:[i.default],data:function(){return{formData:{username:"",nickname:"",password:"",password2:"",captcha:""},rules:o.default,focusUsername:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var n=this;this.$refs.form.validate().then((function(e){return 4!=n.formData.captcha.length?(n.$refs.captcha.focusCaptchaInput=!0,u.showToast({title:"请输入验证码",icon:"none"})):n.needAgreements&&!n.agree?n.$refs.agreements.popup((function(){n.submitForm(e)})):void n.submitForm(e)})).catch((function(e){var t=e[0].key;t=t.replace(t[0],t[0].toUpperCase()),console.log(t),n["focus"+t]=!0}))},submitForm:function(n){var e=this;s.registerAdmin(this.formData).then((function(n){console.log(n),u.navigateBack()})).catch((function(n){console.log(n),console.log(n.message),e.$refs.captcha.getImageCaptcha(),u.showModal({title:"提示",content:n.errMsg||"创建失败: ".concat(n.errCode),showCancel:!1})}))},navigateBack:function(){u.navigateBack()},toLogin:function(){u.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByEmail:function(){u.navigateTo({url:"/uni_modules/uni-id-pages/pages/register/register-by-email"})}}};e.default=c}).call(this,t("a9ff")["default"],t("543d")["default"])},e649:function(n,e,t){"use strict";t.r(e);var u=t("c1e7"),o=t.n(u);for(var i in u)"default"!==i&&function(n){t.d(e,n,(function(){return u[n]}))}(i);e["default"]=o.a},e84c:function(n,e,t){"use strict";var u=t("47ab"),o=t.n(u);o.a},ea3a:function(n,e,t){"use strict";t.r(e);var u=t("8c9f"),o=t("e649");for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);t("e84c");var a,s=t("f0c5"),c=Object(s["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);e["default"]=c.exports}},[["3311","common/runtime","common/vendor"]]]);