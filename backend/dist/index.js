"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _errHandler = _interopRequireDefault(require("./middlewares/errHandler"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = process.env.PORT || 3000;
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use("/", _routes.default);
app.use(_errHandler.default);
app.listen(port, function () {
  console.log("listening to port:", port);
});