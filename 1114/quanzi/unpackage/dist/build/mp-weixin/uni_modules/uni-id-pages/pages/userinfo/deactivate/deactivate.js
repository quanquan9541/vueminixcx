(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate"],{"0756":function(n,e,t){"use strict";var c;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return c}));var a=function(){var n=this,e=n.$createElement;n._self._c},u=[]},"13bc":function(n,e,t){"use strict";t.r(e);var c=t("c1cf"),a=t.n(c);for(var u in c)"default"!==u&&function(n){t.d(e,n,(function(){return c[n]}))}(u);e["default"]=a.a},2456:function(n,e,t){},a5c7:function(n,e,t){"use strict";t.r(e);var c=t("0756"),a=t("13bc");for(var u in a)"default"!==u&&function(n){t.d(e,n,(function(){return a[n]}))}(u);t("e1ee");var o,i=t("f0c5"),r=Object(i["a"])(a["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],o);e["default"]=r.exports},acdc:function(n,e,t){"use strict";(function(n){t("8a9f"),t("a9ff");c(t("66fd"));var e=c(t("a5c7"));function c(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},c1cf:function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c={data:function(){return{}},onLoad:function(){},methods:{cancel:function(){n.navigateBack()},nextStep:function(){n.showModal({content:"已经仔细阅读注销提示，知晓可能带来的后果，并确认要注销",complete:function(e){if(e.confirm){t.database();var c=t.importObject("uni-id-co");c.closeAccount().then((function(e){console.log(e),n.showToast({title:"注销成功"}),n.removeStorageSync("uni_id_token"),n.setStorageSync("uni_id_token_expired",0),n.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"})}))}else n.navigateBack()}})}}};e.default=c}).call(this,t("543d")["default"],t("a9ff")["default"])},e1ee:function(n,e,t){"use strict";var c=t("2456"),a=t.n(c);a.a}},[["acdc","common/runtime","common/vendor"]]]);