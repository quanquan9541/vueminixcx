(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/login/login-withpwd"],{6148:function(e,n,t){"use strict";var i=t("72d6"),a=t.n(i);a.a},"72d6":function(e,n,t){},"7a77":function(e,n,t){"use strict";(function(e,i){var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=a(t("ed93")),s=e.importObject("uni-id-co",{errorOptions:{type:"toast"}}),o={mixins:[u.default],data:function(){return{password:"",username:"",captcha:"",needCaptcha:!1,focusUsername:!1,focusPassword:!1,logo:"/static/logo.png",config:{isAdmin:!1}}},onShow:function(){},methods:{toRetrievePwd:function(){var e="/uni_modules/uni-id-pages/pages/retrieve/retrieve";/^1\d{10}$/.test(this.username)&&(e+="?phoneNumber=".concat(this.username)),i.navigateTo({url:e})},pwdLogin:function(){var e=this;if(!this.password.length)return this.focusPassword=!0,i.showToast({title:"请输入密码",icon:"none",duration:3e3});if(!this.username.length)return this.focusUsername=!0,i.showToast({title:"请输入手机号/用户名/邮箱",icon:"none",duration:3e3});if(this.needCaptcha&&4!=this.captcha.length)return this.$refs.captcha.getImageCaptcha(),i.showToast({title:"请输入验证码",icon:"none",duration:3e3});if(this.needAgreements&&!this.agree)return this.$refs.agreements.popup(this.pwdLogin);var n={password:this.password,captcha:this.captcha};/^1\d{10}$/.test(this.username)?n.mobile=this.username:/@/.test(this.username)?n.email=this.username:n.username=this.username,s.login(n).then((function(n){e.loginSuccess(n)})).catch((function(n){"uni-id-captcha-required"==n.errCode?e.needCaptcha=!0:e.needCaptcha&&e.$refs.captcha.getImageCaptcha()}))},toRegister:function(){i.navigateTo({url:this.config.isAdmin?"/uni_modules/uni-id-pages/pages/register/register-admin":"/uni_modules/uni-id-pages/pages/register/register",fail:function(e){console.error(e)}})}}};n.default=o}).call(this,t("a9ff")["default"],t("543d")["default"])},"90cf":function(e,n,t){"use strict";(function(e,n){var i=t("4ea4");t("8b4a"),t("a9ff");i(t("66fd"));var a=i(t("d4f4"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},d4f4:function(e,n,t){"use strict";t.r(n);var i=t("f7bf"),a=t("f7c5");for(var u in a)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("6148");var s=t("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"313aa786",null,!1,i["a"],void 0);n["default"]=o.exports},f7bf:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}));var i={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"a418"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"6fc6"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"5463"))},uniCaptcha:function(){return t.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(t.bind(null,"a45a"))},uniIdPagesAgreements:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements").then(t.bind(null,"7bb3"))}},a=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.focusUsername=!1},e.e1=function(n){e.focusPassword=!1})},u=[]},f7c5:function(e,n,t){"use strict";t.r(n);var i=t("7a77"),a=t.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=a.a}},[["90cf","common/runtime","common/vendor"]]]);