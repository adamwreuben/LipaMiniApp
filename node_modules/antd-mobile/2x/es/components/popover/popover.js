import React, { forwardRef, useImperativeHandle } from 'react';
import Tooltip from 'rc-tooltip';
import classNames from 'classnames';
import { usePropsValue } from '../../utils/use-props-value';
import { mergeProps } from '../../utils/with-default-props';
import { withStopPropagation } from '../../utils/with-stop-propagation';
import { Arrow } from './arrow';
const classPrefix = `adm-popover`;
const defaultProps = {
  placement: 'top',
  defaultVisible: false,
  stopPropagation: ['click'],
  getContainer: () => document.body
};
export const Popover = forwardRef((p, ref) => {
  var _a;

  const props = mergeProps(defaultProps, p);
  const {
    mode = 'light'
  } = props;
  const [visible, setVisible] = usePropsValue({
    value: props.visible,
    defaultValue: props.defaultVisible,
    onChange: props.onVisibleChange
  });
  useImperativeHandle(ref, () => {
    return {
      show: () => setVisible(true),
      hide: () => setVisible(false),
      visible
    };
  }, [visible]);
  const overlay = withStopPropagation(props.stopPropagation, React.createElement("div", {
    className: `${classPrefix}-inner-content`
  }, props.content));
  return React.createElement(Tooltip, Object.assign({}, props, {
    placement: props.placement,
    align: props.align,
    overlayClassName: classNames(`${classPrefix}-${mode}`, props.className),
    overlayStyle: props.style,
    destroyTooltipOnHide: props.destroyOnHide,
    prefixCls: classPrefix,
    getTooltipContainer: props.getContainer || (() => document.body),
    visible: visible,
    arrowContent: React.createElement(Arrow, {
      className: `${classPrefix}-arrow-icon`
    }),
    onVisibleChange: setVisible,
    trigger: (_a = props.trigger) !== null && _a !== void 0 ? _a : [],
    overlay: overlay
  }), props.children);
});