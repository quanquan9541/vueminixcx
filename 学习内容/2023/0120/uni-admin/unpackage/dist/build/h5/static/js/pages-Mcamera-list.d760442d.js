(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Mcamera-list"],{"0a88":function(e,t,a){"use strict";a.r(t);var n=a("8ab5"),i=a("e1b8");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);var l=a("f0c5"),o=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"72b33856",null,!1,n["a"],void 0);t["default"]=o.exports},"21f2":function(e,t,a){"use strict";(function(e){a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("498a"),a("4d63"),a("c607"),a("ac1f"),a("2c3e"),a("25f0"),a("d81d"),a("4de4"),a("d3b7"),a("b64b");var i=n(a("5530")),r=a("cb79"),l=e.database(),o=[],u={ascending:"asc",descending:"desc"},s={data:function(){return{collectionList:[l.collection("Mcamera").field("edit_id,ComeraType,Comeraedit,Comeravalue,Comeraadd,sort").getTemp(),l.collection("Manufacturer_brand").field("_id,parent_id,z_id, name as text").getTemp()],query:"",where:"",orderby:"",orderByFieldName:"",selectedIndexs:[],options:(0,i.default)({pageSize:20,pageCurrent:1,filterData:{ComeraType_localdata:[{text:"前置",value:"前置"},{text:"主摄",value:"主摄"},{text:"广角",value:"广角"},{text:"长焦",value:"长焦"},{text:"人像",value:"人像"},{text:"微距",value:"微距"},{text:"景深",value:"景深"},{text:"其他",value:"其他"}]}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"Mcamera.xls",type:"xls",fields:{"名称":"edit_id","类型":"ComeraType","详情":"Comeraedit","数值":"Comeravalue","附加分":"Comeraadd","排序":"sort"}},exportExcelData:[]}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},methods:{onqueryload:function(e){this.exportExcelData=e},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return o.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var a=this;uni.navigateTo({url:e,events:{refreshData:function(){a.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var a=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+u[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){a.$refs.udb.loadData()}))},filterChange:function(e,t){var a=this;this._filter[t]={type:e.filterType,value:e.filter};var n=(0,r.filterToWhere)(this._filter,l.command);Object.keys(n).length?this.where=n:this.where="",this.$nextTick((function(){a.$refs.udb.loadData()}))}}};t.default=s}).call(this,a("a9ff")["default"])},"8ab5":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={downloadExcel:a("72a5").default,unicloudDb:a("960d").default,uniTable:a("4ca5").default,uniTr:a("f4a6").default,uniTh:a("7bf1").default,uniTd:a("d6aa").default,uniPagination:a("be44").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"uni-header"},[a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-title"}),a("v-uni-view",{staticClass:"uni-sub-title"})],1),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),a("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),a("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v("新增")]),a("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")]),a("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("unicloud-db",{ref:"udb",attrs:{collection:e.collectionList,where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data,i=t.pagination,r=t.loading,l=t.error,o=t.options;return[a("uni-table",{ref:"table",attrs:{loading:r,emptyText:l.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[a("uni-tr",[a("uni-th",{attrs:{align:"center"}},[e._v("名称")]),a("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":o.filterData.ComeraType_localdata},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"ComeraType")}}},[e._v("类型")]),a("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"Comeraedit")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"Comeraedit")}}},[e._v("详情")]),a("uni-th",{attrs:{align:"center","filter-type":"range",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"Comeravalue")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"Comeravalue")}}},[e._v("数值")]),a("uni-th",{attrs:{align:"center","filter-type":"range",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"Comeraadd")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"Comeraadd")}}},[e._v("附加分")]),a("uni-th",{attrs:{align:"center","filter-type":"range",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"sort")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"sort")}}},[e._v("排序")]),a("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(n,(function(t,n){return a("uni-tr",{key:n},[a("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.edit_id&&t.edit_id[0]&&t.edit_id[0].parent_id.text+" "+t.edit_id[0].text))]),a("uni-td",{attrs:{align:"center"}},[e._v(e._s(o.ComeraType_valuetotext[t.ComeraType]))]),a("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.Comeraedit))]),a("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.Comeravalue))]),a("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.Comeraadd))]),a("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.sort))]),a("uni-td",{attrs:{align:"center"}},[a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v("修改")]),a("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.confirmDelete(t._id)}}},[e._v("删除")])],1)],1)],1)}))],2),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},cb79:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=void 0,t.filterToWhere=function(e,t){var a={};for(var n in e){var l=e[n],o=l.type,u=l.value;switch(o){case"search":"string"===typeof u&&u.length&&(a[n]=new RegExp(u));break;case"select":if(u.length){var s,c=[],d=(0,r.default)(u);try{for(d.s();!(s=d.n()).done;){var f=s.value;c.push(t.eq(f))}}catch($){d.e($)}finally{d.f()}a[n]=t.or(c)}break;case"range":if(u.length){var v=u[0],h=u[1];a[n]=t.and([t.gte(v),t.lte(h)])}break;case"date":if(u.length){var p=(0,i.default)(u,2),g=p[0],b=p[1],m=new Date(g),C=new Date(b);a[n]=t.and([t.gte(m),t.lte(C)])}break;case"timestamp":if(u.length){var y=(0,i.default)(u,2),x=y[0],_=y[1];a[n]=t.and([t.gte(x),t.lte(_)])}break}}return a},t.validator=void 0;var i=n(a("3835")),r=n(a("b85c"));a("4d63"),a("c607"),a("ac1f"),a("2c3e"),a("25f0"),a("14d9");t.validator={edit_id:{rules:[{format:"string"}],title:"名称",label:"名称"},ComeraType:{rules:[{required:!0},{format:"string"},{range:[{text:"前置",value:"前置"},{text:"主摄",value:"主摄"},{text:"广角",value:"广角"},{text:"长焦",value:"长焦"},{text:"人像",value:"人像"},{text:"微距",value:"微距"},{text:"景深",value:"景深"},{text:"其他",value:"其他"}]}],title:"类型",label:"类型"},Comeraedit:{rules:[{required:!0},{format:"string"}],title:"详情",label:"详情"},Comeravalue:{rules:[{required:!0},{format:"int"}],title:"数值",label:"数值"},Comeraadd:{rules:[{format:"int"}],title:"附加分",defaultValue:0,label:"附加分"},sort:{rules:[{format:"int"}],title:"排序",defaultValue:0,label:"排序"}};t.enumConverter={ComeraType_valuetotext:{"前置":"前置","主摄":"主摄","广角":"广角","长焦":"长焦","人像":"人像","微距":"微距","景深":"景深","其他":"其他"}}},e1b8:function(e,t,a){"use strict";a.r(t);var n=a("21f2"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a}}]);