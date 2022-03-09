"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empty = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

var _emptyIcon = _interopRequireDefault(require("../../assets/empty-icon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-empty`;
const defaultProps = {
  image: _emptyIcon.default
};

const Empty = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const imageNode = typeof props.image === 'string' ? _react.default.createElement("img", {
    className: `${classPrefix}-image`,
    style: props.imageStyle,
    src: props.image,
    alt: 'empty'
  }) : props.image;
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement("div", {
    className: `${classPrefix}-image-container`
  }, imageNode), props.description && _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}-description`)
  }, props.description)));
};

exports.Empty = Empty;