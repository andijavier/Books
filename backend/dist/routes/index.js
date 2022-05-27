"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _recent = _interopRequireDefault(require("./recent"));

var _wishlist = _interopRequireDefault(require("./wishlist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use("/recent", _recent.default);
router.use("/wishlist", _wishlist.default);
var _default = router;
exports.default = _default;