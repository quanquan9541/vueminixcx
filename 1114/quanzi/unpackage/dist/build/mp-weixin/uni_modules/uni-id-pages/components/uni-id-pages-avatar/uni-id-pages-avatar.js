(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar"],{"93f1":function(n,e,t){"use strict";t.r(e);var u=t("d535"),i=t.n(u);for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);e["default"]=i.a},a72a:function(n,e,t){"use strict";t.r(e);var u=t("e7fc"),i=t("93f1");for(var o in i)"default"!==o&&function(n){t.d(e,n,(function(){return i[n]}))}(o);t("c4fe");var a,r=t("f0c5"),s=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);e["default"]=s.exports},c4fe:function(n,e,t){"use strict";var u=t("dfa0"),i=t.n(u);i.a},d535:function(n,e,t){"use strict";(function(n,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("a34a")),o=t("e040");function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,u,i,o,a){try{var r=n[o](a),s=r.value}catch(c){return void t(c)}r.done?e(s):Promise.resolve(s).then(u,i)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(u,i){var o=n.apply(e,t);function a(n){r(o,u,i,a,s,"next",n)}function s(n){r(o,u,i,a,s,"throw",n)}a(void 0)}))}}var c={data:function(){return{isPC:!1}},props:{width:{type:String,default:function(){return"50px"}},height:{type:String,default:function(){return"50px"}},border:{type:Boolean,default:function(){return!1}}},mounted:function(){return s(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})))()},computed:{hasLogin:function(){return o.store.hasLogin},userInfo:function(){return o.store.userInfo},avatar_file:function(){return o.store.userInfo.avatar_file}},methods:{setAvatarFile:function(n){o.mutations.updateUserInfo({avatar_file:n})},uploadAvatarImg:function(e){var t=this;if(console.log(this.hasLogin),!this.hasLogin)return n.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"});var o={quality:100,width:600,height:600,resize:!0};n.chooseImage({count:1,crop:o,success:function(){var e=s(i.default.mark((function e(a){var r,s,c,f,l,d;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(a),r=a.tempFiles[0],s={extname:r.path.split(".")[r.path.split(".").length-1]},c=a.tempFilePaths[0],t.isPC){e.next=6;break}return e.next=5,new Promise((function(e){n.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage?path="+c+"&options=".concat(JSON.stringify(o)),animationType:"fade-in",events:{success:function(n){e(n)}},complete:function(n){console.log(n)}})}));case 5:c=e.sent;case 6:return console.log(t.userInfo),f=t.userInfo._id+""+Date.now(),s.name=f,n.showLoading({title:"更新中",mask:!0}),e.next=12,u.uploadFile({filePath:c,cloudPath:f,fileType:"image"});case 12:l=e.sent,d=l.fileID,s.url=d,console.log({avatar_file:s}),n.hideLoading(),t.setAvatarFile(s);case 18:case"end":return e.stop()}}),e)})));function a(n){return e.apply(this,arguments)}return a}()})}}};e.default=c}).call(this,t("543d")["default"],t("a9ff")["default"])},dfa0:function(n,e,t){},e7fc:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return u}));var u={cloudImage:function(){return t.e("uni_modules/uni-id-pages/components/cloud-image/cloud-image").then(t.bind(null,"2ea14"))},uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,"11e8"))}},i=function(){var n=this,e=n.$createElement;n._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a72a"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component']]
]);
