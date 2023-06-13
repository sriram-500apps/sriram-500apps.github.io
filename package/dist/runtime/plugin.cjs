"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = void 0;
var _app = require("#app");
var _default = (0, _app.defineNuxtPlugin)(nuxtApp => {
  console.log("Plugin injected by my-module!");
});
module.exports = _default;