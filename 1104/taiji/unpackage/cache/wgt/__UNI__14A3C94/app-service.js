(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"===typeof __channelId__&&__channelId__}function i(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}function o(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function s(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.shift();if(a())return e.push(e.pop().replace("at ","uni-app:///")),console[o].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(a){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(s.length>1){var c=s.pop();u=s.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=s[0];console[o](u)}n.r(e),n.d(e,"log",(function(){return o})),n.d(e,"default",(function(){return s}))},"197c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},"317a":function(t,e,n){"use strict";n.r(e);var r=n("6757"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},4012:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","bigbox"),attrs:{_i:1}},[n("view",{staticClass:t._$s(2,"sc","top"),attrs:{_i:2}},[n("view",{directives:[{name:"show",rawName:"v-show",value:t._$s(3,"v-show",t.status),expression:"_$s(3,'v-show',status)"}],staticClass:t._$s(3,"sc","koujue"),attrs:{_i:3}},[n("text"),n("text"),n("text"),n("text")]),n("view",{directives:[{name:"show",rawName:"v-show",value:t._$s(8,"v-show",!t.status),expression:"_$s(8,'v-show',!status)"}],staticClass:t._$s(8,"sc","guaxiang"),attrs:{_i:8}},t._l(t._$s(9,"f",{forItems:t.guxiang}),(function(e,r,a,i){return n("image",{key:t._$s(9,"f",{forIndex:a,key:"9-"+i}),attrs:{src:t._$s("9-"+i,"a-src","../../static/"+e+".png"),_i:"9-"+i}})})),0)]),n("view",{directives:[{name:"show",rawName:"v-show",value:t._$s(10,"v-show",t.status1),expression:"_$s(10,'v-show',status1)"}],staticClass:t._$s(10,"sc","tishi"),attrs:{_i:10}},[n("text")]),n("view",{staticClass:t._$s(12,"sc","taiji"),style:t._$s(12,"s",t.animation),attrs:{_i:12},on:{click:t.fate}}),n("view",{staticClass:t._$s(13,"sc","buttom"),attrs:{_i:13}},[n("text")])])])},i=[]},6607:function(t,e,n){"use strict";n("b245");var r=i(n("faa8")),a=i(n("8bbf"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}a.default.config.productionTip=!1,r.default.mpType="app";var c=new a.default(s({},r.default));c.$mount()},6757:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{guxiang:"",status:!0,status1:!0,animation:"animation-play-state: paused"}},onLoad:function(){},methods:{fate:function(){var t=this;if(this.status1=!1,1==this.status){this.animation="animation-play-state: running";for(var e=[],n=0;n<6;n++){var r=String(Math.floor(2*Math.random()));e.push(r)}this.guxiang=e,uni.showLoading({title:"\u6f14\u7b97\u4e2d"}),setTimeout((function(){t.status=!1,t.animation="animation-play-state: paused",uni.hideLoading()}),6400)}else this.status=!0}}};e.default=r},7153:function(t,e,n){"use strict";n.r(e);var r=n("4012"),a=n("317a");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o,s=n("f0c5"),u=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"20886384",null,!1,r["a"],o);e["default"]=u.exports},"8bbf":function(t,e){t.exports=Vue},b245:function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("7153").default)}))},d443:function(t,e,n){"use strict";n.r(e);var r=n("197c"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,a,i,o,s,u,c){var f,l="function"===typeof t?t.options:t;if(u){l.components||(l.components={});var p=Object.prototype.hasOwnProperty;for(var d in u)p.call(u,d)&&!p.call(l.components,d)&&(l.components[d]=u[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),o?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=f):a&&(f=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),f)if(l.functional){l._injectStyles=f;var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},faa8:function(t,e,n){"use strict";n.r(e);var r=n("d443");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var i,o,s,u,c=n("f0c5"),f=Object(c["a"])(r["default"],i,o,!1,null,null,null,!1,s,u);e["default"]=f.exports}},[["6607","app-config"]]]);