"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      content: "",
      list: ""
    };
  },
  onLoad() {
    common_vendor.pn.callFunction({
      name: "fun",
      data: {
        api: "getmassage"
      }
    }).then((res) => {
      this.list = res.result.data;
    });
  },
  methods: {
    publish() {
      common_vendor.pn.callFunction({
        name: "fun",
        data: {
          api: "publish",
          content: this.content
        }
      }).then((res) => {
        console.log(res);
        this.list.push({
          _id: res.result.id,
          content: this.content
        });
        this.content = "";
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.content,
    b: common_vendor.o(($event) => $data.content = $event.detail.value),
    c: common_vendor.o((...args) => $options.publish && $options.publish(...args)),
    d: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.content),
        b: item._id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/20210408/Desktop/xcx/0920/liuyan/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
