import React from 'react';
import classNames from 'classnames';
import { iconRecord } from './error';
import { mergeProps } from '../../utils/with-default-props';
import { withNativeProps } from '../../utils/native-props';
import { useConfig } from '../config-provider';
const classPrefix = `adm-error-block`;
const defaultProps = {
  status: 'default'
};
export const ErrorBlock = p => {
  const props = mergeProps(defaultProps, p);
  const icon = iconRecord[props.status];
  const {
    locale
  } = useConfig();
  const contentPack = locale.ErrorBlock[props.status];
  const des = 'description' in props ? props.description : contentPack.description;
  const title = 'title' in props ? props.title : contentPack.title;
  let imageNode = React.createElement("img", {
    src: icon
  });

  if (props.image) {
    if (typeof props.image === 'string') {
      imageNode = React.createElement("img", {
        src: props.image
      });
    } else {
      imageNode = props.image;
    }
  }

  return withNativeProps(props, React.createElement("div", {
    className: classNames(classPrefix, {
      [`${classPrefix}-full-page`]: props.fullPage
    })
  }, React.createElement("div", {
    className: `${classPrefix}-image`
  }, imageNode), React.createElement("div", {
    className: `${classPrefix}-description`
  }, title && React.createElement("div", {
    className: `${classPrefix}-description-title`
  }, title), des && React.createElement("div", {
    className: `${classPrefix}-description-subtitle`
  }, des)), props.children && React.createElement("div", {
    className: `${classPrefix}-content`
  }, props.children)));
};