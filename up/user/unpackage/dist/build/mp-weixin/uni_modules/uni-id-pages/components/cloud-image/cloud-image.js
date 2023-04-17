(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/cloud-image/cloud-image"],{acc4:function(t,n,e){"use strict";e.r(n);var i=e("c684"),c=e("e0f8");for(var u in c)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return c[t]}))}(u);var r=e("f0c5"),a=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=a.exports},c19a:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"cloud-image",emits:["click"],props:{mode:{type:String,default:function(){return"widthFix"}},src:{default:function(){return""}},width:{type:String,default:function(){return"100rpx"}},height:{type:String,default:function(){return"100rpx"}}},watch:{src:{handler:function(n){var e=this;n&&"cloud://"==n.substring(0,8)?t.getTempFileURL({fileList:[n]}).then((function(t){e.cSrc=t.fileList[0].tempFileURL})):this.cSrc=n},immediate:!0}},methods:{onClick:function(){this.$emit("click")}},data:function(){return{cSrc:!1}}};n.default=e}).call(this,e("a9ff")["default"])},c684:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},c=[]},e0f8:function(t,n,e){"use strict";e.r(n);var i=e("c19a"),c=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component',
    {
        'uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("acc4"))
        })
    },
    [['uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component']]
]);
