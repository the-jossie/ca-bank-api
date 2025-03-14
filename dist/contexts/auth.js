"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = exports.useAuthContext = exports.AuthContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// import * as React from 'react';
const hooks_1 = require("../hooks");
const react_1 = require("react");
exports.AuthContext = (0, react_1.createContext)(null);
const useAuthContext = () => {
    const auth = (0, react_1.useContext)(exports.AuthContext);
    if (!auth) {
        throw new Error("'useAuthContext' must be a child of 'AuthProvider'");
    }
    return auth;
};
exports.useAuthContext = useAuthContext;
const AuthProvider = ({ children }) => {
    const { getAuth, saveAuth, clearAuth } = (0, hooks_1.useStorage)();
    const auth = getAuth();
    return ((0, jsx_runtime_1.jsx)(exports.AuthContext.Provider, Object.assign({ value: { auth, saveAuth, clearAuth } }, { children: children }), void 0));
};
exports.AuthProvider = AuthProvider;
//# sourceMappingURL=auth.js.map