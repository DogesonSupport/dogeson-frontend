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
var AppBody_1 = require("../../AppBody");
var TextWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  padding: 12px 20px;\n  word-break: break-all;\n"], ["\n  border-top: 1px solid ", ";\n  padding: 12px 20px;\n  word-break: break-all;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var IconWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 20px;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", " {\n    align-items: flex-end;\n  }\n"], ["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 20px;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", " {\n    align-items: flex-end;\n  }\n"])), function (_a) {
    var size = _a.size;
    return (size ? size + "px" : '32px');
}, function (_a) {
    var size = _a.size;
    return (size ? size + "px" : '32px');
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
function TokenInfo(_a) {
    var tokenInfo = _a.tokenInfo;
    return (react_1["default"].createElement(AppBody_1["default"], null,
        react_1["default"].createElement(uikit_1.Flex, { alignItems: "center" },
            tokenInfo ?
                react_1["default"].createElement(IconWrapper, { size: 32 },
                    react_1["default"].createElement("img", { src: tokenInfo.iconSmall, alt: "Coin icon" }))
                : react_1["default"].createElement(react_1["default"].Fragment, null),
            react_1["default"].createElement(uikit_1.Text, null, tokenInfo ? tokenInfo.name : '')),
        react_1["default"].createElement(uikit_1.Flex, { flexDirection: "column" },
            react_1["default"].createElement(TextWrapper, null,
                react_1["default"].createElement(uikit_1.Text, null,
                    react_1["default"].createElement("div", null, "Total Supply"),
                    tokenInfo ? numeral_1["default"](tokenInfo.totalSupply).format('0,0') : '')),
            react_1["default"].createElement(TextWrapper, null,
                react_1["default"].createElement(uikit_1.Text, null,
                    react_1["default"].createElement("div", null,
                        "Market Cap:",
                        react_1["default"].createElement("span", { style: { fontSize: '70%' } }, "(includes locked, excludes burned)")),
                    tokenInfo ? numeral_1["default"](tokenInfo.marketCap).format('$0,0.00') : '')),
            react_1["default"].createElement(TextWrapper, null,
                react_1["default"].createElement(uikit_1.Text, null,
                    "Pc v2| DOGESON/BNB LP Holdings: ",
                    react_1["default"].createElement("div", null,
                        tokenInfo ? numeral_1["default"](tokenInfo.bnbLPHoldings).format('0,0') + " BNB" : '',
                        "(",
                        tokenInfo ? "" + numeral_1["default"](tokenInfo.bnbLPHoldingsUSD).format('0,0') : '',
                        ")|Chart|Holders"))),
            react_1["default"].createElement(TextWrapper, null,
                react_1["default"].createElement(uikit_1.Text, null,
                    "Transactions: ",
                    tokenInfo ? numeral_1["default"](tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.transactions).format('0,0') : '')),
            react_1["default"].createElement(TextWrapper, null,
                react_1["default"].createElement(uikit_1.Text, null, tokenInfo ? tokenInfo.contractAddress : 'Contract Address: ')),
            react_1["default"].createElement(TextWrapper, null,
                react_1["default"].createElement(uikit_1.Text, null,
                    "Holders: ",
                    tokenInfo ? numeral_1["default"](tokenInfo.holders).format('0,0') : '')))));
}
exports["default"] = TokenInfo;
var templateObject_1, templateObject_2;
