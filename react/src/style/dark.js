const darkTheme = `.scaptcha-icon-light {
  display: none;
}

.scaptcha-icon-dark {
  display: block;
}

.scaptcha-anchor-container {
  display: flex;
  align-items: center;
  justify-content: right;
  position: absolute;
}

.scaptcha-anchor-label {
  font-size: 13px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: right;
  color: #c6c6c6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-right: 5px;
  cursor: default;
}

.scaptcha-card-background {
  display: flex;
  align-items: center;
  justify-content: center;
}

.scaptcha-card-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.scaptcha-card-container {
  position: absolute;
}

.scaptcha-card-slider-puzzle {
  position: absolute;
  top: 0;
  cursor: pointer;
}

.scaptcha-card-slider-control {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 5px 0px 0px 5px;
}

.scaptcha-card-slider-control-default {
  background-color: #242222;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}

.scaptcha-card-slider-control-active,
.scaptcha-card-slider-control-success,
.scaptcha-card-slider-control-failure {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.scaptcha-card-slider-control-active {
  background-color: #0889e4;
}

.scaptcha-card-slider-control-success {
  background-color: #35dd74;
}

.scaptcha-card-slider-control-failure {
  background-color: #e40808;
}

.scaptcha-card-slider-container {
  margin-top: 20px;
  position: relative;
}

.scaptcha-card-slider-track {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #353535;
  border-radius: 5px;
}

.scaptcha-card-slider-mask {
  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  border-radius: 5px 0px 0px 5px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.scaptcha-card-slider-track-default,
.scaptcha-card-slider-track-active {
  background-color: #3caeff;
}

.scaptcha-card-slider-track-success {
  background-color: #83f788;
}

.scaptcha-card-slider-track-failure {
  background-color: #ff3c3c;
}

.scaptcha-card-slider-label {
  font-size: 13px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #716e6e;
  padding-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: default;
}

.scaptcha-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1px;
  margin-top: 1px;
}

.scaptcha-hidden {
  background: none;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: fixed;
}

.scaptcha-container * {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
`;
export default darkTheme;
