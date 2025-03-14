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
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_template_literals_1 = __importDefault(require("@netlify/classnames-template-literals"));
const react_router_dom_1 = require("react-router-dom");
const components_1 = require("../../components");
const Button = (_a) => {
    var { isLoading = false, text, variant = "primary", size = "medium", shape = "square", className, disabled, href, prefixIcon, suffixIcon } = _a, otherProps = __rest(_a, ["isLoading", "text", "variant", "size", "shape", "className", "disabled", "href", "prefixIcon", "suffixIcon"]);
    const buttonStyle = (0, classnames_template_literals_1.default)(`
    ${buttonBaseStyle}
    ${buttonVariantStyle[variant]}
    ${buttonSizeStyle[size]}
    ${shape === "square" ? "rounded-md" : "rounded-full "}
    ${className}
  `);
    return href ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: href, className: buttonStyle }, { children: (0, jsx_runtime_1.jsx)(components_1.Text, { value: text }, void 0) }), void 0)) : ((0, jsx_runtime_1.jsxs)("button", Object.assign({ className: buttonStyle, disabled: disabled || isLoading }, otherProps, { children: [prefixIcon, " ", (0, jsx_runtime_1.jsx)(components_1.Text, { value: isLoading ? "..." : text, className: "flex-grow" }, void 0), suffixIcon] }), void 0));
};
exports.Button = Button;
const buttonBaseStyle = (0, classnames_template_literals_1.default)(`px-6 py-2 font-semibold transition-all flex items-center justify-center space-x-1 disabled:cursor-not-allowed`);
const buttonVariantStyle = {
    primary: `bg-primary hover:bg-white border-primary border text-white hover:text-primary disabled:bg-black disabled:text-white disabled:opacity-50 !font-medium transition-all`,
    secondary: `border border-primary text-primary`,
    tertiary: `bg-black text-white border border-black hover:bg-white hover:text-black`,
};
const buttonSizeStyle = {
    xsmall: `!p-1 rounded-md w-max !text-xs !font-normal`,
    small: `w-max py-2 px-4 !py-1 !px-4`,
    medium: `w-max text-sm font-thin`,
    large: `w-full md:w-72 md:px-10 md:!py-5`,
};
//# sourceMappingURL=button.js.map