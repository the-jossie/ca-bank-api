"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const login_form_1 = __importDefault(require("./login-form"));
const otp_form_1 = __importDefault(require("./otp-form"));
const LoginPage = () => {
    const [stage, setStage] = (0, react_1.useState)({ current: "login", email: "" });
    const CurrentView = VIEWS[stage.current];
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(CurrentView, { email: stage.email, setStage: setStage }, void 0) }, void 0));
};
exports.LoginPage = LoginPage;
const VIEWS = {
    login: login_form_1.default,
    otp: otp_form_1.default,
};
//# sourceMappingURL=page.js.map