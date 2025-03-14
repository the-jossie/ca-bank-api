"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_template_literals_1 = __importDefault(require("@netlify/classnames-template-literals"));
const error_message_1 = require("./error-message");
const label_1 = require("./label");
const SelectInput = (_a) => {
    var { className, label = "", name = "", error, placeholder, options = [] } = _a, otherProps = __rest(_a, ["className", "label", "name", "error", "placeholder", "options"]);
    const { value, register } = otherProps;
    const inputStyle = (0, classnames_template_literals_1.default)(`
        ${inputBaseStyle}
        ${error
        ? "outline-red-200 bg-red-600"
        : `outline-grey focus:outline-primary hover:outline-grey-600`}
    `);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: className }, { children: [label && (0, jsx_runtime_1.jsx)(label_1.Label, { text: label, htmlFor: name }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: inputContainerStyle }, { children: (0, jsx_runtime_1.jsxs)("select", Object.assign({ className: inputStyle, value: value, id: name }, register, otherProps, { children: [(0, jsx_runtime_1.jsx)("option", Object.assign({ value: "" }, { children: placeholder }), void 0), options === null || options === void 0 ? void 0 : options.map((option) => ((0, jsx_runtime_1.jsx)("option", Object.assign({ value: option }, { children: option }), option)))] }), void 0) }), void 0), error && (0, jsx_runtime_1.jsx)(error_message_1.ErrorMessage, { error: error }, void 0)] }), void 0));
};
exports.SelectInput = SelectInput;
const inputContainerStyle = (0, classnames_template_literals_1.default)(`
  relative max-h-14 w-full
`);
const inputBaseStyle = (0, classnames_template_literals_1.default)(`
  w-full min-w-[177px] py-[10px] px-[25px] rounded-[10px] border border-grey transition-all
`);
//# sourceMappingURL=select-input.js.map