(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-retrieve-retrieve-by-email"],{"038c":function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7");var a={props:{modelValue:String,value:String,scene:{type:String,default:function(){return""}},focus:{type:Boolean,default:function(){return!1}}},computed:{val:{get:function(){return this.value||this.modelValue},set:function(t){this.$emit("input",t)}}},data:function(){return{focusCaptchaInput:!1,captchaBase64:"",loging:!1}},watch:{scene:{handler:function(t){t?this.getImageCaptcha(this.focus):uni.showToast({title:"scene不能为空",icon:"none"})},immediate:!0}},methods:{getImageCaptcha:function(){var e=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loging=!0,n&&(this.val="",this.focusCaptchaInput=!0);var a=t.importObject("uni-captcha-co",{customUI:!0});a.getImageCaptcha({scene:this.scene}).then((function(t){e.captchaBase64=t.captchaBase64})).catch((function(t){uni.showToast({title:t.message,icon:"none"})})).finally((function(t){e.loging=!1}))}}};e.default=a}).call(this,n("a9ff")["default"])},"12ed":function(t,e,n){"use strict";(function(t){n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530"));n("caad"),n("2532"),n("d3b7"),n("159b");var o=n("45ec"),r=a(n("061f")),s={data:function(){return{config:r.default,uniIdRedirectUrl:"",isMounted:!1}},onUnload:function(){document.onkeydown=!1},mounted:function(){this.isMounted=!0},onLoad:function(t){var e=this;if(t.is_weixin_redirect){if(uni.showLoading({mask:!0}),window.location.href.includes("#")){var n=window.location.href.split("?")[1].split("&");n.forEach((function(e){var n=e.split("=");"code"==n[0]&&(t.code=n[1])}))}this.$nextTick((function(n){e.$refs.uniFabLogin.login({code:t.code},"weixin")}))}t.uniIdRedirectUrl&&(this.uniIdRedirectUrl=decodeURIComponent(t.uniIdRedirectUrl))},computed:{needAgreements:function(){if(this.isMounted)return!!this.$refs.agreements&&this.$refs.agreements.needAgreements},agree:{get:function(){if(this.isMounted)return!this.$refs.agreements||this.$refs.agreements.isAgree},set:function(e){this.$refs.agreements?this.$refs.agreements.isAgree=e:t.log("不存在 隐私政策协议组件")}}},methods:{loginSuccess:function(t){o.mutations.loginSuccess((0,i.default)((0,i.default)({},t),{},{uniIdRedirectUrl:this.uniIdRedirectUrl}))}}},c=s;e.default=c}).call(this,n("5a52")["default"])},"16dd":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.captcha-box[data-v-67fed0b2]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;flex:1}.captcha-img-box[data-v-67fed0b2],\r\n.captcha[data-v-67fed0b2]{height:44px;line-height:44px}.captcha-img-box[data-v-67fed0b2]{position:relative;background-color:#fefae7}.captcha[data-v-67fed0b2]{background-color:#f8f8f8;font-size:14px;flex:1;padding:0 %?20?%;margin-left:%?20?%;box-sizing:border-box}.captcha-img-box[data-v-67fed0b2],\r\n.captcha-img[data-v-67fed0b2],\r\n.loding[data-v-67fed0b2]{height:44px!important;width:100px}.captcha-img[data-v-67fed0b2]{cursor:pointer}.loding[data-v-67fed0b2]{z-index:9;color:#bbb;position:absolute;text-align:center;line-height:45px;animation:rotate-data-v-67fed0b2 1s linear infinite}.opacity[data-v-67fed0b2]{opacity:.5}@keyframes rotate-data-v-67fed0b2{from{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),t.exports=e},2416:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-dc512956]{display:flex;flex-direction:column}.popup-captcha[data-v-dc512956]{display:flex;max-width:600px;width:%?600?%;padding-bottom:0;background-color:#fff;border-radius:10px;flex-direction:column;position:relative}.popup-captcha .content[data-v-dc512956]{padding:1.3em .8em}.popup-captcha .title[data-v-dc512956]{text-align:center;word-wrap:break-word;word-break:break-all;white-space:pre-wrap;font-weight:400;font-size:18px;overflow:hidden;text-overflow:ellipsis;color:#111;margin-bottom:15px}.button-box[data-v-dc512956]{height:44px;border-top:solid 1px #eee;flex-direction:row;align-items:center;justify-content:space-around}.button-box[data-v-dc512956], .btn[data-v-dc512956]{height:44px;line-height:44px}.button-box .btn[data-v-dc512956]{flex:1;margin:1px;text-align:center}.button-box .confirm[data-v-dc512956]{color:#007aff;border-left:solid 1px #eee}',""]),t.exports=e},"5bae":function(t,e,n){"use strict";var a=n("a85c"),i=n.n(a);i.a},"70aa":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{focus:!1}},props:{modelValue:String,value:String,scene:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}}},computed:{val:{get:function(){return this.value||this.modelValue},set:function(t){this.$emit("input",t)}}},methods:{open:function(){this.focus=!0,this.val="",this.$refs.popup.open()},close:function(){this.focus=!1,this.$refs.popup.close()},confirm:function(){if(!this.val)return uni.showToast({title:"请填写验证码",icon:"none"});this.close(),this.$emit("confirm")}}};e.default=a},"76c2":function(t,e,n){"use strict";(function(t){n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4"),n("d3b7"),n("5319");var i=a(n("5530")),o=a(n("12ed")),r=a(n("2805")),s=t.importObject("uni-id-co",{errorOptions:{type:"toast"}}),c={mixins:[o.default],data:function(){return{lock:!1,focusEmail:!0,focusPassword:!1,focusPassword2:!1,formData:{email:"",code:"",password:"",password2:"",captcha:""},rules:(0,i.default)({email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"请输入6位验证码"}]}},r.default.getPwdRules()),logo:"/static/logo.png"}},computed:{isEmail:function(){var t=/@/.test(this.formData.email);return t},isPwd:function(){var t=/^.{6,20}$/.test(this.formData.password);return t},isCode:function(){var t=/^\d{6}$/.test(this.formData.code);return t}},onLoad:function(t){t&&t.emailNumber&&(this.formData.email=t.emailNumber,t.lock&&(this.lock=t.lock,this.focusEmail=!0))},onReady:function(){this.formData.email&&this.$refs.shortCode.start(),this.$refs.form.setRules(this.rules)},onShow:function(){var t=this;document.onkeydown=function(e){var n=e||window.event;n&&13==n.keyCode&&t.submit()}},methods:{submit:function(){var t=this;this.$refs.form.validate().then((function(e){var n=t.formData,a=n.email,i=n.password,o=n.captcha,r=n.code;s.resetPwdByEmail({email:a,code:r,password:i,captcha:o}).then((function(t){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:function(t){}})})).catch((function(e){"uni-id-captcha-required"==e.errCode&&t.$refs.popup.open()})).finally((function(e){t.formData.captcha=""}))})).catch((function(e){var n=e[0].key;if("code"==n)return t.$refs.shortCode.focusSmsCodeInput=!0;n=n.replace(n[0],n[0].toUpperCase()),t["focus"+n]=!0}))},retrieveByPhone:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/retrieve/retrieve"})},backLogin:function(){uni.redirectTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})}}};e.default=c}).call(this,n("a9ff")["default"])},"7ebd":function(t,e,n){var a=n("2416");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("01127bde",a,!0,{sourceMap:!1,shadowMode:!1})},8091:function(t,e,n){"use strict";n.r(e);var a=n("c149"),i=n("a02d");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("5bae");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"67fed0b2",null,!1,a["a"],void 0);e["default"]=s.exports},8746:function(t,e,n){"use strict";n.r(e);var a=n("f2d5"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"9add":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniCaptcha:n("8091").default,uniEasyinput:n("8e06").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-captcha",{ref:"captcha",attrs:{focus:t.focusCaptchaInput,scene:"send-email-code"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-view",{staticClass:"box"},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusEmailCodeInput,type:"number",inputBorder:!1,maxlength:"6",placeholder:"请输入邮箱验证码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusEmailCodeInput=!1}},model:{value:t.modelValue,callback:function(e){t.modelValue=e},expression:"modelValue"}}),n("v-uni-view",{staticClass:"short-code-btn",attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"inner-text",class:0==t.reverseNumber?"inner-text-active":""},[t._v(t._s(t.innerText))])],1)],1)],1)},o=[]},a02d:function(t,e,n){"use strict";n.r(e);var a=n("038c"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},a02e:function(t,e,n){"use strict";var a=n("d4e2"),i=n.n(a);i.a},a85c:function(t,e,n){var a=n("16dd");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("28e93808",a,!0,{sourceMap:!1,shadowMode:!1})},aa01:function(t,e,n){"use strict";n.r(e);var a=n("e5a7"),i=n("ca8f");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("af11");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"dc512956",null,!1,a["a"],void 0);e["default"]=s.exports},af11:function(t,e,n){"use strict";var a=n("7ebd"),i=n.n(a);i.a},b1aa:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-1b70307b]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-1b70307b]{padding:0 %?60?%}.login-logo[data-v-1b70307b]{display:none}@media screen and (min-width:690px){.uni-content[data-v-1b70307b]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-1b70307b]{display:flex;justify-content:center}.login-logo uni-image[data-v-1b70307b]{width:60px;height:60px}.register-back[data-v-1b70307b]{display:none}uni-button[data-v-1b70307b]{padding-bottom:1px}}.uni-content uni-view[data-v-1b70307b]{box-sizing:border-box}.title[data-v-1b70307b]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-1b70307b]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-1b70307b]  .uni-easyinput__content,\r\n.input-box[data-v-1b70307b]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-1b70307b]{color:#04498c;cursor:pointer}.uni-content[data-v-1b70307b]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-1b70307b]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-1b70307b]{height:auto!important}@media screen and (max-width:690px){.uni-content[data-v-1b70307b]{margin-top:15px}}@media screen and (min-width:690px){.uni-content[data-v-1b70307b]{padding:30px 40px 40px;max-height:650px}.link-box[data-v-1b70307b]{display:flex;flex-direction:row;justify-content:space-between;margin-top:10px}.link[data-v-1b70307b]{font-size:12px}}',""]),t.exports=e},b796:function(t,e,n){"use strict";n.r(e);var a=n("76c2"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},be33:function(t,e,n){"use strict";var a=n("ca79"),i=n.n(a);i.a},c149:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniIcons:n("356f").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"captcha-box"},[n("v-uni-view",{staticClass:"captcha-img-box"},[t.loging?n("uni-icons",{staticClass:"loding",attrs:{size:"20px",color:"#BBB",type:"spinner-cycle"}}):t._e(),n("v-uni-image",{staticClass:"captcha-img",class:{opacity:t.loging},attrs:{src:t.captchaBase64,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getImageCaptcha.apply(void 0,arguments)}}})],1),n("v-uni-input",{staticClass:"captcha",attrs:{focus:t.focusCaptchaInput,type:"text",inputBorder:!1,maxlength:"4",placeholder:"请输入验证码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusCaptchaInput=!1}},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)},o=[]},ca79:function(t,e,n){var a=n("b1aa");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("75055cf7",a,!0,{sourceMap:!1,shadowMode:!1})},ca8f:function(t,e,n){"use strict";n.r(e);var a=n("70aa"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},d4e2:function(t,e,n){var a=n("ee76");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("63618655",a,!0,{sourceMap:!1,shadowMode:!1})},e5a7:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniPopup:n("f159").default,uniCaptcha:n("8091").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-popup",{ref:"popup",attrs:{type:"center"}},[n("v-uni-view",{staticClass:"popup-captcha"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),n("uni-captcha",{attrs:{focus:t.focus,scene:t.scene},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1),n("v-uni-view",{staticClass:"button-box"},[n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-view",{staticClass:"btn confirm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)},o=[]},eabb:function(t,e,n){"use strict";n.r(e);var a=n("fc45"),i=n("b796");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("be33");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"1b70307b",null,!1,a["a"],void 0);e["default"]=s.exports},ee76:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-47c1d781]{position:relative;margin-top:10px}.short-code-btn[data-v-47c1d781]{padding:0;position:absolute;top:0;right:8px;width:%?260?%;max-width:130px;height:44px;display:flex;justify-content:center;align-items:center}.inner-text[data-v-47c1d781]{font-size:14px;color:#aaa}.inner-text-active[data-v-47c1d781]{color:#04498c}.captcha[data-v-47c1d781]{width:%?350?%}.input-box[data-v-47c1d781]{margin:0;padding:4px;background-color:#f8f8f8;font-size:14px}.box[data-v-47c1d781]  .content-clear-icon{margin-right:100px}.box[data-v-47c1d781]{display:flex;flex-direction:row}',""]),t.exports=e},f2d5:function(t,e,n){"use strict";(function(t,a){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f"),n("00b4");var i={name:"uni-email-code-form",model:{prop:"modelValue",event:"update:modelValue"},props:{event:["update:modelValue"],count:{type:[String,Number],default:60},email:{type:[String],default:""},type:{type:String,default:function(){return"register"}},focusCaptchaInput:{type:Boolean,default:function(){return!1}}},data:function(){return{captcha:"",reverseNumber:0,reverseTimer:null,modelValue:"",focusEmailCodeInput:!1}},watch:{captcha:function(t,e){4==t.length&&4!=e.length&&this.start()},modelValue:function(t){this.$emit("input",t),this.$emit("update:modelValue",t)}},computed:{innerText:function(){return 0==this.reverseNumber?"获取邮箱验证码":"重新发送("+this.reverseNumber+"s)"}},created:function(){this.initClick()},methods:{getImageCaptcha:function(t){this.$refs.captcha.getImageCaptcha(t)},initClick:function(){var t=this;this.start=function(t,e){var n;return e=e||500,function(){var a=this,i=arguments;n&&clearTimeout(n);var o=!n;n=setTimeout((function(){n=null}),e),o&&t.apply(a,i)}}((function(){0==t.reverseNumber&&t.sendMsg()}))},sendMsg:function(){var e=this;if(4!=this.captcha.length)return this.$refs.captcha.focusCaptchaInput=!0,uni.showToast({title:"请先输入图形验证码",icon:"none",duration:3e3});if(!this.email)return uni.showToast({title:"请输入邮箱",icon:"none",duration:3e3});if(!/@/.test(this.email))return uni.showToast({title:"邮箱格式错误",icon:"none",duration:3e3});var n=t.importObject("uni-id-co",{customUI:!0});a.log("sendEmailCode",{email:this.email,scene:this.type,captcha:this.captcha}),n.sendEmailCode({email:this.email,scene:this.type,captcha:this.captcha}).then((function(t){uni.showToast({title:"邮箱验证码发送成功",icon:"none",duration:3e3}),e.reverseNumber=Number(e.count),e.getCode()})).catch((function(t){"uni-id-invalid-mail-template"==t.code?(e.modelValue="123456",uni.showToast({title:"已启动测试模式,详情【控制台信息】",icon:"none",duration:3e3}),a.warn(t.message)):(e.getImageCaptcha(),e.captcha="",uni.showToast({title:t.message,icon:"none",duration:3e3}))}))},getCode:function(){var t=this;if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((function(){t.getCode()}),1e3)}}};e.default=i}).call(this,n("a9ff")["default"],n("5a52")["default"])},fc45:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniMatchMedia:n("a5e8").default,uniForms:n("2b75").default,uniFormsItem:n("4194").default,uniEasyinput:n("8e06").default,uniIdPagesEmailForm:n("ff09").default,uniPopupCaptcha:n("aa01").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-content"},[n("uni-match-media",{attrs:{"min-width":690}},[n("v-uni-view",{staticClass:"login-logo"},[n("v-uni-image",{attrs:{src:t.logo}})],1),n("v-uni-text",{staticClass:"title title-box"},[t._v("通过邮箱验证码找回密码")])],1),n("uni-forms",{ref:"form",attrs:{value:t.formData,"err-show-type":"toast"}},[n("uni-forms-item",{attrs:{name:"email"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusEmail,disabled:t.lock,inputBorder:!1,placeholder:"请输入邮箱"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusEmail=!1}},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),n("uni-forms-item",{attrs:{name:"code"}},[n("uni-id-pages-email-form",{ref:"shortCode",attrs:{email:t.formData.email,type:"reset-pwd-by-email"},model:{value:t.formData.code,callback:function(e){t.$set(t.formData,"code",e)},expression:"formData.code"}})],1),n("uni-forms-item",{attrs:{name:"password"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusPassword,type:"password",inputBorder:!1,placeholder:"请输入新密码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusPassword=!1}},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),n("uni-forms-item",{attrs:{name:"password2"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusPassword2,type:"password",inputBorder:!1,placeholder:"请再次输入新密码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusPassword2=!1}},model:{value:t.formData.password2,callback:function(e){t.$set(t.formData,"password2",e)},expression:"formData.password2"}})],1),n("v-uni-button",{staticClass:"uni-btn send-btn-box",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),n("uni-match-media",{attrs:{"min-width":690}},[n("v-uni-view",{staticClass:"link-box"},[n("v-uni-text",{staticClass:"link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.retrieveByPhone.apply(void 0,arguments)}}},[t._v("通过手机验证码找回密码")]),n("v-uni-view"),n("v-uni-text",{staticClass:"link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backLogin.apply(void 0,arguments)}}},[t._v("返回登录")])],1)],1)],1),n("uni-popup-captcha",{ref:"popup",attrs:{scene:"reset-pwd-by-sms"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}},model:{value:t.formData.captcha,callback:function(e){t.$set(t.formData,"captcha",e)},expression:"formData.captcha"}})],1)},o=[]},ff09:function(t,e,n){"use strict";n.r(e);var a=n("9add"),i=n("8746");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a02e");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"47c1d781",null,!1,a["a"],void 0);e["default"]=s.exports}}]);