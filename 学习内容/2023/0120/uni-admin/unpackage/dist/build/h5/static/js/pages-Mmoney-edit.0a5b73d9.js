(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Mmoney-edit"],{"0d2d":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uniForms:a("2b75").default,uniFormsItem:a("4194").default,uniDataPicker:a("9aad").default,uniDataCheckbox:a("ddbd").default,uniEasyinput:a("8e06").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{model:t.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"edit_id",label:"名称"}},[a("uni-data-picker",{attrs:{collection:"Manufacturer_brand","parent-field":"parent_id.value","self-field":"_id",field:"_id as value, name as text"},model:{value:t.formData.edit_id,callback:function(e){t.$set(t.formData,"edit_id",e)},expression:"formData.edit_id"}})],1),a("uni-forms-item",{attrs:{name:"ram",label:"内存",required:!0}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.ram_localdata},model:{value:t.formData.ram,callback:function(e){t.$set(t.formData,"ram",e)},expression:"formData.ram"}})],1),a("uni-forms-item",{attrs:{name:"rom",label:"闪存",required:!0}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.rom_localdata},model:{value:t.formData.rom,callback:function(e){t.$set(t.formData,"rom",e)},expression:"formData.rom"}})],1),a("uni-forms-item",{attrs:{name:"money",label:"价格"}},[a("uni-easyinput",{attrs:{placeholder:"价格表"},model:{value:t.formData.money,callback:function(e){t.$set(t.formData,"money",e)},expression:"formData.money"}})],1),a("uni-forms-item",{attrs:{name:"sort",label:"排序"}},[a("uni-easyinput",{attrs:{type:"number"},model:{value:t.formData.sort,callback:function(e){t.$set(t.formData,"sort",e)},expression:"formData.sort"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},i=[]},"73a5":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.enumConverter=void 0,e.filterToWhere=function(t,e){var a={};for(var n in t){var o=t[n],l=o.type,u=o.value;switch(l){case"search":"string"===typeof u&&u.length&&(a[n]=new RegExp(u));break;case"select":if(u.length){var s,d=[],f=(0,i.default)(u);try{for(f.s();!(s=f.n()).done;){var c=s.value;d.push(e.eq(c))}}catch(k){f.e(k)}finally{f.f()}a[n]=e.or(d)}break;case"range":if(u.length){var m=u[0],v=u[1];a[n]=e.and([e.gte(m),e.lte(v)])}break;case"date":if(u.length){var b=(0,r.default)(u,2),h=b[0],p=b[1],x=new Date(h),g=new Date(p);a[n]=e.and([e.gte(x),e.lte(g)])}break;case"timestamp":if(u.length){var y=(0,r.default)(u,2),D=y[0],_=y[1];a[n]=e.and([e.gte(D),e.lte(_)])}break}}return a},e.validator=void 0;var r=n(a("3835")),i=n(a("b85c"));a("4d63"),a("c607"),a("ac1f"),a("2c3e"),a("25f0"),a("14d9");e.validator={edit_id:{rules:[{format:"string"}],title:"名称",label:"名称"},ram:{rules:[{required:!0},{format:"int"},{range:[{value:4,text:4},{value:6,text:6},{value:8,text:8},{value:12,text:12},{value:16,text:16},{value:18,text:18}]}],title:"内存",label:"内存"},rom:{rules:[{required:!0},{format:"int"},{range:[{value:32,text:32},{value:64,text:64},{value:128,text:128},{value:256,text:256},{value:512,text:512},{value:1024,text:1024}]}],title:"闪存",label:"闪存"},money:{rules:[{format:"string"}],title:"价格",label:"价格"},sort:{rules:[{format:"int"}],title:"排序",defaultValue:0,label:"排序"}};e.enumConverter={ram_valuetotext:{4:4,6:6,8:8,12:12,16:16,18:18},rom_valuetotext:{32:32,64:64,128:128,256:256,512:512,1024:1024}}},"9a51":function(t,e,a){"use strict";a.r(e);var n=a("0d2d"),r=a("c204");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var o=a("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=l.exports},c204:function(t,e,a){"use strict";a.r(e);var n=a("c2a2"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},c2a2:function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("5530"));a("caad"),a("2532"),a("b64b"),a("d3b7");var i=a("73a5"),o=t.database();o.command;function l(t){var e={};for(var a in i.validator)t.includes(a)&&(e[a]=i.validator[a]);return e}var u={data:function(){var t={edit_id:"",ram:null,rom:null,money:"",sort:0};return{formData:t,formOptions:{ram_localdata:[{value:4,text:4},{value:6,text:6},{value:8,text:8},{value:12,text:12},{value:16,text:16},{value:18,text:18}],rom_localdata:[{value:32,text:32},{value:64,text:64},{value:128,text:128},{value:256,text:256},{value:512,text:512},{value:1024,text:1024}]},rules:(0,r.default)({},l(Object.keys(t)))}},onLoad:function(t){if(t.id){var e=t.id;this.formDataId=e,this.getDetail(e)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return t.submitForm(e)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;return o.collection("Mmoney").doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),o.collection("Mmoney").doc(t).field("edit_id,ram,rom,money,sort").get().then((function(t){var a=t.result.data[0];a&&(e.formData=a)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=u}).call(this,a("a9ff")["default"])}}]);