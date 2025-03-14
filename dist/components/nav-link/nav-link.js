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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const NavLink = (_a) => {
    var { href, exact, children } = _a, props = __rest(_a, ["href", "exact", "children"]);
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const active = " border-b border-primary";
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    if (isActive) {
        props.className += active;
    }
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: href }, props, { children: children }), void 0));
};
exports.NavLink = NavLink;
//# sourceMappingURL=nav-link.js.map