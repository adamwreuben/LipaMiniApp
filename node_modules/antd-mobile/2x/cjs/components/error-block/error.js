"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconRecord = void 0;

var _default = _interopRequireDefault(require("../../assets/default.svg"));

var _busy = _interopRequireDefault(require("../../assets/busy.svg"));

var _disconnected = _interopRequireDefault(require("../../assets/disconnected.svg"));

var _empty = _interopRequireDefault(require("../../assets/empty.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const iconRecord = {
  default: _default.default,
  busy: _busy.default,
  disconnected: _disconnected.default,
  empty: _empty.default
};
exports.iconRecord = iconRecord;