webpackJsonp([1],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InputEditor_vue__ = __webpack_require__(236);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09841756_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InputEditor_vue__ = __webpack_require__(242);
function injectStyle (ssrContext) {
  __webpack_require__(240)
}
var normalizeComponent = __webpack_require__(22)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InputEditor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09841756_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InputEditor_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 236:
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
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    enableChat: Boolean,
    max_length: {
      type: Number,
      default: 1000 // Text validation

    }
  },
  data: function data() {
    return {
      UIPrefs: window._Botup.UIPrefs.prefs,
      content: "",
      button_disable: false,
      add_button: true
    };
  },
  methods: {
    /**
     * Event fires when user send message
     * @param {Object} message  Invoke message which is given by user
     */
    submit: function submit() {
      window.refresh_loading = true;
      if (!this.content) return;

      window._Botup.State.commit("setActiveMessage", this.content); // Set tone while user replay


      window._Botup.UIPrefs.play(this.UIPrefs.chat.sound.playMessageOut); // To Remove existing text content in Quill editor


      if (document.getElementsByClassName("editor")) document.getElementById("editor").value = null;
      if (this.enableChat) this.$router.push({
        name: "chat",
        params: {
          active: true
        }
      });
    }
  }
});

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(62)("25c50cce", content, true, {});

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// imports


// module
exports.push([module.i, ".flex-column-reverse{width:320px}.botupchat-footer-section{border-bottom-left-radius:-4px;border-bottom-right-radius:-10px}.botupchat-footer-section .botupchat-text-area-icons{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ececec!important}.botupchat-footer-section textarea{box-sizing:border-box;padding:0 50px 0 0;width:100%;height:100%;font-family:Poppins,sans-serif;font-size:14px;font-weight:400;line-height:1.33;background-color:rgb(247 247 248);white-space:pre-wrap;overflow-wrap:break-word;border:0}.botupchat-footer-section textarea:focus-visible{outline:none;border:0}button{background:none;border:unset}.botupchat-footer-section .textarea-emoji-control{height:17px;right:85px;top:50px;width:17px;cursor:pointer}.botupchat-footer-section .ql-editor.ql-blank:before{font-style:normal;left:0!important}.botupchat-footer-section .ql-toolbar.ql-snow{border:0 solid #ccc;box-sizing:border-box;padding:0;position:absolute;bottom:-23px!important;left:-7px!important}.botupchat-footer-section .ql-toolbar.ql-snow .ql-formats .ql-picker{top:4px}.botupchat-footer-section .ql-editor{max-height:39px;min-height:39px;padding-top:8px!important}.botupchat-footer-section .ql-editor p span{color:#000!important;font-size:12px!important}.botupchat-footer-section .ql-container{max-height:35px;font-family:Poppins,sans-serif}.botupchat-footer-section .ql-snow .ql-color-picker .ql-picker-label svg,.botupchat-footer-section .ql-snow.ql-toolbar button svg,.ql-snow .ql-icon-picker .ql-picker-label svg,.ql-snow .ql-toolbar button svg{width:15px;height:15px}.margin-zero p{margin:0}.botupchat-footer-section .ql-toolbar.ql-snow .ql-formats{margin-right:0}.botupchat-footer-section .ql-snow .ql-picker.ql-expanded .ql-picker-options{top:-103px}.botupchat-footer-section .ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:0 4px}.btn.focus,.chat_icon .btn:focus{outline:0;box-shadow:0 0 0 .2rem rgb(0 123 255/0)}.botupchat-footer-section .ql-snow .ql-stroke{stroke:#aeabab;stroke-width:1.5}.botupchat-footer-section .ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#aeabab}.botupchat-btn-light:hover{background-color:#e4e5ff!important}.botupchat-btn-light.focus,.botupchat-btn-light:focus{box-shadow:0 0 0 .2rem rgb(130 138 145/0)!important}.textarea-emoji-control:hover .ql-stroke{stroke:#06c!important}.textarea-emoji-control:hover .ql-fill{fill:#06c!important}.bg-input-color{background:#f7f7f8!important;width:285px!important}.botupchat-footer-section .botupchat-footer-icons{height:30px!important}.botup-chat .botupchat-footer-section{padding:15px 20px 0!important}.botup-chat .botupchat-footer-section .botup-send-img{bottom:1px!important}.botup-bubble .botupchat-bg-reply-bubble,.botup-social .botupchat-bg-reply-social,.botup-ultra .botupchat-bg-reply-ultra{word-break:break-all!important}", ""]);

// exports


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"botupchat-footer-section"},[_c('div',{staticClass:"botupchat-text-area-icons"},[_c('div',{staticClass:"botupchat-footer-icons"},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.submit.apply(null, arguments)}}},[_c('b-form-input',{staticClass:"pr-3 bg-input-color",attrs:{"id":"editor","type":"text","size":"lg","required":"","oninvalid":"Enter at least 5 characters","state":_vm.content.length >= 10,"onchange":"setCustomValidity('')","placeholder":"Write a reply...","aria-describedby":"input-live-help input-url-feedback"},on:{"blur":function($event){return _vm.submit()},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return $event.target.blur()}},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}}),_vm._v(" "),(_vm.add_button)?_c('button',{staticClass:"botupchat-send-icon",attrs:{"type":"submit"}},[_c('svg',{staticClass:"botup-send-img",attrs:{"disabled":_vm.button_disable || !_vm.content || _vm.content.length > _vm.max_length,"viewBox":"0 0 29 29","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0 0L29 14.5L0 29L8.5 14.5L0 0Z","fill":"#4E71EE"}})])]):_vm._e()],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=1.chunk.botupchat.js.map