webpackJsonp([3],{

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator__);


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
/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    VueMomentsAgo: function VueMomentsAgo() {
      return __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 234));
    }
  },
  props: ["conversations"],
  data: function data() {
    return {
      UIPrefs: window._Botup.UIPrefs.prefs,
      sleep: false,
      loading: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // set tone while user replay
              if (window.refresh_loading) {
                // Sleep time expects milliseconds for user
                _this.waitMessage(true); // Sleep time expects milliseconds for bot


                _this.waitMessage(false);
              } else {
                _this.loading = true;
                _this.sleep = true;
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    /**
     * Trigger when user select MCQ questions
     * @param {Object} value  Get respective obj value
     * @param {Number} id  Get index
     */
    emit_MCQ_visitor_response: function emit_MCQ_visitor_response(value, id) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var MCQ_count;
        return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.refresh_loading = true; // Set tone while user trigger MCQ questions

                window._Botup.UIPrefs.play(_this2.UIPrefs.chat.sound.playMessageOut);

                _this2.loading = false; // Remove element based on id

                _this2.conversations.cases.filter(function (item, index) {
                  if (index !== id) _this2.$refs["MCQ-".concat(Object.values(item)[0], "-").concat(index)][0].remove();
                }); // Set the count based on id which is selected by visitor


                MCQ_count = id == 0 ? _this2.conversations.cases.length - 1 : _this2.conversations.cases; // Save the active message in state

                window._Botup.Bot.saveInState("setActiveMessage", value);

                _context2.next = 8;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 1500);
                });

              case 8:
                _this2.loading = true;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // Automatically scroll down while updating conversation
    scrollToEnd: function scrollToEnd() {
      setTimeout(function () {
        var container = document.getElementById("botupchat");
        if (container) container.scrollTop = container.scrollHeight;
      }, 0);
    },

    /**
     * Sleep time expects milliseconds for bot
     * @param {Boolean} check validation by user or bot
     */
    waitMessage: function waitMessage(check) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return window._Botup.Chat.sleep(1500).then(function (res) {
                  check ? _this3.loading = true : _this3.sleep = true, window._Botup.UIPrefs.play(_this3.UIPrefs.chat.sound.playMessageIn); // Automatically scroll down in onload

                  // Automatically scroll down in onload
                  _this3.scrollToEnd();
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Message_vue__ = __webpack_require__(238);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f6150d0e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Message_vue__ = __webpack_require__(248);
var normalizeComponent = __webpack_require__(22)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Message_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f6150d0e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Message_vue__["a" /* default */],
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:("botup-" + (_vm.UIPrefs.widget) + "-comment-section-chat"),style:(_vm.UIPrefs.font_family.css)},[(_vm.UIPrefs.widget == 'social')?_c('div',[(_vm.conversations.to)?_c('div',{class:("botupchat-" + (_vm.UIPrefs.widget) + "-comment-section-replay")},[_c('div',{class:("botupchat-bg-reply-" + (_vm.UIPrefs.widget))},[_c('div',{staticClass:"profile-flex-end"},[_c('b-img',{staticClass:"social-avatar rounded-circle mr-2",attrs:{"src":"https://infinity.500apps.com/avatars/avatar-57.png","width":"20","height":"20"}}),_vm._v(" "),(_vm.conversations.time && _vm.loading)?_c('div',{staticClass:"botupchat-small-2"},[_c('vue-moments-ago',{attrs:{"prefix":"","suffix":"ago","date":_vm.conversations.time,"lang":"en"}})],1):_vm._e(),_vm._v(" "),(_vm.conversations.time && !_vm.loading)?_c('div',{staticClass:"botupchat-small-2"},[_c('div',{staticClass:"sending"},[_vm._v("Sending...")])]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"margin-zero",domProps:{"innerHTML":_vm._s(_vm.conversations.to)}})])]):_vm._e(),_vm._v(" "),(_vm.conversations.from && _vm.sleep)?_c('div',{class:("botupchat-" + (_vm.UIPrefs.widget) + "-message-box")},[_c('div',{class:("botupchat-bg-chat-" + (_vm.UIPrefs.widget))},[_c('div',{staticClass:"profile-flex"},[(_vm.conversations.time)?_c('div',{staticClass:"botupchat-small-2"},[_c('vue-moments-ago',{attrs:{"prefix":"","suffix":"ago","date":_vm.conversations.time,"lang":"en"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"profile-flex"},[_c('div',{staticClass:"botup-social-avatar-name"},[_vm._v(_vm._s(_vm.UIPrefs.chat_header.attr.bot_name))]),_vm._v(" "),_c('div',[_c('b-img',{staticClass:"social-avatar rounded-circle mr-2",attrs:{"src":_vm.UIPrefs.chat_header.attr.gravatar,"width":"20"}})],1)])]),_vm._v(" "),_c('div',{staticClass:"margin-zero"},[_vm._v(_vm._s(_vm.conversations.from))])])]):_vm._e()]):_c('div',[(_vm.conversations.to)?_c('div',{class:("botupchat-" + (_vm.UIPrefs.widget) + "-comment-section-replay")},[_c('div',{class:("botupchat-bg-reply-" + (_vm.UIPrefs.widget))},[_c('div',{staticClass:"margin-zero",domProps:{"innerHTML":_vm._s(_vm.conversations.to)}})]),_vm._v(" "),(_vm.conversations.time && _vm.loading)?_c('div',{staticClass:"botupchat-small-2"},[_c('vue-moments-ago',{attrs:{"prefix":"","suffix":"ago","date":_vm.conversations.time,"lang":"en"}})],1):_vm._e(),_vm._v(" "),(_vm.conversations.time && !_vm.loading)?_c('div',{staticClass:"botupchat-small-2"},[_c('div',{staticClass:"sending"},[_vm._v("Sending...")])]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.conversations.from && _vm.sleep)?_c('div',{class:("botupchat-" + (_vm.UIPrefs.widget) + "-message-box")},[_c('div',{staticClass:"botup-avatar-flex"},[(_vm.UIPrefs.widget == 'ultra')?_c('div',{staticClass:"align-self-end"},[_c('b-img',{staticClass:"rounded-circle mr-2 rounded-avatar",attrs:{"src":_vm.UIPrefs.chat_header.attr.gravatar,"width":"24"}})],1):_vm._e(),_vm._v(" "),_c('div',{class:("botupchat-bg-chat-" + (_vm.UIPrefs.widget))},[_c('div',{staticClass:"margin-zero"},[_vm._v(_vm._s(_vm.conversations.from))])])]),_vm._v(" "),(_vm.conversations.time)?_c('div',{staticClass:"botupchat-small-2"},[_c('vue-moments-ago',{attrs:{"prefix":"","suffix":"ago","date":_vm.conversations.time,"lang":"en"}})],1):_vm._e()]):_vm._e()]),_vm._v(" "),(_vm.conversations.image && _vm.sleep)?_c('div',{class:("botupchat-" + (_vm.UIPrefs.widget) + "-message-box")},[_c('div',[_c('b-img',{staticClass:"rounded-circle",attrs:{"src":_vm.conversations.image}})],1),_vm._v(" "),(_vm.conversations.time)?_c('div',{staticClass:"botupchat-small-2"},[_c('vue-moments-ago',{attrs:{"prefix":"","suffix":"ago","date":_vm.conversations.time,"lang":"en"}})],1):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.conversations.video && _vm.sleep)?_c('div',{class:("botupchat-" + (_vm.UIPrefs.widget) + "-message-box")},[_c('div',{class:("botupchat-bg-chat-" + (_vm.UIPrefs.widget))},[_c('b-link',{staticClass:"mcq-video-link",attrs:{"href":_vm.conversations.video,"target":"_blank"}},[_vm._v("\n          "+_vm._s(_vm.conversations.video)+"\n        ")])],1),_vm._v(" "),(_vm.conversations.time)?_c('div',{staticClass:"botupchat-small-2"},[_c('vue-moments-ago',{attrs:{"prefix":"","suffix":"ago","date":_vm.conversations.time,"lang":"en"}})],1):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.conversations.redirect && _vm.sleep)?_c('div',{class:("botupchat-" + (_vm.UIPrefs.widget) + "-message-box")},[_c('div',{class:("botupchat-bg-chat-" + (_vm.UIPrefs.widget))},[_c('b-link',{staticClass:"mcq-video-link small",attrs:{"href":_vm.conversations.redirect,"target":"_blank"}},[_vm._v("\n          "+_vm._s(_vm.conversations.redirect)+"\n        ")])],1),_vm._v(" "),(_vm.conversations.time)?_c('div',{staticClass:"botupchat-small-2"},[_c('vue-moments-ago',{attrs:{"prefix":"","suffix":"ago","date":_vm.conversations.time,"lang":"en"}})],1):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.conversations.cases && _vm.sleep)?_c('div',{class:("botupchat-" + (_vm.UIPrefs.widget) + "-comment-section-chat")},[_c('div',{staticClass:"botupchat-mcq",style:(_vm.UIPrefs.font_family.css)},[_c('div',{staticClass:"faq-margin-zero"},[_vm._v(_vm._s(_vm.conversations.information))]),_vm._v(" "),(_vm.conversations.imageMCQ)?_c('b-img',{staticClass:"mcq-img",attrs:{"src":_vm.conversations.imageMCQ}}):_vm._e(),_vm._v(" "),_vm._l((_vm.conversations.cases),function(value,index){return _c('div',{key:index},[_c('button',{ref:("MCQ-" + (Object.values(value)[0]) + "-" + index),refInFor:true,staticClass:"botupchat-btn-light",style:(_vm.UIPrefs.font_family.css),attrs:{"pill":""},on:{"click":function($event){return _vm.emit_MCQ_visitor_response(value, index)}}},[_vm._v(_vm._s(Object.keys(value)[0]))])])})],2),_vm._v(" "),(_vm.conversations.time)?_c('div',{staticClass:"botupchat-small-2"},[_c('vue-moments-ago',{attrs:{"prefix":"","suffix":"ago","date":_vm.conversations.time,"lang":"en"}})],1):_vm._e(),_vm._v(" "),(_vm.conversations.time && !_vm.loading)?_c('div',{staticClass:"botupchat-small-2"},[_c('div',{staticClass:"sending"},[_vm._v("Sending...")])]):_vm._e()]):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=3.chunk.botupchat.js.map