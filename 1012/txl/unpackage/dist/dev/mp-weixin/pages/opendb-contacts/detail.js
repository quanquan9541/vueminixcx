"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
var js_sdk_validator_opendbContacts = require("../../js_sdk/validator/opendb-contacts.js");
const db = common_vendor.pn.database();
const _sfc_main = {
  data() {
    return {
      queryWhere: "",
      collectionList: [db.collection("opendb-contacts").field("username,gender,mobile,email,comment,nation,add").getTemp(), db.collection("opendb-nation-china").field("name as text,_id").getTemp(), db.collection("opendb-city-china").field("name as text,code").getTemp()],
      loadMore: {
        contentdown: "",
        contentrefresh: "",
        contentnomore: ""
      },
      options: __spreadValues({}, js_sdk_validator_opendbContacts.enumConverter)
    };
  },
  onLoad(e) {
    this._id = e.id;
  },
  onReady() {
    if (this._id) {
      this.collectionList = [db.collection("opendb-contacts").where('_id=="' + this._id + '"').field("username,gender,mobile,email,comment,nation,add").getTemp(), db.collection("opendb-nation-china").field("name as text,_id").getTemp(), db.collection("opendb-city-china").field("name as text,code").getTemp()];
    }
  },
  methods: {
    handleUpdate() {
      common_vendor.index.navigateTo({
        url: "./edit?id=" + this._id,
        events: {
          refreshData: () => {
            this.$refs.udb.loadData({
              clear: true
            });
          }
        }
      });
    },
    handleDelete() {
      this.$refs.udb.remove(this._id, {
        success: (res) => {
          common_vendor.index.navigateTo({
            url: "./list"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_uni_link2 = common_vendor.resolveComponent("uni-link");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_load_more2 + _easycom_uni_link2 + _easycom_unicloud_db2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_uni_link = () => "../../uni_modules/uni-link/components/uni-link/uni-link.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_load_more + _easycom_uni_link + _easycom_unicloud_db)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.w(({
      data,
      loading,
      error,
      options
    }, s0, i0) => {
      return common_vendor.e({
        a: error
      }, error ? {
        b: common_vendor.t(error.message)
      } : loading ? {
        d: "2a0a2e4f-1-" + i0 + ",2a0a2e4f-0",
        e: common_vendor.p({
          contentText: $data.loadMore,
          status: "loading"
        })
      } : data ? {
        g: common_vendor.t(data.username),
        h: common_vendor.t(options.gender_valuetotext[data.gender]),
        i: common_vendor.t(data.mobile),
        j: "2a0a2e4f-2-" + i0 + ",2a0a2e4f-0",
        k: common_vendor.p({
          href: "mailto:" + data.email,
          text: data.email
        }),
        l: common_vendor.t(data.comment),
        m: common_vendor.t(data.nation && data.nation[0] && data.nation[0].text),
        n: common_vendor.t(data.add && data.add[0] && data.add[0].text)
      } : {}, {
        c: loading,
        f: data,
        o: i0,
        p: s0
      });
    }, {
      name: "d",
      path: "a",
      vueId: "2a0a2e4f-0"
    }),
    b: common_vendor.sr("udb", "2a0a2e4f-0"),
    c: common_vendor.p({
      options: $data.options,
      collection: $data.collectionList,
      getone: true,
      manual: true
    }),
    d: common_vendor.o((...args) => $options.handleUpdate && $options.handleUpdate(...args)),
    e: common_vendor.o((...args) => $options.handleDelete && $options.handleDelete(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/20210408/Desktop/xcx/1012/txl/pages/opendb-contacts/detail.vue"]]);
wx.createPage(MiniProgramPage);
