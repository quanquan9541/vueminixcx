(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Mcamera-list"],{"0a88":function(e,t,n){"use strict";n.r(t);var a=n("1ca8"),i=n("e1b8");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var l=n("f0c5"),o=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"696121d4",null,!1,a["a"],void 0);t["default"]=o.exports},"1ca8":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("72a5").default,unicloudDb:n("960d").default,uniTable:n("4ca5").default,uniTr:n("f4a6").default,uniTh:n("7bf1").default,uniTd:n("d6aa").default,uniPagination:n("be44").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v("新增")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:e.collectionList,where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,l=t.error,o=t.options;return[n("uni-table",{ref:"table",attrs:{loading:r,emptyText:l.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}},[e._v("名称")]),n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"edit")}}},[e._v("关联")]),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":o.filterData.ComeraType_localdata},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"ComeraType")}}},[e._v("类型")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"Comeraedit")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"Comeraedit")}}},[e._v("详情")]),n("uni-th",{attrs:{align:"center","filter-type":"range",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"Comeravalue")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"Comeravalue")}}},[e._v("数值")]),n("uni-th",{attrs:{align:"center","filter-type":"range",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"Comeraadd")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"Comeraadd")}}},[e._v("附加分")]),n("uni-th",{attrs:{align:"center","filter-type":"range",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"sort")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"sort")}}},[e._v("排序")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.phone_id&&t.phone_id[0]&&t.phone_id[0].parent_id.text+" "+t.phone_id[0].text))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(e.codeeditid(t.edit)))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(o.ComeraType_valuetotext[t.ComeraType]))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.Comeraedit))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.Comeravalue))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.Comeraadd))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.sort))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v("修改")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v("删除")])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},"21f2":function(e,t,n){"use strict";(function(e){n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("498a"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("d81d"),n("4de4"),n("d3b7"),n("b64b");var i=a(n("5530")),r=n("cb79"),l=n("34a7"),o=e.database(),u=[],s={ascending:"asc",descending:"desc"},c={data:function(){return{collectionList:[o.collection("Mcamera").field("phone_id,edit,ComeraType,Comeraedit,Comeravalue,Comeraadd,sort").getTemp(),o.collection("Manufacturer_brand").field("_id, parent_id,z_id, name as text").getTemp()],query:"",where:"",orderby:"",orderByFieldName:"",selectedIndexs:[],options:(0,i.default)({pageSize:20,pageCurrent:1,filterData:{ComeraType_localdata:[{text:"前置",value:"前置"},{text:"主摄",value:"主摄"},{text:"广角",value:"广角"},{text:"长焦",value:"长焦"},{text:"人像",value:"人像"},{text:"微距",value:"微距"},{text:"景深",value:"景深"},{text:"其他",value:"其他"}]}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"Mcamera.xls",type:"xls",fields:{"名称":"phone_id","关联":"edit","类型":"ComeraType","详情":"Comeraedit","数值":"Comeravalue","附加分":"Comeraadd","排序":"sort"}},exportExcelData:[]}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},methods:{codeeditid:l.codeeditid,onqueryload:function(e){this.exportExcelData=e},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return u.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+s[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,r.filterToWhere)(this._filter,o.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=c}).call(this,n("a9ff")["default"])},"34a7":function(e,t,n){"use strict";(function(e,a){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.codeeditid=function(e){return"200"==e||"400"==e?e:"success"},t.gettreedata=function(e,t){return s.apply(this,arguments)},t.phonevalue=function(e,t){return d.apply(this,arguments)},t.relevance=function(e){return c.apply(this,arguments)},n("a9e3");var r=i(n("5530")),l=i(n("c7eb")),o=i(n("1da1")),u=e.database();function s(){return s=(0,o.default)((0,l.default)().mark((function e(t,n){var i,r;return(0,l.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=["Mcamera","Mmoney"],e.next=3,u.collection(i[t]).where(n).get();case 3:return r=e.sent,a.log(r.result.data),e.abrupt("return",r.result.data);case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function c(){return c=(0,o.default)((0,l.default)().mark((function e(t){var n,i,r;return(0,l.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.detail.value[2]){e.next=4;break}return e.abrupt("return","200");case 4:return n=t.detail.value[2].value,e.next=7,u.collection("Mparameter").where("title=='".concat(n,"'")).field("_id").get({getOne:!0});case 7:if(i=e.sent,a.log(i),i.result.data){e.next=13;break}return e.abrupt("return","400");case 13:return r=i.result.data._id,e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function d(){return d=(0,o.default)((0,l.default)().mark((function e(t,n){var i,o,s,c,d,f,h=arguments;return(0,l.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]?h[2]:"add",o={},o.phone_id=t.title,e.next=5,u.collection("Msoc").where("_id=='".concat(t.socfunction,"'")).field("_id,socvalue").get({getOne:!0});case 5:return s=e.sent,o.phonefunction=String(s.result.data.socvalue),c={},c.weight=String(t.weight),c.measurement=Number(t.measurementHight)*Number(t.measurementWidth)*Number(t.measurementThickness),o.light_thin=c,d=Number(t.screenPPI)*Number(t.screenMaterial)/50+(Number(t.screenRenovate)-60)/60+Number(t.screenAdmin)/10-1,o.phoneshow=String(Number(d.toFixed(2))),e.next=15,u.collection("Mcamera").where("phone_id=='".concat(t.title,"'")).groupBy("phone_id").groupField("sum(add(Comeravalue,Comeraadd)) as sumScore ").get({getOne:!0});case 15:f=e.sent,o.phoneimage=String(f.result.data.sumScore),o.phonecell=String(t.cell),o.phonecharge=String(Number(t.WiredCharging)+Number(t.WirelessCharging)/4),"add"==i?u.collection("Mphonevalue").add((0,r.default)({},o)).then((function(e){a.log("上传",e)})).catch((function(e){a.log("上传失败",e)})):u.collection("Mphonevalue").doc(n).update((0,r.default)((0,r.default)({},o),{},{last_date:Date.now()})).then((function(e){a.log("修改",e)})).catch((function(e){a.log("修改失败",e)}));case 20:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}}).call(this,n("a9ff")["default"],n("5a52")["default"])},cb79:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=void 0,t.filterToWhere=function(e,t){var n={};for(var a in e){var l=e[a],o=l.type,u=l.value;switch(o){case"search":"string"===typeof u&&u.length&&(n[a]=new RegExp(u));break;case"select":if(u.length){var s,c=[],d=(0,r.default)(u);try{for(d.s();!(s=d.n()).done;){var f=s.value;c.push(t.eq(f))}}catch(w){d.e(w)}finally{d.f()}n[a]=t.or(c)}break;case"range":if(u.length){var h=u[0],v=u[1];n[a]=t.and([t.gte(h),t.lte(v)])}break;case"date":if(u.length){var p=(0,i.default)(u,2),g=p[0],m=p[1],b=new Date(g),y=new Date(m);n[a]=t.and([t.gte(b),t.lte(y)])}break;case"timestamp":if(u.length){var x=(0,i.default)(u,2),_=x[0],C=x[1];n[a]=t.and([t.gte(_),t.lte(C)])}break}}return n},t.validator=void 0;var i=a(n("3835")),r=a(n("b85c"));n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("14d9");t.validator={phone_id:{rules:[{format:"string"}],title:"名称",label:"名称"},edit:{rules:[{format:"string"}],title:"关联",label:"关联"},ComeraType:{rules:[{required:!0},{format:"string"},{range:[{text:"前置",value:"前置"},{text:"主摄",value:"主摄"},{text:"广角",value:"广角"},{text:"长焦",value:"长焦"},{text:"人像",value:"人像"},{text:"微距",value:"微距"},{text:"景深",value:"景深"},{text:"其他",value:"其他"}]}],title:"类型",label:"类型"},Comeraedit:{rules:[{required:!0},{format:"string"}],title:"详情",label:"详情"},Comeravalue:{rules:[{required:!0},{format:"int"}],title:"数值",label:"数值"},Comeraadd:{rules:[{format:"int"}],title:"附加分",defaultValue:0,label:"附加分"},sort:{rules:[{format:"int"}],title:"排序",defaultValue:0,label:"排序"}};t.enumConverter={ComeraType_valuetotext:{"前置":"前置","主摄":"主摄","广角":"广角","长焦":"长焦","人像":"人像","微距":"微距","景深":"景深","其他":"其他"}}},e1b8:function(e,t,n){"use strict";n.r(t);var a=n("21f2"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a}}]);