webpackJsonp([2],{

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Conversations_vue__ = __webpack_require__(236);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68da0ec2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Conversations_vue__ = __webpack_require__(250);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Conversations_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68da0ec2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Conversations_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 222:
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

/***/ 223:
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

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__ = __webpack_require__(222);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0c3bc31e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__ = __webpack_require__(225);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0c3bc31e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"botup-header-profile-section",style:(_vm.UIPrefs.chat_header.css)},[_c('div',{staticClass:"botup-profile-pic-section"},[_c('div',{staticClass:"botup-profile-flex"},[(!_vm.conversationHeader)?_c('b-img',{staticClass:"botup-gravatar",attrs:{"src":_vm.UIPrefs.chat_header.attr.gravatar}}):_c('div',{staticStyle:{"cursor":"pointer"},on:{"click":_vm.navigate}},[_c('b-img',{staticClass:"botup-chevron-left",attrs:{"src":"https://infinity.500apps.com/img/botup/chevron-left.svg"}})],1),_vm._v(" "),_c('div',{staticClass:"botupchat-margin-left",staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.minimize()}}},[(!_vm.conversationHeader)?_c('div',[_c('div',{staticClass:"botup-bot-name"},[_vm._v(_vm._s(_vm.UIPrefs.chat_header.attr.bot_name))]),_vm._v(" "),_c('div',{staticClass:"botup-bot-description"},[_vm._v(_vm._s(_vm.UIPrefs.chat_header.attr.bot_description))])]):_c('div',{staticClass:"botup-bot-conv-name"},[_vm._v("Conversation History")])])],1),_vm._v(" "),(!_vm.conversationHeader)?_c('div',{staticClass:"botup-history-icon-bg"},[_c('button',{staticClass:"botup-widget-history",attrs:{"aria-label":"Open conversation history"},on:{"click":function($event){return _vm.viewHistory()}}},[_c('b-img',{staticClass:"botup-history-icon",attrs:{"src":"https://infinity.500apps.com/img/botup/history-icon.svg"}})],1)]):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__ = __webpack_require__(223);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8e512828_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__ = __webpack_require__(227);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8e512828_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"botupchat-footer-500app",style:(_vm.UIPrefs.font_family.css)},[(!_vm.conversationFooter)?_c('div',{staticClass:"botupchat-items-center mb-0"},[_vm._v("Botup by"),_c('b-link',{staticClass:"botup-500app-link",attrs:{"rel":"nofollow"},on:{"click":function($event){return _vm.redirectTo500apps()}}},[_vm._v("500apps")])],1):_c('div',{staticClass:"botupchat-items-center mb-0 pt-1"},[_vm._v("Botup by"),_c('b-link',{staticClass:"botup-500app-link",attrs:{"rel":"nofollow"},on:{"click":function($event){return _vm.redirectTo500apps()}}},[_vm._v("500apps")])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Window_Header_vue__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Window_Footer_vue__ = __webpack_require__(226);

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


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Header: __WEBPACK_IMPORTED_MODULE_1__Window_Header_vue__["a" /* default */],
    Footer: __WEBPACK_IMPORTED_MODULE_2__Window_Footer_vue__["a" /* default */],
    VueMomentsAgo: function VueMomentsAgo() {
      return __webpack_require__.e/* import() */(3/* duplicate */).then(__webpack_require__.bind(null, 234));
    }
  },
  data: function data() {
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()({
      conversationList: [],
      conversationID: "",
      UIPrefs: window._Botup.UIPrefs.prefs
    }, "conversationID", "");
  },
  created: function created() {},
  mounted: function mounted() {
    this.conversationList = window._Botup.State.getters.getAllConversations; // Get active conversation ID

    this.conversationID = window._Botup.State.getters.getActiveConversationID;
  },
  methods: {
    // Get the details with respective subject
    conversations: function conversations(value, ind) {
      window.refresh_loading = false; // To remove active conversation from vuex

      window._Botup.State.commit("removeActiveConversation", []); // To set active conversation ID which is selected from history by visitor


      window._Botup.Chat.conversation.setActiveConversationID(Object.keys(value)[0]);

      var result = this.conversationList[ind]; // To set active conversation

      result[this.conversationID].forEach(function (obj) {
        window._Botup.State.commit("setMessages", obj);
      }); // Redirects to chat

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

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"botup-chat",style:(_vm.UIPrefs.chat_width.css),attrs:{"id":"app"}},[_c('div',[_c('Header',{attrs:{"conversationHeader":true}}),_vm._v(" "),_c('div',{staticClass:"converstion-min-height"},[(!_vm.conversationList.length)?_c('div',[_c('div',{staticClass:"bg-white mx-auto pb-3 text-center empty-state"},[_c('b-img',{staticClass:"img-fluid mb-2",attrs:{"src":"https://infinity.500apps.com/img/botup/bot-history-empty-state.svg","width":"200"}}),_vm._v(" "),_c('p',{staticClass:"d-block text-black-50"},[_vm._v("\n            Your chats have not been tracked yet\n          ")])],1)]):_c('div',[(_vm.conversationList.length)?_c('b-row',{staticClass:"ml-0 mr-0 pb-1"},[_c('b-card',{staticClass:"w-100 border-0 p-0",attrs:{"no-body":""}},[_c('b-card-body',{staticClass:"my-n3 o-cardbody"},[_c('div',{staticClass:"border-bottom"},_vm._l((_vm.conversationList),function(item,index){return _c('div',{key:index,staticClass:"m-0 pb-2 pl-0 pr-0 pt-2 mt-1 conv-border-bottom"},[_c('b-row',{staticClass:"align-items-top convlist"},[_c('div',[_c('div',{staticClass:"text-uppercase"},[_c('b-img',{staticClass:"convlist-img",attrs:{"src":_vm.UIPrefs.chat_header.attr.gravatar}})],1)]),_vm._v(" "),_c('div',[_c('h4',{staticClass:"mb-0 ellipsis heading-text text-capitalize",on:{"click":function($event){return _vm.conversations(item, index)}}},[_vm._v("\n                        "+_vm._s(_vm.UIPrefs.chat_header.attr.bot_name)+"\n                      ")]),_vm._v(" "),_c('p',{staticClass:"datetime small lineheight text-muted"},[_c('vue-moments-ago',{attrs:{"prefix":"","suffix":"ago","date":item[_vm.conversationID][index].time,"lang":"en"}})],1)])])],1)}),0)])],1)],1):_vm._e()],1)]),_vm._v(" "),_c('Footer',{attrs:{"conversationFooter":true}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=2.chunk.botupchat.js.map