(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/taiji/taiji"],{"0989":function(t,a,n){"use strict";n.r(a);var e=n("a517"),i=n("596b");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("cd72");var s=n("f0c5"),r=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"141e88bd",null,!1,e["a"],void 0);a["default"]=r.exports},"596b":function(t,a,n){"use strict";n.r(a);var e=n("81ba"),i=n.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a},"81ba":function(t,a,n){"use strict";(function(t){var e=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("9523"));function o(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}var s={data:function(){return{zipdata:[],zip:{guaming:"",yymmdd:"",ymd:""},guaObj:{111111:"乾为天","011111":"天风姤","001111":"天山遁","000111":"天地否","000011":"风地观","000001":"山地剥","000101":"火地晋",111101:"火天大有","010010":"坎为水",110010:"水泽节",100010:"水雷屯",101010:"水火既济",101110:"泽火革",101100:"雷火丰",101e3:"地火明夷","010000":"地水师","001001":"艮为山",101001:"山火贲",111001:"山天大畜",110001:"山泽损",110101:"火泽睽",110111:"天泽履",110011:"风泽中孚","001011":"风山渐",100100:"震为雷","000100":"雷地豫","010100":"雷水解","011100":"雷风恒","011000":"地风升","011010":"水风井","011110":"泽风大过",100110:"泽雷随","011011":"巽为风",111011:"风天小畜",101011:"风火家人",100011:"风雷益",100111:"天雷无妄",100101:"火雷噬嗑",100001:"山雷颐","011001":"山风蛊",101101:"离为火","001101":"火山旅","011101":"火风鼎","010101":"水火未济","010001":"山水蒙","010011":"风水涣","010111":"天水讼",101111:"天火同人","000000":"坤为地",1e5:"地雷复",11e4:"地泽临",111e3:"地天泰",111100:"雷天大壮",111110:"泽天夬",111010:"水天需","000010":"水地比",110110:"兑为泽","010110":"泽水困","000110":"泽地萃","001110":"泽山咸","001010":"水山蹇","001000":"地山谦","001100":"雷山小过",110100:"雷泽归妹"},guxiang:"",status:!0,status1:!0,animation:"animation-play-state: paused"}},onLoad:function(){},onShow:function(){var a=t.getStorageSync("taijibagua");this.zipdata=a||[]},methods:{setdata:function(){var a=this.zipdata.unshift(function(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){(0,i.default)(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}({},this.zip));t.setStorageSync("taijibagua",this.zipdata),console.log("数据包",a)},ymdget:function(){var t=new Date,a=t.getDate();a=a<10?"0"+a:a;var n=t.getMonth()+1;n=n>9?n:"0"+n;var e=t.getFullYear();this.zip.yymmdd=e+"-"+n+"-"+a,this.zip.ymd=e+n+a},copytext:function(t){var a=t.guaming;this.Copy(a)},copyText:function(){var t=this.zip.guaming;this.Copy(t)},Copy:function(a){t.setClipboardData({data:a,success:function(n){console.log("复制的信息：",a),t.showToast({title:"复制成功"})}})},fate:function(){if(this.ymdget(),this.zipdata.length){if(console.log("有值",this.zipdata),this.zip.ymd-this.zipdata[0].ymd<1)return console.log("一天一次"),void t.showToast({title:"一天只能测算一次哦!~",icon:"none",duration:2e3});this.suanfa()}else console.log("没有值",this.zipdata),this.suanfa()},suanfa:function(){var a=this;if(this.status1=!1,1==this.status){this.animation="animation-play-state: running",t.showLoading({title:"演算中",mask:!0});for(var n=[],e=0;e<6;e++){var i=String(Math.floor(2*Math.random()));n.push(i)}console.log(n);for(var o=[],s=n.length-1;s>=0;s--){var r=n[s];o.push(r)}console.log(o),this.guxiang=o;var u=n.join("");this.zip.guaming=this.guaObj[u],setTimeout((function(){a.status=!a.status,a.animation="animation-play-state: paused",a.setdata(),t.hideLoading()}),9e3)}else this.status=!this.status}}};a.default=s}).call(this,n("543d")["default"])},"919b":function(t,a,n){"use strict";(function(t,a){var e=n("4ea4");n("8b4a"),n("a9ff");e(n("66fd"));var i=e(n("0989"));t.__webpack_require_UNI_MP_PLUGIN__=n,a(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},a517:function(t,a,n){"use strict";n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},i=[]},cd72:function(t,a,n){"use strict";var e=n("df76"),i=n.n(e);i.a},df76:function(t,a,n){}},[["919b","common/runtime","common/vendor"]]]);