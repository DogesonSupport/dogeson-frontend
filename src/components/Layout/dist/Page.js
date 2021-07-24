"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var Page = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: calc(100vh - 64px);\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"], ["\n  min-height: calc(100vh - 64px);\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
exports["default"] = Page;
var templateObject_1;
