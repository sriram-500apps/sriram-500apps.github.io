webpackJsonp([2],{

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Welcome_vue__ = __webpack_require__(222);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a43e968e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Welcome_vue__ = __webpack_require__(234);
var normalizeComponent = __webpack_require__(57)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Welcome_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a43e968e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Welcome_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 216:
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
  name: "Header",
  components: {},
  props: {
    conversationHeader: Boolean
  },
  data: function data() {
    return {
      UIPrefs: window._Botup.UIPrefs.prefs
    };
  },
  mounted: function mounted() {
    var _this = this;

    // Hide chat widget when user click on header
    document.addEventListener("click", function (event) {
      if (typeof event.target.className == "string" && event.target.className.includes("profile")) return _this.minimize();
    });
  },
  methods: {
    minimize: function minimize() {
      this.$router.push({
        name: "icon",
        params: {
          active: false
        }
      }); // To set chat status in vuex while chat end session

      window._Botup.State.commit("setChatStatus", false);
    },
    // Redirect to conversation details view
    viewHistory: function viewHistory() {
      if (window._Botup.State.getters.getActiveConversation.length == 0) window._Botup.State.commit("setActiveConversation", window._Botup.State.getters.getCurrentMessages);
      this.$router.push("/conversations");
    },
    // Navigate to active conversation view
    navigate: function navigate() {
      var result = window._Botup.State.getters.getActiveConversation; // To set active conversation

      result.forEach(function (obj) {
        window._Botup.State.commit("setMessages", obj);
      });

      window._Botup.State.commit("setActiveConversation", []);

      this.$router.push({
        name: "chat",
        params: {
          active: true
        }
      }); // To set chat status in vuex while chat end session

      window._Botup.State.commit("setChatStatus", true);
    }
  }
});

/***/ }),

/***/ 217:
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
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    conversationFooter: Boolean
  },
  data: function data() {
    return {
      UIPrefs: window._Botup.UIPrefs.prefs
    };
  },
  methods: {
    redirectTo500apps: function redirectTo500apps() {
      window.open("https://500apps.com");
    }
  }
});

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__ = __webpack_require__(216);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ca9ed1f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__ = __webpack_require__(219);
var normalizeComponent = __webpack_require__(57)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ca9ed1f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"botup-header-profile-section",style:(_vm.UIPrefs.chat_header.css)},[_c('div',{staticClass:"botup-profile-pic-section"},[_c('div',{staticClass:"botup-profile-flex"},[(!_vm.conversationHeader)?_c('img',{staticClass:"botup-gravatar",attrs:{"src":_vm.UIPrefs.chat_header.attr.gravatar}}):_c('div',{staticStyle:{"cursor":"pointer"},on:{"click":_vm.navigate}},[_c('img',{staticClass:"botup-chevron-left",attrs:{"src":"https://infinity.500apps.com/img/botup/chevron-left.svg"}})]),_vm._v(" "),_c('div',{staticClass:"botupchat-margin-left",staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.minimize()}}},[(!_vm.conversationHeader)?_c('div',[_c('div',{staticClass:"botup-bot-name"},[_vm._v(_vm._s(_vm.UIPrefs.chat_header.attr.bot_name))]),_vm._v(" "),_c('div',{staticClass:"botup-bot-description"},[_vm._v(_vm._s(_vm.UIPrefs.chat_header.attr.bot_description))])]):_c('div',{staticClass:"botup-bot-conv-name"},[_vm._v("Conversation History")])])]),_vm._v(" "),(!_vm.conversationHeader)?_c('div',{staticClass:"botup-history-icon-bg"},[_c('button',{staticClass:"botup-widget-history",attrs:{"aria-label":"Open conversation history"},on:{"click":function($event){return _vm.viewHistory()}}},[_c('img',{staticClass:"botup-history-icon",attrs:{"src":"https://infinity.500apps.com/img/botup/history-icon.svg"}})])]):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__ = __webpack_require__(217);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20fd5f5c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__ = __webpack_require__(221);
var normalizeComponent = __webpack_require__(57)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20fd5f5c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"botupchat-footer-500app",style:(_vm.UIPrefs.font_family.css)},[(!_vm.conversationFooter)?_c('div',{staticClass:"botupchat-items-center mb-0"},[_vm._v("Botup by"),_c('blink',{staticClass:"botup-500app-link",attrs:{"rel":"nofollow"},on:{"click":function($event){return _vm.redirectTo500apps()}}},[_vm._v("500apps")])],1):_c('div',{staticClass:"botupchat-items-center mb-0 pt-1"},[_vm._v("Botup by"),_c('blink',{staticClass:"botup-500app-link",attrs:{"rel":"nofollow"},on:{"click":function($event){return _vm.redirectTo500apps()}}},[_vm._v("500apps")])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Window_Header_vue__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Window_Footer_vue__ = __webpack_require__(220);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      UIPrefs: window._Botup.UIPrefs.prefs
    };
  },
  components: {
    Header: __WEBPACK_IMPORTED_MODULE_0__Window_Header_vue__["a" /* default */],
    Footer: __WEBPACK_IMPORTED_MODULE_1__Window_Footer_vue__["a" /* default */],
    InputEditor: function InputEditor() {
      return __webpack_require__.e/* import() */(4/* duplicate */).then(__webpack_require__.bind(null, 223));
    }
  },
  mounted: function mounted() {},
  created: function created() {},
  methods: {
    // Redirects to chat while visitor trigger input editor
    router: function router() {
      this.$router.push({
        name: "chat",
        params: {
          active: true
        }
      }); // To set chat status in vuex while chat end session

      window._Botup.State.commit("setChatStatus", true);
    }
  }
});

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"botup-chat",style:(_vm.UIPrefs.chat_width.css)},[_c('Header'),_vm._v(" "),_c('div',{staticClass:"botup-min-height-welcome"},[_c('div',{staticClass:"botup-welcome-box",style:(_vm.UIPrefs.chat_body.css)},[_c('div',{staticClass:"botup-welcome-bg"},[_c('div',{staticClass:"botup-welcome-message"},[_vm._v("\n            "+_vm._s(_vm.UIPrefs.chat_header.attr.bot_welcome_msg)+"\n            "),_c('img',{attrs:{"src":_vm.UIPrefs.chat_header.attr.welcome_img,"height":"20"}})])])])]),_vm._v(" "),_c('InputEditor',{attrs:{"enableChat":true},on:{"click":function($event){return _vm.router()}}}),_vm._v(" "),_c('Footer')],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=2.chunk.botupchat.js.map