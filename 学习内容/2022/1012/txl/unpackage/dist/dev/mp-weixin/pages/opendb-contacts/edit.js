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
const dbCollectionName = "opendb-contacts";
function getValidator(fields) {
  let result = {};
  for (let key in js_sdk_validator_opendbContacts.validator) {
    if (fields.indexOf(key) > -1) {
      result[key] = js_sdk_validator_opendbContacts.validator[key];
    }
  }
  return result;
}
const _sfc_main = {
  data() {
    let formData = {
      "username": "",
      "gender": 1,
      "mobile": "",
      "email": "",
      "comment": "",
      "nation": "",
      "add": ""
    };
    return {
      formData,
      formOptions: {
        "gender_localdata": [
          {
            "text": "\u672A\u77E5",
            "value": 0
          },
          {
            "text": "\u7537",
            "value": 1
          },
          {
            "text": "\u5973",
            "value": 2
          }
        ]
      },
      rules: __spreadValues({}, getValidator(Object.keys(formData)))
    };
  },
  onLoad(e) {
    if (e.id) {
      const id = e.id;
      this.formDataId = id;
      this.getDetail(id);
    }
  },
  onReady() {
    this.$refs.form.setRules(this.rules);
  },
  methods: {
    submit() {
      common_vendor.index.showLoading({
        mask: true
      });
      this.$refs.form.validate().then((res) => {
        return this.submitForm(res);
      }).catch(() => {
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    },
    submitForm(value) {
      return db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
        common_vendor.index.showToast({
          icon: "none",
          title: "\u4FEE\u6539\u6210\u529F"
        });
        this.getOpenerEventChannel().emit("refreshData");
        setTimeout(() => common_vendor.index.navigateBack(), 500);
      }).catch((err) => {
        common_vendor.index.showModal({
          content: err.message || "\u8BF7\u6C42\u670D\u52A1\u5931\u8D25",
          showCancel: false
        });
      });
    },
    getDetail(id) {
      common_vendor.index.showLoading({
        mask: true
      });
      db.collection(dbCollectionName).doc(id).field("username,gender,mobile,email,comment,nation,add").get().then((res) => {
        const data = res.result.data[0];
        if (data) {
          this.formData = data;
        }
      }).catch((err) => {
        common_vendor.index.showModal({
          content: err.message || "\u8BF7\u6C42\u670D\u52A1\u5931\u8D25",
          showCancel: false
        });
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_data_picker2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_data_picker + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.username = $event),
    b: common_vendor.p({
      placeholder: "\u59D3\u540D",
      trim: "both",
      modelValue: $data.formData.username
    }),
    c: common_vendor.p({
      name: "username",
      label: "\u59D3\u540D",
      required: true
    }),
    d: common_vendor.o(($event) => $data.formData.gender = $event),
    e: common_vendor.p({
      localdata: $data.formOptions.gender_localdata,
      modelValue: $data.formData.gender
    }),
    f: common_vendor.p({
      name: "gender",
      label: "\u6027\u522B"
    }),
    g: common_vendor.o(($event) => $data.formData.mobile = $event),
    h: common_vendor.p({
      placeholder: "\u7535\u8BDD",
      trim: "both",
      modelValue: $data.formData.mobile
    }),
    i: common_vendor.p({
      name: "mobile",
      label: "\u7535\u8BDD",
      required: true
    }),
    j: common_vendor.o(($event) => $data.formData.email = $event),
    k: common_vendor.p({
      placeholder: "\u90AE\u7BB1\u5730\u5740",
      trim: "both",
      modelValue: $data.formData.email
    }),
    l: common_vendor.p({
      name: "email",
      label: "\u90AE\u7BB1"
    }),
    m: common_vendor.o([($event) => $data.formData.comment = $event.detail.value, ($event) => _ctx.binddata("comment", $event.detail.value)]),
    n: $data.formData.comment,
    o: common_vendor.p({
      name: "comment",
      label: "\u5907\u6CE8"
    }),
    p: common_vendor.o(($event) => $data.formData.nation = $event),
    q: common_vendor.p({
      collection: "opendb-nation-china",
      field: "name as text,_id as value",
      modelValue: $data.formData.nation
    }),
    r: common_vendor.p({
      name: "nation",
      label: "\u6C11\u65CF"
    }),
    s: common_vendor.o(($event) => $data.formData.add = $event),
    t: common_vendor.p({
      ["self-field"]: "code",
      ["parent-field"]: "parent_code",
      collection: "opendb-city-china",
      field: "name as text,code as value",
      modelValue: $data.formData.add
    }),
    v: common_vendor.p({
      name: "add",
      label: "\u5730\u5740"
    }),
    w: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    x: common_vendor.sr("form", "b3387df0-0"),
    y: common_vendor.p({
      model: $data.formData,
      ["validate-trigger"]: "submit",
      ["err-show-type"]: "toast"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/20210408/Desktop/xcx/1012/txl/pages/opendb-contacts/edit.vue"]]);
wx.createPage(MiniProgramPage);
