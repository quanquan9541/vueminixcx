(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/common/webview/webview"],{"3e0b":function(t,n,e){"use strict";(function(t){e("8a9f"),e("a9ff");u(e("66fd"));var n=u(e("7ade"));function u(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"507d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={onLoad:function(n){var e=n.url,u=n.title;"http"!=e.substring(0,4)?(t.showModal({title:"错误",content:'不是一个有效的网站链接,"'+e+'"',showCancel:!1,confirmText:"知道了",complete:function(){t.navigateBack()}}),u="页面路径错误"):(console.log(e,u),this.url=e),u&&t.setNavigationBarTitle({title:u})},data:function(){return{url:null}}};n.default=e}).call(this,e("543d")["default"])},"7ade":function(t,n,e){"use strict";e.r(n);var u=e("b103"),a=e("f715");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);var r,i=e("f0c5"),c=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=c.exports},b103:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},f715:function(t,n,e){"use strict";e.r(n);var u=e("507d"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=a.a}},[["3e0b","common/runtime","common/vendor"]]]);