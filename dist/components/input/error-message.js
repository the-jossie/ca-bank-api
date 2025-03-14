"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const text_1 = require("../text");
const ErrorMessage = ({ error }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ role: "alert", className: "flex items-center mt-1" }, { children: (0, jsx_runtime_1.jsx)(text_1.Text, { value: error.message, variant: "p3", className: "text-left ml-1 text-red-500" }, void 0) }), void 0));
};
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=error-message.js.map