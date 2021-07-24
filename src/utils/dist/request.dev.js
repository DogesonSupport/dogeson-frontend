"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHotTokens = getHotTokens;
exports.getTokenInfo = getTokenInfo;
exports.getHistoricalData = getHistoricalData;

var _unfetch = _interopRequireDefault(require("unfetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getHotTokens() {
  var result;
  return regeneratorRuntime.async(function getHotTokens$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = regeneratorRuntime;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _unfetch["default"])('http://localhost:8080/v1.0/dogeson/hot'));

        case 3:
          _context.t1 = _context.sent.json();
          _context.next = 6;
          return _context.t0.awrap.call(_context.t0, _context.t1);

        case 6:
          result = _context.sent;
          return _context.abrupt("return", result);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getTokenInfo(dexId) {
  var result;
  return regeneratorRuntime.async(function getTokenInfo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = regeneratorRuntime;
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _unfetch["default"])("http://localhost:8080/v1.0/dogeson/info/dex/".concat(dexId)));

        case 3:
          _context2.t1 = _context2.sent.json();
          _context2.next = 6;
          return _context2.t0.awrap.call(_context2.t0, _context2.t1);

        case 6:
          result = _context2.sent;
          return _context2.abrupt("return", result);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getHistoricalData(geckoId, days) {
  var result;
  return regeneratorRuntime.async(function getHistoricalData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = regeneratorRuntime;
          _context3.next = 3;
          return regeneratorRuntime.awrap((0, _unfetch["default"])("http://localhost:8080/v1.0/dogeson/historical?geckoId=".concat(geckoId, "&days=").concat(days)));

        case 3:
          _context3.t1 = _context3.sent.json();
          _context3.next = 6;
          return _context3.t0.awrap.call(_context3.t0, _context3.t1);

        case 6:
          result = _context3.sent;
          return _context3.abrupt("return", result);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}