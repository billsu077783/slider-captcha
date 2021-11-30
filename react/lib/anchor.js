"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _card = _interopRequireDefault(require("./card"));

var _icons = require("./icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Anchor = function Anchor(_ref) {
  var text = _ref.text,
      fetchCaptcha = _ref.fetchCaptcha,
      submitResponse = _ref.submitResponse,
      verified = _ref.verified;
  return (
    /*#__PURE__*/
    // const [open, setOpen] = useState(false);
    // const handleClose = () => {
    //   setOpen(false);
    // };
    // const handleOpen = () => {
    //   setOpen(true);
    // };
    // const handleKey = (e) => {
    //   if (e.code === "Enter" || e.code === "Space") {
    //     setOpen(true);
    //   } else if (e.key === "Escape") {
    //     setOpen(false);
    //   }
    // };
    // <div>
    //   <div
    //     className="scaptcha-anchor-container scaptcha-anchor-element"
    //     onClick={handleOpen}
    //   >
    //     <button
    //       suppressHydrationWarning
    //       type="button"
    //       className={`scaptcha-anchor-checkbox ${
    //         !verified && 'scaptcha-anchor-checkbox-default'
    //       } scaptcha-anchor-element`}
    //       onKeyUp={handleKey}
    //     >
    //       {verified && <SuccessIcon />}
    //     </button>
    //     <div className="scaptcha-anchor-label scaptcha-anchor-element">
    //       {text.anchor}
    //     </div>
    //   </div>
    //   {!verified && open && (
    //     <div>
    //       <div className="scaptcha-hidden" onClick={handleClose} />
    //       <Card
    //         fetchCaptcha={fetchCaptcha}
    //         submitResponse={submitResponse}
    //         text={text}
    //       />
    //     </div>
    //   )}
    // </div>
    _react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, verified && /*#__PURE__*/_react["default"].createElement(_icons.SuccessIcon, null)), !verified && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_card["default"], {
      fetchCaptcha: fetchCaptcha,
      submitResponse: submitResponse,
      text: text
    })))
  );
};

Anchor.propTypes = {
  fetchCaptcha: _propTypes["default"].func.isRequired,
  submitResponse: _propTypes["default"].func.isRequired,
  text: _propTypes["default"].shape({
    anchor: _propTypes["default"].string,
    challenge: _propTypes["default"].string
  }).isRequired,
  verified: _propTypes["default"].bool.isRequired
};
var _default = Anchor;
exports["default"] = _default;