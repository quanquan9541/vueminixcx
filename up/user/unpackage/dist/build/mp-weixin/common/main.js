(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0cee":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log("App Launch"),this.VersionUpdate()},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},methods:{VersionUpdate:function(){if(e.canIUse("getUpdateManager")){var t=e.getUpdateManager();t.onCheckForUpdate((function(n){n.hasUpdate&&(t.onUpdateReady((function(){e.showModal({title:"更新提示",content:"小程序已发布新版本，是否重启？",success:function(n){n.confirm?t.applyUpdate():n.cancel&&e.showModal({title:"提示",content:"小程序已发布新版本，是否重启",showCancel:!1,success:function(e){e.confirm&&t.applyUpdate()}})}})})),t.onUpdateFailed((function(){e.showModal({title:"提示",content:"请您删除当前小程序，重新打开小程序"})})))}))}else e.showModal({title:"温馨提示",content:"当前微信版本过低，可能无法使用该功能，请升级到最新版本后重试。"})}}};t.default=n}).call(this,n("543d")["default"])},"63e2":function(e,t,n){"use strict";n.r(t);var o=n("d381");for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);n("ee47");var a=n("f0c5"),r=Object(a["a"])(o["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);t["default"]=r.exports},"94d1":function(e,t,n){},a42d:function(e,t,n){"use strict";(function(e,t){var o=n("4ea4"),c=o(n("9523"));n("8b4a"),n("a9ff");var a=o(n("63e2")),r=o(n("66fd")),i=o(n("529f"));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}e.__webpack_require_UNI_MP_PLUGIN__=n;var f=n("b998");r.default.mixin(f),r.default.use(i.default),r.default.config.productionTip=!1,a.default.mpType="app";var l=new r.default(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a.default));t(l).$mount()}).call(this,n("bc2e")["default"],n("543d")["createApp"])},d381:function(e,t,n){"use strict";n.r(t);var o=n("0cee"),c=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=c.a},ee47:function(e,t,n){"use strict";var o=n("94d1"),c=n.n(o);c.a}},[["a42d","common/runtime","common/vendor"]]]);