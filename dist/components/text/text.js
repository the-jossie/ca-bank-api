"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_template_literals_1 = __importDefault(require("@netlify/classnames-template-literals"));
const Text = ({ className, children, value, variant = "p", weight, tag, htmlFor = "", }) => {
    const firstLetterOfVariant = variant[0];
    const shouldRenderParagraphTag = firstLetterOfVariant === "p";
    const textTag = (shouldRenderParagraphTag ? "p" : variant);
    const TextElement = tag ? tag : textTag;
    const textStyle = (0, classnames_template_literals_1.default)(`
        ${textVariantStyle[variant]}
        ${weight && fontWeightStyle[weight]}
        ${className}
    `);
    const isLabel = !!htmlFor;
    const labelProps = isLabel ? { htmlFor } : {};
    return ((0, jsx_runtime_1.jsx)(TextElement, Object.assign({ className: textStyle }, labelProps, { children: value || children }), void 0));
};
exports.Text = Text;
const fontWeightStyle = {
    300: `font-light`,
    400: `font-normal`,
    500: `font-medium`,
    600: `font-semibold`,
    700: `font-bold`,
    800: `font-extrabold`,
    900: `font-black`,
};
const textVariantStyle = {
    h1: `font-extrabold text-4xl md:text-6xl leading-[60px] md:leading-[80px]`,
    h2: `font-bold text-xl md:text-3xl`,
    h3: `font-bold text-lg md:text-2xl`,
    h4: `font-bold md:text-lg leading-6`,
    h5: ``,
    p: `text-sm md:text-base`,
    p2: `text-xs md:text-sm`,
    p3: `text-xs`,
};
//# sourceMappingURL=text.js.map