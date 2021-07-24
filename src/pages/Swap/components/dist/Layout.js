"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.RightTopCard = exports.LeftTopCard = exports.Cards = void 0;
var styled_components_1 = require("styled-components");
exports.Cards = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-gap: 24px;\n  grid-template-columns: auto 1fr;\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n"], ["\n  display: grid;\n  grid-gap: 24px;\n  grid-template-columns: auto 1fr;\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n"])));
exports.LeftTopCard = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  grid-column: 1;\n  grid-row: 1;\n"], ["\n  grid-column: 1;\n  grid-row: 1;\n"])));
exports.RightTopCard = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  grid-column: 2;\n  grid-row: 1;\n"], ["\n  grid-column: 2;\n  grid-row: 1;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
