(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"3d46":function(e,t,n){"use strict";(function(e){n("98fd"),n("a9ff");var t=a(n("a692")),o=a(n("2bc3")),c=a(n("66fd")),r=a(n("ad75"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wx.__webpack_require_UNI_MP_PLUGIN__=n,c.default.mixin(o.default),c.default.use(r.default),c.default.config.productionTip=!1,t.default.mpType="app";var l=new c.default(i({},t.default));e(l).$mount()}).call(this,n("543d")["createApp"])},6760:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log("App Launch"),this.VersionUpdate()},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},methods:{VersionUpdate:function(){if(e.canIUse("getUpdateManager")){var t=e.getUpdateManager();t.onCheckForUpdate((function(n){n.hasUpdate&&(t.onUpdateReady((function(){e.showModal({title:"更新提示",content:"小程序已发布新版本，是否重启？",success:function(n){n.confirm?t.applyUpdate():n.cancel&&e.showModal({title:"提示",content:"小程序已发布新版本，是否重启",showCancel:!1,success:function(e){e.confirm&&t.applyUpdate()}})}})})),t.onUpdateFailed((function(){e.showModal({title:"提示",content:"请您删除当前小程序，重新打开小程序"})})))}))}else e.showModal({title:"温馨提示",content:"当前微信版本过低，可能无法使用该功能，请升级到最新版本后重试。"})}}};t.default=n}).call(this,n("543d")["default"])},a692:function(e,t,n){"use strict";n.r(t);var o=n("bf3f");for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);n("e3bc");var r,a,u,i,f=n("f0c5"),l=Object(f["a"])(o["default"],r,a,!1,null,null,null,!1,u,i);t["default"]=l.exports},b541:function(e,t,n){},bf3f:function(e,t,n){"use strict";n.r(t);var o=n("6760"),c=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=c.a},e3bc:function(e,t,n){"use strict";var o=n("b541"),c=n.n(o);c.a}},[["3d46","common/runtime","common/vendor"]]]);