webpackJsonp([7],{

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Message: function Message() {
      return __webpack_require__.e/* import() */(5/* duplicate */).then(__webpack_require__.bind(null, 233));
    }
  },
  data: function data() {
    return {
      UIPrefs: window._Botup.UIPrefs.prefs
    };
  },
  mounted: function mounted() {
    // Automatically scroll down in onload
    this.scrollToEnd();
  },
  computed: {
    conversations: function conversations() {
      // Automatically scroll down in onload
      this.scrollToEnd(); // Get data from mutation state through veux

      return window._Botup.State.getters.getCurrentMessages;
    }
  },
  methods: {
    // Automatically scroll down while updating conversation
    scrollToEnd: function scrollToEnd() {
      setTimeout(function () {
        var container = document.getElementById("botupchat");
        if (container) container.scrollTop = container.scrollHeight;
      }, 0);
    }
  }
});

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Messages_vue__ = __webpack_require__(232);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a58169f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Messages_vue__ = __webpack_require__(248);
var normalizeComponent = __webpack_require__(58)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Messages_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a58169f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Messages_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"body-scroll",style:(_vm.UIPrefs.font_family.css),attrs:{"id":"botupchat"}},[_c('div',{staticClass:"botup-welcome-box"},[_c('div',{staticClass:"botup-welcome-bg"},[_c('div',{staticClass:"botup-welcome-message"},[_vm._v("\n          "+_vm._s(_vm.UIPrefs.chat_header.attr.bot_welcome_msg)+"\n          "),_c('b-img',{attrs:{"src":_vm.UIPrefs.chat_header.attr.welcome_img,"height":"20"}})],1)])]),_vm._v(" "),_vm._l((_vm.conversations),function(list,index){return _c('Message',{key:index,attrs:{"conversations":list}})})],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=7.chunk.botupchat.js.map