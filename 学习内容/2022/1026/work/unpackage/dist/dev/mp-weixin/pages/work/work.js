"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      linshi: "1",
      range1: ["\u4E13\u79D1\u53CA\u4EE5\u4E0B", "\u666E\u901A\u672C\u79D1", "211/985\u672C\u79D1", "\u666E\u901A\u7855\u58EB", "211/985\u7855\u58EB", "\u666E\u901A\u535A\u58EB", "211/985\u535A\u58EB"],
      index1: 1,
      range2: ["\u504F\u8FDC\u5730\u533A", "\u5DE5\u5382/\u6237\u5916", "\u666E\u901A\u5DE5\u4F5C\u73AF\u5883", "\u4F53\u5236"],
      index2: 2,
      range3: ["\u80FD\u529B\u8F83\u5DEE\u5C45\u591A", "\u4E00\u822C\u6C34\u5E73\u5C45\u591A", "\u80FD\u529B\u8F83\u5F3A\u5C45\u591A"],
      index3: 1,
      range4: ["\u65E0\u8981\u6C42", "\u4E00\u822C\u8981\u6C42", "\u4E13\u4E1A\u7EA7\u8981\u6C42", "\u719F\u7EC3\u7EA7\u8981\u6C42"],
      index4: 0,
      range5: ["\u591C\u73ED", "\u975E\u6B63\u5E38\u4E0A\u73ED\u65F6\u95F4", "\u6B63\u5E38\u4F5C\u606F"],
      index5: 2,
      count: "2",
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
      let days = linshi.days;
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
    b: common_vendor.p({
      name: "days",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5929\u6570"
    }),
    c: common_vendor.p({
      title: "\u5DE5\u4F5C\u65F6\u95F4",
      subTitle: "\u6708\u5DE5\u4F5C\u65F6\u95F4",
      type: "line",
      padding: true
    }),
    d: common_vendor.o(_ctx.input),
    e: common_vendor.o(($event) => _ctx.money = $event),
    f: common_vendor.p({
      name: "money",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57",
      modelValue: _ctx.money
    }),
    g: common_vendor.p({
      title: "\u6708\u85AA",
      subTitle: "\u85AA\u8D44+\u8865\u8D34",
      type: "line",
      padding: true
    }),
    h: common_vendor.o(_ctx.input),
    i: common_vendor.o(($event) => _ctx.hours = $event),
    j: common_vendor.p({
      name: "hours",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57",
      modelValue: _ctx.hours
    }),
    k: common_vendor.p({
      title: "\u5DE5\u4F5C\u65F6\u957F",
      subTitle: "\u65E5\u5DE5\u4F5C\u65F6\u957F=\u4E0B\u73ED\u65F6\u95F4-\u4E0A\u73ED\u65F6\u95F4",
      type: "line",
      padding: true
    }),
    l: common_vendor.o(_ctx.input),
    m: common_vendor.o(($event) => _ctx.commute = $event),
    n: common_vendor.p({
      name: "commute",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57",
      modelValue: _ctx.commute
    }),
    o: common_vendor.p({
      title: "\u901A\u52E4\u65F6\u95F4",
      subTitle: "\u65E5\u901A\u52E4\u65F6\u957F=\u4E0A\u73ED\u901A\u52E4+\u4E0B\u73ED\u901A\u52E4",
      type: "line",
      padding: true
    }),
    p: common_vendor.o(_ctx.input),
    q: common_vendor.o(($event) => _ctx.loaf = $event),
    r: common_vendor.p({
      name: "loaf",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57",
      modelValue: _ctx.loaf
    }),
    s: common_vendor.p({
      title: "\u6478\u9C7C\u65F6\u95F4",
      subTitle: "\u6478\u9C7C\u65F6\u957F=\u4E0A\u73ED\u6478\u9C7C+\u5403\u996D\u65F6\u95F4+\u5348\u4F11\u65F6\u95F4",
      type: "line",
      padding: true
    }),
    t: common_vendor.t($data.range1[$data.index1]),
    v: common_vendor.o((...args) => $options.change && $options.change(...args)),
    w: $data.index1,
    x: $data.range1,
    y: common_vendor.p({
      title: "\u5B66\u5386",
      subTitle: "\u6700\u9AD8\u5B66\u5386",
      type: "line",
      padding: true
    }),
    z: common_vendor.t($data.range2[$data.index2]),
    A: common_vendor.o((...args) => $options.change2 && $options.change2(...args)),
    B: $data.index2,
    C: $data.range2,
    D: common_vendor.p({
      title: "\u5DE5\u4F5C\u73AF\u5883",
      subTitle: "\u5DE5\u4F5C\u73AF\u5883",
      type: "line",
      padding: true
    }),
    E: common_vendor.o(_ctx.input),
    F: common_vendor.o(($event) => _ctx.sex = $event),
    G: common_vendor.p({
      name: "sex",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57",
      modelValue: _ctx.sex
    }),
    H: common_vendor.p({
      title: "\u5F02\u6027\u6307\u6570",
      subTitle: "\u5468\u56F4\u9AD8\u989C\u503C\u7684\u5F02\u6027",
      type: "line",
      padding: true
    }),
    I: common_vendor.o(_ctx.input),
    J: common_vendor.o(($event) => _ctx.Same = $event),
    K: common_vendor.p({
      name: "Same",
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57",
      modelValue: _ctx.Same
    }),
    L: common_vendor.p({
      title: "\u540C\u6027\u6307\u6570",
      subTitle: "\u5468\u56F4\u5F02\u6027\u6570\u91CF[\u6BCF\u4E00\u4E2A\u540C\u6027\u90FD\u662F\u6F5C\u5728\u7684\u7ADE\u4E89\u8005]",
      type: "line",
      padding: true
    }),
    M: common_vendor.t($data.range3[$data.index3]),
    N: common_vendor.o((...args) => $options.change3 && $options.change3(...args)),
    O: $data.index3,
    P: $data.range3,
    Q: common_vendor.p({
      title: "\u540C\u4E8B\u6C34\u5E73",
      subTitle: "\u5468\u56F4\u540C\u4E8B\u505A\u4E8B\u505A\u4EBA\u7684\u6C34\u5E73",
      type: "line",
      padding: true
    }),
    R: common_vendor.t($data.range4[$data.index4]),
    S: common_vendor.o((...args) => $options.change4 && $options.change4(...args)),
    T: $data.index4,
    U: $data.range4,
    V: common_vendor.p({
      title: "\u804C\u4E1A\u95E8\u69DB",
      subTitle: "\u804C\u4E1A\u8BC1\u4E66\u9700\u6C42\u95E8\u69DB",
      type: "line",
      padding: true
    }),
    W: common_vendor.t($data.range5[$data.index5]),
    X: common_vendor.o((...args) => $options.change5 && $options.change5(...args)),
    Y: $data.index5,
    Z: $data.range5,
    aa: common_vendor.p({
      title: "\u7279\u6B8A\u4E0A\u73ED\u60C5\u51B5",
      subTitle: "\u591C\u73ED\u8981\u547D,\u65E9\u73ED\u6298\u78E8\u4EBA\r\n          (\u975E\u52A0\u73ED\u60C5\u51B5:\u65E9\u4E8E9\u70B9\u4E0A\u73EDOR\u665A\u4E8E6\u70B9\u4E0B\u73ED\u7684\u90FD\u7B97\u975E\u6B63\u5E38!)",
      type: "line",
      padding: true
    }),
    ab: common_vendor.t($data.count),
    ac: $data.status,
    ad: common_vendor.o((...args) => $options.formSubmit && $options.formSubmit(...args)),
    ae: common_vendor.o((...args) => $options.formReset && $options.formReset(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/20210408/Desktop/xcx/1026/work/pages/work/work.vue"]]);
wx.createPage(MiniProgramPage);
