(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-userinfo-set-pwd-set-pwd"],{"0860":function(t,a,n){"use strict";n.r(a);var e=n("8d5e"),o=n.n(e);for(var i in e)["default"].indexOf(i)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(i);a["default"]=o.a},"16a6":function(t,a,n){"use strict";n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){return e}));var e={uniMatchMedia:n("a5e8").default,uniForms:n("2b75").default,uniFormsItem:n("4194").default,uniEasyinput:n("8e06").default,uniIdPagesSmsForm:n("aebe").default,uniPopupCaptcha:n("aa01").default},o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"uni-content"},[n("uni-match-media",{attrs:{"min-width":690}},[n("v-uni-view",{staticClass:"login-logo"},[n("v-uni-image",{attrs:{src:t.logo}})],1),n("v-uni-text",{staticClass:"title title-box "},[t._v("设置密码")])],1),n("uni-forms",{ref:"form",staticClass:"set-password-form",attrs:{value:t.formData,"err-show-type":"toast"}},[n("v-uni-text",{staticClass:"tip"},[t._v("输入密码")]),n("uni-forms-item",{attrs:{name:"newPassword"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusNewPassword,type:"password",inputBorder:!1,placeholder:"请输入密码"},on:{blur:function(a){arguments[0]=a=t.$handleEvent(a),t.focusNewPassword=!1}},model:{value:t.formData.newPassword,callback:function(a){t.$set(t.formData,"newPassword",a)},expression:"formData.newPassword"}})],1),n("v-uni-text",{staticClass:"tip"},[t._v("再次输入密码")]),n("uni-forms-item",{attrs:{name:"newPassword2"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusNewPassword2,type:"password",inputBorder:!1,placeholder:"请再次输入新密码"},on:{blur:function(a){arguments[0]=a=t.$handleEvent(a),t.focusNewPassword2=!1}},model:{value:t.formData.newPassword2,callback:function(a){t.$set(t.formData,"newPassword2",a)},expression:"formData.newPassword2"}})],1),n("uni-id-pages-sms-form",{ref:"smsCode",attrs:{type:"set-pwd-by-sms",phone:t.userInfo.mobile},model:{value:t.formData.code,callback:function(a){t.$set(t.formData,"code",a)},expression:"formData.code"}}),n("v-uni-view",{staticClass:"link-box"},[n("v-uni-button",{staticClass:"uni-btn send-btn",attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("确认")]),t.allowSkip?n("v-uni-button",{staticClass:"uni-btn send-btn",attrs:{type:"default"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.skip.apply(void 0,arguments)}}},[t._v("跳过")]):t._e()],1)],1),n("uni-popup-captcha",{ref:"popup",attrs:{scene:"set-pwd-by-sms"},on:{confirm:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}},model:{value:t.formData.captcha,callback:function(a){t.$set(t.formData,"captcha",a)},expression:"formData.captcha"}})],1)},i=[]},"1d37":function(t,a,n){var e=n("a538");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("4f06").default;o("7d95e2f0",e,!0,{sourceMap:!1,shadowMode:!1})},"74f1":function(t,a,n){"use strict";n.r(a);var e=n("16a6"),o=n("0860");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(a,t,(function(){return o[t]}))}(i);n("ccd1");var s=n("f0c5"),r=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"fae785d0",null,!1,e["a"],void 0);a["default"]=r.exports},"8d5e":function(t,a,n){"use strict";(function(t,e){n("7a82");var o=n("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("ac1f"),n("00b4"),n("d3b7");var i=o(n("2805")),s=n("45ec"),r=o(n("061f")),d=t.importObject("uni-id-co",{customUI:!0}),u={name:"set-pwd.vue",data:function(){return{uniIdRedirectUrl:"",loginType:"",logo:"/static/logo.png",focusNewPassword:!1,focusNewPassword2:!1,allowSkip:!1,formData:{code:"",captcha:"",newPassword:"",newPassword2:""},rules:i.default.getPwdRules("newPassword","newPassword2")}},computed:{userInfo:function(){return s.store.userInfo}},onReady:function(){this.$refs.form.setRules(this.rules)},onLoad:function(t){var a;this.uniIdRedirectUrl=t.uniIdRedirectUrl,this.loginType=t.loginType,r.default.setPasswordAfterLogin&&null!==(a=r.default.setPasswordAfterLogin)&&void 0!==a&&a.allowSkip&&(this.allowSkip=!0)},methods:{submit:function(){var t=this;if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsCode.focusSmsCodeInput=!0,uni.showToast({title:"验证码格式不正确",icon:"none"});this.$refs.form.validate().then((function(a){d.setPwd({password:t.formData.newPassword,code:t.formData.code,captcha:t.formData.captcha}).then((function(a){uni.showModal({content:"密码设置成功",showCancel:!1,success:function(){s.mutations.loginBack({uniIdRedirectUrl:t.uniIdRedirectUrl,loginType:t.loginType})}})})).catch((function(t){uni.showModal({content:t.message,showCancel:!1})}))})).catch((function(a){"uni-id-captcha-required"==a.errCode?t.$refs.popup.open():e.log(a.errMsg)})).finally((function(a){t.formData.captcha=""}))},skip:function(){s.mutations.loginBack(this.uniIdRedirectUrl)}}};a.default=u}).call(this,n("a9ff")["default"],n("5a52")["default"])},a538:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-fae785d0]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-fae785d0]{padding:0 %?60?%}.login-logo[data-v-fae785d0]{display:none}@media screen and (min-width:690px){.uni-content[data-v-fae785d0]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-fae785d0]{display:flex;justify-content:center}.login-logo uni-image[data-v-fae785d0]{width:60px;height:60px}.register-back[data-v-fae785d0]{display:none}uni-button[data-v-fae785d0]{padding-bottom:1px}}.uni-content uni-view[data-v-fae785d0]{box-sizing:border-box}.title[data-v-fae785d0]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-fae785d0]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-fae785d0]  .uni-easyinput__content,\r\n.input-box[data-v-fae785d0]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-fae785d0]{color:#04498c;cursor:pointer}.uni-content[data-v-fae785d0]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-fae785d0]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-fae785d0]{height:auto!important}.uni-btn[type="default"][data-v-fae785d0]{color:inherit!important}.uni-content[data-v-fae785d0]  .uni-forms-item{margin-bottom:10px}.popup-captcha[data-v-fae785d0]{display:flex;padding:%?20?%;background-color:#fff;border-radius:2px;flex-direction:column;position:relative}.popup-captcha .title[data-v-fae785d0]{font-weight:400;padding:0;padding-bottom:15px;color:#666}.popup-captcha .close[data-v-fae785d0]{position:absolute;bottom:-40px;margin-left:-13px;left:50%}.popup-captcha .uni-btn[data-v-fae785d0]{margin:0}',""]),t.exports=a},ccd1:function(t,a,n){"use strict";var e=n("1d37"),o=n.n(e);o.a}}]);