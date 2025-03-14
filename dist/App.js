"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
const configs_1 = require("./configs");
const contexts_1 = require("./contexts");
const react_query_1 = require("@tanstack/react-query");
const react_toastify_1 = require("react-toastify");
const pages_1 = require("./pages");
require("./index.css");
const AuthRoutes = () => {
    const { auth } = (0, contexts_1.useAuthContext)();
    const isLoggedIn = !!auth.token;
    return !isLoggedIn ? (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}, void 0) : (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { replace: true, to: configs_1.PAGE_ROUTES.DASHBOARD }, void 0);
};
const ProtectedRoutes = () => {
    const { auth } = (0, contexts_1.useAuthContext)();
    const isLoggedIn = !!auth.token;
    return isLoggedIn ? (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}, void 0) : (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { replace: true, to: configs_1.PAGE_ROUTES.LOGIN }, void 0);
};
const root = (0, client_1.createRoot)(document.body);
root.render((0, jsx_runtime_1.jsxs)(react_query_1.QueryClientProvider, Object.assign({ client: configs_1.queryClient }, { children: [(0, jsx_runtime_1.jsx)(contexts_1.AuthProvider, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, Object.assign({ element: (0, jsx_runtime_1.jsx)(AuthRoutes, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: configs_1.PAGE_ROUTES.LOGIN, element: (0, jsx_runtime_1.jsx)(pages_1.LoginPage, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: configs_1.PAGE_ROUTES.SIGNUP, element: (0, jsx_runtime_1.jsx)(pages_1.SignupPage, {}, void 0) }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ element: (0, jsx_runtime_1.jsx)(ProtectedRoutes, {}, void 0) }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: configs_1.PAGE_ROUTES.DASHBOARD, element: (0, jsx_runtime_1.jsx)(pages_1.DashboardPage, {}, void 0) }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: configs_1.PAGE_ROUTES.LOGIN }, void 0) }, void 0)] }, void 0) }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {}, void 0)] }), void 0));
//# sourceMappingURL=App.js.map