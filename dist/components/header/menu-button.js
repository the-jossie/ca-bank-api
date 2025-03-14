"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_template_literals_1 = __importDefault(require("@netlify/classnames-template-literals"));
const MenuButton = ({ isMenuOpen, onClick }) => {
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: onClick, className: toggleStyle }, { children: (0, jsx_runtime_1.jsx)("svg", Object.assign({ className: "h-6 w-6 fill-current", viewBox: "0 0 24 24" }, { children: isMenuOpen ? ((0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" }, void 0)) : ((0, jsx_runtime_1.jsx)("path", { "v-if": "!isOpen", fillRule: "evenodd", d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" }, void 0)) }), void 0) }), void 0));
};
const toggleStyle = (0, classnames_template_literals_1.default)(`flex flex-col space-y-[6px] md:hidden`);
exports.default = MenuButton;
//# sourceMappingURL=menu-button.js.map