"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupSchema = exports.loginSchema = void 0;
const yup = __importStar(require("yup"));
exports.loginSchema = yup.object().shape({
    email: yup
        .string()
        .required("Kindly enter your email address")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"),
    password: yup
        .string()
        .required("Kindly enter your password")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long"),
});
exports.signupSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("Kindly enter your First Name")
        .min(3, "First name must be at least 3 characters long"),
    lastName: yup
        .string()
        .required("Kindly enter your Last Name")
        .min(3, "Last name must be at least 3 characters long"),
    email: yup
        .string()
        .required("Kindly enter your email address")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"),
    password: yup
        .string()
        .required("Kindly enter your password")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long"),
    passwordConfirmation: yup
        .string()
        .required("Kindly confirm your password")
        .oneOf([yup.ref("password"), ""], "Passwords must match"),
});
//# sourceMappingURL=validators.js.map