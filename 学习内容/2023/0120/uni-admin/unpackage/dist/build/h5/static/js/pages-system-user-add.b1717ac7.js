(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-user-add"],{"1a5b":function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.enumConverter=void 0,a.filterToWhere=function(t,a){var e={};for(var n in t){var o=t[n],l=o.type,s=o.value;switch(l){case"search":"string"===typeof s&&s.length&&(e[n]=new RegExp(s));break;case"select":if(s.length){var u,c=[],f=(0,r.default)(s);try{for(f.s();!(u=f.n()).done;){var d=u.value;c.push(a.eq(d))}}catch(y){f.e(y)}finally{f.f()}e[n]=a.or(c)}break;case"range":if(s.length){var m=s[0],v=s[1];e[n]=a.and([a.gte(m),a.lte(v)])}break;case"date":if(s.length){var p=(0,i.default)(s,2),b=p[0],h=p[1],g=new Date(b),x=new Date(h);e[n]=a.and([a.gte(g),a.lte(x)])}break;case"timestamp":if(s.length){var k=(0,i.default)(s,2),w=k[0],D=k[1];e[n]=a.and([a.gte(w),a.lte(D)])}break}}return e},a.validator=void 0;var i=n(e("3835")),r=n(e("b85c"));e("ac1f"),e("00b4"),e("4d63"),e("c607"),e("2c3e"),e("25f0"),e("14d9");a.validator={username:{rules:[{required:!0,errorMessage:"请输入用户名"},{minLength:3,maxLength:32,errorMessage:"用户名长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(t,a,e,n){return(/^1\d{10}$/.test(a)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a))&&n("用户名不能是：手机号或邮箱"),/^\d+$/.test(a)&&n("用户名不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(a)&&n("用户名不能包含中文"),!0}}],label:"用户名"},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(t,a,e,n){return(/^1\d{10}$/.test(a)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a))&&n("昵称不能是：手机号或邮箱"),/^\d+$/.test(a)&&n("昵称不能为纯数字"),!0}}],label:"昵称"},password:{rules:[{required:!0},{format:"password"},{minLength:6}],label:"密码"},mobile:{rules:[{format:"string"},{pattern:"^\\+?[0-9-]{3,20}$"}],label:"手机号码"},status:{rules:[{format:"int"},{range:[{text:"正常",value:0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]}],defaultValue:0,label:"用户状态"},email:{rules:[{format:"string"},{format:"email"}],label:"邮箱"},role:{rules:[{format:"array"}],label:"角色"},last_login_date:{rules:[{format:"timestamp"}]}};a.enumConverter={status_valuetotext:{0:"正常",1:"禁用",2:"审核中",3:"审核拒绝"}}},2447:function(t,a,e){"use strict";(function(t){e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5530"));e("caad"),e("2532"),e("a9e3"),e("d3b7"),e("d81d"),e("14d9"),e("c975"),e("3c65");var r=e("1a5b"),o=t.database();o.command;function l(t){var a={};for(var e in r.validator)t.includes(e)&&(a[e]=r.validator[e]);return a}var s={data:function(){return{formData:{username:"",nickname:"",password:"",role:[],authorizedApp:[],tags:[],mobile:void 0,email:void 0,status:!0},rules:(0,i.default)((0,i.default)({},l(["username","password","role","mobile","email"])),{},{status:{rules:[{format:"bool"}]}}),roles:[]}},onLoad:function(){this.loadroles()},methods:{gotoAppList:function(){uni.navigateTo({url:"../app/list"})},gotoTagList:function(){uni.navigateTo({url:"../tag/list"})},gotoTagAdd:function(){var t=this;uni.navigateTo({url:"../tag/add",events:{refreshCheckboxData:function(){t.$refs.checkbox.loadData()}}})},submitForm:function(){this.$refs.form.submit()},submit:function(t){var a=this,e=t.detail,n=e.value,i=e.errors;i||(uni.showLoading({title:"提交中...",mask:!0}),"boolean"===typeof n.status&&(n.status=Number(!n.status)),this.$request("addUser",n).then((function(){uni.showToast({title:"新增成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(t){uni.hideLoading()})))},loadroles:function(){var t=this;o.collection("uni-id-roles").limit(500).get().then((function(a){var e=[];t.roles=a.result.data.map((function(t){return e.push(t.role_id),{value:t.role_id,text:t.role_name}})),-1===e.indexOf("admin")&&t.roles.unshift({value:"admin",text:"超级管理员"})})).catch((function(t){uni.showModal({title:"提示",content:t.message,showCancel:!1})}))}}};a.default=s}).call(this,e("a9ff")["default"])},"314b":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={uniForms:e("2b75").default,uniFormsItem:e("4194").default,uniEasyinput:e("8e06").default,uniDataCheckbox:e("ddbd").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{rules:t.rules,validateTrigger:"bind"},on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}},model:{value:t.formData,callback:function(a){t.formData=a},expression:"formData"}},[e("uni-forms-item",{attrs:{name:"username",label:"用户名",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入用户名"},model:{value:t.formData.username,callback:function(a){t.$set(t.formData,"username",a)},expression:"formData.username"}})],1),e("uni-forms-item",{attrs:{name:"nickname",label:"用户昵称",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入用户昵称"},model:{value:t.formData.nickname,callback:function(a){t.$set(t.formData,"nickname",a)},expression:"formData.nickname"}})],1),e("uni-forms-item",{attrs:{name:"password",label:"初始密码",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入初始密码"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}})],1),e("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"role",label:"角色列表"}},[e("uni-data-checkbox",{attrs:{multiple:!0,localdata:t.roles},model:{value:t.formData.role,callback:function(a){t.$set(t.formData,"role",a)},expression:"formData.role"}})],1),e("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"tags",label:"用户标签",labelWidth:"100"}},[e("uni-data-checkbox",{ref:"checkbox",attrs:{multiple:!0,collection:"uni-id-tag",field:"tagid as value, name as text"},model:{value:t.formData.tags,callback:function(a){t.$set(t.formData,"tags",a)},expression:"formData.tags"}}),e("span",{staticClass:"link-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoTagAdd.apply(void 0,arguments)}}},[t._v("新增")]),e("span",{staticClass:"link-btn",staticStyle:{"margin-left":"10px"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoTagList.apply(void 0,arguments)}}},[t._v("管理")])],1),e("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"authorizedApp",label:"可登录应用",labelWidth:"100"}},[e("uni-data-checkbox",{attrs:{multiple:!0,collection:"opendb-app-list",field:"appid as value, name as text"},model:{value:t.formData.authorizedApp,callback:function(a){t.$set(t.formData,"authorizedApp",a)},expression:"formData.authorizedApp"}}),e("span",{staticClass:"link-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoAppList.apply(void 0,arguments)}}},[t._v("管理")])],1),e("uni-forms-item",{attrs:{name:"mobile",label:"手机号"}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入手机号"},model:{value:t.formData.mobile,callback:function(a){t.$set(t.formData,"mobile",a)},expression:"formData.mobile"}})],1),e("uni-forms-item",{attrs:{name:"email",label:"邮箱"}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入邮箱"},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}})],1),e("uni-forms-item",{attrs:{name:"status",label:"是否启用"}},[e("v-uni-switch",{attrs:{checked:t.formData.status},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.binddata("status",a.detail.value)}}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submitForm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.submit")))]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v(t._s(t.$t("common.button.back")))])],1)],1)],1)],1)},r=[]},"594a":function(t,a,e){"use strict";e.r(a);var n=e("314b"),i=e("b280");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("67c7");var o=e("f0c5"),l=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"33379317",null,!1,n["a"],void 0);a["default"]=l.exports},"67c7":function(t,a,e){"use strict";var n=e("eaeb"),i=e.n(n);i.a},"831b":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"[data-v-33379317] .uni-forms-item__label{width:90px!important}",""]),t.exports=a},b280:function(t,a,e){"use strict";e.r(a);var n=e("2447"),i=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},eaeb:function(t,a,e){var n=e("831b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("5f483423",n,!0,{sourceMap:!1,shadowMode:!1})}}]);