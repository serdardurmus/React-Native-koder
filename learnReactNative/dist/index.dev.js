"use strict";

var _reactNative = require("react-native");

var _Lessons = _interopRequireDefault(require("./src/Lessons4"));

var _app = require("./app.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @format
 */
// import App from './src/Portfolio_Bulding_1/Portfolio_Bulding_1';
// import App from './src/Lessons3';
_reactNative.AppRegistry.registerComponent(_app.name, function () {
  return _Lessons["default"];
});