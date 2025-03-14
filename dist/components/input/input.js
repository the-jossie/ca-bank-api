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
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_template_literals_1 = __importDefault(require("@netlify/classnames-template-literals"));
const react_1 = require("react");
const components_1 = require("../../components");
// import EyeIcon from "@/svgs/eye.svg";
// import EyeOffIcon from "@/svgs/eye-off.svg";
const error_message_1 = require("./error-message");
const label_1 = require("./label");
const Input = (_a) => {
    var { className, label = "", name = "", type = "text", error, children, placeholder } = _a, otherProps = __rest(_a, ["className", "label", "name", "type", "error", "children", "placeholder"]);
    const { value, register } = otherProps;
    const IS_SELECT_INPUT_TYPE = (type === null || type === void 0 ? void 0 : type.toLowerCase().trim()) === "select";
    const IS_TEXTAREA_INPUT_TYPE = (type === null || type === void 0 ? void 0 : type.toLowerCase().trim()) === "textarea";
    const InputElement = IS_SELECT_INPUT_TYPE
        ? "select"
        : IS_TEXTAREA_INPUT_TYPE
            ? "textarea"
            : "input";
    const isPassword = type === "password";
    const isCheckbox = type === "checkbox";
    const [showPassword] = (0, react_1.useState)(false);
    const inputStyle = (0, classnames_template_literals_1.default)(`
        ${inputBaseStyle}
        ${isPassword ? "pr-10" : ""}
        ${error
        ? "outline-red-500"
        : `outline-grey ${isCheckbox ? "w-max cursor-pointer" : "focus:outline-primary"} hover:outline-grey-600`}
    `);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: className }, { children: [!isCheckbox && (0, jsx_runtime_1.jsx)(label_1.Label, { text: label, htmlFor: name }, void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: inputContainerStyle }, { children: [(0, jsx_runtime_1.jsx)(InputElement, Object.assign({ className: inputStyle, type: isPassword && showPassword ? "text" : type, value: value, id: name, placeholder: placeholder }, register, otherProps, { children: children }), void 0), isCheckbox && ((0, jsx_runtime_1.jsx)(components_1.Text, { value: label, htmlFor: name, tag: "label", className: "ml-2 cursor-pointer" }, void 0))] }), void 0), error && (0, jsx_runtime_1.jsx)(error_message_1.ErrorMessage, { error: error }, void 0)] }), void 0));
};
exports.Input = Input;
const inputContainerStyle = (0, classnames_template_literals_1.default)(`
  relative max-h-14 w-full
`);
const inputBaseStyle = (0, classnames_template_literals_1.default)(`
  w-full px-4 py-2 rounded-[10px] outline outline-1 transition-all
`);
//# sourceMappingURL=input.js.map