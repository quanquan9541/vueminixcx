(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index-index"],{"02be":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},methods:{gotowork:function(){uni.navigateTo({url:"/pages/worklist/listw"})},gototaiji:function(){uni.navigateTo({url:"/pages/taiji/taiji"})}}};e.default=n},1086:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={fade:{enter:{opacity:0},"enter-to":{opacity:1},leave:{opacity:1},"leave-to":{opacity:0}},"fade-up":{enter:{opacity:0,transform:"translateY(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(100%)"}},"fade-down":{enter:{opacity:0,transform:"translateY(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(-100%)"}},"fade-left":{enter:{opacity:0,transform:"translateX(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(-100%)"}},"fade-right":{enter:{opacity:0,transform:"translateX(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(100%)"}},"slide-up":{enter:{transform:"translateY(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(100%)"}},"slide-down":{enter:{transform:"translateY(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(-100%)"}},"slide-left":{enter:{transform:"translateX(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(-100%)"}},"slide-right":{enter:{transform:"translateX(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(100%)"}},zoom:{enter:{transform:"scale(0.95)"},"enter-to":{transform:"scale(1)"},leave:{transform:"scale(1)"},"leave-to":{transform:"scale(0.95)"}},"fade-zoom":{enter:{opacity:0,transform:"scale(0.95)"},"enter-to":{opacity:1,transform:"scale(1)"},leave:{opacity:1,transform:"scale(1)"},"leave-to":{opacity:0,transform:"scale(0.95)"}}};e.default=n},"17f9":function(t,e,a){var n=a("64a7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("648691ee",n,!0,{sourceMap:!1,shadowMode:!1})},2051:function(t,e,a){"use strict";a.r(e);var n=a("02be"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},2889:function(t,e,a){"use strict";a.r(e);var n=a("d8ab"),r=a("2dca");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var o,s=a("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=d.exports},"2dca":function(t,e,a){"use strict";a.r(e);var n=a("f845"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"2e10":function(t,e,a){"use strict";var n=a("c3d3"),r=a.n(n);r.a},3888:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.inited?a("v-uni-view",{ref:"u-transition",staticClass:"u-transition",class:t.classes,style:[t.mergeStyle],on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.noop.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[]},"39d6":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-a75f7a08], uni-scroll-view[data-v-a75f7a08], uni-swiper-item[data-v-a75f7a08]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}\r\n/**\r\n * vue版本动画内置的动画模式有如下：\r\n * fade：淡入\r\n * zoom：缩放\r\n * fade-zoom：缩放淡入\r\n * fade-up：上滑淡入\r\n * fade-down：下滑淡入\r\n * fade-left：左滑淡入\r\n * fade-right：右滑淡入\r\n * slide-up：上滑进入\r\n * slide-down：下滑进入\r\n * slide-left：左滑进入\r\n * slide-right：右滑进入\r\n */.u-fade-enter-active[data-v-a75f7a08],\r\n.u-fade-leave-active[data-v-a75f7a08]{transition-property:opacity}.u-fade-enter[data-v-a75f7a08],\r\n.u-fade-leave-to[data-v-a75f7a08]{opacity:0}.u-fade-zoom-enter[data-v-a75f7a08],\r\n.u-fade-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95);opacity:0}.u-fade-zoom-enter-active[data-v-a75f7a08],\r\n.u-fade-zoom-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.u-fade-down-enter-active[data-v-a75f7a08],\r\n.u-fade-down-leave-active[data-v-a75f7a08],\r\n.u-fade-left-enter-active[data-v-a75f7a08],\r\n.u-fade-left-leave-active[data-v-a75f7a08],\r\n.u-fade-right-enter-active[data-v-a75f7a08],\r\n.u-fade-right-leave-active[data-v-a75f7a08],\r\n.u-fade-up-enter-active[data-v-a75f7a08],\r\n.u-fade-up-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.u-fade-up-enter[data-v-a75f7a08],\r\n.u-fade-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0}.u-fade-down-enter[data-v-a75f7a08],\r\n.u-fade-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:0}.u-fade-left-enter[data-v-a75f7a08],\r\n.u-fade-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}.u-fade-right-enter[data-v-a75f7a08],\r\n.u-fade-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}.u-slide-down-enter-active[data-v-a75f7a08],\r\n.u-slide-down-leave-active[data-v-a75f7a08],\r\n.u-slide-left-enter-active[data-v-a75f7a08],\r\n.u-slide-left-leave-active[data-v-a75f7a08],\r\n.u-slide-right-enter-active[data-v-a75f7a08],\r\n.u-slide-right-leave-active[data-v-a75f7a08],\r\n.u-slide-up-enter-active[data-v-a75f7a08],\r\n.u-slide-up-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-slide-up-enter[data-v-a75f7a08],\r\n.u-slide-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.u-slide-down-enter[data-v-a75f7a08],\r\n.u-slide-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-slide-left-enter[data-v-a75f7a08],\r\n.u-slide-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-slide-right-enter[data-v-a75f7a08],\r\n.u-slide-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-zoom-enter-active[data-v-a75f7a08],\r\n.u-zoom-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-zoom-enter[data-v-a75f7a08],\r\n.u-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95)}',""]),t.exports=e},"3de9":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("87e0")),i={name:"u-image",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{},show:!1}},watch:{src:{immediate:!0,handler:function(t){t?(this.isError=!1,this.loading=!0):this.isError=!0}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"10000px":uni.$u.addUnit(this.radius),t.overflow=this.borderRadius>0?"hidden":"visible",uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},mounted:function(){this.show=!0},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(t){this.loading=!1,this.isError=!1,this.$emit("load",t),this.removeBgColor()},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=i},"469e":function(t,e,a){"use strict";a.r(e);var n=a("e783"),r=a("2051");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("2e10");var o,s=a("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"129e7d78",null,!1,n["a"],o);e["default"]=d.exports},"489f":function(t,e,a){"use strict";a.r(e);var n=a("3de9"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"5c2c":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1")),i=(n(a("1086")),function(t){return{enter:"u-".concat(t,"-enter u-").concat(t,"-enter-active"),"enter-to":"u-".concat(t,"-enter-to u-").concat(t,"-enter-active"),leave:"u-".concat(t,"-leave u-").concat(t,"-leave-active"),"leave-to":"u-".concat(t,"-leave-to u-").concat(t,"-leave-active")}}),o={methods:{clickHandler:function(){this.$emit("click")},vueEnter:function(){var t=this,e=i(this.mode);this.status="enter",this.$emit("beforeEnter"),this.inited=!0,this.display=!0,this.classes=e.enter,this.$nextTick((0,r.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,uni.$u.sleep(20);case 2:t.$emit("enter"),t.transitionEnded=!1,t.$emit("afterEnter"),t.classes=e["enter-to"];case 6:case"end":return a.stop()}}),a)}))))},vueLeave:function(){var t=this;if(this.display){var e=i(this.mode);this.status="leave",this.$emit("beforeLeave"),this.classes=e.leave,this.$nextTick((function(){t.transitionEnded=!1,t.$emit("leave"),setTimeout(t.onTransitionEnd,t.duration),t.classes=e["leave-to"]}))}},onTransitionEnd:function(){this.transitionEnded||(this.transitionEnded=!0,this.$emit("leave"===this.status?"afterLeave":"afterEnter"),!this.show&&this.display&&(this.display=!1,this.inited=!1))}}};e.default=o},"63e2":function(t,e,a){"use strict";a.r(e);var n=a("3888"),r=a("7766");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("7473");var o,s=a("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"a75f7a08",null,!1,n["a"],o);e["default"]=d.exports},"64a7":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-1428a719], uni-scroll-view[data-v-1428a719], uni-swiper-item[data-v-1428a719]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-image[data-v-1428a719]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-1428a719]{width:100%;height:100%}.u-image__loading[data-v-1428a719], .u-image__error[data-v-1428a719]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909193;font-size:%?46?%}',""]),t.exports=e},"6dc0":function(t,e,a){"use strict";var n=a("17f9"),r=a.n(n);r.a},7139:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{show:{type:Boolean,default:uni.$u.props.transition.show},mode:{type:String,default:uni.$u.props.transition.mode},duration:{type:[String,Number],default:uni.$u.props.transition.duration},timingFunction:{type:String,default:uni.$u.props.transition.timingFunction}}};e.default=n},7473:function(t,e,a){"use strict";var n=a("9fab"),r=a.n(n);r.a},7766:function(t,e,a){"use strict";a.r(e);var n=a("c24e"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"87e0":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{src:{type:String,default:uni.$u.props.image.src},mode:{type:String,default:uni.$u.props.image.mode},width:{type:[String,Number],default:uni.$u.props.image.width},height:{type:[String,Number],default:uni.$u.props.image.height},shape:{type:String,default:uni.$u.props.image.shape},radius:{type:[String,Number],default:uni.$u.props.image.radius},lazyLoad:{type:Boolean,default:uni.$u.props.image.lazyLoad},showMenuByLongpress:{type:Boolean,default:uni.$u.props.image.showMenuByLongpress},loadingIcon:{type:String,default:uni.$u.props.image.loadingIcon},errorIcon:{type:String,default:uni.$u.props.image.errorIcon},showLoading:{type:Boolean,default:uni.$u.props.image.showLoading},showError:{type:Boolean,default:uni.$u.props.image.showError},fade:{type:Boolean,default:uni.$u.props.image.fade},webp:{type:Boolean,default:uni.$u.props.image.webp},duration:{type:[String,Number],default:uni.$u.props.image.duration},bgColor:{type:String,default:uni.$u.props.image.bgColor}}};e.default=n},"9fab":function(t,e,a){var n=a("39d6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("043d1cfe",n,!0,{sourceMap:!1,shadowMode:!1})},c24e:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("5530")),i=n(a("7139")),o=n(a("5c2c")),s={name:"u-transition",data:function(){return{inited:!1,viewStyle:{},status:"",transitionEnded:!1,display:!1,classes:""}},computed:{mergeStyle:function(){var t=this.viewStyle,e=this.customStyle;return(0,r.default)((0,r.default)({transitionDuration:"".concat(this.duration,"ms"),transitionTimingFunction:this.timingFunction},uni.$u.addStyle(e)),t)}},mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default,i.default],watch:{show:{handler:function(t){t?this.vueEnter():this.vueLeave()},immediate:!0}}};e.default=s},c3d3:function(t,e,a){var n=a("d2bd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("d8b42bf8",n,!0,{sourceMap:!1,shadowMode:!1})},d2bd:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home[data-v-129e7d78]{padding:%?30?%;display:flex;flex-direction:column;justify-content:space-between}.home .logo[data-v-129e7d78]{padding:%?30?%;display:flex;justify-content:center}.home .top[data-v-129e7d78]{padding:%?20?%;margin-bottom:%?20?%;flex:1;display:flex;flex-direction:column;align-items:center;border-radius:14px;border:%?1?% solid #aaf}.home .top uni-text[data-v-129e7d78]{font-family:微软雅黑;font-style:normal;font-weight:400;-webkit-text-decoration:none solid;text-decoration:none solid;white-space:normal;text-overflow:clip;word-wrap:normal;text-shadow:0 2px 7px #bcbcbc}.home .bottom[data-v-129e7d78]{flex:1;padding:%?20?%;display:flex;flex-direction:column;justify-content:space-between;border-radius:14px;border:%?1?% solid #aaf}.home .bottom .button[data-v-129e7d78]{margin:%?20?% 0}',""]),t.exports=e},d798:function(t,e,a){"use strict";a.r(e);var n=a("d7a3"),r=a("489f");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("6dc0");var o,s=a("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"1428a719",null,!1,n["a"],o);e["default"]=d.exports},d7a3:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uTransition:a("63e2").default,uIcon:a("f367").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-transition",{attrs:{mode:"fade",show:t.show,duration:t.fade?1e3:0}},[a("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():a("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"10000px":t.$u.addUnit(t.radius),width:t.$u.addUnit(t.width),height:t.$u.addUnit(t.height)},attrs:{src:t.src,mode:t.mode,"show-menu-by-longpress":t.showMenuByLongpress,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?a("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.radius),backgroundColor:this.bgColor,width:t.$u.addUnit(t.width),height:t.$u.addUnit(t.height)}},[t._t("loading",[a("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})])],2):t._e(),t.showError&&t.isError&&!t.loading?a("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.radius),width:t.$u.addUnit(t.width),height:t.$u.addUnit(t.height)}},[t._t("error",[a("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})])],2):t._e()],1)],1)},i=[]},d8ab:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("uvImage",{attrs:{src:t.src,mode:t.mode,width:t.width,height:t.height,shape:t.shape,radius:t.radius,lazyLoad:t.lazyLoad,showMenuByLongpress:t.showMenuByLongpress,loadingIcon:t.loadingIcon,errorIcon:t.errorIcon,showLoading:t.showLoading,showError:t.showError,fade:t.fade,webp:t.webp,duration:t.duration,bgColor:t.bgColor,customStyle:t.customStyle},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("click")},error:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("error")},load:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("load")}},scopedSlots:t._u([{key:"loading",fn:function(){return[t._t("loading")]},proxy:!0},{key:"error",fn:function(){return[t._t("error")]},proxy:!0}],null,!0)})},i=[]},e783:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={"u-Image":a("2889").default,uButton:a("bcaf").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"home"},[a("v-uni-view",{staticClass:"logo"},[a("u--image",{attrs:{src:"/static/logo.png",width:"100rpx",height:"100rpx",shape:"circle",mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"top"},[a("v-uni-text",[t._v("哈喽大家好")]),a("v-uni-text",[t._v("这里略懂少年的工具小程序")])],1),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"button"},[a("u-button",{attrs:{type:"primary",plain:!0,color:"#aaaaff",hairline:!0,shape:"circle",text:"工作计算器"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotowork.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"button"},[a("u-button",{attrs:{type:"primary",plain:!0,color:"#aaaaff",hairline:!0,shape:"circle",text:"太极八卦图"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gototaiji.apply(void 0,arguments)}}})],1)],1)],1)},i=[]},f845:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("d798")),i=n(a("87e0")),o={name:"u--image",mixins:[uni.$u.mpMixin,i.default,uni.$u.mixin],components:{uvImage:r.default}};e.default=o}}]);