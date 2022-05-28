"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.object.to-string.js");

var _wishlistController = _interopRequireDefault(require("../controller/wishlistController"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.get("/", _wishlistController.default.find);
router.post("/", _wishlistController.default.register);
router.get("/:id", _wishlistController.default.findByIdController);
var _default = router;
exports.default = _default;