(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/system/menu/list"],{

/***/ 421:
/*!**************************************************************************************************************!*\
  !*** C:/Users/20210408/Desktop/xcx/学习内容/2023/0120/uni-admin/main.js?{"page":"pages%2Fsystem%2Fmenu%2Flist"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-cloud-stat.es.js */ 27);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 28);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _list = _interopRequireDefault(__webpack_require__(/*! ./pages/system/menu/list.vue */ 422));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 422:
/*!*****************************************************************************************!*\
  !*** C:/Users/20210408/Desktop/xcx/学习内容/2023/0120/uni-admin/pages/system/menu/list.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_5890e632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=5890e632& */ 423);
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ 425);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=css& */ 431);
/* harmony import */ var _yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 50);

var renderjs





/* normalize component */

var component = Object(_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_5890e632___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_5890e632___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _list_vue_vue_type_template_id_5890e632___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/system/menu/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 423:
/*!************************************************************************************************************************!*\
  !*** C:/Users/20210408/Desktop/xcx/学习内容/2023/0120/uni-admin/pages/system/menu/list.vue?vue&type=template&id=5890e632& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_5890e632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=template&id=5890e632& */ 424);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_5890e632___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_5890e632___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_5890e632___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_5890e632___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 424:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/20210408/Desktop/xcx/学习内容/2023/0120/uni-admin/pages/system/menu/list.vue?vue&type=template&id=5890e632& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniStatBreadcrumb: function () {
      return Promise.all(/*! import() | components/uni-stat-breadcrumb/uni-stat-breadcrumb */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-stat-breadcrumb/uni-stat-breadcrumb")]).then(__webpack_require__.bind(null, /*! @/components/uni-stat-breadcrumb/uni-stat-breadcrumb.vue */ 807))
    },
    uniBadge: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-badge/components/uni-badge/uni-badge */ "uni_modules/uni-badge/components/uni-badge/uni-badge").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-badge/components/uni-badge/uni-badge.vue */ 1060))
    },
    unicloudDb: function () {
      return Promise.all(/*! import() | node-modules/@dcloudio/uni-cli-shared/components/unicloud-db */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/@dcloudio/uni-cli-shared/components/unicloud-db")]).then(__webpack_require__.bind(null, /*! @dcloudio/uni-cli-shared/components/unicloud-db.vue */ 892))
    },
    uniTable: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-table/uni-table */ "uni_modules/uni-table/components/uni-table/uni-table").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-table/uni-table.vue */ 828))
    },
    uniTr: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-tr/uni-tr */ "uni_modules/uni-table/components/uni-tr/uni-tr").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-tr/uni-tr.vue */ 835))
    },
    uniTh: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-th/uni-th */ "uni_modules/uni-table/components/uni-th/uni-th").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-th/uni-th.vue */ 842))
    },
    uniTd: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-td/uni-td */ "uni_modules/uni-table/components/uni-td/uni-td").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-td/uni-td.vue */ 849))
    },
    fixWindow: function () {
      return __webpack_require__.e(/*! import() | components/fix-window/fix-window */ "components/fix-window/fix-window").then(__webpack_require__.bind(null, /*! @/components/fix-window/fix-window.vue */ 856))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = _vm.$t("menu.text.menuManager")
  var g0 = _vm.pluginMenus.length
  var m1 = g0 ? _vm.$t("menu.text.additiveMenu") : null
  var g1 = g0 ? _vm.pluginMenus.length : null
  var m2 = _vm.$t("menu.button.addFirstLevelMenu")
  var m3 = _vm.$hasScopedSlotsParams("b98ade02-3")
  var m4 = m3
    ? _vm.$getScopedSlotsParams("b98ade02-3", "default", "loading")
    : null
  var m5 = m3 ? _vm.errMsg || _vm.$t("common.empty") : null
  var l0 = m3
    ? _vm.__map(
        _vm.$getScopedSlotsParams("b98ade02-3", "default", "data"),
        function (item, index) {
          var $orig = _vm.__get_orig(item)
          var m6 = _vm.$t("common.button.edit")
          var m7 =
            item.menu_id !== "system_menu" &&
            item.menu_id !== "system_management"
              ? _vm.$t("common.button.delete")
              : null
          var m8 = !item.url ? _vm.$t("menu.button.addChildMenu") : null
          return {
            $orig: $orig,
            m6: m6,
            m7: m7,
            m8: m8,
          }
        }
      )
    : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event, item) {
      var _temp = arguments[arguments.length - 1].currentTarget.dataset,
        _temp2 = _temp.eventParams || _temp["event-params"],
        item = _temp2.item
      var _temp, _temp2
      return _vm.navigateTo("./edit?id=" + item._id, false)
    }
    _vm.e1 = function ($event, item) {
      var _temp3 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp4 = _temp3.eventParams || _temp3["event-params"],
        item = _temp4.item
      var _temp3, _temp4
      return _vm.confirmDelete(item)
    }
    _vm.e2 = function ($event, item) {
      var _temp5 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp6 = _temp5.eventParams || _temp5["event-params"],
        item = _temp6.item
      var _temp5, _temp6
      return _vm.navigateTo("./add?parent_id=" + item.menu_id, false)
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        g0: g0,
        m1: m1,
        g1: g1,
        m2: m2,
        m3: m3,
        m4: m4,
        m5: m5,
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 425:
/*!******************************************************************************************************************!*\
  !*** C:/Users/20210408/Desktop/xcx/学习内容/2023/0120/uni-admin/pages/system/menu/list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yl_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=script&lang=js& */ 426);
/* harmony import */ var _yl_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yl_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _yl_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _yl_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_yl_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 426:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/20210408/Desktop/xcx/学习内容/2023/0120/uni-admin/pages/system/menu/list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _util = __webpack_require__(/*! ../../../components/uni-data-menu/util.js */ 427);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var db = uniCloud.database();
// 表查询配置
var dbOrderBy = 'create_date asc';
// 分页配置
var pageSize = 20000;
var pageCurrent = 1;
// 查找插件注册的菜单列表（目前仅在开发模式启用，仅限 admin 角色）
var pluginMenuJsons = [];
if (true) {
  var rootModules = __webpack_require__(428);
  rootModules.keys().forEach(function (key) {
    var json = key.substr(2);
    rootModules(key).forEach(function (item) {
      item.json = json;
      pluginMenuJsons.push(item);
    });
  });
  var pluginModules = __webpack_require__(429);
  pluginModules.keys().forEach(function (key) {
    var json = 'uni_modules' + key.substr(1);
    pluginModules(key).forEach(function (item) {
      item.json = json;
      pluginMenuJsons.push(item);
    });
  });
}

// 获取父的个数
function getParents(menus, id) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  menus.forEach(function (menu) {
    if (menu.menu_id === id && menu.parent_id) {
      depth = depth + 1 + getParents(menus, menu.parent_id, depth);
    }
  });
  return depth;
}

// 获取子的 _id
function getChildren(menus, id) {
  var childrenIds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (menus.find(function (menu) {
    return menu.parent_id === id;
  })) {
    menus.forEach(function (item) {
      if (item.parent_id === id) {
        childrenIds.push(item._id);
        getChildren(menus, item.menu_id, childrenIds);
      }
    });
  }
  return childrenIds;
}
var _default = {
  data: function data() {
    return {
      query: '',
      where: '',
      orderby: dbOrderBy,
      options: {
        pageSize: pageSize,
        pageCurrent: pageCurrent
      },
      selectedIndexs: [],
      //批量选中的项
      loading: true,
      menus: [],
      errMsg: '',
      currentTab: 'menus',
      selectedPluginMenuIndexs: []
    };
  },
  computed: {
    pluginMenus: function pluginMenus() {
      var menus = [];
      if (!this.$hasRole('admin')) {
        return menus;
      }
      var dbMenus = this.menus;
      if (!dbMenus.length) {
        return menus;
      }
      pluginMenuJsons.forEach(function (menu) {
        // 查找尚未被注册到数据库中的菜单
        if (!dbMenus.find(function (item) {
          return item.menu_id === menu.menu_id;
        })) {
          menus.push(menu);
        }
      });
      return menus;
    }
  },
  watch: {
    pluginMenus: function pluginMenus(val) {
      if (!val.length) {
        this.currentTab = 'menus';
      }
    }
  },
  methods: {
    getSortMenu: function getSortMenu(menuList) {
      // 标记叶子节点
      menuList.map(function (item) {
        if (!menuList.some(function (subMenuItem) {
          return subMenuItem.parent_id === item.menu_id;
        })) {
          item.isLeafNode = true;
        }
      });
      return (0, _util.buildMenus)(menuList);
    },
    onqueryload: function onqueryload(data) {
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var depth = getParents(data, item.menu_id);
        item.name = (depth ? '　'.repeat(depth) + '|-' : '') + item.name;
      }
      var menuTree = this.getSortMenu(data);
      var sortMenus = [];
      this.patTree(menuTree, sortMenus);
      data.length = 0;
      data.push.apply(data, sortMenus);
      this.menus = data; //仅导出当前页
    },
    patTree: function patTree(tree, sortMenus) {
      var _this = this;
      tree.forEach(function (item) {
        sortMenus.push(item);
        if (item.children.length) {
          _this.patTree(item.children, sortMenus);
        }
      });
      return sortMenus;
    },
    switchTab: function switchTab(tab) {
      this.currentTab = tab;
    },
    loadData: function loadData() {
      var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.$refs.udb.loadData({
        clear: clear
      });
    },
    navigateTo: function navigateTo(url, clear) {
      var _this2 = this;
      // clear 表示刷新列表时是否清除当前页码，true 表示刷新并回到列表第 1 页，默认为 true
      uni.navigateTo({
        url: url,
        events: {
          refreshData: function refreshData() {
            _this2.loadData(clear);
          }
        }
      });
    },
    confirmDelete: function confirmDelete(menu) {
      var _this3 = this;
      var ids = menu._id;
      var content = '是否删除该菜单？';
      // 如有子菜单
      var children = getChildren(this.menus, menu.menu_id);
      if (children.length) content = '是否删除该菜单及其子菜单？';
      ids = [ids].concat((0, _toConsumableArray2.default)(children));
      uni.showModal({
        title: '提示',
        content: content,
        success: function success(res) {
          if (!res.confirm) {
            return;
          }
          _this3.$refs.udb.remove(ids, {
            needConfirm: false
          });
        }
      });
    },
    pluginMenuSelectChange: function pluginMenuSelectChange(e) {
      this.selectedPluginMenuIndexs = e.detail.index;
    },
    addPluginMenus: function addPluginMenus(confirmContent) {
      var _this4 = this;
      if (!this.selectedPluginMenuIndexs.length) {
        return uni.showModal({
          title: '提示',
          content: '请选择要添加的菜单！',
          showCancel: false
        });
      }
      var pluginMenus = this.pluginMenus;
      var menus = [];
      this.selectedPluginMenuIndexs.forEach(function (i) {
        var menu = pluginMenus[i];
        if (menu) {
          // 拷贝一份，移除 json 字段
          var dbMenu = JSON.parse(JSON.stringify(menu));
          delete dbMenu.json;
          menus.push(dbMenu);
        }
      });
      uni.showModal({
        title: '提示',
        content: '您确认要添加已选中的菜单吗？',
        success: function success(res) {
          if (!res.confirm) {
            return;
          }
          uni.showLoading({
            mask: true
          });
          var checkAll = menus.length === pluginMenus.length;
          uniCloud.database().collection('opendb-admin-menus').add(menus).then(function (res) {
            // this.init()
            uni.showModal({
              title: '提示',
              content: '添加菜单成功！',
              showCancel: false,
              success: function success() {
                _this4.$refs.pluginMenusTable.clearSelection();
                if (checkAll) {
                  _this4.currentTab = 'menus';
                }
                _this4.loadData();
              }
            });
          }).catch(function (err) {
            uni.showModal({
              title: '提示',
              content: err.message,
              showCancel: false
            });
          }).finally(function () {
            uni.hideLoading();
          });
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 28)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 431:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/20210408/Desktop/xcx/学习内容/2023/0120/uni-admin/pages/system/menu/list.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yl_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_yl_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_yl_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../../yl/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=style&index=0&lang=css& */ 432);
/* harmony import */ var _yl_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_yl_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_yl_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yl_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_yl_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_yl_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _yl_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_yl_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_yl_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _yl_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_yl_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_yl_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_yl_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_yl_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_yl_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yl_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 432:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/20210408/Desktop/xcx/学习内容/2023/0120/uni-admin/pages/system/menu/list.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[421,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/system/menu/list.js.map