"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @font-face {\n    font-family: 'Roboto Regular';\n    font-style: normal;\n    font-weight: normal;\n    src: local('/fonts/Roboto Regular'), url('/fonts/Roboto-Regular.woff') format('woff');\n  }\n  * {\n    font-family: 'Roboto Regular', sans-serif;\n  }\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"], ["\n  @font-face {\n    font-family: 'Roboto Regular';\n    font-style: normal;\n    font-weight: normal;\n    src: local('/fonts/Roboto Regular'), url('/fonts/Roboto-Regular.woff') format('woff');\n  }\n  * {\n    font-family: 'Roboto Regular', sans-serif;\n  }\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
});
exports["default"] = GlobalStyle;
var templateObject_1;
