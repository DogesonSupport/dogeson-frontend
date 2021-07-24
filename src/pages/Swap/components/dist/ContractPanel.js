"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("@pancakeswap-libs/uikit");
var twitter_png_1 = require("../../../assets/images/twitter.png");
var telegram_png_1 = require("../../../assets/images/telegram.png");
var IconWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  margin-left: 36px;\n  height: ", ";\n  width: ", ";\n  & > img, span {\n    height: ", ";\n    width: ", ";\n  }\n  ", " {\n    align-items: flex-end;\n  }\n"], ["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  margin-left: 36px;\n  height: ", ";\n  width: ", ";\n  & > img, span {\n    height: ", ";\n    width: ", ";\n  }\n  ", " {\n    align-items: flex-end;\n  }\n"])), function (_a) {
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
var ContractText = styled_components_1["default"](uikit_1.Text)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  padding: 0.5rem 1rem;\n  text-overflow: ellipsis;\n"], ["\n  color: ", ";\n  padding: 0.5rem 1rem;\n  text-overflow: ellipsis;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
function ContractPanel(_a) {
    var token = _a.token;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(uikit_1.Flex, { justifyContent: "space-between", mb: "30px" },
            react_1["default"].createElement(uikit_1.Card, null,
                react_1["default"].createElement(ContractText, null, token ? token.contractAddress : '')),
            react_1["default"].createElement(uikit_1.Flex, null,
                react_1["default"].createElement(IconWrapper, { size: 32 },
                    react_1["default"].createElement("img", { src: twitter_png_1["default"], alt: "Twitter icon" })),
                react_1["default"].createElement(IconWrapper, { size: 32 },
                    react_1["default"].createElement("img", { src: telegram_png_1["default"], alt: "Telegram icon" }))))));
}
exports["default"] = ContractPanel;
var templateObject_1, templateObject_2;
