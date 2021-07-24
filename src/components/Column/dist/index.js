"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.AutoColumn = exports.FullHeightColumn = exports.ColumnCenter = void 0;
var styled_components_1 = require("styled-components");
var Column = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"])));
exports.ColumnCenter = styled_components_1["default"](Column)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  align-items: center;\n"], ["\n  width: 100%;\n  align-items: center;\n"])));
exports.FullHeightColumn = styled_components_1["default"](Column)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n"], ["\n  height: 100%;\n"])));
exports.AutoColumn = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"], ["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"])), function (_a) {
    var gap = _a.gap;
    return (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap;
}, function (_a) {
    var justify = _a.justify;
    return justify && justify;
});
exports["default"] = Column;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
