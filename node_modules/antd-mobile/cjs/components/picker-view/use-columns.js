"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useColumns = useColumns;

var _react = require("react");

function useColumns(rawColumns, value) {
  return (0, _react.useMemo)(() => {
    const columns = typeof rawColumns === 'function' ? rawColumns(value) : rawColumns;
    return columns.map(column => column.map(item => typeof item === 'string' ? {
      label: item,
      value: item
    } : item));
  }, [rawColumns, value]);
}