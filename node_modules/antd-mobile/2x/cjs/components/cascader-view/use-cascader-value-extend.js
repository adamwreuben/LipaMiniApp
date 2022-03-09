"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCascaderValueExtend = useCascaderValueExtend;

var _react = require("react");

var _memoize = _interopRequireDefault(require("lodash/memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useCascaderValueExtend(options) {
  const generateItems = (0, _react.useMemo)(() => {
    return (0, _memoize.default)(val => {
      const ret = [];
      let currentOptions = options;

      for (const v of val) {
        const target = currentOptions.find(option => option.value === v);

        if (!target) {
          break;
        }

        ret.push(target);
        if (!target.children) break;
        currentOptions = target.children;
      }

      return ret;
    }, val => JSON.stringify(val));
  }, [options]);

  function generateValueExtend(val) {
    return {
      get items() {
        return generateItems(val);
      }

    };
  }

  return generateValueExtend;
}