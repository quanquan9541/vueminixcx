(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Manufacturer-list"],{"2f94":function(e,t,n){"use strict";var a=n("4a97"),i=n.n(a);i.a},"438f":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("2ca0");var a={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(e){uni.makePhoneCall({phoneNumber:e})}}};t.default=a},"4a97":function(e,t,n){var a=n("b98f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("e0de37bc",a,!0,{sourceMap:!1,shadowMode:!1})},"5e6a":function(e,t,n){"use strict";n.r(t);var a=n("84ad"),i=n("b765");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("2f94");var l=n("f0c5"),o=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"03b6d5de",null,!1,a["a"],void 0);t["default"]=o.exports},6225:function(e,t,n){"use strict";(function(e){n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("498a"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("d81d"),n("4de4"),n("d3b7"),n("b64b");var i=a(n("5530")),r=n("cc18"),l=e.database(),o=[],u={ascending:"asc",descending:"desc"},s={data:function(){return{collectionList:"Manufacturer_brand",query:"",where:"type==0",orderby:"",orderByFieldName:"",selectedIndexs:[],options:(0,i.default)({pageSize:20,pageCurrent:1,filterData:{}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"Manufacturer_brand.xls",type:"xls",fields:{"名称":"name","大图":"pic","启用":"status","类型":"type"}},exportExcelData:[]}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},methods:{onqueryload:function(e){this.exportExcelData=e},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return o.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+u[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,r.filterToWhere)(this._filter,l.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=s}).call(this,n("a9ff")["default"])},"84ad":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShowA?n("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},attrs:{href:e.href,download:e.download}},[e._t("default",[e._v(e._s(e.text))])],2):n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openURL.apply(void 0,arguments)}}},[e._t("default",[e._v(e._s(e.text))])],2)},i=[]},"94bf":function(e,t,n){"use strict";n.r(t);var a=n("9a1e"),i=n("ccc7");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var l=n("f0c5"),o=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"efdc3988",null,!1,a["a"],void 0);t["default"]=o.exports},"9a1e":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("72a5").default,unicloudDb:n("960d").default,uniTable:n("4ca5").default,uniTr:n("f4a6").default,uniTh:n("7bf1").default,uniTd:n("d6aa").default,uniFilePicker:n("fc73").default,uniLink:n("5e6a").default,uniPagination:n("be44").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v("新增")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:e.collectionList,field:"name,pic,money,status",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,l=t.error;t.options;return[n("uni-table",{ref:"table",attrs:{loading:r,emptyText:l.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"name")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"name")}}},[e._v("厂商")]),n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"pic")}}},[e._v("logo大图")]),n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"status")}}},[e._v("启用")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.name))]),n("uni-td",{attrs:{align:"center"}},[e._l(t.pic,(function(t,a){return["image"==t.fileType?n("uni-file-picker",{attrs:{value:t,"file-mediatype":t.fileType,imageStyles:e.imageStyles,readonly:!0}}):n("uni-link",{attrs:{href:t.url,text:t.url}})]}))],2),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(1==t.status?"✅":"❌"))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v("修改")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v("删除")])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},b765:function(e,t,n){"use strict";n.r(t);var a=n("438f"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},b98f:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),e.exports=t},cc18:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=void 0,t.filterToWhere=function(e,t){var n={};for(var a in e){var l=e[a],o=l.type,u=l.value;switch(o){case"search":"string"===typeof u&&u.length&&(n[a]=new RegExp(u));break;case"select":if(u.length){var s,c=[],d=(0,r.default)(u);try{for(d.s();!(s=d.n()).done;){var f=s.value;c.push(t.eq(f))}}catch(C){d.e(C)}finally{d.f()}n[a]=t.or(c)}break;case"range":if(u.length){var h=u[0],v=u[1];n[a]=t.and([t.gte(h),t.lte(v)])}break;case"date":if(u.length){var p=(0,i.default)(u,2),b=p[0],g=p[1],y=new Date(b),m=new Date(g);n[a]=t.and([t.gte(y),t.lte(m)])}break;case"timestamp":if(u.length){var x=(0,i.default)(u,2),_=x[0],w=x[1];n[a]=t.and([t.gte(_),t.lte(w)])}break}}return n},t.validator=void 0;var i=a(n("3835")),r=a(n("b85c"));n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("14d9");t.validator={name:{rules:[{required:!0},{format:"string"}],title:"名称",label:"名称"},pic:{rules:[{format:"array"},{arrayType:"file"}],title:"大图",defaultValue:"上传手机大图",label:"大图"},money:{rules:[{format:"int"}],title:"价格",label:"价格"},url:{rules:[{format:"string"}],title:"链接",label:"链接"},brith:{rules:[{format:"timestamp"}],title:"发售日期",label:"发售日期"},status:{rules:[{format:"bool"}],title:"启用",defaultValue:!0,label:"启用"},type:{rules:[{format:"int"}],title:"类型",label:"类型"},parent_id:{rules:[{format:"object"}],title:"品牌",label:"品牌"},z_id:{rules:[{format:"object"}],title:"厂商",label:"厂商"}};t.enumConverter={}},ccc7:function(e,t,n){"use strict";n.r(t);var a=n("6225"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a}}]);