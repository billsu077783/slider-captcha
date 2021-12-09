"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _anchor = _interopRequireDefault(require("./anchor"));

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fetchCaptcha = function fetchCaptcha(create) {
  return function (width, height, controller, setController) {
    if (controller) {
      controller.abort();
    }

    var newController = new window.AbortController();
    var signal = newController.signal;
    setController(newController);
    return create instanceof Function ? create(width, height) // Use provided promise for getting background and slider
    : fetch(create, {
      // Use create as API URL for fetch
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        width: width,
        height: height
      }),
      signal: signal
    }).then(function (message) {
      return message.json();
    });
  };
};

var fetchVerification = function fetchVerification(verify) {
  return function (captcha, response, trail) {
    return verify instanceof Function ? verify(captcha, response, trail) // Use provided promise for verifying captcha
    : fetch(verify, {
      // Verification API URL provided instead
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        captcha: captcha,
        response: {
          response: response,
          trail: trail
        },
        tolerance: 5
      })
    }).then(function (message) {
      return message.json();
    });
  };
};

var SliderCaptcha = function SliderCaptcha(_ref) {
  var callback = _ref.callback,
      create = _ref.create,
      verify = _ref.verify,
      variant = _ref.variant,
      anchor = _ref.anchor,
      card = _ref.card,
      challenge = _ref.challenge,
      text = _ref.text;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      verified = _useState2[0],
      setVerified = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      captcha = _useState4[0],
      setCaptcha = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      controller = _useState6[0],
      setController = _useState6[1];

  var createCaptcha = function createCaptcha() {
    return new Promise(function (resolve) {
      fetchCaptcha(create)(card.width, card.height, controller, setController).then(function (newCaptCha) {
        setCaptcha(newCaptCha.solution);
        resolve(newCaptCha);
      });
    });
  };

  var submitResponse = function submitResponse(response, trail) {
    return new Promise(function (resolve) {
      fetchVerification(verify)(captcha, response, trail).then(function (verification) {
        setCaptcha('');

        if (!verification.result || verification.result !== 'success' || !verification.token) {
          resolve(false);
        } else {
          setTimeout(function () {
            callback(verification.token);
            setVerified(true);
          }, 500);
          resolve(true);
        }
      });
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "scaptcha-container"
  }, /*#__PURE__*/_react["default"].createElement(_theme["default"], {
    variant: variant
  }), /*#__PURE__*/_react["default"].createElement(_anchor["default"], {
    text: text,
    createCaptcha: createCaptcha,
    submitResponse: submitResponse,
    verified: verified,
    anchor: anchor,
    card: card,
    challenge: challenge
  }));
};

SliderCaptcha.propTypes = {
  callback: _propTypes["default"].func,
  create: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  verify: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  variant: _propTypes["default"].string,
  anchor: _propTypes["default"].shape({
    width: _propTypes["default"].number,
    height: _propTypes["default"].number
  }),
  card: _propTypes["default"].shape({
    width: _propTypes["default"].number,
    height: _propTypes["default"].number,
    padding: _propTypes["default"].number
  }),
  challenge: _propTypes["default"].shape({
    width: _propTypes["default"].number,
    height: _propTypes["default"].number
  }),
  text: _propTypes["default"].shape({
    anchor: _propTypes["default"].string,
    challenge: _propTypes["default"].string
  })
};
SliderCaptcha.defaultProps = {
  callback: function callback(token) {
    return console.log(token);
  },
  // eslint-disable-line no-console
  create: 'captcha/create',
  verify: 'captcha/verify',
  variant: 'light',
  anchor: {
    width: 520,
    height: 50
  },
  card: {
    width: 520,
    height: 230,
    padding: 20
  },
  challenge: {
    width: 520,
    height: 50
  },
  text: {
    anchor: 'I am human',
    challenge: 'Slide to finish the puzzle'
  }
};
var _default = SliderCaptcha;
exports["default"] = _default;