"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePickerValueExtend = usePickerValueExtend;

var _react = require("react");

var _memoize = _interopRequireDefault(require("lodash/memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function usePickerValueExtend(columns) {
  const generateItems = (0, _react.useMemo)(() => {
    return (0, _memoize.default)(val => {
      return val.map((v, index) => {
        var _a;

        const column = columns[index];
        if (!column) return null;
        return (_a = column.find(item => item.value === v)) !== null && _a !== void 0 ? _a : null;
      });
    }, val => JSON.stringify(val));
  }, [columns]);

  function generateValueExtend(val) {
    return {
      get items() {
        return generateItems(val);
      }

    };
  }

  return generateValueExtend;
}