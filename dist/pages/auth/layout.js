"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_template_literals_1 = __importDefault(require("@netlify/classnames-template-literals"));
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const components_1 = require("../../components");
const configs_1 = require("../../configs");
const contexts_1 = require("../../contexts");
const AuthLayout = ({ children }) => {
    const { auth } = (0, contexts_1.useAuthContext)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        if (auth && auth.token) {
            navigate(configs_1.PAGE_ROUTES.DASHBOARD);
        }
    }, [auth, navigate]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: wrapperStyle }, { children: [(0, jsx_runtime_1.jsx)(components_1.Header, {}, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: contentWrapperStyle }, { children: (0, jsx_runtime_1.jsx)(react_1.Suspense, Object.assign({ fallback: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0) }, { children: children }), void 0) }), void 0)] }), void 0));
};
const wrapperStyle = (0, classnames_template_literals_1.default)(`h-screen w-screen overflow-hidden flex flex-col`);
const contentWrapperStyle = (0, classnames_template_literals_1.default)(`mt-10 px-10 py-20 max-w-[500px] mx-auto w-full border rounded-md shadow-md`);
exports.default = AuthLayout;
//# sourceMappingURL=layout.js.map