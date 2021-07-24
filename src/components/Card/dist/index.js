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
exports.BlueCard = exports.PinkCard = exports.YellowCard = exports.OutlineCard = exports.GreyCard = exports.LightCard = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("@pancakeswap-libs/uikit");
var Card = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"], ["\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])), function (_a) {
    var padding = _a.padding;
    return padding;
}, function (_a) {
    var border = _a.border;
    return border;
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius;
});
exports["default"] = Card;
exports.LightCard = styled_components_1["default"](Card)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"], ["\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
exports.GreyCard = styled_components_1["default"](Card)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
exports.OutlineCard = styled_components_1["default"](Card)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: 1px solid ", ";\n"], ["\n  border: 1px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
exports.YellowCard = styled_components_1["default"](Card)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: rgba(243, 132, 30, 0.05);\n  color: ", ";\n  font-weight: 500;\n"], ["\n  background-color: rgba(243, 132, 30, 0.05);\n  color: ", ";\n  font-weight: 500;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.binance;
});
exports.PinkCard = styled_components_1["default"](Card)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: rgba(255, 0, 122, 0.03);\n  color: ", ";\n  font-weight: 500;\n"], ["\n  background-color: rgba(255, 0, 122, 0.03);\n  color: ", ";\n  font-weight: 500;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var BlueCardStyled = styled_components_1["default"](Card)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border-radius: 12px;\n  width: fit-content;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  border-radius: 12px;\n  width: fit-content;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primaryDark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
exports.BlueCard = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (react_1["default"].createElement(BlueCardStyled, __assign({}, rest),
        react_1["default"].createElement(uikit_1.Text, { color: "#24c7d6" }, children)));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
