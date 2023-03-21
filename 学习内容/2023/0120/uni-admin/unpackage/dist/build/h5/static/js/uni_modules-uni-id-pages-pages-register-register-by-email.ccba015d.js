(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-register-register-by-email"],{"029a":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4");var i=a(n("5530")),r=a(n("2805")),o=(0,i.default)({username:{rules:[{required:!0,errorMessage:"请输入用户名"},{minLength:3,maxLength:32,errorMessage:"用户名长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(t,e,n,a){return(/^1\d{10}$/.test(e)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(e))&&a("用户名不能是：手机号或邮箱"),/^\d+$/.test(e)&&a("用户名不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(e)&&a("用户名不能包含中文"),!0}}],label:"用户名"},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(t,e,n,a){return(/^1\d{10}$/.test(e)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(e))&&a("昵称不能是：手机号或邮箱"),/^\d+$/.test(e)&&a("昵称不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(e)&&a("昵称不能包含中文"),!0}}],label:"昵称"}},r.default.getPwdRules());e.default=o},"038c":function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7");var a={props:{modelValue:String,value:String,scene:{type:String,default:function(){return""}},focus:{type:Boolean,default:function(){return!1}}},computed:{val:{get:function(){return this.value||this.modelValue},set:function(t){this.$emit("input",t)}}},data:function(){return{focusCaptchaInput:!1,captchaBase64:"",loging:!1}},watch:{scene:{handler:function(t){t?this.getImageCaptcha(this.focus):uni.showToast({title:"scene不能为空",icon:"none"})},immediate:!0}},methods:{getImageCaptcha:function(){var e=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loging=!0,n&&(this.val="",this.focusCaptchaInput=!0);var a=t.importObject("uni-captcha-co",{customUI:!0});a.getImageCaptcha({scene:this.scene}).then((function(t){e.captchaBase64=t.captchaBase64})).catch((function(t){uni.showToast({title:t.message,icon:"none"})})).finally((function(t){e.loging=!1}))}}};e.default=a}).call(this,n("a9ff")["default"])},"16dd":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.captcha-box[data-v-67fed0b2]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;flex:1}.captcha-img-box[data-v-67fed0b2],\r\n.captcha[data-v-67fed0b2]{height:44px;line-height:44px}.captcha-img-box[data-v-67fed0b2]{position:relative;background-color:#fefae7}.captcha[data-v-67fed0b2]{background-color:#f8f8f8;font-size:14px;flex:1;padding:0 %?20?%;margin-left:%?20?%;box-sizing:border-box}.captcha-img-box[data-v-67fed0b2],\r\n.captcha-img[data-v-67fed0b2],\r\n.loding[data-v-67fed0b2]{height:44px!important;width:100px}.captcha-img[data-v-67fed0b2]{cursor:pointer}.loding[data-v-67fed0b2]{z-index:9;color:#bbb;position:absolute;text-align:center;line-height:45px;animation:rotate-data-v-67fed0b2 1s linear infinite}.opacity[data-v-67fed0b2]{opacity:.5}@keyframes rotate-data-v-67fed0b2{from{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),t.exports=e},"4fef":function(t,e,n){"use strict";var a=n("970c"),i=n.n(a);i.a},"5bae":function(t,e,n){"use strict";var a=n("a85c"),i=n.n(a);i.a},6602:function(t,e,n){"use strict";(function(t,a){n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4"),n("5319");var r=i(n("5530")),o=(i(n("029a")),i(n("12ed"))),s=(i(n("061f")),i(n("2805"))),u=t.importObject("uni-id-co"),c={mixins:[o.default],data:function(){return{formData:{email:"",nickname:"",password:"",password2:"",code:""},rules:(0,r.default)((0,r.default)({email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(t,e,n,a){return(/^1\d{10}$/.test(e)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(e))&&a("昵称不能是：手机号或邮箱"),/^\d+$/.test(e)&&a("昵称不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(e)&&a("昵称不能包含中文"),!0}}],label:"昵称"}},s.default.getPwdRules()),{},{code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"邮箱验证码不正确"}]}}),focusEmail:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){var t=this;document.onkeydown=function(e){var n=e||window.event;n&&13==n.keyCode&&t.submit()}},methods:{submit:function(){var t=this;this.$refs.form.validate().then((function(e){if(t.needAgreements&&!t.agree)return t.$refs.agreements.popup((function(){t.submitForm(e)}));t.submitForm(e)})).catch((function(e){var n=e[0].key;n=n.replace(n[0],n[0].toUpperCase()),t["focus"+n]=!0}))},submitForm:function(t){u.registerUserByEmail(this.formData).then((function(t){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:function(t){}})})).catch((function(t){a.log(t.message)}))},navigateBack:function(){uni.navigateBack()},toLogin:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByUserName:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/register/register"})}}};e.default=c}).call(this,n("a9ff")["default"],n("5a52")["default"])},8091:function(t,e,n){"use strict";n.r(e);var a=n("c149"),i=n("a02d");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("5bae");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"67fed0b2",null,!1,a["a"],void 0);e["default"]=s.exports},8746:function(t,e,n){"use strict";n.r(e);var a=n("f2d5"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"970c":function(t,e,n){var a=n("ecb5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("61f8a6f8",a,!0,{sourceMap:!1,shadowMode:!1})},"9add":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniCaptcha:n("8091").default,uniEasyinput:n("8e06").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-captcha",{ref:"captcha",attrs:{focus:t.focusCaptchaInput,scene:"send-email-code"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-view",{staticClass:"box"},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusEmailCodeInput,type:"number",inputBorder:!1,maxlength:"6",placeholder:"请输入邮箱验证码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusEmailCodeInput=!1}},model:{value:t.modelValue,callback:function(e){t.modelValue=e},expression:"modelValue"}}),n("v-uni-view",{staticClass:"short-code-btn",attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"inner-text",class:0==t.reverseNumber?"inner-text-active":""},[t._v(t._s(t.innerText))])],1)],1)],1)},r=[]},"9d01":function(t,e,n){"use strict";n.r(e);var a=n("efd8"),i=n("fdf3");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("4fef");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"1b9110f6",null,!1,a["a"],void 0);e["default"]=s.exports},a02d:function(t,e,n){"use strict";n.r(e);var a=n("038c"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},a02e:function(t,e,n){"use strict";var a=n("d4e2"),i=n.n(a);i.a},a85c:function(t,e,n){var a=n("16dd");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("28e93808",a,!0,{sourceMap:!1,shadowMode:!1})},c149:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniIcons:n("356f").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"captcha-box"},[n("v-uni-view",{staticClass:"captcha-img-box"},[t.loging?n("uni-icons",{staticClass:"loding",attrs:{size:"20px",color:"#BBB",type:"spinner-cycle"}}):t._e(),n("v-uni-image",{staticClass:"captcha-img",class:{opacity:t.loging},attrs:{src:t.captchaBase64,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getImageCaptcha.apply(void 0,arguments)}}})],1),n("v-uni-input",{staticClass:"captcha",attrs:{focus:t.focusCaptchaInput,type:"text",inputBorder:!1,maxlength:"4",placeholder:"请输入验证码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusCaptchaInput=!1}},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)},r=[]},d4e2:function(t,e,n){var a=n("ee76");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("63618655",a,!0,{sourceMap:!1,shadowMode:!1})},ecb5:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-1b9110f6]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-1b9110f6]{padding:0 %?60?%}.login-logo[data-v-1b9110f6]{display:none}@media screen and (min-width:690px){.uni-content[data-v-1b9110f6]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-1b9110f6]{display:flex;justify-content:center}.login-logo uni-image[data-v-1b9110f6]{width:60px;height:60px}.register-back[data-v-1b9110f6]{display:none}uni-button[data-v-1b9110f6]{padding-bottom:1px}}.uni-content uni-view[data-v-1b9110f6]{box-sizing:border-box}.title[data-v-1b9110f6]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-1b9110f6]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-1b9110f6]  .uni-easyinput__content,\r\n.input-box[data-v-1b9110f6]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-1b9110f6]{color:#04498c;cursor:pointer}.uni-content[data-v-1b9110f6]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-1b9110f6]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-1b9110f6]{height:auto!important}@media screen and (max-width:690px){.uni-content[data-v-1b9110f6]{margin-top:15px}}@media screen and (min-width:690px){.uni-content[data-v-1b9110f6]{padding:30px 40px;max-height:650px}.link-box[data-v-1b9110f6]{display:flex;flex-direction:row;justify-content:space-between;margin-top:10px}.link[data-v-1b9110f6]{font-size:12px}}.uni-content[data-v-1b9110f6]  .uni-forms-item__label{position:absolute;left:-15px}uni-button[data-v-1b9110f6]{margin-top:15px}',""]),t.exports=e},ee76:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-47c1d781]{position:relative;margin-top:10px}.short-code-btn[data-v-47c1d781]{padding:0;position:absolute;top:0;right:8px;width:%?260?%;max-width:130px;height:44px;display:flex;justify-content:center;align-items:center}.inner-text[data-v-47c1d781]{font-size:14px;color:#aaa}.inner-text-active[data-v-47c1d781]{color:#04498c}.captcha[data-v-47c1d781]{width:%?350?%}.input-box[data-v-47c1d781]{margin:0;padding:4px;background-color:#f8f8f8;font-size:14px}.box[data-v-47c1d781]  .content-clear-icon{margin-right:100px}.box[data-v-47c1d781]{display:flex;flex-direction:row}',""]),t.exports=e},efd8:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniMatchMedia:n("a5e8").default,uniForms:n("2b75").default,uniFormsItem:n("4194").default,uniEasyinput:n("8e06").default,uniIdPagesEmailForm:n("ff09").default,uniIdPagesAgreements:n("9785").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-content"},[n("uni-match-media",{attrs:{"min-width":690}},[n("v-uni-view",{staticClass:"login-logo"},[n("v-uni-image",{attrs:{src:t.logo}})],1),n("v-uni-text",{staticClass:"title title-box"},[t._v("邮箱验证码注册")])],1),n("uni-forms",{ref:"form",attrs:{value:t.formData,rules:t.rules,"validate-trigger":"submit","err-show-type":"toast"}},[n("uni-forms-item",{attrs:{name:"email",required:!0}},[n("uni-easyinput",{staticClass:"input-box",attrs:{inputBorder:!1,focus:t.focusEmail,placeholder:"请输入邮箱",trim:"both"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusEmail=!1}},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),n("uni-forms-item",{attrs:{name:"nickname"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{inputBorder:!1,focus:t.focusNickname,placeholder:"请输入用户昵称",trim:"both"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusNickname=!1}},model:{value:t.formData.nickname,callback:function(e){t.$set(t.formData,"nickname",e)},expression:"formData.nickname"}})],1),n("uni-forms-item",{attrs:{name:"password",required:!0},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{inputBorder:!1,focus:t.focusPassword,maxlength:"20",placeholder:"请输入"+("weak"==t.config.passwordStrength?"6":"8")+"-16位密码",type:"password",trim:"both"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusPassword=!1}},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),n("uni-forms-item",{attrs:{name:"password2",required:!0},model:{value:t.formData.password2,callback:function(e){t.$set(t.formData,"password2",e)},expression:"formData.password2"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{inputBorder:!1,focus:t.focusPassword2,placeholder:"再次输入密码",maxlength:"20",type:"password",trim:"both"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusPassword2=!1}},model:{value:t.formData.password2,callback:function(e){t.$set(t.formData,"password2",e)},expression:"formData.password2"}})],1),n("uni-forms-item",{attrs:{name:"code"}},[n("uni-id-pages-email-form",{ref:"shortCode",attrs:{email:t.formData.email,type:"register"},model:{value:t.formData.code,callback:function(e){t.$set(t.formData,"code",e)},expression:"formData.code"}})],1),n("uni-id-pages-agreements",{ref:"agreements",attrs:{scope:"register"}}),n("v-uni-button",{staticClass:"uni-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("注册")]),n("v-uni-button",{staticClass:"register-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateBack.apply(void 0,arguments)}}},[t._v("返回")]),n("uni-match-media",{attrs:{"min-width":690}},[n("v-uni-view",{staticClass:"link-box"},[n("v-uni-text",{staticClass:"link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.registerByUserName.apply(void 0,arguments)}}},[t._v("用户名密码注册")]),n("v-uni-text",{staticClass:"link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[t._v("已有账号？点此登录")])],1)],1)],1)],1)},r=[]},f2d5:function(t,e,n){"use strict";(function(t,a){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f"),n("00b4");var i={name:"uni-email-code-form",model:{prop:"modelValue",event:"update:modelValue"},props:{event:["update:modelValue"],count:{type:[String,Number],default:60},email:{type:[String],default:""},type:{type:String,default:function(){return"register"}},focusCaptchaInput:{type:Boolean,default:function(){return!1}}},data:function(){return{captcha:"",reverseNumber:0,reverseTimer:null,modelValue:"",focusEmailCodeInput:!1}},watch:{captcha:function(t,e){4==t.length&&4!=e.length&&this.start()},modelValue:function(t){this.$emit("input",t),this.$emit("update:modelValue",t)}},computed:{innerText:function(){return 0==this.reverseNumber?"获取邮箱验证码":"重新发送("+this.reverseNumber+"s)"}},created:function(){this.initClick()},methods:{getImageCaptcha:function(t){this.$refs.captcha.getImageCaptcha(t)},initClick:function(){var t=this;this.start=function(t,e){var n;return e=e||500,function(){var a=this,i=arguments;n&&clearTimeout(n);var r=!n;n=setTimeout((function(){n=null}),e),r&&t.apply(a,i)}}((function(){0==t.reverseNumber&&t.sendMsg()}))},sendMsg:function(){var e=this;if(4!=this.captcha.length)return this.$refs.captcha.focusCaptchaInput=!0,uni.showToast({title:"请先输入图形验证码",icon:"none",duration:3e3});if(!this.email)return uni.showToast({title:"请输入邮箱",icon:"none",duration:3e3});if(!/@/.test(this.email))return uni.showToast({title:"邮箱格式错误",icon:"none",duration:3e3});var n=t.importObject("uni-id-co",{customUI:!0});a.log("sendEmailCode",{email:this.email,scene:this.type,captcha:this.captcha}),n.sendEmailCode({email:this.email,scene:this.type,captcha:this.captcha}).then((function(t){uni.showToast({title:"邮箱验证码发送成功",icon:"none",duration:3e3}),e.reverseNumber=Number(e.count),e.getCode()})).catch((function(t){"uni-id-invalid-mail-template"==t.code?(e.modelValue="123456",uni.showToast({title:"已启动测试模式,详情【控制台信息】",icon:"none",duration:3e3}),a.warn(t.message)):(e.getImageCaptcha(),e.captcha="",uni.showToast({title:t.message,icon:"none",duration:3e3}))}))},getCode:function(){var t=this;if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((function(){t.getCode()}),1e3)}}};e.default=i}).call(this,n("a9ff")["default"],n("5a52")["default"])},fdf3:function(t,e,n){"use strict";n.r(e);var a=n("6602"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},ff09:function(t,e,n){"use strict";n.r(e);var a=n("9add"),i=n("8746");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("a02e");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"47c1d781",null,!1,a["a"],void 0);e["default"]=s.exports}}]);