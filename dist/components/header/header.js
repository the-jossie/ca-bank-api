"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_template_literals_1 = __importDefault(require("@netlify/classnames-template-literals"));
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const components_1 = require("../../components");
const configs_1 = require("../../configs");
const mobile_nav_1 = __importDefault(require("./mobile-nav"));
const menu_button_1 = __importDefault(require("./menu-button"));
const contexts_1 = require("../../contexts");
const react_toastify_1 = require("react-toastify");
const auth_1 = require("../../utils/auth");
const Header = () => {
    const { auth, clearAuth } = (0, contexts_1.useAuthContext)();
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, react_1.useState)(false);
    const isLoggedIn = !!auth.token;
    const navLinksToShow = (0, auth_1.computeNavLinksToShow)(auth);
    const handleLogout = () => {
        clearAuth();
        react_toastify_1.toast.success("Logout Successful");
        navigate("");
    };
    (0, react_1.useEffect)(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);
    return ((0, jsx_runtime_1.jsxs)("header", Object.assign({ className: wrapperStyle }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex items-center justify-between px-5 md:px-10 py-4 max-w-[1440px] mx-auto w-full" }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsx)(components_1.Text, { value: configs_1.APP_NAME, className: "font-black text-2xl italic py-1 px-3" }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("nav", { children: [(0, jsx_runtime_1.jsx)("ul", Object.assign({ className: navStyle }, { children: navLinksToShow.map((link, index) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(components_1.NavLink, Object.assign({ exact: true, className: "font-semibold", href: link.url }, { children: link.name }), void 0) }, `nav_link-${index}`))) }), void 0), (0, jsx_runtime_1.jsx)(menu_button_1.default, { isMenuOpen: isMobileMenuOpen, onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen) }, void 0)] }, void 0), isLoggedIn && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: navStyle }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleLogout }, { children: (0, jsx_runtime_1.jsx)(components_1.Text, { value: "Logout", className: "hidden md:block" }, void 0) }), void 0) }), void 0))] }), void 0), isMobileMenuOpen && (0, jsx_runtime_1.jsx)(mobile_nav_1.default, { navLinks: navLinksToShow }, void 0)] }), void 0));
};
exports.Header = Header;
const wrapperStyle = (0, classnames_template_literals_1.default)(`bg-grey-300 z-10 shadow bg-primary text-white`);
const navStyle = (0, classnames_template_literals_1.default)(`relative hidden md:flex items-center space-x-5 md:space-x-6 sticky top-0`);
//# sourceMappingURL=header.js.map