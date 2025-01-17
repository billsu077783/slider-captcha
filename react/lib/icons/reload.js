"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReloadIcon = function ReloadIcon(_ref) {
  var loading = _ref.loading;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: loading ? 'loading-icon-container' : 'scaptcha-icon-container'
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "scaptcha-icon-light",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 15",
    height: "15",
    width: "14"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.99124 0.0869141C10.8461 0.0869141 14 3.23691 14 7.08691C14 10.9369 10.8461 14.0869 6.99124 14.0869C5.06383 14.0869 3.2766 13.3344 2.01502 12.0569L3.2766 10.7969C4.22278 11.7419 5.53692 12.3369 7.00876 12.3369C9.9174 12.3369 12.2653 9.99191 12.2653 7.08691C12.2653 4.18191 9.9174 1.83691 7.00876 1.83691C5.55444 1.83691 4.29287 2.46691 3.34668 3.42941L5.25657 5.33691H0V0.0869141L2.08511 2.16941C3.34668 0.909414 5.08135 0.0869141 7.00876 0.0869141H6.99124Z",
    fill: "#202020"
  })), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "scaptcha-icon-dark",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 15",
    height: "15",
    width: "14"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.99124 0.0869141C10.8461 0.0869141 14 3.23691 14 7.08691C14 10.9369 10.8461 14.0869 6.99124 14.0869C5.06383 14.0869 3.2766 13.3344 2.01502 12.0569L3.2766 10.7969C4.22278 11.7419 5.53692 12.3369 7.00876 12.3369C9.9174 12.3369 12.2653 9.99191 12.2653 7.08691C12.2653 4.18191 9.9174 1.83691 7.00876 1.83691C5.55444 1.83691 4.29287 2.46691 3.34668 3.42941L5.25657 5.33691H0V0.0869141L2.08511 2.16941C3.34668 0.909414 5.08135 0.0869141 7.00876 0.0869141H6.99124Z",
    fill: "#c6c6c6"
  })));
};

ReloadIcon.propTypes = {
  loading: _propTypes["default"].bool.isRequired
};
var _default = ReloadIcon;
exports["default"] = _default;