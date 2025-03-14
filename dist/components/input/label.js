"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_template_literals_1 = __importDefault(require("@netlify/classnames-template-literals"));
const components_1 = require("../../components");
const Label = ({ text, htmlFor, required = false }) => {
    const noLabel = !text;
    if (noLabel)
        return null;
    return ((0, jsx_runtime_1.jsxs)(components_1.Text
    //   variant="p16"
    , Object.assign({ 
        //   variant="p16"
        tag: "label", "test-id": "label", className: labelStyle, htmlFor: htmlFor }, { children: [text, required && (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "ml-1 text-red-200" }, { children: "*" }), void 0)] }), void 0));
};
exports.Label = Label;
const labelStyle = (0, classnames_template_literals_1.default)(`
  mb-1 block text-sm
`);
//# sourceMappingURL=label.js.map