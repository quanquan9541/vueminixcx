(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-taiji-taiji"],{"0260":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){var t={111111:"乾为天","011111":"天风姤","001111":"天山遁","000111":"天地否","000011":"风地观","000001":"山地剥","000101":"火地晋",111101:"火天大有","010010":"坎为水",110010:"水泽节",100010:"水雷屯",101010:"水火既济",101110:"泽火革",101100:"雷火丰",101e3:"地火明夷","010000":"地水师","001001":"艮为山",101001:"山火贲",111001:"山天大畜",110001:"山泽损",110101:"火泽睽",110111:"天泽履",110011:"风泽中孚","001011":"风山渐",100100:"震为雷","000100":"雷地豫","010100":"雷水解","011100":"雷风恒","011000":"地风升","011010":"水风井","011110":"泽风大过",100110:"泽雷随","011011":"巽为风",111011:"风天小畜",101011:"风火家人",100011:"风雷益",100111:"天雷无妄",100101:"火雷噬嗑",100001:"山雷颐","011001":"山风蛊",101101:"离为火","001101":"火山旅","011101":"火风鼎","010101":"水火未济","010001":"山水蒙","010011":"风水涣","010111":"天水讼",101111:"天火同人","000000":"坤为地",1e5:"地雷复",11e4:"地泽临",111e3:"地天泰",111100:"雷天大壮",111110:"泽天夬",111010:"水天需","000010":"水地比",110110:"兑为泽","010110":"泽水困","000110":"泽地萃","001110":"泽山咸","001010":"水山蹇","001000":"地山谦","001100":"雷山小过",110100:"雷泽归妹"};return{guaObj:t,guxiang:"",status:!0,status1:!0,animation:"animation-play-state: paused",guaming:""}},onLoad:function(){},methods:{copyText:function(){var n=this.guaming;uni.setClipboardData({data:n,success:function(a){t.log("复制的信息：",n),uni.showToast({title:"复制成功"})}})},fate:function(){var n=this;if(this.status1=!1,1==this.status){this.animation="animation-play-state: running",uni.showLoading({title:"演算中",mask:!0});for(var a=[],i=0;i<6;i++){var e=String(Math.floor(2*Math.random()));a.push(e)}t.log(a);for(var o=[],r=a.length-1;r>=0;r--){var s=a[r];o.push(s)}t.log(o),this.guxiang=o;var c=a.join("");this.guaming=this.guaObj[c],setTimeout((function(){n.status=!n.status,n.animation="animation-play-state: paused",uni.hideLoading()}),9e3)}else this.status=!this.status}}};n.default=a}).call(this,a("5a52")["default"])},5937:function(t,n,a){"use strict";a.r(n);var i=a("0260"),e=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);n["default"]=e.a},"5f3d":function(t,n,a){"use strict";var i;a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return i}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"bigbox"},[a("v-uni-view",{staticClass:"top"},[t.status?a("v-uni-view",{staticClass:"koujue"},[a("v-uni-text",[t._v("乾三连（☰） 坤六断（☷）")]),a("v-uni-text",[t._v("离中虚（☲） 坎中满（☵）")]),a("v-uni-text",[t._v("震仰孟（☳） 艮覆碗（☶）")]),a("v-uni-text",[t._v("兑上缺（☱） 巽下断（☴）")])],1):t._e(),t.status?t._e():a("v-uni-view",{staticClass:"guaxiang"},[t._l(t.guxiang,(function(t,n){return a("v-uni-image",{attrs:{mode:"scaleToFill",src:"../../static/taiji/"+t+".png"}})})),a("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copyText.apply(void 0,arguments)}}},[t._v(t._s(t.guaming))])],2)],1),t.status1?a("v-uni-view",{staticClass:"tishi"},[t.status1?a("v-uni-text",[t._v("点击下方太极图开启算卦")]):t._e()],1):t._e(),a("v-uni-view",{staticClass:"taiji",style:t.animation,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.fate.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"buttom"},[a("v-uni-text",[t._v("如果命运不站在我这边，那么我将站在命运的那一边")])],1)],1)},o=[]},7188:function(t,n,a){"use strict";var i=a("be10"),e=a.n(i);e.a},"787b":function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-5970a9c8]{display:flex;align-items:center;flex-direction:column;padding:%?20?%;height:100%}.content .bigbox[data-v-5970a9c8]{display:flex;padding:%?10?%;height:100%;margin:%?10?%;flex-direction:column;justify-content:space-between;align-items:center;position:relative}.content .bigbox .top[data-v-5970a9c8]{margin:%?20?%;height:%?600?%}.content .bigbox .top .koujue[data-v-5970a9c8]{height:%?600?%;display:flex;flex-direction:column;justify-content:center;align-items:center}.content .bigbox .top .koujue uni-text[data-v-5970a9c8]{padding:%?20?% 0;font-family:华文细黑;font-style:normal;font-weight:900;font-size:25px;color:#f9974c;text-align:center;text-shadow:1px 1px 1px #c4c4c4}.content .bigbox .top .guaxiang[data-v-5970a9c8]{height:%?600?%;display:flex;flex-direction:column;justify-content:space-between;align-items:center}.content .bigbox .top .guaxiang uni-text[data-v-5970a9c8]{padding:%?20?% 0;font-family:华文细黑;font-style:normal;font-weight:900;font-size:25px;color:#55557f;text-align:center;text-shadow:1px 1px 1px #c4c4c4}.content .bigbox .tishi[data-v-5970a9c8]{height:%?100?%}.content .bigbox .tishi uni-text[data-v-5970a9c8]{padding:%?20?% 0;font-family:华文细黑;font-style:normal;font-size:8px;color:#5af;text-align:center;text-shadow:1px 1px 1px #c4c4c4}.content .bigbox .taiji[data-v-5970a9c8]{display:flex;align-items:center;width:%?400?%;height:%?400?%;margin:%?60?% 0;background-image:linear-gradient(#000 50%,#fff 0);border-radius:50%;-webkit-animation:identifier-data-v-5970a9c8 1s linear infinite;animation:identifier-data-v-5970a9c8 1s linear infinite}@-webkit-keyframes identifier-data-v-5970a9c8{0%{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes identifier-data-v-5970a9c8{0%{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.content .bigbox .taiji[data-v-5970a9c8]::before{content:"";width:%?200?%;height:%?200?%;border-radius:50%;background-image:radial-gradient(#000 20%,#fff 0)}.content .bigbox .taiji[data-v-5970a9c8]::after{content:"";width:%?200?%;height:%?200?%;border-radius:50%;background-image:radial-gradient(#fff 20%,#000 0)}.content .buttom uni-text[data-v-5970a9c8]{padding:%?20?% 0;font-family:华文细黑;font-style:normal;font-size:8px;color:#aaaa7f;text-align:center;text-shadow:1px 1px 1px #c4c4c4}',""]),t.exports=n},a1a2:function(t,n,a){"use strict";a.r(n);var i=a("5f3d"),e=a("5937");for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);a("7188");var r,s=a("f0c5"),c=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,"5970a9c8",null,!1,i["a"],r);n["default"]=c.exports},be10:function(t,n,a){var i=a("787b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("da825fb4",i,!0,{sourceMap:!1,shadowMode:!1})}}]);