(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-MuserPhoneValue-detail"],{"0cbc":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return n}));var n={unicloudDb:a("960d").default,uniLoadMore:a("137f").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"container"},[a("unicloud-db",{ref:"udb",attrs:{options:e.options,collection:e.collectionList,getone:!0,manual:!0},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data,i=t.loading,u=t.error,l=t.options;return[u?a("v-uni-view",[e._v(e._s(u.message))]):i?a("v-uni-view",[a("uni-load-more",{attrs:{contentText:e.loadMore,status:"loading"}})],1):n?a("v-uni-view",[a("v-uni-view",[a("v-uni-text",[e._v("年龄")]),a("v-uni-text",[e._v(e._s(n.age))])],1),a("v-uni-view",[a("v-uni-text",[e._v("性别")]),a("v-uni-text",[e._v(e._s(l.sex_valuetotext[n.sex]))])],1),a("v-uni-view",[a("v-uni-text",[e._v("品牌")]),a("v-uni-text",[e._v(e._s(n.phonebrand&&n.phonebrand[0]&&n.phonebrand[0].text))])],1),a("v-uni-view",[a("v-uni-text",[e._v("内存")]),a("v-uni-text",[e._v(e._s(l.ram_valuetotext[n.ram]))])],1),a("v-uni-view",[a("v-uni-text",[e._v("闪存")]),a("v-uni-text",[e._v(e._s(l.rom_valuetotext[n.rom]))])],1),a("v-uni-view",[a("v-uni-text",[e._v("品牌影响")]),a("v-uni-text",[e._v(e._s(l.isbrand_valuetotext[n.isbrand]))])],1),a("v-uni-view",[a("v-uni-text",[e._v("预算")]),a("v-uni-text",[e._v(e._s(n.moneymaxjiag))])],1),a("v-uni-view",[a("v-uni-text",[e._v("金钱影响")]),a("v-uni-text",[e._v(e._s(l.ismoney_valuetotext[n.ismoney]))])],1),a("v-uni-view",[a("v-uni-text",[e._v("重要")]),a("v-uni-text",[e._v(e._s(l.import_valuetotext[n.import]))])],1),a("v-uni-view",[a("v-uni-text",[e._v("显示")]),a("v-uni-text",[e._v(e._s(n.screenv))])],1),a("v-uni-view",[a("v-uni-text",[e._v("影像")]),a("v-uni-text",[e._v(e._s(n.camerav))])],1),a("v-uni-view",[a("v-uni-text",[e._v("快充")]),a("v-uni-text",[e._v(e._s(n.fastchargev))])],1),a("v-uni-view",[a("v-uni-text",[e._v("续航")]),a("v-uni-text",[e._v(e._s(n.endurancev))])],1),a("v-uni-view",[a("v-uni-text",[e._v("轻薄")]),a("v-uni-text",[e._v(e._s(n.lightthinv))])],1),a("v-uni-view",[a("v-uni-text",[e._v("性能")]),a("v-uni-text",[e._v(e._s(n.performancev))])],1)],1):e._e()]}}])}),a("v-uni-view",{staticClass:"btns"},[a("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleUpdate.apply(void 0,arguments)}}},[e._v("修改")]),a("v-uni-button",{staticClass:"btn-delete",attrs:{type:"warn"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleDelete.apply(void 0,arguments)}}},[e._v("删除")])],1)],1)},u=[]},"0d88":function(e,t,a){"use strict";a.r(t);var n=a("fc6e"),i=a.n(n);for(var u in n)["default"].indexOf(u)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(u);t["default"]=i.a},"12a5":function(e,t,a){"use strict";a.r(t);var n=a("0cbc"),i=a("0d88");for(var u in i)["default"].indexOf(u)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(u);a("25ac");var l=a("f0c5"),r=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"2ce1a574",null,!1,n["a"],void 0);t["default"]=r.exports},"25ac":function(e,t,a){"use strict";var n=a("bc59"),i=a.n(n);i.a},bc59:function(e,t,a){var n=a("d385");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("7d72745e",n,!0,{sourceMap:!1,shadowMode:!1})},d385:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".container[data-v-2ce1a574]{padding:10px}.btns[data-v-2ce1a574]{margin-top:10px;\ndisplay:flex;\nflex-direction:row}.btns uni-button[data-v-2ce1a574]{flex:1}.btn-delete[data-v-2ce1a574]{margin-left:10px}",""]),e.exports=t},d983:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=void 0,t.filterToWhere=function(e,t){var a={};for(var n in e){var l=e[n],r=l.type,v=l.value;switch(r){case"search":"string"===typeof v&&v.length&&(a[n]=new RegExp(v));break;case"select":if(v.length){var o,s=[],d=(0,u.default)(v);try{for(d.s();!(o=d.n()).done;){var c=o.value;s.push(t.eq(c))}}catch(M){d.e(M)}finally{d.f()}a[n]=t.or(s)}break;case"range":if(v.length){var m=v[0],f=v[1];a[n]=t.and([t.gte(m),t.lte(f)])}break;case"date":if(v.length){var x=(0,i.default)(v,2),_=x[0],b=x[1],p=new Date(_),h=new Date(b);a[n]=t.and([t.gte(p),t.lte(h)])}break;case"timestamp":if(v.length){var g=(0,i.default)(v,2),w=g[0],y=g[1];a[n]=t.and([t.gte(w),t.lte(y)])}break}}return a},t.validator=void 0;var i=n(a("3835")),u=n(a("b85c"));a("4d63"),a("c607"),a("ac1f"),a("2c3e"),a("25f0"),a("14d9");t.validator={age:{rules:[{format:"int"},{minimum:10,maximum:999}],title:"年龄",label:"年龄"},sex:{rules:[{format:"int"},{range:[{text:"女",value:0},{text:"男",value:1}]}],title:"性别",label:"性别"},phonebrand:{rules:[{format:"string"}],title:"品牌",label:"品牌"},ram:{rules:[{format:"int"},{range:[{value:4,text:4},{value:6,text:6},{value:8,text:8},{value:12,text:12},{value:16,text:16},{value:18,text:18},{value:"其他",text:"其他"}]}],title:"内存",label:"内存"},rom:{rules:[{format:"int"},{range:[{value:32,text:32},{value:64,text:64},{value:128,text:128},{value:256,text:256},{value:512,text:512},{value:1024,text:1024},{value:"其他",text:"其他"}]}],title:"闪存",label:"闪存"},isbrand:{rules:[{format:"int"},{range:[{text:"无影响",value:0},{text:"有影响",value:1}]}],title:"品牌影响",label:"品牌影响"},moneymaxjiag:{rules:[{format:"int"},{minimum:100,maximum:99999}],title:"预算",label:"预算"},ismoney:{rules:[{format:"int"},{range:[{text:"贵",value:0},{text:"不贵",value:1}]}],title:"金钱影响",label:"金钱影响"},import:{rules:[{format:"string"},{range:[{value:"屏幕显示效果",text:"屏幕显示效果"},{value:"影像(拍照)",text:"影像(拍照)"},{value:"充电速度",text:"充电速度"},{value:"续航/电池容量",text:"续航/电池容量"},{value:"重量/尺寸",text:"重量/尺寸"},{value:"性能",text:"性能"}]}],title:"重要",label:"重要"},screenv:{rules:[{format:"int"},{minimum:1,maximum:99}],title:"显示",defaultValue:1,label:"显示"},camerav:{rules:[{format:"int"},{minimum:1,maximum:99}],title:"影像",defaultValue:1,label:"影像"},fastchargev:{rules:[{format:"int"},{minimum:1,maximum:99}],title:"快充",defaultValue:1,label:"快充"},endurancev:{rules:[{format:"int"},{minimum:1,maximum:99}],title:"续航",defaultValue:1,label:"续航"},lightthinv:{rules:[{format:"int"},{minimum:1,maximum:99}],title:"轻薄",defaultValue:1,label:"轻薄"},performancev:{rules:[{format:"int"},{minimum:1,maximum:99}],title:"性能",defaultValue:1,label:"性能"}};t.enumConverter={sex_valuetotext:{0:"女",1:"男"},ram_valuetotext:{4:4,6:6,8:8,12:12,16:16,18:18,"其他":"其他"},rom_valuetotext:{32:32,64:64,128:128,256:256,512:512,1024:1024,"其他":"其他"},isbrand_valuetotext:{0:"无影响",1:"有影响"},ismoney_valuetotext:{0:"贵",1:"不贵"},import_valuetotext:{"屏幕显示效果":"屏幕显示效果","影像(拍照)":"影像(拍照)","充电速度":"充电速度","续航/电池容量":"续航/电池容量","重量/尺寸":"重量/尺寸","性能":"性能"}}},fc6e:function(e,t,a){"use strict";(function(e){a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530")),u=a("d983"),l=e.database(),r={data:function(){return{queryWhere:"",collectionList:[l.collection("MuserPhoneValue").field("age,sex,phonebrand,ram,rom,isbrand,moneymaxjiag,ismoney,import,screenv,camerav,fastchargev,endurancev,lightthinv,performancev").getTemp(),l.collection("Manufacturer_brand").field("_id, name as text").getTemp()],loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},options:(0,i.default)({},u.enumConverter)}},onLoad:function(e){this._id=e.id},onReady:function(){this._id&&(this.collectionList=[l.collection("MuserPhoneValue").where('_id=="'+this._id+'"').field("age,sex,phonebrand,ram,rom,isbrand,moneymaxjiag,ismoney,import,screenv,camerav,fastchargev,endurancev,lightthinv,performancev").getTemp(),l.collection("Manufacturer_brand").field("_id, name as text").getTemp()])},methods:{handleUpdate:function(){var e=this;uni.navigateTo({url:"./edit?id="+this._id,events:{refreshData:function(){e.$refs.udb.loadData({clear:!0})}}})},handleDelete:function(){this.$refs.udb.remove(this._id,{success:function(e){uni.navigateTo({url:"./list"})}})}}};t.default=r}).call(this,a("a9ff")["default"])}}]);