import React, { createRef, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { renderToBody } from '../../utils/render-to-body';
import { ImageViewer, MultiImageViewer } from './image-viewer';
import { useUnmountedRef } from 'ahooks';
const handlerSet = new Set();
export function showImageViewer(props) {
  clearImageViewer();
  const Wrapper = forwardRef((_, ref) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      setVisible(true);
    }, []);
    const isUnmountedRef = useUnmountedRef();
    useImperativeHandle(ref, () => ({
      close: () => {
        if (isUnmountedRef.current) return;
        setVisible(false);
      }
    }));
    return React.createElement(ImageViewer, Object.assign({}, props, {
      visible: visible,
      onClose: () => {
        var _a;

        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
        setVisible(false);
      },
      afterClose: () => {
        var _a;

        (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
        unmount();
      }
    }));
  });
  const ref = createRef();
  const unmount = renderToBody(React.createElement(Wrapper, {
    ref: ref
  }));
  const handler = {
    close: () => {
      var _a;

      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.close();
    }
  };
  handlerSet.add(handler);
  return handler;
}
export function showMultiImageViewer(props) {
  clearImageViewer();
  const Wrapper = forwardRef((_, ref) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      setVisible(true);
    }, []);
    const isUnmountedRef = useUnmountedRef();
    useImperativeHandle(ref, () => ({
      close: () => {
        if (isUnmountedRef.current) return;
        setVisible(false);
      }
    }));
    return React.createElement(MultiImageViewer, Object.assign({}, props, {
      visible: visible,
      onClose: () => {
        var _a;

        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
        setVisible(false);
      },
      afterClose: () => {
        var _a;

        (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
        unmount();
      }
    }));
  });
  const ref = createRef();
  const unmount = renderToBody(React.createElement(Wrapper, {
    ref: ref
  }));
  const handler = {
    close: () => {
      var _a;

      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.close();
    }
  };
  handlerSet.add(handler);
  return handler;
}
export function clearImageViewer() {
  handlerSet.forEach(handler => {
    handler.close();
  });
  handlerSet.clear();
}