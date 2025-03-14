"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_template_literals_1 = __importDefault(require("@netlify/classnames-template-literals"));
const react_router_dom_1 = require("react-router-dom");
const MobileNav = ({ navLinks, }) => {
    return ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: mobileNavStyle }, { children: navLinks.map((link, index) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ className: "font-semibold", to: link.url }, { children: link.name }), void 0) }, `mobile_nav_link-${index}`))) }), void 0));
};
const mobileNavStyle = (0, classnames_template_literals_1.default)(`absolute inset-0 top-20 md:hidden bg-white h-max  flex flex-col items-center space-y-10 pb-5 shadow-md`);
exports.default = MobileNav;
//# sourceMappingURL=mobile-nav.js.map