webpackJsonp([2],{

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_moments_ago_vue__ = __webpack_require__(245);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_moments_ago_vue__["a" /* default */]);

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(113);
//
//
//
//
//
//
//


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.moment = __WEBPACK_IMPORTED_MODULE_1_moment__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      epochs: ["year", "month", "day", "hour", "minute"],
      epochs_kr: ["년", "달", "일", "시간", "분"],
      epochs_jp: ["年", "月", "日", "時", "分"],
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60,
      humanReadable: "",
      humanDifference: 0,
      humanWord: "moment"
    };
  },

  props: {
    prefix: {
      type: String,
      default: "posted"
    },
    suffix: {
      type: String,
      default: "ago"
    },
    date: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      default: "en"
    }
  },

  mounted() {
    setInterval(() => {
      this.getSeconds(this.date);
    }, 1000);
  },

  filters: {
    plural(value, name, lang) {
      let plural;

      if (value === 0) {
        if (lang == "kr") {
          return "몇" + name;
        } else if (lang == "jp") {
          return "何" + name;
        } else {
          return "a few " + name + "s";
        }
      } else if (value > 1) {
        if (lang == "en") {
          return value + " " + name + "s";
        } else {
          return value + " " + name + "";
        }
      } else {
        return value + " " + name;
      }
    }

  },
  methods: {
    getSeconds(time) {
      let seconds = Object(__WEBPACK_IMPORTED_MODULE_1_moment__["a" /* default */])().diff(Object(__WEBPACK_IMPORTED_MODULE_1_moment__["a" /* default */])(time), "seconds");
      this.humanReadable = this.getDuration(seconds);

      if (this.humanReadable) {
        this.humanDifference = this.humanReadable.interval;
        this.humanWord = this.humanReadable.humanEpoch;
      }
    },

    getDuration(seconds) {
      let epoch, interval;
      let humanEpoch;

      for (let i = 0; i < this.epochs.length; i++) {
        epoch = this.epochs[i];

        if (this.lang == "kr") {
          humanEpoch = this.epochs_kr[i];
        } else if (this.lang == "jp") {
          humanEpoch = this.epochs_jp[i];
        } else {
          humanEpoch = this.epochs[i];
        }

        interval = Math.floor(seconds / this[epoch]);

        if (interval >= 1) {
          return {
            interval: interval,
            humanEpoch: humanEpoch
          };
        }
      }
    }

  }
});

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_moments_ago_vue__ = __webpack_require__(238);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_2961c0da_hasScoped_true_buble_transforms_vue_loader_lib_selector_type_template_index_0_moments_ago_vue__ = __webpack_require__(248);
function injectStyle (ssrContext) {
  __webpack_require__(246)
}
var normalizeComponent = __webpack_require__(29)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2961c0da"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_moments_ago_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_2961c0da_hasScoped_true_buble_transforms_vue_loader_lib_selector_type_template_index_0_moments_ago_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(247);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(60)("c4ea1b4e", content, true, {});

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(false);
// imports


// module
exports.push([module.i, ".vue-moments-ago[data-v-2961c0da]{font-size:12px}", ""]);

// exports


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.date)?_c('span',{staticClass:"vue-moments-ago"},[_vm._v(_vm._s(_vm.prefix)+" "+_vm._s(_vm._f("plural")(_vm.humanDifference,_vm.humanWord, _vm.lang))+" "+_vm._s(_vm.suffix))]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=2.chunk.botupchat.js.map