(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-loadmore/u-loadmore"],{"092b":function(t,n,e){},8170:function(t,n,e){"use strict";e.r(n);var o=e("ae05"),i=e("8286");for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("e217");var a=e("f0c5"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"0f91d4e1",null,!1,o["a"],void 0);n["default"]=r.exports},8286:function(t,n,e){"use strict";e.r(n);var o=e("89e9"),i=e.n(o);for(var u in o)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=i.a},"89e9":function(t,n,e){"use strict";(function(t){var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("444d")),u={name:"u-loadmore",mixins:[t.$u.mpMixin,t.$u.mixin,i.default],data:function(){return{dotText:"●"}},computed:{loadTextStyle:function(){return{color:this.color,fontSize:t.$u.addUnit(this.fontSize),lineHeight:t.$u.addUnit(this.fontSize),backgroundColor:this.bgColor}},showText:function(){var t="";return t="loadmore"==this.status?this.loadmoreText:"loading"==this.status?this.loadingText:"nomore"==this.status&&this.isDot?this.dotText:this.nomoreText,t}},methods:{loadMore:function(){"loadmore"==this.status&&this.$emit("loadmore")}}};n.default=u}).call(this,e("543d")["default"])},ae05:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var o={uLine:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-line/u-line")]).then(e.bind(null,"ec0b"))},uLoadingIcon:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(e.bind(null,"234d"))}},i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__get_style([t.$u.addStyle(t.customStyle),{backgroundColor:t.bgColor,marginBottom:t.$u.addUnit(t.marginBottom),marginTop:t.$u.addUnit(t.marginTop),height:t.$u.addUnit(t.height)}])),o=t.__get_style([t.loadTextStyle]);t.$mp.data=Object.assign({},{$root:{s0:e,s1:o}})},u=[]},e217:function(t,n,e){"use strict";var o=e("092b"),i=e.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-loadmore/u-loadmore-create-component',
    {
        'uni_modules/uview-ui/components/u-loadmore/u-loadmore-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8170"))
        })
    },
    [['uni_modules/uview-ui/components/u-loadmore/u-loadmore-create-component']]
]);