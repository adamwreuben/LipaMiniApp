import React from 'react';
import classNames from 'classnames';
import { mergeProps } from '../../utils/with-default-props';
import { withNativeProps } from '../../utils/native-props';
import EmptyIcon from '../../assets/empty-icon.svg';
const classPrefix = `adm-empty`;
const defaultProps = {
  image: EmptyIcon
};
export const Empty = p => {
  const props = mergeProps(defaultProps, p);
  const imageNode = typeof props.image === 'string' ? React.createElement("img", {
    className: `${classPrefix}-image`,
    style: props.imageStyle,
    src: props.image,
    alt: 'empty'
  }) : props.image;
  return withNativeProps(props, React.createElement("div", {
    className: classPrefix
  }, React.createElement("div", {
    className: `${classPrefix}-image-container`
  }, imageNode), props.description && React.createElement("div", {
    className: classNames(`${classPrefix}-description`)
  }, props.description)));
};