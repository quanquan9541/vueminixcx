(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/taiji/taiji"],{"0989":function(t,a,n){"use strict";n.r(a);var i=n("c09a"),e=n("596b");for(var u in e)["default"].indexOf(u)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(u);n("c2b7");var o=n("f0c5"),r=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"e0b1d656",null,!1,i["a"],void 0);a["default"]=r.exports},"596b":function(t,a,n){"use strict";n.r(a);var i=n("81ba"),e=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(u);a["default"]=e.a},"81ba":function(t,a,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n("3f70"),u=(i(n("464f")),n("4c10"),n("95e4")),o={data:function(){return{dadad:u,zipdata:{},bools:!0,zip:{guaming:{},ymd:""},guaObj:u,guxiang:"",status:!0,animation:"animation-play-state: paused",arr:[]}},onLoad:function(){console.log("启动");var a=t.getStorageSync("taijibaguatu");a&&(this.bools=!1,this.zip=a)},methods:{setdata:function(){t.setStorageSync("taijibaguatu",this.zip)},ymdget:function(){this.zip.ymd=(0,e.dateFormat)(new Date,"yyyyMMdd")},copyText:function(){var t=this.zip.guaming.name;this.Copy(t)},Copy:function(a){t.setClipboardData({data:a,success:function(n){console.log("复制的信息：",a),t.showToast({title:"复制成功"})}})},fate:function(){if(this.bools=!1,this.zip.guaming){if((0,e.dateFormat)(new Date,"yyyyMMdd")-this.zip.ymd<1)return void t.showToast({title:"一天只能测算一次哦!~",icon:"none",duration:2e3});this.fangdou()}else this.fangdou()},circulate:function(){for(var t=[],a=0;a<6;a++){var n=String(Math.floor(2*Math.random()));t.push(n)}return t},timers:function(){var t=this,a=0,n=setInterval((function(){a++,a>=49&&(clearInterval(n),t.circulate()),t.arr=t.circulate()}),64)},arrayguaxiang:function(){var t=this;this.timers(),setTimeout((function(){for(var a=[],n=t.arr.length-1;n>=0;n--){var i=t.arr[n];a.push(i)}t.guxiang=a;var e=t.arr.join("");t.zip.guaming=t.guaObj[e]}),6e3)},fangdou:(0,e.debounce)((function(){this.suanfa()})),suanfa:function(){var a=this;1==this.status?(this.animation="animation-play-state: running",t.removeStorageSync("taijibaguatu"),this.ymdget(),this.arrayguaxiang(),setTimeout((function(){a.status=!1,a.animation="animation-play-state: paused",a.setdata()}),9e3)):this.status=!this.status}}};a.default=o}).call(this,n("543d")["default"])},"919b":function(t,a,n){"use strict";(function(t,a){var i=n("4ea4");n("8b4a"),n("a9ff");i(n("66fd"));var e=i(n("0989"));t.__webpack_require_UNI_MP_PLUGIN__=n,a(e.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"99eb":function(t,a,n){},c09a:function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},e=[]},c2b7:function(t,a,n){"use strict";var i=n("99eb"),e=n.n(i);e.a}},[["919b","common/runtime","common/vendor"]]]);