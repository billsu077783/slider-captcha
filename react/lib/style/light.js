"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var lightTheme = ".scaptcha-icon-dark {\n  display: none;\n}\n\n.scaptcha-icon-light {\n  display: block;\n}\n\n.scaptcha-anchor-container {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  position: absolute;\n}\n\n.scaptcha-anchor-label {\n  font-size: 13px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  color: #424242;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  margin-right: 5px;\n  cursor: default;\n}\n\n.scaptcha-card-background {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.scaptcha-card-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.scaptcha-card-container {\n  position: absolute;\n}\n\n.scaptcha-card-slider-puzzle {\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n}\n\n.scaptcha-card-slider-control {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  border-radius: 5px 0px 0px 5px;\n}\n\n.scaptcha-card-slider-control-default {\n  background-color: #fafafa;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.scaptcha-card-slider-control-active,\n.scaptcha-card-slider-control-success,\n.scaptcha-card-slider-control-failure {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.scaptcha-card-slider-control-active {\n  background-color: #355f2d;\n}\n\n.scaptcha-card-slider-control-success {\n  background-color: #35dd74;\n}\n\n.scaptcha-card-slider-control-failure {\n  background-color: #e40808;\n}\n\n.scaptcha-card-slider-container {\n  margin-top: 20px;\n  position: relative;\n}\n\n.scaptcha-card-slider-track {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #355f2d;\n  border-radius: 5px;\n}\n\n.scaptcha-card-slider-mask {\n  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  border-radius: 5px 0px 0px 5px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.scaptcha-card-slider-track-default,\n.scaptcha-card-slider-track-active {\n  background-color: #708a6b;\n}\n\n.scaptcha-card-slider-track-success {\n  background-color: #83f788;\n}\n\n.scaptcha-card-slider-track-failure {\n  background-color: #ff3c3c;\n}\n\n.scaptcha-card-slider-label {\n  font-size: 13px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #716e6e;\n  padding-left: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  cursor: default;\n}\n\n.scaptcha-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1px;\n  margin-top: 1px;\n}\n\n.loading-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1px;\n  margin-top: 1px;\n  /* Animation */\n  animation-name: loading;\n  animation-duration: 500ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  transform-origin: 50% 50%;\n  display: inline-block;\n}\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.scaptcha-hidden {\n  background: none;\n  top: 0;\n  left: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n}\n\n.scaptcha-container * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n";
var _default = lightTheme;
exports["default"] = _default;