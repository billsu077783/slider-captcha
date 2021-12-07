"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _card = _interopRequireDefault(require("./card"));

var _icons = require("./icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Anchor = function Anchor(_ref) {
  var text = _ref.text,
      createCaptcha = _ref.createCaptcha,
      submitResponse = _ref.submitResponse,
      verified = _ref.verified,
      anchor = _ref.anchor,
      card = _ref.card,
      challenge = _ref.challenge;
  var cardRef = (0, _react.useRef)();

  var refresh = function refresh() {
    cardRef.current.refreshCaptcha();
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_card["default"], {
    cRef: cardRef,
    createCaptcha: createCaptcha,
    submitResponse: submitResponse,
    text: text,
    card: card,
    challenge: challenge
  })), !verified && /*#__PURE__*/_react["default"].createElement("div", {
    className: "scaptcha-anchor-container scaptcha-anchor-element",
    style: {
      width: "".concat(anchor.width, "px"),
      height: "".concat(anchor.height, "px"),
      marginTop: "".concat(card.height + challenge.height + 20, "px")
    },
    onClick: refresh
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "scaptcha-anchor-label scaptcha-anchor-element",
    style: {
      width: "".concat(anchor.width, "px"),
      height: "".concat(anchor.height, "px")
    }
  }, text.anchor), /*#__PURE__*/_react["default"].createElement(_icons.ReloadIcon, null)));
};

Anchor.propTypes = {
  createCaptcha: _propTypes["default"].func.isRequired,
  submitResponse: _propTypes["default"].func.isRequired,
  text: _propTypes["default"].shape({
    anchor: _propTypes["default"].string,
    challenge: _propTypes["default"].string
  }).isRequired,
  verified: _propTypes["default"].bool.isRequired,
  anchor: _propTypes["default"].shape({
    width: _propTypes["default"].number,
    height: _propTypes["default"].number
  }).isRequired,
  card: _propTypes["default"].shape({
    width: _propTypes["default"].number,
    height: _propTypes["default"].number,
    padding: _propTypes["default"].number
  }).isRequired,
  challenge: _propTypes["default"].shape({
    width: _propTypes["default"].number,
    height: _propTypes["default"].number
  }).isRequired
};
var _default = Anchor;
exports["default"] = _default;