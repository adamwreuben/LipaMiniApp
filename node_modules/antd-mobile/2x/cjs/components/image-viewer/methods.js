"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearImageViewer = clearImageViewer;
exports.showImageViewer = showImageViewer;
exports.showMultiImageViewer = showMultiImageViewer;

var _react = _interopRequireWildcard(require("react"));

var _renderToBody = require("../../utils/render-to-body");

var _imageViewer = require("./image-viewer");

var _ahooks = require("ahooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const handlerSet = new Set();

function showImageViewer(props) {
  clearImageViewer();
  const Wrapper = (0, _react.forwardRef)((_, ref) => {
    const [visible, setVisible] = (0, _react.useState)(false);
    (0, _react.useEffect)(() => {
      setVisible(true);
    }, []);
    const isUnmountedRef = (0, _ahooks.useUnmountedRef)();
    (0, _react.useImperativeHandle)(ref, () => ({
      close: () => {
        if (isUnmountedRef.current) return;
        setVisible(false);
      }
    }));
    return _react.default.createElement(_imageViewer.ImageViewer, Object.assign({}, props, {
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
  const ref = (0, _react.createRef)();
  const unmount = (0, _renderToBody.renderToBody)(_react.default.createElement(Wrapper, {
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

function showMultiImageViewer(props) {
  clearImageViewer();
  const Wrapper = (0, _react.forwardRef)((_, ref) => {
    const [visible, setVisible] = (0, _react.useState)(false);
    (0, _react.useEffect)(() => {
      setVisible(true);
    }, []);
    const isUnmountedRef = (0, _ahooks.useUnmountedRef)();
    (0, _react.useImperativeHandle)(ref, () => ({
      close: () => {
        if (isUnmountedRef.current) return;
        setVisible(false);
      }
    }));
    return _react.default.createElement(_imageViewer.MultiImageViewer, Object.assign({}, props, {
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
  const ref = (0, _react.createRef)();
  const unmount = (0, _renderToBody.renderToBody)(_react.default.createElement(Wrapper, {
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

function clearImageViewer() {
  handlerSet.forEach(handler => {
    handler.close();
  });
  handlerSet.clear();
}