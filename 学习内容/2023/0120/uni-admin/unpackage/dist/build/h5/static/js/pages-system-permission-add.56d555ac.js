(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-permission-add"],{"0d34":function(t,e,i){"use strict";var r=i("daef"),n=i.n(r);n.a},"18a7":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,"[data-v-e8de5626] .uni-forms-item__label{width:90px!important}",""]),t.exports=e},4194:function(t,e,i){"use strict";i.r(e);var r=i("d9c6"),n=i("ad3d");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("641b");var o=i("f0c5"),s=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"7b4c51d5",null,!1,r["a"],void 0);e["default"]=s.exports},"641b":function(t,e,i){"use strict";var r=i("93e4"),n=i.n(r);n.a},"825e":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={uniForms:i("2b75").default,uniFormsItem:i("4194").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-container"},[i("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[i("uni-forms-item",{attrs:{name:"permission_id",label:"权限ID",required:!0}},[i("v-uni-input",{staticClass:"uni-input-border",attrs:{placeholder:"权限唯一标识，不可修改，不允许重复",trim:"both"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("permission_id",e.detail.value)}},model:{value:t.formData.permission_id,callback:function(e){t.$set(t.formData,"permission_id",e)},expression:"formData.permission_id"}})],1),i("uni-forms-item",{attrs:{name:"permission_name",label:"权限名称",required:!0}},[i("v-uni-input",{staticClass:"uni-input-border",attrs:{placeholder:"权限名称",trim:"both"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("permission_name",e.detail.value)}},model:{value:t.formData.permission_name,callback:function(e){t.$set(t.formData,"permission_name",e)},expression:"formData.permission_name"}})],1),i("uni-forms-item",{attrs:{name:"comment",label:"备注"}},[i("v-uni-textarea",{staticClass:"uni-textarea-border",attrs:{placeholder:"备注",trim:"both"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("comment",e.detail.value)}},model:{value:t.formData.comment,callback:function(e){t.$set(t.formData,"comment",e)},expression:"formData.comment"}})],1),i("v-uni-view",{staticClass:"uni-button-group"},[i("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.submit")))]),i("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[i("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v(t._s(t.$t("common.button.back")))])],1)],1)],1)],1)},a=[]},"93e4":function(t,e,i){var r=i("d5a7");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("4428b293",r,!0,{sourceMap:!1,shadowMode:!1})},ad3d:function(t,e,i){"use strict";i.r(e);var r=i("cd75"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},cd75:function(t,e,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("53ca")),a=r(i("c7eb")),o=r(i("ade3")),s=r(i("1da1"));i("a9e3"),i("14d9"),i("d3b7"),i("159b"),i("a434");var l={name:"uniFormsItem",options:{virtualHost:!0},provide:function(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:function(){return null}},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:function(){return{errMsg:"",userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg}},watch:{"form.formRules":function(t){this.init()},"form.labelWidth":function(t){this.localLabelWidth=this._labelWidthUnit(t)},"form.labelPosition":function(t){this.localLabelPos=this._labelPosition()},"form.labelAlign":function(t){}},created:function(){var t=this;this.init(!0),this.name&&this.form&&this.$watch((function(){var e=t.form._getDataValue(t.name,t.form.localData);return e}),(function(e,i){var r=t.form._isEqual(e,i);if(!r){var n=t.itemSetValue(e);t.onFieldChange(n,!1)}}),{immediate:!1})},destroyed:function(){this.__isUnmounted||this.unInit()},methods:{setRules:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.userRules=t,this.init(!1)},setValue:function(){},onFieldChange:function(t){var e=arguments,i=this;return(0,s.default)((0,a.default)().mark((function r(){var n,s,l,u,d,f,c,m,b,h,v,p;return(0,a.default)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=!(e.length>1&&void 0!==e[1])||e[1],s=i.form,l=s.formData,s.localData,u=s.errShowType,d=s.validateCheck,f=s.validateTrigger,c=s._isRequiredField,m=s._realName,b=m(i.name),t||(t=i.form.formData[b]),h=i.itemRules.rules&&i.itemRules.rules.length,i.validator&&h&&0!==h){r.next=7;break}return r.abrupt("return");case 7:if(v=c(i.itemRules.rules||[]),p=null,"bind"!==f&&!n){r.next=18;break}return r.next=12,i.validator.validateUpdate((0,o.default)({},b,t),l);case 12:p=r.sent,v||void 0!==t&&""!==t||(p=null),p&&p.errorMessage?("undertext"===u&&(i.errMsg=p?p.errorMessage:""),"toast"===u&&uni.showToast({title:p.errorMessage||"校验错误",icon:"none"}),"modal"===u&&uni.showModal({title:"提示",content:p.errorMessage||"校验错误"})):i.errMsg="",d(p||null),r.next=19;break;case 18:i.errMsg="";case 19:return r.abrupt("return",p||null);case 20:case"end":return r.stop()}}),r)})))()},init:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.form||{},i=e.validator,r=e.formRules,a=e.childrens,o=(e.formData,e.localData),s=e._realName,l=e.labelWidth,u=e._getDataValue;e._setDataValue;if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(l),this.localLabelPos=this._labelPosition(),this.form&&t&&a.push(this),i&&r){this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;var d=s(this.name),f=this.userRules||this.rules;"object"===(0,n.default)(r)&&f&&(r[d]={rules:f},i.updateSchema(r));var c=r[d]||{};this.itemRules=c,this.validator=i,this.itemSetValue(u(this.name,o))}},unInit:function(){var t=this;if(this.form){var e=this.form,i=e.childrens,r=e.formData,n=e._realName;i.forEach((function(e,i){e===t&&(t.form.childrens.splice(i,1),delete r[n(e.name)])}))}},itemSetValue:function(t){var e=this.form._realName(this.name),i=this.itemRules.rules||[],r=this.form._getValue(e,t,i);return this.form._setDataValue(e,this.form.formData,r),r},clearValidate:function(){this.errMsg=""},_isRequired:function(){return this.required},_justifyContent:function(){if(this.form){var t=this.form.labelAlign,e=this.labelAlign?this.labelAlign:t;if("left"===e)return"flex-start";if("center"===e)return"center";if("right"===e)return"flex-end"}return"flex-start"},_labelWidthUnit:function(t){return this.num2px(this.labelWidth?this.labelWidth:t||(this.label?65:"auto"))},_labelPosition:function(){return this.form&&this.form.labelPosition||"left"},isTrigger:function(t,e,i){return"submit"!==t&&t?"bind":void 0===t?"bind"!==e?e?"submit":""===i?"bind":"submit":"bind":"submit"},num2px:function(t){return"number"===typeof t?"".concat(t,"px"):t}}};e.default=l},d093:function(t,e,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.enumConverter=void 0,e.filterToWhere=function(t,e){var i={};for(var r in t){var o=t[r],s=o.type,l=o.value;switch(s){case"search":"string"===typeof l&&l.length&&(i[r]=new RegExp(l));break;case"select":if(l.length){var u,d=[],f=(0,a.default)(l);try{for(f.s();!(u=f.n()).done;){var c=u.value;d.push(e.eq(c))}}catch(D){f.e(D)}finally{f.f()}i[r]=e.or(d)}break;case"range":if(l.length){var m=l[0],b=l[1];i[r]=e.and([e.gte(m),e.lte(b)])}break;case"date":if(l.length){var h=(0,n.default)(l,2),v=h[0],p=h[1],g=new Date(v),_=new Date(p);i[r]=e.and([e.gte(g),e.lte(_)])}break;case"timestamp":if(l.length){var x=(0,n.default)(l,2),y=x[0],w=x[1];i[r]=e.and([e.gte(y),e.lte(w)])}break}}return i},e.validator=void 0;var n=r(i("3835")),a=r(i("b85c"));i("4d63"),i("c607"),i("ac1f"),i("2c3e"),i("25f0"),i("14d9");e.validator={permission_id:{rules:[{required:!0},{format:"string"}],label:"权限标识"},permission_name:{rules:[{required:!0},{format:"string"}],label:"权限名称"},comment:{rules:[{format:"string"}],label:"备注"}};e.enumConverter={}},d4f5:function(t,e,i){"use strict";(function(t){i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("5530"));i("caad"),i("2532"),i("b64b"),i("d3b7");var a=i("d093"),o=t.database();o.command;function s(t){var e={};for(var i in a.validator)t.includes(i)&&(e[i]=a.validator[i]);return e}var l={data:function(){var t={permission_id:"",permission_name:"",comment:""};return{formData:t,formOptions:{},rules:(0,n.default)({},s(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){t.submitForm(e)})).catch((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;o.collection("uni-id-permissions").add(t).then((function(t){uni.showToast({title:"新增成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=l}).call(this,i("a9ff")["default"])},d5a7:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-forms-item[data-v-7b4c51d5]{position:relative;display:flex;margin-bottom:22px;flex-direction:row}.uni-forms-item__label[data-v-7b4c51d5]{display:flex;flex-direction:row;align-items:center;text-align:left;font-size:14px;color:#606266;height:36px;padding:0 12px 0 0;vertical-align:middle;flex-shrink:0;box-sizing:border-box}.uni-forms-item__label.no-label[data-v-7b4c51d5]{padding:0}.uni-forms-item__content[data-v-7b4c51d5]{position:relative;font-size:14px;flex:1;box-sizing:border-box;flex-direction:row}.uni-forms-item .uni-forms-item__nuve-content[data-v-7b4c51d5]{display:flex;flex-direction:column;flex:1}.uni-forms-item__error[data-v-7b4c51d5]{color:#f56c6c;font-size:12px;line-height:1;padding-top:4px;position:absolute;top:100%;left:0;transition:transform .3s;transform:translateY(-100%);opacity:0}.uni-forms-item__error .error-text[data-v-7b4c51d5]{color:#f56c6c;font-size:12px}.uni-forms-item__error.msg--active[data-v-7b4c51d5]{opacity:1;transform:translateY(0)}.uni-forms-item.is-direction-left[data-v-7b4c51d5]{flex-direction:row}.uni-forms-item.is-direction-top[data-v-7b4c51d5]{flex-direction:column}.uni-forms-item.is-direction-top .uni-forms-item__label[data-v-7b4c51d5]{padding:0 0 8px;line-height:1.5715;text-align:left;white-space:normal}.uni-forms-item .is-required[data-v-7b4c51d5]{color:#dd524d;font-weight:700}.uni-forms-item--border[data-v-7b4c51d5]{margin-bottom:0;padding:10px 0;border-top:1px #eee solid}.uni-forms-item--border .uni-forms-item__content[data-v-7b4c51d5]{flex-direction:column;justify-content:flex-start;align-items:flex-start}.uni-forms-item--border .uni-forms-item__content .uni-forms-item__error[data-v-7b4c51d5]{position:relative;top:5px;left:0;padding-top:0}.is-first-border[data-v-7b4c51d5]{border:none}',""]),t.exports=e},d9c6:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-forms-item",class:["is-direction-"+t.localLabelPos,t.border?"uni-forms-item--border":"",t.border&&t.isFirstBorder?"is-first-border":""]},[t._t("label",[i("v-uni-view",{staticClass:"uni-forms-item__label",class:{"no-label":!t.label&&!t.required},style:{width:t.localLabelWidth,justifyContent:t.localLabelAlign}},[t.required?i("v-uni-text",{staticClass:"is-required"},[t._v("*")]):t._e(),i("v-uni-text",[t._v(t._s(t.label))])],1)]),i("v-uni-view",{staticClass:"uni-forms-item__content"},[t._t("default"),i("v-uni-view",{staticClass:"uni-forms-item__error",class:{"msg--active":t.msg}},[i("v-uni-text",[t._v(t._s(t.msg))])],1)],2)],2)},n=[]},daef:function(t,e,i){var r=i("18a7");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("e917511c",r,!0,{sourceMap:!1,shadowMode:!1})},e734:function(t,e,i){"use strict";i.r(e);var r=i("825e"),n=i("f9bb");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("0d34");var o=i("f0c5"),s=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"e8de5626",null,!1,r["a"],void 0);e["default"]=s.exports},f9bb:function(t,e,i){"use strict";i.r(e);var r=i("d4f5"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a}}]);