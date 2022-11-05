"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {
    tz() {
      common_vendor.index.navigateTo({
        url: "/pages/opendb-contacts/list"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.o((...args) => $options.tz && $options.tz(...args)),
    c: common_vendor.o((...args) => $options.tz && $options.tz(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/20210408/Desktop/xcx/1012/txl/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
