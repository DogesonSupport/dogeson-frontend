"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var useLast_1 = require("../../hooks/useLast");
var AdvancedSwapDetails_1 = require("./AdvancedSwapDetails");
var AdvancedDetailsFooter = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // padding-top: calc(16px + 2rem);\n  // padding-bottom: 20px;\n  // margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ", ";\n  z-index: 1;\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"], ["\n  // padding-top: calc(16px + 2rem);\n  // padding-bottom: 20px;\n  // margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ", ";\n  z-index: 1;\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var show = _a.show;
    return (show ? 'translateY(0%)' : 'translateY(-100%)');
});
function AdvancedSwapDetailsDropdown(_a) {
    var _b;
    var trade = _a.trade, rest = __rest(_a, ["trade"]);
    var lastTrade = useLast_1.useLastTruthy(trade);
    return (react_1["default"].createElement(AdvancedDetailsFooter, { show: Boolean(trade) },
        react_1["default"].createElement(AdvancedSwapDetails_1.AdvancedSwapDetails, __assign({}, rest, { trade: (_b = trade !== null && trade !== void 0 ? trade : lastTrade) !== null && _b !== void 0 ? _b : undefined }))));
}
exports["default"] = AdvancedSwapDetailsDropdown;
var templateObject_1;
