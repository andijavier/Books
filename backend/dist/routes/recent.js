"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.object.to-string.js");

var _recentController = _interopRequireDefault(require("../controller/recentController"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.get("/", _recentController.default.find);
router.post("/", _recentController.default.register);
var _default = router;
exports.default = _default;