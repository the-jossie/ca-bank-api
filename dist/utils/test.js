"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderWithProviders = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const configs_1 = require("../configs");
const contexts_1 = require("../contexts");
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("@testing-library/react");
const react_toastify_1 = require("react-toastify");
const Providers = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(react_query_1.QueryClientProvider, Object.assign({ client: configs_1.queryClient }, { children: [(0, jsx_runtime_1.jsx)(contexts_1.AuthProvider, { children: children }, void 0), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {}, void 0)] }), void 0) }, void 0));
};
const customRender = (ui, options) => {
    return (0, react_1.render)(ui, Object.assign({ wrapper: Providers }, options));
};
exports.renderWithProviders = customRender;
//# sourceMappingURL=test.js.map