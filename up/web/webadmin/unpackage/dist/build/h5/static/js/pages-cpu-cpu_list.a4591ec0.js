(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cpu-cpu_list"],{"01ce":function(t,n,e){"use strict";e.r(n);var a=e("964f"),r=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},"07fd":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={list_list:e("5d60").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"box"},[t._l(t.Cpudata,(function(t){return e("v-uni-view",{key:t._id,staticClass:"vlist"},[e("list_list",{staticClass:"list",attrs:{item:t}})],1)})),e("v-uni-view",{staticClass:"button"},[e("uni-fab",{attrs:{pattern:t.pattern,horizontal:t.horizontal,vertical:t.vertical},on:{fabClick:function(n){arguments[0]=n=t.$handleEvent(n),t.goEdit.apply(void 0,arguments)}}})],1)],2)],1)},i=[]},"2ab4":function(t,n,e){"use strict";e.r(n);var a=e("07fd"),r=e("01ce");for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("d7d9");var u=e("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"38d2ce60",null,!1,a["a"],void 0);n["default"]=s.exports},"2f35":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"list_list",props:{item:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{goEdit:function(t){uni.setStorageSync("Cpu_key",this.item),uni.navigateTo({url:"/pages/cpu/cpu_add"})}}};n.default=a},"30b3":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/* uni.scss */\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-38d2ce60]{margin:%?30?% 0}.box .vlist[data-v-38d2ce60]{margin-bottom:%?20?%}.box .vlist .list[data-v-38d2ce60]{margin:0 %?20?%}',""]),t.exports=n},"4aeb":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/* uni.scss */\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.listbox[data-v-6ae63cb2]{height:50px;border:1px solid #adadad;border-radius:15px;box-shadow:0 3px 2px 2px hsla(0,0%,77.6%,.3);display:flex;justify-content:space-around;align-items:center}.listbox .text[data-v-6ae63cb2],\r\n.listbox .value[data-v-6ae63cb2]{height:%?60?%;margin:0 %?10?%;text-align:center;line-height:%?50?%}.listbox .text[data-v-6ae63cb2]{flex:3}.listbox .value[data-v-6ae63cb2]{flex:2}',""]),t.exports=n},"5a22":function(t,n,e){"use strict";e.r(n);var a=e("2f35"),r=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},"5d60":function(t,n,e){"use strict";e.r(n);var a=e("f0eb"),r=e("5a22");for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("969e");var u=e("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"6ae63cb2",null,!1,a["a"],void 0);n["default"]=s.exports},"964f":function(t,n,e){"use strict";(function(t,a){e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t.database(),i={data:function(){return{horizontal:"right",vertical:"bottom",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#ffaaff",buttonColor:"#aaaaff",iconColor:"#fff"},Cpudata:""}},onLoad:function(){this.getCpuData()},methods:{goEdit:function(){uni.navigateTo({url:"/pages/cpu/cpu_add"})},getCpuData:function(){var t=this;r.collection("mini_cpu").where("_id!=null").limit(15).get().then((function(n){t.Cpudata=n.result.data,a("log",t.Cpudata," at pages/cpu/cpu_list.vue:53")})).catch((function(t){a("log","失败",t," at pages/cpu/cpu_list.vue:55")}))}}};n.default=i}).call(this,e("a9ff")["default"],e("0de9")["log"])},"969e":function(t,n,e){"use strict";var a=e("f3d6"),r=e.n(a);r.a},cc3c:function(t,n,e){var a=e("30b3");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("1082f505",a,!0,{sourceMap:!1,shadowMode:!1})},d7d9:function(t,n,e){"use strict";var a=e("cc3c"),r=e.n(a);r.a},f0eb:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"listbox",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goEdit(t.item._id)}}},[e("v-uni-view",{staticClass:"text"},[t._v(t._s(t.item.manufacturer)+" "+t._s(t.item.series)+" "+t._s(t.item.model))]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.item.Cpuvalue))])],1)],1)},r=[]},f3d6:function(t,n,e){var a=e("4aeb");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("aec4ce72",a,!0,{sourceMap:!1,shadowMode:!1})}}]);