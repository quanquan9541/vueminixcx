(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-login-login-withpwd"],{1363:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-63b69bf0]{display:flex;box-sizing:border-box;flex-direction:column}.root[data-v-63b69bf0]{flex-direction:row;align-items:center;font-size:12px;color:#8a8f8b}.checkbox-box[data-v-63b69bf0], .uni-label-pointer[data-v-63b69bf0]{align-items:center;display:flex;flex-direction:row}.item[data-v-63b69bf0]{flex-direction:row}.text[data-v-63b69bf0]{line-height:26px}.agreement[data-v-63b69bf0]{color:#04498c;cursor:pointer}.checkbox-box[data-v-63b69bf0]  .uni-checkbox-input{border-radius:100%}.checkbox-box[data-v-63b69bf0]  .uni-checkbox-input.uni-checkbox-input-checked{border-color:#007aff;color:#fff!important;background-color:#007aff}.content[data-v-63b69bf0]{flex-wrap:wrap;flex-direction:row}.root[data-v-63b69bf0]  .uni-popup__error{color:#333}',""]),t.exports=e},"1ac9":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-popup-dialog"},[n("v-uni-view",{staticClass:"uni-dialog-title"},[n("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.titleText))])],1),"base"===t.mode?n("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",[n("v-uni-text",{staticClass:"uni-dialog-content-text"},[t._v(t._s(t.content))])])],2):n("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",["checkbox"===t.inputType?n("v-uni-input",{staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:"checkbox"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}):"radio"===t.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:"radio"},domProps:{checked:t._q(t.val,null)},on:{change:function(e){t.val=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:t.inputType},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}})])],2),n("v-uni-view",{staticClass:"uni-dialog-button-group"},[n("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDialog.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text"},[t._v(t._s(t.closeText))])],1),n("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[t._v(t._s(t.okText))])],1)],1)],1)},a=[]},"3be6":function(t,e,n){var i=n("8d9a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3781ce88",i,!0,{sourceMap:!1,shadowMode:!1})},"41f3":function(t,e,n){"use strict";var i=n("7405"),a=n.n(i);a.a},4845:function(t,e,n){var i=n("c17c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3336f413",i,!0,{sourceMap:!1,shadowMode:!1})},"503b":function(t){t.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},"5d58":function(t,e,n){"use strict";(function(t){n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("caad"),n("2532");var a=i(n("afd6")),o=function(){return t.log("为定义")},r={name:"uni-agreements",computed:{agreements:function(){if(!a.default.agreements)return[];var t=a.default.agreements,e=t.serviceUrl,n=t.privacyUrl;return[{url:e,title:"用户服务协议"},{url:n,title:"隐私政策条款"}]}},props:{scope:{type:String,default:function(){return"register"}}},methods:{popupConfirm:function(){this.isAgree=!0,o()},popup:function(t){var e=this;this.needPopupAgreements=!0,this.$nextTick((function(){t&&(o=t),e.$refs.popupAgreement.open()}))},navigateTo:function(t){var e=t.url,n=t.title;uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+e+"&title="+n,success:function(t){},fail:function(){},complete:function(){}})},hasAnd:function(t,e){return t.length-1>e},setAgree:function(t){this.isAgree=!this.isAgree,this.$emit("setAgree",this.isAgree)}},created:function(){var t;this.needAgreements=((null===a.default||void 0===a.default||null===(t=a.default.agreements)||void 0===t?void 0:t.scope)||[]).includes(this.scope)},data:function(){return{isAgree:!1,needAgreements:!0,needPopupAgreements:!1}}};e.default=r}).call(this,n("5a52")["default"])},"6bf0":function(t,e,n){"use strict";n.r(e);var i=n("fda0"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"6de8":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("503b")),o=i(n("cc3a")),r=i(n("990e")),s={en:a.default,"zh-Hans":o.default,"zh-Hant":r.default};e.default=s},7405:function(t,e,n){var i=n("fc7f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3420af8c",i,!0,{sourceMap:!1,shadowMode:!1})},"7bb3":function(t,e,n){"use strict";n.r(e);var i=n("bdf3"),a=n("e4ad");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("ae9b");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"63b69bf0",null,!1,i["a"],void 0);e["default"]=s.exports},"8b22":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a=i(n("c119")),o=n("37dc"),r=i(n("6de8")),s=(0,o.initVueI18n)(r.default),u=s.t,c={name:"uniPopupDialog",mixins:[a.default],emits:["confirm","close"],props:{inputType:{type:String,default:"text"},value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return this.confirmText||u("uni-popup.ok")},closeText:function(){return this.cancelText||u("uni-popup.cancel")},placeholderText:function(){return this.placeholder||u("uni-popup.placeholder")},titleText:function(){return this.title||u("uni-popup.title")}},watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){this.val=t}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};e.default=c},"8d9a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-03b2ca76]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-03b2ca76]{padding:0 %?60?%}.login-logo[data-v-03b2ca76]{display:none}@media screen and (min-width:690px){.uni-content[data-v-03b2ca76]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-03b2ca76]{display:flex;justify-content:center}.login-logo uni-image[data-v-03b2ca76]{width:60px;height:60px}.register-back[data-v-03b2ca76]{display:none}uni-button[data-v-03b2ca76]{padding-bottom:1px}}.uni-content uni-view[data-v-03b2ca76]{box-sizing:border-box}.title[data-v-03b2ca76]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-03b2ca76]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-03b2ca76]  .uni-easyinput__content,\r\n.input-box[data-v-03b2ca76]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-03b2ca76]{color:#04498c;cursor:pointer}.uni-content[data-v-03b2ca76]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-03b2ca76]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-03b2ca76]{height:auto!important}@media screen and (min-width:690px){.uni-content[data-v-03b2ca76]{height:600px}}.forget[data-v-03b2ca76]{font-size:12px;color:#8a8f8b}.link-box[data-v-03b2ca76]{display:flex;flex-direction:row;justify-content:space-between;margin-top:20px}.link[data-v-03b2ca76]{font-size:12px}',""]),t.exports=e},"8e5d":function(t,e,n){"use strict";n.r(e);var i=n("1ac9"),a=n("ef22");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d66b");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"56681c50",null,!1,i["a"],void 0);e["default"]=s.exports},"990e":function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},a3fc:function(t,e,n){var i=n("1363");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("c9cd4860",i,!0,{sourceMap:!1,shadowMode:!1})},a45a:function(t,e,n){"use strict";n.r(e);var i=n("fde8"),a=n("6bf0");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("41f3");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"67fed0b2",null,!1,i["a"],void 0);e["default"]=s.exports},a7d5:function(t,e,n){"use strict";(function(t,i){n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4");var o=a(n("ed93")),r=t.importObject("uni-id-co",{errorOptions:{type:"toast"}}),s={mixins:[o.default],data:function(){return{password:"",username:"",captcha:"",needCaptcha:!1,focusUsername:!1,focusPassword:!1,logo:"/static/logo.png",config:{isAdmin:!1}}},onShow:function(){var t=this;document.onkeydown=function(e){var n=e||window.event;n&&13==n.keyCode&&t.pwdLogin()}},methods:{toRetrievePwd:function(){var t="/uni_modules/uni-id-pages/pages/retrieve/retrieve";/^1\d{10}$/.test(this.username)&&(t+="?phoneNumber=".concat(this.username)),uni.navigateTo({url:t})},pwdLogin:function(){var t=this;if(!this.password.length)return this.focusPassword=!0,uni.showToast({title:"请输入密码",icon:"none",duration:3e3});if(!this.username.length)return this.focusUsername=!0,uni.showToast({title:"请输入手机号/用户名/邮箱",icon:"none",duration:3e3});if(this.needCaptcha&&4!=this.captcha.length)return this.$refs.captcha.getImageCaptcha(),uni.showToast({title:"请输入验证码",icon:"none",duration:3e3});if(this.needAgreements&&!this.agree)return this.$refs.agreements.popup(this.pwdLogin);var e={password:this.password,captcha:this.captcha};/^1\d{10}$/.test(this.username)?e.mobile=this.username:/@/.test(this.username)?e.email=this.username:e.username=this.username,r.login(e).then((function(e){t.loginSuccess(e)})).catch((function(e){"uni-id-captcha-required"==e.errCode?t.needCaptcha=!0:t.needCaptcha&&t.$refs.captcha.getImageCaptcha()}))},toRegister:function(){uni.navigateTo({url:this.config.isAdmin?"/uni_modules/uni-id-pages/pages/register/register-admin":"/uni_modules/uni-id-pages/pages/register/register",fail:function(t){i.error(t)}})}}};e.default=s}).call(this,n("a9ff")["default"],n("5a52")["default"])},ae9b:function(t,e,n){"use strict";var i=n("a3fc"),a=n.n(i);a.a},bdf3:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniPopup:n("5ccd").default,uniPopupDialog:n("8e5d").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.agreements.length?n("v-uni-view",{staticClass:"root"},[t.needAgreements?[n("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setAgree.apply(void 0,arguments)}}},[n("v-uni-label",{staticClass:"checkbox-box"},[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.5)","margin-right":"-6px"},attrs:{checked:t.isAgree}}),n("v-uni-text",{staticClass:"text"},[t._v("同意")])],1)],1),n("v-uni-view",{staticClass:"content"},t._l(t.agreements,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-text",{staticClass:"agreement text",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo(e)}}},[t._v(t._s(e.title))]),t.hasAnd(t.agreements,i)?n("v-uni-text",{staticClass:"text and",attrs:{space:"nbsp"}},[t._v("和")]):t._e()],1)})),1)]:t._e(),t.needAgreements||t.needPopupAgreements?n("uni-popup",{ref:"popupAgreement",attrs:{type:"center"}},[n("uni-popup-dialog",{attrs:{confirmText:"同意"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.popupConfirm.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("请先阅读并同意")]),t._l(t.agreements,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-text",{staticClass:"agreement text",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo(e)}}},[t._v(t._s(e.title))]),t.hasAnd(t.agreements,i)?n("v-uni-text",{staticClass:"text and",attrs:{space:"nbsp"}},[t._v("和")]):t._e()],1)}))],2)],1)],1):t._e()],2):t._e()},o=[]},c119:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",e=this.$parent,n=e.$options.name;while(n!==t){if(e=e.$parent,!e)return!1;n=e.$options.name}return e}}};e.default=i},c17c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-dialog[data-v-56681c50]{width:300px;border-radius:11px;background-color:#fff}.uni-dialog-title[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-56681c50]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.uni-dialog-content-text[data-v-56681c50]{font-size:14px;color:#6c6c6c}.uni-dialog-button-group[data-v-56681c50]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-56681c50]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-56681c50]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-56681c50]{font-size:16px;color:#333}.uni-button-color[data-v-56681c50]{color:#007aff}.uni-dialog-input[data-v-56681c50]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-56681c50]{color:#4cd964}.uni-popup__warn[data-v-56681c50]{color:#f0ad4e}.uni-popup__error[data-v-56681c50]{color:#dd524d}.uni-popup__info[data-v-56681c50]{color:#909399}',""]),t.exports=e},c797:function(t,e,n){"use strict";var i=n("3be6"),a=n.n(i);a.a},cc3a:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},d4f4:function(t,e,n){"use strict";n.r(e);var i=n("e9eb"),a=n("f7c5");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("c797");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"03b2ca76",null,!1,i["a"],void 0);e["default"]=s.exports},d66b:function(t,e,n){"use strict";var i=n("4845"),a=n.n(i);a.a},e4ad:function(t,e,n){"use strict";n.r(e);var i=n("5d58"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},e9eb:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniForms:n("a418").default,uniFormsItem:n("6fc6").default,uniEasyinput:n("5463").default,uniCaptcha:n("a45a").default,uniIdPagesAgreements:n("7bb3").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-content"},[n("v-uni-view",{staticClass:"login-logo"},[n("v-uni-image",{attrs:{src:t.logo}})],1),n("v-uni-text",{staticClass:"title title-box"},[t._v("账号密码登录")]),n("uni-forms",[n("uni-forms-item",{attrs:{name:"username"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusUsername,inputBorder:!1,placeholder:"请输入用户名"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusUsername=!1}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("uni-forms-item",{attrs:{name:"password"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusPassword,clearable:!0,type:"password",inputBorder:!1,placeholder:"请输入密码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusPassword=!1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t.needCaptcha?n("uni-captcha",{ref:"captcha",attrs:{focus:!0,scene:"login-by-pwd"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}):t._e(),n("uni-id-pages-agreements",{ref:"agreements",attrs:{scope:"login"}}),n("v-uni-button",{staticClass:"uni-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pwdLogin.apply(void 0,arguments)}}},[t._v("登录")]),n("v-uni-view",{staticClass:"link-box"},[t.config.isAdmin?t._e():n("v-uni-view",[t.config.isAdmin?t._e():n("v-uni-text",{staticClass:"link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRegister.apply(void 0,arguments)}}},[t._v("注册账号")])],1)],1)],1)},o=[]},ed93:function(t,e,n){"use strict";(function(t){n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5530"));n("caad"),n("2532"),n("d3b7"),n("159b");var o=n("0706"),r=i(n("afd6")),s={data:function(){return{config:r.default,uniIdRedirectUrl:"",isMounted:!1}},onUnload:function(){document.onkeydown=!1},mounted:function(){this.isMounted=!0},onLoad:function(t){var e=this;if(t.is_weixin_redirect){if(uni.showLoading({mask:!0}),window.location.href.includes("#")){var n=window.location.href.split("?")[1].split("&");n.forEach((function(e){var n=e.split("=");"code"==n[0]&&(t.code=n[1])}))}this.$nextTick((function(n){e.$refs.uniFabLogin.login({code:t.code},"weixin")}))}t.uniIdRedirectUrl&&(this.uniIdRedirectUrl=decodeURIComponent(t.uniIdRedirectUrl))},computed:{needAgreements:function(){if(this.isMounted)return!!this.$refs.agreements&&this.$refs.agreements.needAgreements},agree:{get:function(){if(this.isMounted)return!this.$refs.agreements||this.$refs.agreements.isAgree},set:function(e){this.$refs.agreements?this.$refs.agreements.isAgree=e:t.log("不存在 隐私政策协议组件")}}},methods:{loginSuccess:function(t){o.mutations.loginSuccess((0,a.default)((0,a.default)({},t),{},{uniIdRedirectUrl:this.uniIdRedirectUrl}))}}},u=s;e.default=u}).call(this,n("5a52")["default"])},ef22:function(t,e,n){"use strict";n.r(e);var i=n("8b22"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},f7c5:function(t,e,n){"use strict";n.r(e);var i=n("a7d5"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},fc7f:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.captcha-box[data-v-67fed0b2]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;flex:1}.captcha-img-box[data-v-67fed0b2],\r\n.captcha[data-v-67fed0b2]{height:44px;line-height:44px}.captcha-img-box[data-v-67fed0b2]{position:relative;background-color:#fefae7}.captcha[data-v-67fed0b2]{background-color:#f8f8f8;font-size:14px;flex:1;padding:0 %?20?%;margin-left:%?20?%;box-sizing:border-box}.captcha-img-box[data-v-67fed0b2],\r\n.captcha-img[data-v-67fed0b2],\r\n.loding[data-v-67fed0b2]{height:44px!important;width:100px}.captcha-img[data-v-67fed0b2]{cursor:pointer}.loding[data-v-67fed0b2]{z-index:9;color:#bbb;position:absolute;text-align:center;line-height:45px;-webkit-animation:rotate-data-v-67fed0b2 1s linear infinite;animation:rotate-data-v-67fed0b2 1s linear infinite}.opacity[data-v-67fed0b2]{opacity:.5}@-webkit-keyframes rotate-data-v-67fed0b2{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-67fed0b2{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},fda0:function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7");var i={props:{modelValue:String,value:String,scene:{type:String,default:function(){return""}},focus:{type:Boolean,default:function(){return!1}}},computed:{val:{get:function(){return this.value||this.modelValue},set:function(t){this.$emit("input",t)}}},data:function(){return{focusCaptchaInput:!1,captchaBase64:"",loging:!1}},watch:{scene:{handler:function(t){t?this.getImageCaptcha(this.focus):uni.showToast({title:"scene不能为空",icon:"none"})},immediate:!0}},methods:{getImageCaptcha:function(){var e=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loging=!0,n&&(this.val="",this.focusCaptchaInput=!0);var i=t.importObject("uni-captcha-co",{customUI:!0});i.getImageCaptcha({scene:this.scene}).then((function(t){e.captchaBase64=t.captchaBase64})).catch((function(t){uni.showToast({title:t.message,icon:"none"})})).finally((function(t){e.loging=!1}))}}};e.default=i}).call(this,n("a9ff")["default"])},fde8:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("7046").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"captcha-box"},[n("v-uni-view",{staticClass:"captcha-img-box"},[t.loging?n("uni-icons",{staticClass:"loding",attrs:{size:"20px",color:"#BBB",type:"spinner-cycle"}}):t._e(),n("v-uni-image",{staticClass:"captcha-img",class:{opacity:t.loging},attrs:{src:t.captchaBase64,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getImageCaptcha.apply(void 0,arguments)}}})],1),n("v-uni-input",{staticClass:"captcha",attrs:{focus:t.focusCaptchaInput,type:"text",inputBorder:!1,maxlength:"4",placeholder:"请输入验证码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusCaptchaInput=!1}},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)},o=[]}}]);