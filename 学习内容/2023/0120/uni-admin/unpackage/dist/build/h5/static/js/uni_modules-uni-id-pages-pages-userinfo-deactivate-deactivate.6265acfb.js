(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-userinfo-deactivate-deactivate"],{"1e23":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".uni-content[data-v-3b8cc77a]{display:flex;flex-direction:column;font-size:%?28?%}.words[data-v-3b8cc77a]{padding:0 %?26?%;line-height:%?46?%;margin-top:%?20?%;margin-bottom:80px}.button-group uni-button[data-v-3b8cc77a]{border-radius:100px;border:none;width:%?300?%;height:42px;line-height:42px;font-size:%?32?%}.button-group uni-button[data-v-3b8cc77a]:after{border:none}.button-group uni-button.next[data-v-3b8cc77a]{color:#e64340;border:solid 1px #e64340}.button-group[data-v-3b8cc77a]{display:flex;flex-direction:row;position:fixed;height:50px;bottom:10px;width:%?750?%;justify-content:center;align-items:center;border-top:solid 1px #e4e6ec;padding-top:10px;background-color:#fff;max-width:690px}@media screen and (min-width:690px){.uni-content[data-v-3b8cc77a]{max-width:690px;margin-left:calc(50% - 345px)}}",""]),t.exports=n},2575:function(t,n,e){"use strict";(function(t){e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{}},onLoad:function(){},methods:{cancel:function(){uni.navigateBack()},nextStep:function(){uni.showModal({content:"已经仔细阅读注销提示，知晓可能带来的后果，并确认要注销",complete:function(n){if(n.confirm){t.database();var e=t.importObject("uni-id-co");e.closeAccount().then((function(t){uni.showToast({title:"注销成功",duration:3e3}),uni.removeStorageSync("uni_id_token"),uni.setStorageSync("uni_id_token_expired",0),uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"})}))}else uni.navigateBack()}})}}};n.default=i}).call(this,e("a9ff")["default"])},2965:function(t,n,e){var i=e("1e23");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("dbc8a6d6",i,!0,{sourceMap:!1,shadowMode:!1})},"45c0":function(t,n,e){"use strict";var i=e("2965"),a=e.n(i);a.a},"854d":function(t,n,e){"use strict";e.r(n);var i=e("2575"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},a084:function(t,n,e){"use strict";e.r(n);var i=e("f0f5"),a=e("854d");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("45c0");var u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"3b8cc77a",null,!1,i["a"],void 0);n["default"]=c.exports},f0f5:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-content"},[e("v-uni-text",{staticClass:"words",attrs:{space:"emsp"}},[t._v("一、注销是不可逆操作，注销后:\\n\n\t\t1.帐号将无法登录、无法找回。\\n\n\t\t2.帐号所有信息都会清除(个人身份信息、粉丝数等;发布的作品、评论、点赞等;交易信息等)，你\n\t\t的朋友将无法通过本应用帐号联系你，请自行备份相关\n\t\t信息和数据。\\n\n\n\t\t二、重要提示\\n\n\t\t1.封禁帐号(永久封禁、社交封禁、直播权限封禁)不能申请注销。\\n\n\t\t2.注销后，你的身份证、三方帐号(微信、QQ、微博、支付宝)、手机号等绑定关系将解除，解除后可以绑定到其他帐号。\\n\n\t\t3.注销后，手机号可以注册新的帐号，新帐号不会存在之前帐号的任何信息(作品、粉丝、评论、个人信息等)。\\n\n\t\t4.注销本应用帐号前，需尽快处理帐号下的资金问题。\\n\n\t\t5.视具体帐号情况而定，注销最多需要7天。\\n")]),e("v-uni-view",{staticClass:"button-group"},[e("v-uni-button",{staticClass:"next",attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.nextStep.apply(void 0,arguments)}}},[t._v("下一步")]),e("v-uni-button",{attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cancel.apply(void 0,arguments)}}},[t._v("取消")])],1)],1)},a=[]}}]);