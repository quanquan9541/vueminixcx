(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/worklist/listw"],{"3d1b":function(t,n,e){"use strict";var r=e("3e44"),o=e.n(r);o.a},"3e44":function(t,n,e){},4647:function(t,n,e){"use strict";e.r(n);var r=e("5b89"),o=e("7c07");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("3d1b");var i,u=e("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"436b9f6c",null,!1,r["a"],i);n["default"]=c.exports},"5b89":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,"9c54"))}},o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},7065:function(t,n,e){"use strict";(function(t){e("98fd"),e("a9ff");r(e("66fd"));var n=r(e("4647"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"7c07":function(t,n,e){"use strict";e.r(n);var r=e("97e3"),o=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=o.a},"97e3":function(t,n,e){"use strict";(function(t,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t){return s(t)||l(t)||c(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,n){if(t){if("string"===typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,n):void 0}}function l(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return f(t)}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function d(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(l){return void e(l)}u.done?n(c):Promise.resolve(c).then(r,o)}function w(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){d(a,r,o,i,u,"next",t)}function u(t){d(a,r,o,i,u,"throw",t)}i(void 0)}))}}var v={data:function(){return{workdatalist:[]}},onLoad:function(){t.startPullDownRefresh()},onPullDownRefresh:function(){this.workdatalist=[],this.getwork()},onReachBottom:function(){this.getwork()},methods:{gotowork:function(){t.navigateTo({url:"/pages/worklist/work"})},goworklist:function(n){console.log(n),t.navigateTo({url:"/pages/worklist/worklist?id="+n})},getwork:function(){var n=this;return w(o.default.mark((function e(){var a,u;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.workdatalist.length,u=r.database(),e.next=4,u.collection("worklist").skip(a).limit(15).orderBy("workdata desc ,wages desc").get().then((function(e){console.log(e);var r=n.workdatalist,o=[].concat(i(r),i(e.result.data));n.workdatalist=o,t.stopPullDownRefresh()}));case 4:case"end":return e.stop()}}),e)})))()}}};n.default=v}).call(this,e("543d")["default"],e("a9ff")["default"])}},[["7065","common/runtime","common/vendor"]]]);