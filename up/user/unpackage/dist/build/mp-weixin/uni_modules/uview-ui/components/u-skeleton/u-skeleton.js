(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-skeleton/u-skeleton"],{"0983":function(t,n,i){"use strict";i.r(n);var e=i("f372"),u=i("50b2");for(var a in u)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return u[t]}))}(a);i("24a0");var r=i("f0c5"),o=Object(r["a"])(u["default"],e["b"],e["c"],!1,null,"161f9e59",null,!1,e["a"],void 0);n["default"]=o.exports},"24a0":function(t,n,i){"use strict";var e=i("3fcb"),u=i.n(e);u.a},"3fcb":function(t,n,i){},"50b2":function(t,n,i){"use strict";i.r(n);var e=i("f683"),u=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=u.a},f372:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,i=(t._self._c,t.loading&&t.avatar?t.$u.addUnit(t.avatarSize):null),e=t.loading&&t.avatar?t.$u.addUnit(t.avatarSize):null,u=t.loading&&t.title?t.$u.addUnit(t.titleHeight):null;t.$mp.data=Object.assign({},{$root:{g0:i,g1:e,g2:u}})},u=[]},f683:function(t,n,i){"use strict";(function(t){var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e(i("2eee")),a=e(i("c973")),r=e(i("3485")),o={name:"u-skeleton",mixins:[t.$u.mpMixin,t.$u.mixin,r.default],data:function(){return{width:0}},watch:{loading:function(){this.getComponentWidth()}},computed:{rowsArray:function(){/%$/.test(this.rowsHeight)&&t.$u.error("rowsHeight参数不支持百分比单位");for(var n=[],i=0;i<this.rows;i++){var e={},u=t.$u.test.array(this.rowsWidth)?this.rowsWidth[i]||(i===this.row-1?"70%":"100%"):i===this.rows-1?"70%":this.rowsWidth,a=t.$u.test.array(this.rowsHeight)?this.rowsHeight[i]||"18px":this.rowsHeight;e.marginTop=this.title||0!==i?this.title&&0===i?"20px":"12px":0,/%$/.test(u)?e.width=t.$u.addUnit(this.width*parseInt(u)/100):e.width=t.$u.addUnit(u),e.height=t.$u.addUnit(a),n.push(e)}return n},uTitleWidth:function(){var n=0;return n=/%$/.test(this.titleWidth)?t.$u.addUnit(this.width*parseInt(this.titleWidth)/100):t.$u.addUnit(this.titleWidth),t.$u.addUnit(n)}},mounted:function(){this.init()},methods:{init:function(){this.getComponentWidth()},setNvueAnimation:function(){return(0,a.default)(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},getComponentWidth:function(){var n=this;return(0,a.default)(u.default.mark((function i(){return u.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$u.sleep(20);case 2:n.$uGetRect(".u-skeleton__wrapper__content").then((function(t){n.width=t.width}));case 3:case"end":return i.stop()}}),i)})))()}}};n.default=o}).call(this,i("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-skeleton/u-skeleton-create-component',
    {
        'uni_modules/uview-ui/components/u-skeleton/u-skeleton-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0983"))
        })
    },
    [['uni_modules/uview-ui/components/u-skeleton/u-skeleton-create-component']]
]);
