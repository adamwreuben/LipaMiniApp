"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rcTooltip = _interopRequireDefault(require("rc-tooltip"));

var _classnames = _interopRequireDefault(require("classnames"));

var _usePropsValue = require("../../utils/use-props-value");

var _withDefaultProps = require("../../utils/with-default-props");

var _withStopPropagation = require("../../utils/with-stop-propagation");

var _arrow = require("./arrow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-popover`;
const defaultProps = {
  placement: 'top',
  defaultVisible: false,
  stopPropagation: ['click'],
  getContainer: () => document.body
};
const Popover = (0, _react.forwardRef)((p, ref) => {
  var _a;

  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    mode = 'light'
  } = props;
  const [visible, setVisible] = (0, _usePropsValue.usePropsValue)({
    value: props.visible,
    defaultValue: props.defaultVisible,
    onChange: props.onVisibleChange
  });
  (0, _react.useImperativeHandle)(ref, () => {
    return {
      show: () => setVisible(true),
      hide: () => setVisible(false),
      visible
    };
  }, [visible]);
  const overlay = (0, _withStopPropagation.withStopPropagation)(props.stopPropagation, _react.default.createElement("div", {
    className: `${classPrefix}-inner-content`
  }, props.content));
  return _react.default.createElement(_rcTooltip.default, Object.assign({}, props, {
    placement: props.placement,
    align: props.align,
    overlayClassName: (0, _classnames.default)(`${classPrefix}-${mode}`, props.className),
    overlayStyle: props.style,
    destroyTooltipOnHide: props.destroyOnHide,
    prefixCls: classPrefix,
    getTooltipContainer: props.getContainer || (() => document.body),
    visible: visible,
    arrowContent: _react.default.createElement(_arrow.Arrow, {
      className: `${classPrefix}-arrow-icon`
    }),
    onVisibleChange: setVisible,
    trigger: (_a = props.trigger) !== null && _a !== void 0 ? _a : [],
    overlay: overlay
  }), props.children);
});
exports.Popover = Popover;