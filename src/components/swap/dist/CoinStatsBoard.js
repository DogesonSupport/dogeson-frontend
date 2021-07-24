"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("@pancakeswap-libs/uikit");
var Column_1 = require("../Column");
var Row_1 = require("../Row");
var IconWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", " {\n    align-items: flex-end;\n  }\n"], ["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", " {\n    align-items: flex-end;\n  }\n"])), function (_a) {
    var size = _a.size;
    return (size ? size + "px" : '32px');
}, function (_a) {
    var size = _a.size;
    return (size ? size + "px" : '32px');
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var StyledWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: 1.25rem;\n"], ["\n  background-color: ", ";\n  padding: 1.25rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
});
function CoinStatsBoard(_a) {
    var tokenName = _a.tokenName, icon = _a.icon, price = _a.price, change24h = _a.change24h, volume24h = _a.volume24h, liquidity = _a.liquidity, marketCap = _a.marketCap;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1["default"].createElement(StyledWrapper, null,
        react_1["default"].createElement(Row_1.RowBetween, { style: { textAlign: 'center' } },
            react_1["default"].createElement(IconWrapper, { size: 32 },
                react_1["default"].createElement("img", { src: icon, alt: "Coin icon" })),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "Coin"),
                react_1["default"].createElement(uikit_1.Text, null, tokenName)),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "Price"),
                react_1["default"].createElement(uikit_1.Text, null, price)),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "24h Change"),
                react_1["default"].createElement(uikit_1.Text, null, change24h)),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "24h Volume"),
                react_1["default"].createElement(uikit_1.Text, null, volume24h)),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "Liquidity"),
                react_1["default"].createElement(uikit_1.Text, null, liquidity)),
            react_1["default"].createElement(Column_1["default"], null,
                react_1["default"].createElement(uikit_1.Text, null, "MarketCap"),
                react_1["default"].createElement(uikit_1.Text, null, marketCap)))));
}
exports["default"] = CoinStatsBoard;
var templateObject_1, templateObject_2;
