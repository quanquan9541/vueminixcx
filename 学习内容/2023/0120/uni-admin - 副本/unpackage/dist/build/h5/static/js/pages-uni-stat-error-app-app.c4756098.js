(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-error-app-app"],{"0861":function(e,t,a){"use strict";var i=a("2b46"),r=a.n(i);r.a},"0aa8":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}));var i={uniTooltip:a("6d58").default,uniIcons:a("356f").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-stat--sum-x mb-m"},e._l(e.items,(function(t,i){return a("v-uni-view",{key:i,staticClass:"uni-stat--sum-item",class:["今天"===t.value?"uni-stat--sum-item-width":""]},[a("uni-tooltip",{scopedSlots:e._u([t.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[e._v(e._s(t.tooltip))])]},proxy:!0}:null],null,!0)},[a("v-uni-view",{staticClass:"uni-stat--sum-item-title"},[e._v(e._s(t.title?t.title:"")),t.title?a("uni-icons",{staticClass:"ml-s",attrs:{type:"help",color:"#666"}}):e._e()],1)],1),a("v-uni-view",{staticClass:"uni-stat--sum-item-value"},[e._v(e._s(t.value?t.value:0))]),e.contrast?a("v-uni-view",{staticClass:"uni-stat--sum-item-contrast"},[e._v(e._s(t.contrast?t.contrast:0))]):e._e()],1)})),1)},n=[]},1287:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}));var i={uniStatBreadcrumb:a("0a64").default,uniDataSelect:a("7003").default,uniStatTabs:a("45b2").default,uniDatetimePicker:a("e3d9").default,uniStatPanel:a("2cf5").default,qiunDataCharts:a("5302").default,downloadExcel:a("72a5").default,unicloudDb:a("960d").default,uniTable:a("4ca5").default,uniTr:a("f4a6").default,uniTh:a("7bf1").default,uniTooltip:a("6d58").default,uniIcons:a("356f").default,uniTd:a("d6aa").default,uniDateformat:a("a51d").default,uniPagination:a("be44").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group hide-on-phone"},[a("v-uni-view",{staticClass:"uni-sub-title"},[e._v("开发者可以在这里快速查询原生应用最近出现的具体崩溃内容，了解崩溃概况信息，以便快速修复问题")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:e.query.appid,callback:function(t){e.$set(e.query,"appid",t)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:e.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:e.query.version_id,callback:function(t){e.$set(e.query,"version_id",t)},expression:"query.version_id"}}),a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",all:!1,mode:"platform-channel"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePlatform.apply(void 0,arguments)}},model:{value:e.query.platform_id,callback:function(t){e.$set(e.query,"platform_id",t)},expression:"query.platform_id"}})],1),a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:e.currentDateTab,yesterday:!1,mode:"date"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":e.currentDateTab<0&&!!e.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.useDatetimePicker.apply(void 0,arguments)}},model:{value:e.query.start_time,callback:function(t){e.$set(e.query,"start_time",t)},expression:"query.start_time"}})],1),a("v-uni-view",{staticClass:"uni-stat--x",staticStyle:{padding:"15px 0"}},[a("uni-stat-panel",{staticClass:"uni-stat-panel",attrs:{items:e.panelData}}),a("uni-stat-tabs",{staticClass:"mb-l",attrs:{type:"box",tabs:e.chartTabs},model:{value:e.chartTab,callback:function(t){e.chartTab=t},expression:"chartTab"}}),a("v-uni-view",{staticClass:"uni-charts-box"},[a("qiun-data-charts",{attrs:{type:"area",chartData:e.chartData,eopts:{notMerge:!0},echartsH5:!0,echartsApp:!0,tooltipFormat:"tooltipCustom",errorMessage:e.errorMessage}})],1)],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"flex-between"},[a("v-uni-view",{staticClass:"uni-stat-card-header"},[e._v("信息列表")]),a("v-uni-view",{staticClass:"uni-group"},[a("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),a("unicloud-db",{ref:"udb",attrs:{collection:e.collectionList,field:"appid,version,platform,channel,sdk_version,device_id,device_net,device_os,device_os_version,device_vendor,device_model,device_is_root,device_os_name,device_batt_level,device_batt_temp,device_memory_use_size,device_memory_total_size,device_disk_use_size,device_disk_total_size,device_abis,app_count,app_use_memory_size,app_webview_count,app_use_duration,app_run_fore,package_name,package_version,page_url,error_msg,create_time",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,loadtime:"manual",options:e.options},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){t.data;var i=t.pagination,r=t.loading;t.error,t.options;return[a("uni-table",{ref:"table",staticStyle:{"overflow-y":"scroll"},attrs:{loading:r,border:!0,stripe:!0,emptyText:e.$t("common.empty")}},[a("uni-tr",[e._l(e.fieldsMap,(function(t,i){return[t.title?a("uni-th",{key:i+"_"+i+"_0",style:{minWidth:15*t.title.length+80+"px"},attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:e._u([t.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[e._v(e._s(t.tooltip))])]},proxy:!0}:null],null,!0)},[e._v(e._s(t.title)),t.tooltip?a("uni-icons",{attrs:{type:"help",color:"#666"}}):e._e()],1)],1):e._e()]}))],2),e._l(e.tableData,(function(t,i){return a("uni-tr",{key:i},[e._l(e.fieldsMap,(function(i,r){return["error_msg"===i.field?a("uni-td",{key:i.field+"_"+r+"_0",staticStyle:{"min-width":"500px"},attrs:{align:"left"}},[a("uni-tooltip",{scopedSlots:e._u([t.error_msg?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-l"},[e._v(e._s(t.error_msg))])]},proxy:!0}:null],null,!0)},[e._v(e._s(t.error_msg?t.error_msg.substring(0,100)+"...":"")),t.error_msg?a("uni-icons",{attrs:{type:"help",color:"#666"}}):e._e()],1)],1):"create_time"===i.field?a("uni-td",{key:i.field,attrs:{align:"center"}},[a("uni-dateformat",{attrs:{threshold:[0,0],date:t.create_time}})],1):a("uni-td",{key:i.field,attrs:{align:"center"}},[e._v(e._s(void 0!==t[i.field]?t[i.field]:"-"))])]}))],2)}))],2),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)],1)},n=[]},"27b0":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uni-stat-panel",data:function(){return{}},props:{items:{type:Array,default:function(){return[]}},contrast:{type:Boolean,default:!1}}};t.default=i},"2af3":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-text",[this._v(this._s(this.dateShow))])},r=[]},"2b46":function(e,t,a){var i=a("8369");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("0aebe453",i,!0,{sourceMap:!1,shadowMode:!1})},"2cf5":function(e,t,a){"use strict";a.r(t);var i=a("0aa8"),r=a("916f");for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("0861");var o=a("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"1cbb1150",null,!1,i["a"],void 0);t["default"]=s.exports},"5e83":function(e,t,a){"use strict";a.r(t);var i=a("1287"),r=a("ae06");for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("c1cc");var o=a("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"400daa12",null,!1,i["a"],void 0);t["default"]=s.exports},8369:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-stat-tooltip-s[data-v-1cbb1150]{width:160px;white-space:normal}.uni-stat--sum-x[data-v-1cbb1150]{display:flex;justify-content:space-evenly;flex-wrap:wrap;border-radius:4px;padding:15px;box-shadow:-1px -1px 5px 0 rgba(0,0,0,.1)}.uni-stat--sum-item[data-v-1cbb1150]{white-space:nowrap;text-align:center;margin:10px 18px}.uni-stat--sum-item-width[data-v-1cbb1150]{width:100px}.uni-stat--sum-item-title[data-v-1cbb1150]{display:flex;align-items:center;justify-content:center;min-height:17px;font-size:12px;color:#666}.uni-stat--sum-item-value[data-v-1cbb1150]{font-size:24px;line-height:48px;font-weight:700;color:#333}.uni-stat--sum-item-contrast[data-v-1cbb1150]{font-size:14px;color:#666}@media screen and (max-width:500px){.uni-stat--sum-x[data-v-1cbb1150]{padding:15px 0;justify-content:space-between;flex-wrap:unset;overflow-x:auto!important}[data-v-1cbb1150]::-webkit-scrollbar{display:none}}',""]),e.exports=t},8381:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.fieldsMap=void 0;t.fieldsMap=[{title:"报错时间",field:"create_time",tooltip:"",formatter:"",filter:"timestamp"},{title:"错误信息",field:"error_msg",formatter:"",filter:"search"},{title:"原生应用包名",field:"package_name",formatter:"",filter:"search"},{title:"用户端上报的应用版本号",field:"version",formatter:"",tooltip:"manifest.json中的versionName的值",filter:"search"},{title:"平台",field:"platform",formatter:"",tooltip:"用户端上报的平台code",filter:"search"},{title:"渠道",field:"channel",formatter:"",tooltip:"用户端上报的渠道code场景值",filter:"search"},{title:"基础库版本号",field:"sdk_version",formatter:"",tooltip:"",filter:"search"},{title:"设备标识",field:"device_id",formatter:"",tooltip:"客户端携带的设备标识",filter:"search"},{title:"设备网络型号",field:"device_net",formatter:"",tooltip:"设备网络型号wifi/3G/4G/",filter:"search"},{title:"系统版本",field:"device_os",formatter:"",tooltip:"iOS平台为系统版本号，如15.1；Android平台为API等级，如30",filter:"search"},{title:"系统版本名称",field:"device_os_version",formatter:"",tooltip:"iOS平台与os字段一致；Android平台为版本名称，如5.1.1",filter:"search"},{title:"设备供应商",field:"device_vendor",formatter:"",tooltip:"",filter:"search"},{title:"设备型号",field:"device_model",formatter:"",tooltip:"",filter:"search"},{title:"是否root",field:"device_is_root",formatter:"",tooltip:"1表示root；0表示未root",filter:"range"},{title:"系统名称",field:"device_os_name",formatter:"",tooltip:"用于区别Android和鸿蒙，仅Android支持",filter:"search"},{title:"设备电池电量",field:"device_batt_level",formatter:"",tooltip:"取值范围0-100，仅Android支持",filter:"range"},{title:"电池温度",field:"device_batt_temp",formatter:"",tooltip:"仅Android支持",filter:"search"},{title:"系统已使用内存",field:"device_memory_use_size",formatter:"",tooltip:"单位为Byte，仅Android支持",filter:"range"},{title:"系统总内存",field:"device_memory_total_size",formatter:"",tooltip:"单位为Byte，仅Android支持",filter:"range"},{title:"系统磁盘已使用大小",field:"device_disk_use_size",formatter:"",tooltip:"单位为Byte，仅Android支持",filter:"range"},{title:"系统磁盘总大小",field:"device_disk_total_size",formatter:"",tooltip:"单位为Byte，仅Android支持",filter:"range"},{title:"设备支持的CPU架构",field:"device_abis",formatter:"",tooltip:"多个使用,分割，如arm64-v8a,armeabi-v7a,armeabi，仅Android支持",filter:"search"},{title:"运行的app个数",field:"app_count",formatter:"",tooltip:"包括运行的uni小程序数目，独立App时值为1",filter:"range"},{title:"APP使用的内存量",field:"app_use_memory_size",formatter:"",tooltip:"单位为Byte",filter:"range"},{title:"运行应用的个数",field:"app_count",formatter:"",filter:"range"},{title:"打开 Webview 的个数",field:"app_webview_count",formatter:"",filter:"range"},{title:"APP使用时长",field:"app_use_duration",formatter:"",tooltip:"单位为s",filter:"range"},{title:"是否前台运行",field:"app_run_fore",formatter:"",tooltip:"1表示前台运行，0表示后台运行",filter:"search"},{title:"原生应用版本名称",field:"package_version",formatter:"",tooltip:"Android的apk版本名称；iOS的ipa版本名称",filter:"search"},{title:"页面url",field:"page_url",formatter:"",filter:"search"}]},"916f":function(e,t,a){"use strict";a.r(t);var i=a("27b0"),r=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=r.a},"98a1":function(e,t,a){var i=a("a070");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("f8294c94",i,!0,{sourceMap:!1,shadowMode:!1})},a070:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".flex-between[data-v-400daa12]{margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}.uni-stat-panel[data-v-400daa12]{box-shadow:unset;border-bottom:1px solid #eee;padding:0;margin:0 15px}.uni-stat-tooltip-s[data-v-400daa12]{width:160px;white-space:normal}",""]),e.exports=t},a51d:function(e,t,a){"use strict";a.r(t);var i=a("2af3"),r=a("e2e55");for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);var o=a("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"690ab064",null,!1,i["a"],void 0);t["default"]=s.exports},ae06:function(e,t,a){"use strict";a.r(t);var i=a("c644"),r=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=r.a},c1cc:function(e,t,a){"use strict";var i=a("98a1"),r=a.n(i);r.a},c644:function(e,t,a){"use strict";(function(e){a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("b85c")),n=i(a("3835")),o=i(a("ade3")),s=i(a("5530"));a("e9c4"),a("7db0"),a("d3b7"),a("498a"),a("4d63"),a("c607"),a("ac1f"),a("2c3e"),a("25f0"),a("d81d"),a("4de4"),a("b64b"),a("c975"),a("159b"),a("14d9");var l=a("e2d3"),u=a("8381"),c=a("ca33"),d=[{title:"崩溃总数",field:"count",value:0,formatter:",",tooltip:"指原生应用在某个时间段内出现崩溃的总数"},{title:"崩溃率",field:"count/app_launch_count",computed:"count/app_launch_count",formatter:"%",value:0,tooltip:"时间范围内的总崩溃数/原生应用启动次数，如果小于0.01%，默认显示为0"}],f=e.database(),p=[],_={ascending:"asc",descending:"desc"},v={data:function(){var e;return{fieldsMap:u.fieldsMap,query:{type:"crash",dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",start_time:[]},loading:!1,popupLoading:!1,currentDateTab:0,tableData:[],popupTableData:[],panelData:JSON.parse(JSON.stringify(d)),chartData:{},chartTab:"errorCount",chartTabs:[{_id:"errorCount",name:"崩溃次数"},{_id:"errorRate",name:"崩溃率"}],collectionList:"uni-stat-app-crash-logs",schemaQuery:"",where:this.tableData,orderby:"create_time desc",orderByFieldName:"",selectedIndexs:[],options:(0,s.default)((e={pageCurrent:1,total:0,pageSizeIndex:0,pageSizeRange:[10,20,50,100],pageSize:20},(0,o.default)(e,"pageCurrent",1),(0,o.default)(e,"filterData",{}),e),c.enumConverter),errorMessage:"",exportExcel:{filename:"uni-stat-app-crash-logs.xls",type:"xls",fields:{appid:"appid",version:"version",platform:"platform",channel:"channel",sdk_version:"sdk_version",device_id:"device_id",device_net:"device_net",device_os:"device_os",device_os_version:"device_os_version",device_vendor:"device_vendor",device_model:"device_model",device_is_root:"device_is_root",device_os_name:"device_os_name",device_batt_level:"device_batt_level",device_batt_temp:"device_batt_temp",device_memory_use_size:"device_memory_use_size",device_memory_total_size:"device_memory_total_size",device_disk_use_size:"device_disk_use_size",device_disk_total_size:"device_disk_total_size",device_abis:"device_abis",app_count:"app_count",app_use_memory_size:"app_use_memory_size",app_webview_count:"app_webview_count",app_use_duration:"app_use_duration",app_run_fore:"app_run_fore",package_name:"package_name",package_version:"package_version",page_url:"page_url",error_msg:"error_msg",create_time:"create_time"}},exportExcelData:[]}},computed:{queryStr:function(){return(0,l.stringifyQuery)(this.query)},tableQuery:function(){var e=this.query,t=e.appid,a=e.platform_id,i=e.version_id,r=e.start_time,n=uni.getStorageSync("platform_channel_last_data"),o=uni.getStorageSync("uni-stat-app-versions_last_data"),s=Array.isArray(n)&&n.find((function(e){return e._id===a})),u=Array.isArray(o)&&o.find((function(e){return e._id===i})),c=(0,l.stringifyQuery)({appid:t,create_time:r,platform:s&&s.code||"",version:u&&u.text||""});return c},versionQuery:function(){var e=this.query,t=e.appid,a=e.uni_platform,i=(0,l.stringifyQuery)({appid:t,uni_platform:a,type:"native_app"});return i}},created:function(){var e=this;this.debounceGet=(0,l.debounce)((function(){e.getAllData(e.queryStr),e.where=e.tableQuery,e.$nextTick((function(){e.$refs.udb&&e.$refs.udb.loadData()}),200)}),300),this.debounceGet()},watch:{query:{deep:!0,handler:function(e){this.options.pageCurrent=1,this.debounceGet()}},chartTab:function(e){this.getChartData(this.queryStr)}},onLoad:function(){this._filter={}},methods:{onqueryload:function(e){this.exportExcelData=e,this.tableData=e},getWhere:function(){var e=this.schemaQuery.trim();if(!e)return"";var t=new RegExp(e,"i");return p.map((function(e){return t+".test("+e+")"})).join(" || ")},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},sortChange:function(e,t){var a=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+_[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){a.$refs.udb.loadData()}))},filterChange:function(e,t){var a=this;this._filter[t]={type:e.filterType,value:e.filter};var i=(0,c.filterToWhere)(this._filter,f.command);Object.keys(i).length?this.where=i:this.where="",this.$nextTick((function(){a.$refs.udb.loadData()}))},useDatetimePicker:function(){this.currentDateTab=-1},changePlatform:function(e,t,a,i){this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange:function(e,t){this.currentDateTab=t;var a=(0,l.getTimeOfSomeDayAgo)(e),i=(0,l.getTimeOfSomeDayAgo)(0)-1;this.query.start_time=[a,i]},getAllData:function(e){-1!==e.indexOf("appid")?(this.errorMessage="",this.getPanelData(e),this.getChartData(e)):this.errorMessage="请先选择应用"},getPanelData:function(t){var a=this,i=(0,l.stringifyQuery)(this.query,!1,["uni_platform"]),r=e.database();r.collection("uni-stat-error-result").where(i).field("count as temp_count, app_launch_count as temp_app_launch_count, appid").groupBy("appid").groupField("sum(temp_count) as count, sum(temp_app_launch_count) as app_launch_count").get({getCount:!0}).then((function(e){var t=e.result,i=(t.count,t.data,e.result.data[0]),r=Object.assign({},a.query);delete r.type,a.getTotalLaunch((0,l.stringifyQuery)(r,!1,["uni_platform"])).then((function(e){var t=e.result.data[0];if(i){var r=t&&t.total_app_launch_count;i.app_launch_count=r,a.panelData=(0,l.mapfields)(d,i)}}))}))},getTotalLaunch:function(t){var a=e.database();return a.collection("uni-stat-result").where(t).groupBy("appid").groupField("sum(app_launch_count) as total_app_launch_count").get()},getChartData:function(t){var a=this,i=(0,l.stringifyQuery)(this.query,!1,["uni_platform"]);this.chartData={};this.options.pageCurrent;var o=e.database(),s=(0,n.default)(this.query.start_time,2),u=s[0],c=s[1],d=(0,l.getAllDateCN)(new Date(u),new Date(c));o.collection("uni-stat-error-result").where(i).field("count as temp_count, app_launch_count as temp_app_launch_count, start_time").groupBy("start_time").groupField("sum(temp_count) as count, sum(temp_app_launch_count) as app_launch_count").orderBy("start_time","asc").get({getCount:!0}).then((function(e){var t=e.result,i=(t.count,t.data),n=[];d.forEach((function(e){var t=i.find((function(t){return t.start_time===e}));t?n.push(t):n.push({app_launch_count:0,count:0,start_time:e})}));var o={categories:[],series:[{name:"暂无数据",data:[]}]};if("errorCount"===a.chartTab){var s,u=o.series[0]={name:"崩溃次数",data:[]},c=o.categories,f=(0,r.default)(n);try{for(f.s();!(s=f.n()).done;){var p=s.value,_=p.start_time,v=(0,l.formatDate)(_,"day"),m=p.count;c.push(v),u.data.push(m)}}catch(z){f.e(z)}finally{f.f()}a.chartData=o}else{var h,g=o.series[0]={name:"崩溃率(%)",data:[],lineStyle:{color:"#EE6666",width:1},itemStyle:{borderWidth:1,borderColor:"#EE6666",color:"#EE6666"},areaStyle:{color:{colorStops:[{offset:0,color:"#EE6666"},{offset:1,color:"#FFFFFF"}]}}},b=o.categories,y=(0,r.default)(n);try{for(y.s();!(h=y.n()).done;){var x=h.value,w=x.count,k=x.app_launch_count,C=x.start_time,D=(0,l.formatDate)(C,"day");b.push(D);var S=w/k;S=S?S.toFixed(2):0,g.data.push(S)}}catch(z){y.e(z)}finally{y.f()}a.chartData=o}})).finally((function(){}))}}};t.default=v}).call(this,a("a9ff")["default"])},ca33:function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=void 0,t.filterToWhere=function(e,t){var a={};for(var i in e){var o=e[i],s=o.type,l=o.value;switch(s){case"search":"string"===typeof l&&l.length&&(a[i]=new RegExp(l));break;case"select":if(l.length){var u,c=[],d=(0,n.default)(l);try{for(d.s();!(u=d.n()).done;){var f=u.value;c.push(t.eq(f))}}catch(k){d.e(k)}finally{d.f()}a[i]=t.or(c)}break;case"range":if(l.length){var p=l[0],_=l[1];a[i]=t.and([t.gte(p),t.lte(_)])}break;case"date":if(l.length){var v=(0,r.default)(l,2),m=v[0],h=v[1],g=new Date(m),b=new Date(h);a[i]=t.and([t.gte(g),t.lte(b)])}break;case"timestamp":if(l.length){var y=(0,r.default)(l,2),x=y[0],w=y[1];a[i]=t.and([t.gte(x),t.lte(w)])}break}}return a},t.validator=void 0;var r=i(a("3835")),n=i(a("b85c"));a("4d63"),a("c607"),a("ac1f"),a("2c3e"),a("25f0"),a("14d9");t.validator={appid:{rules:[{format:"string"}]},version:{rules:[{format:"string"}]},platform:{rules:[{format:"string"}]},channel:{rules:[{format:"string"}]},sdk_version:{rules:[{format:"string"}]},device_id:{rules:[{format:"string"}]},device_net:{rules:[{format:"string"}]},device_os:{rules:[{format:"string"}]},device_os_version:{rules:[{format:"string"}]},device_vendor:{rules:[{format:"string"}]},device_model:{rules:[{format:"string"}]},device_is_root:{rules:[{format:"int"}]},device_os_name:{rules:[{format:"string"}]},device_batt_level:{rules:[{format:"int"}]},device_batt_temp:{rules:[{format:"string"}]},device_memory_use_size:{rules:[{format:"int"}]},device_memory_total_size:{rules:[{format:"int"}]},device_disk_use_size:{rules:[{format:"int"}]},device_disk_total_size:{rules:[{format:"int"}]},device_abis:{rules:[{format:"string"}]},app_count:{rules:[{format:"int"}]},app_use_memory_size:{rules:[{format:"int"}]},app_webview_count:{rules:[{format:"int"}]},app_use_duration:{rules:[{format:"int"}]},app_run_fore:{rules:[{format:"int"}]},package_name:{rules:[{format:"string"}]},package_version:{rules:[{format:"string"}]},page_url:{rules:[{format:"string"}]},error_msg:{rules:[{format:"string"}]},create_time:{rules:[{format:"timestamp"}]}};t.enumConverter={}},dc78:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("e25e");var i=a("82b9"),r={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,i.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var e=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){e.refresh()}),parseInt(this.refreshRate)))}}};t.default=r},e2e55:function(e,t,a){"use strict";a.r(t);var i=a("dc78"),r=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=r.a}}]);