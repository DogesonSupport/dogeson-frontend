"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("@pancakeswap-libs/uikit");
var numeral_1 = require("numeral");
var Column_1 = require("../../../components/Column");
var Row_1 = require("../../../components/Row");
var IconWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  & > img,\n  height: ", ";\n  width: ", ";\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", " {\n    align-items: flex-end;\n  }\n"], ["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  & > img,\n  height: ", ";\n  width: ", ";\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", " {\n    align-items: flex-end;\n  }\n"])), function (_a) {
    var size = _a.size;
    return (size ? size + "px" : '32px');
}, function (_a) {
    var size = _a.size;
    return (size ? size + "px" : '32px');
}, function (_a) {
    var size = _a.size;
    return (size ? size + "px" : '32px');
}, function (_a) {
    var size = _a.size;
    return (size ? size + "px" : '32px');
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var StyledWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 12px 12px 0px 0px;\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 12px 12px 0px 0px;\n  padding: 12px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
});
function CoinStatsBoard(_a) {
    var tokenInfo = _a.tokenInfo;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1["default"].createElement(StyledWrapper, null,
        react_1["default"].createElement(Row_1.RowBetween, { style: { textAlign: 'center' } },
            tokenInfo ?
                react_1["default"].createElement(IconWrapper, { size: 32 },
                    react_1["default"].createElement("img", { src: tokenInfo.iconSmall, alt: "Coin icon" }))
                : react_1["default"].createElement(react_1["default"].Fragment, null),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "Coin"),
                react_1["default"].createElement(uikit_1.Text, null, tokenInfo ? tokenInfo.name : '')),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "Price"),
                react_1["default"].createElement(uikit_1.Text, null, tokenInfo ? tokenInfo.price : '')),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "24h Change"),
                react_1["default"].createElement(uikit_1.Text, null, tokenInfo ? tokenInfo.priceChange24H.toFixed(2) + "%" : '')),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "24h Volume"),
                react_1["default"].createElement(uikit_1.Text, null, tokenInfo ? numeral_1["default"](tokenInfo.volumne24H).format('0,0.00') : '')),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "Liquidity"),
                react_1["default"].createElement(uikit_1.Text, null, tokenInfo ? numeral_1["default"](tokenInfo.liquidity).format('$0,0.00') : '')),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "MarketCap"),
                react_1["default"].createElement(uikit_1.Text, null, tokenInfo ? numeral_1["default"](tokenInfo.marketCap).format('$0,0.00') : '')))));
}
exports["default"] = CoinStatsBoard;
var templateObject_1, templateObject_2;
