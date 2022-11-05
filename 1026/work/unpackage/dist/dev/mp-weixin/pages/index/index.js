"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onShow: function() {
    common_vendor.index.pageScrollTo({
      scrollTop: 0
    });
    common_vendor.index.showModal({
      title: "\u63D0\u793A",
      content: "\u4EC5\u4F9B\u5A31\u4E50",
      success: function(res) {
        if (res.confirm) {
          console.log("\u7528\u6237\u70B9\u51FB\u786E\u5B9A");
        } else if (res.cancel) {
          console.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
        }
      }
    });
  },
  data() {
    return {
      linshi: "1",
      range1: ["\u4E13\u79D1\u53CA\u4EE5\u4E0B", "\u666E\u901A\u672C\u79D1", "211/985\u672C\u79D1", "\u666E\u901A\u7855\u58EB", "211/985\u7855\u58EB", "\u666E\u901A\u535A\u58EB", "211/985\u535A\u58EB"],
      index1: 1,
      range2: ["\u504F\u8FDC\u5730\u533A", "\u5DE5\u5382/\u6237\u5916", "\u666E\u901A\u5DE5\u4F5C\u73AF\u5883", "\u4F53\u5236"],
      index2: 2,
      range3: ["\u80FD\u529B\u8F83\u5DEE\u5C45\u591A", "\u4E00\u822C\u6C34\u5E73\u5C45\u591A", "\u80FD\u529B\u8F83\u5F3A\u5C45\u591A"],
      index3: 1,
      range4: ["\u65E0\u8981\u6C42", "\u4E13\u4E1A\u7EA7\u8981\u6C42", "\u719F\u7EC3\u7EA7\u8981\u6C42", "\u4E13\u5BB6\u7EA7\u8981\u6C42"],
      index4: 0,
      range5: ["\u591C\u73ED", "\u975E\u6B63\u5E38\u4E0A\u73ED\u65F6\u95F4", "\u6B63\u5E38\u4F5C\u606F"],
      index5: 2,
      count: "2",
      days: "",
      money: "",
      status: false
    };
  },
  methods: {
    change(e) {
      console.log("picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
      this.index1 = e.detail.value;
    },
    change2(e) {
      console.log("picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
      this.index2 = e.detail.value;
    },
    change3(e) {
      console.log("picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
      this.index3 = e.detail.value;
    },
    change4(e) {
      console.log("picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
      this.index4 = e.detail.value;
    },
    change5(e) {
      console.log("picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
      this.index5 = e.detail.value;
    },
    formReset() {
      this.status = false;
    },
    formSubmit(e) {
      console.log(e);
      this.linshi = e.detail.value;
      let linshi = e.detail.value;
      this.days = linshi.days;
      let days = linshi.days;
      this.money = linshi.money;
      let money = linshi.money;
      let hours = linshi.hours;
      let commute = linshi.commute;
      let loaf = linshi.loaf;
      let edu = linshi.edu;
      let environment = linshi.environment;
      let sex = linshi.sex;
      let Same = linshi.Same;
      let colleague = linshi.colleague;
      let occupation = linshi.occupation;
      linshi.special;
      let count = Number(money) / Number(days) * (Number(environment) / 10 + 0.8) * (Number(sex) / Number(Same) + 0.9) * (Number(colleague) / 10 + 0.9) / (35 * (Number(hours) + Number(commute) - 0.5 * Number(loaf)) * (Number(edu) / 5 + 0.8) * (Number(occupation) / 10 + 1));
      this.count = count.toFixed(1);
      this.status = true;
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_easyinput2 + _easycom_uni_section2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.input),
    b: common_vendor.o(($event) => _ctx.value = $event),
    c: common_vendor.p({
      name: "days",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5929\u6570(\u53C2\u8003\u503C22)",
      modelValue: _ctx.value
    }),
    d: common_vendor.p({
      title: "1.\u5DE5\u4F5C\u65F6\u95F4",
      subTitle: "\u6708\u5DE5\u4F5C\u65F6\u95F4",
      type: "line",
      padding: true
    }),
    e: common_vendor.o(_ctx.input),
    f: common_vendor.o(($event) => $data.money = $event),
    g: common_vendor.p({
      name: "money",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57(\u53C2\u8003\u503C5000)",
      modelValue: $data.money
    }),
    h: common_vendor.p({
      title: "2.\u6708\u85AA",
      subTitle: "\u85AA\u8D44+\u8865\u8D34",
      type: "line",
      padding: true
    }),
    i: common_vendor.o(_ctx.input),
    j: common_vendor.o(($event) => _ctx.hours = $event),
    k: common_vendor.p({
      name: "hours",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57(\u53C2\u8003\u503C9)",
      modelValue: _ctx.hours
    }),
    l: common_vendor.p({
      title: "3.\u5DE5\u4F5C\u65F6\u957F",
      subTitle: "\u65E5\u5DE5\u4F5C\u65F6\u957F=\u4E0B\u73ED\u65F6\u95F4-\u4E0A\u73ED\u65F6\u95F4",
      type: "line",
      padding: true
    }),
    m: common_vendor.o(_ctx.input),
    n: common_vendor.o(($event) => _ctx.commute = $event),
    o: common_vendor.p({
      name: "commute",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57(\u53C2\u8003\u503C:3)",
      modelValue: _ctx.commute
    }),
    p: common_vendor.p({
      title: "4.\u901A\u52E4\u65F6\u95F4",
      subTitle: "\u65E5\u901A\u52E4\u65F6\u957F=\u4E0A\u73ED\u901A\u52E4+\u4E0B\u73ED\u901A\u52E4",
      type: "line",
      padding: true
    }),
    q: common_vendor.o(_ctx.input),
    r: common_vendor.o(($event) => _ctx.loaf = $event),
    s: common_vendor.p({
      name: "loaf",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57(\u53C2\u8003\u503C:3)",
      modelValue: _ctx.loaf
    }),
    t: common_vendor.p({
      title: "5.\u6478\u9C7C\u65F6\u95F4",
      subTitle: "\u6478\u9C7C\u65F6\u957F=\u4E0A\u73ED\u6478\u9C7C+\u5403\u996D\u65F6\u95F4+\u5348\u4F11\u65F6\u95F4",
      type: "line",
      padding: true
    }),
    v: common_vendor.t($data.range1[$data.index1]),
    w: common_vendor.o((...args) => $options.change && $options.change(...args)),
    x: $data.index1,
    y: $data.range1,
    z: common_vendor.p({
      title: "6.\u5B66\u5386",
      subTitle: "\u6700\u9AD8\u5B66\u5386",
      type: "line",
      padding: true
    }),
    A: common_vendor.t($data.range2[$data.index2]),
    B: common_vendor.o((...args) => $options.change2 && $options.change2(...args)),
    C: $data.index2,
    D: $data.range2,
    E: common_vendor.p({
      title: "7.\u5DE5\u4F5C\u73AF\u5883",
      subTitle: "\u5DE5\u4F5C\u73AF\u5883",
      type: "line",
      padding: true
    }),
    F: common_vendor.o(_ctx.input),
    G: common_vendor.o(($event) => _ctx.sex = $event),
    H: common_vendor.p({
      name: "sex",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57(\u53C2\u8003\u503C:3)",
      modelValue: _ctx.sex
    }),
    I: common_vendor.p({
      title: "8.\u5F02\u6027\u6307\u6570",
      subTitle: "\u5468\u56F4\u9AD8\u989C\u503C\u7684\u5F02\u6027",
      type: "line",
      padding: true
    }),
    J: common_vendor.o(_ctx.input),
    K: common_vendor.o(($event) => _ctx.Same = $event),
    L: common_vendor.p({
      name: "Same",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57(\u53C2\u8003\u503C:3)",
      modelValue: _ctx.Same
    }),
    M: common_vendor.p({
      title: "9.\u540C\u6027\u6307\u6570",
      subTitle: "\u5468\u56F4\u540C\u6027\u6570\u91CF[\u6BCF\u4E00\u4E2A\u540C\u6027\u90FD\u662F\u6F5C\u5728\u7684\u7ADE\u4E89\u8005]",
      type: "line",
      padding: true
    }),
    N: common_vendor.t($data.range3[$data.index3]),
    O: common_vendor.o((...args) => $options.change3 && $options.change3(...args)),
    P: $data.index3,
    Q: $data.range3,
    R: common_vendor.p({
      title: "10.\u540C\u4E8B\u6C34\u5E73",
      subTitle: "\u5468\u56F4\u540C\u4E8B\u505A\u4E8B\u505A\u4EBA\u7684\u6C34\u5E73",
      type: "line",
      padding: true
    }),
    S: common_vendor.t($data.range4[$data.index4]),
    T: common_vendor.o((...args) => $options.change4 && $options.change4(...args)),
    U: $data.index4,
    V: $data.range4,
    W: common_vendor.p({
      title: "11.\u804C\u4E1A\u95E8\u69DB",
      subTitle: "\u804C\u4E1A\u8BC1\u4E66\u9700\u6C42\u95E8\u69DB",
      type: "line",
      padding: true
    }),
    X: common_vendor.t($data.range5[$data.index5]),
    Y: common_vendor.o((...args) => $options.change5 && $options.change5(...args)),
    Z: $data.index5,
    aa: $data.range5,
    ab: common_vendor.p({
      title: "12.\u7279\u6B8A\u4E0A\u73ED\u60C5\u51B5",
      subTitle: "\u591C\u73ED\u8981\u547D,\u65E9\u73ED\u6298\u78E8\u4EBA\r\n          (\u975E\u52A0\u73ED\u60C5\u51B5:\u65E9\u4E8E9\u70B9\u4E0A\u73EDOR\u665A\u4E8E6\u70B9\u4E0B\u73ED\u7684\u90FD\u7B97\u975E\u6B63\u5E38!)",
      type: "line",
      padding: true
    }),
    ac: common_vendor.t($data.count),
    ad: $data.status,
    ae: common_vendor.o((...args) => $options.formSubmit && $options.formSubmit(...args)),
    af: common_vendor.o((...args) => $options.formReset && $options.formReset(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/20210408/Desktop/xcx/1026/work/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
