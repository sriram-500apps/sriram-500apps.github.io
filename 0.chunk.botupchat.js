webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_state__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_state_session__ = __webpack_require__(105);





var getStorage = function getStorage() {
  return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23));
};

var Chat = /*#__PURE__*/function () {
  function Chat() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Chat);

    getStorage().then(function (storage) {
      _this.storage = new storage.default();
    });
  } // Get all converstions


  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Chat, [{
    key: "getAllConversations",
    value: function getAllConversations() {
      return __WEBPACK_IMPORTED_MODULE_2__core_state__["a" /* default */].getters.getCurrentMessages;
    } // Get active converation from local storage

  }, {
    key: "getCurrentActiveConversationID",
    value: function getCurrentActiveConversationID() {
      if (!this.storage.getLocalStorage("conversationID")) {
        var converstionID = this.startNewActiveConversation();
        this.storage.setLocalStorage("conversationID", converstionID);
        return converstionID;
      } else return this.storage.getLocalStorage("conversationID");
    } // set active converstaion to vuex

  }, {
    key: "setActiveConversationID",
    value: function setActiveConversationID(conversationID) {
      __WEBPACK_IMPORTED_MODULE_2__core_state__["a" /* default */].commit("setActiveConversationID", conversationID);
    } // Generate active Converstaion

  }, {
    key: "startNewActiveConversation",
    value: function startNewActiveConversation() {
      var conversationID = Object(__WEBPACK_IMPORTED_MODULE_3__util_state_session__["getConversationId"])();
      this.setActiveConversationID(conversationID);
      return conversationID;
    }
  }]);

  return Chat;
}();

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ })

});
//# sourceMappingURL=0.chunk.botupchat.js.map