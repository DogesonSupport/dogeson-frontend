"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("@pancakeswap-libs/uikit");
var react_fast_marquee_1 = require("react-fast-marquee");
var StyledBar = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border\n"], ["\n  width: 100%;\n  border\n"])));
var FlowBar = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  background-color: rgba(0,0,0,0.2);\n  border-radius: 0px 12px 12px 0px;\n  padding: 6px;\n"], ["\n  flex: 1;\n  background-color: rgba(0,0,0,0.2);\n  border-radius: 0px 12px 12px 0px;\n  padding: 6px;\n"])));
var BarIntro = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100px;\n  display: flex;\n  align-items: center;\n  padding-left: 12px;\n  padding-top: 0;\n  font-size: 12px;\n  color: #fff;\n  padding-right: 24px;\n  background-color: ", ";\n  border-radius: 12px 0px 0px 12px;\n"], ["\n  width: 100px;\n  display: flex;\n  align-items: center;\n  padding-left: 12px;\n  padding-top: 0;\n  font-size: 12px;\n  color: #fff;\n  padding-right: 24px;\n  background-color: ", ";\n  border-radius: 12px 0px 0px 12px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
});
var StyledLink = styled_components_1["default"](uikit_1.Link)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  margin-left: 1rem;\n  &:hover {\n    text-decoration: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  margin-left: 1rem;\n  &:hover {\n    text-decoration: none;\n  }\n"])));
var RankingColor = [
    '#F7931A',
    '#ACACAC',
    '#6E441E',
    '#C5C5C5',
    '#C5C5C5',
    '#C5C5C5',
    '#C5C5C5',
    '#C5C5C5',
    '#C5C5C5',
    '#C5C5C5',
    '#C5C5C5',
    '#C5C5C5'
];
var HotToken = function (_a) {
    var index = _a.index, dexId = _a.dexId, name = _a.name, symbol = _a.symbol;
    var Ranking = styled_components_1["default"].span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    padding-right: 12px;\n    color: ", ";\n  "], ["\n    padding-right: 12px;\n    color: ", ";\n  "])), function (_a) {
        var index1 = _a.index1;
        return RankingColor[index1 - 1];
    });
    return (react_1["default"].createElement(StyledLink, { href: "/#/swap/" + dexId, fontSize: "14px" },
        react_1["default"].createElement(Ranking, { index1: index },
            "#",
            index),
        react_1["default"].createElement("span", { style: { color: '#fff', fontWeight: 400 } }, name)));
};
function HotTokenBar(_a) {
    var tokens = _a.tokens;
    return (react_1["default"].createElement(uikit_1.Flex, { mb: "30px" },
        react_1["default"].createElement(BarIntro, null, "Top Bar"),
        react_1["default"].createElement(FlowBar, null,
            react_1["default"].createElement("div", { style: { width: 'calc(100% - 120px)' } },
                react_1["default"].createElement(react_fast_marquee_1["default"], { gradient: false },
                    react_1["default"].createElement("ul", { style: { display: 'flex', listStyle: 'none', justifyContent: 'center', width: 'calc(100% - 120px)' } }, tokens ? tokens.map(function (token, key) {
                        return (react_1["default"].createElement("li", null,
                            react_1["default"].createElement(HotToken, { index: key + 1, dexId: token.dexId, symbol: token.symbol, name: token.name })));
                    }) : react_1["default"].createElement(react_1["default"].Fragment, null))))),
        react_1["default"].createElement("div", { className: "paddingRight: 30px" })));
}
exports["default"] = HotTokenBar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
