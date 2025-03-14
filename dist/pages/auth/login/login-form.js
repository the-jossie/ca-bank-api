"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const yup_1 = require("@hookform/resolvers/yup");
const react_router_dom_1 = require("react-router-dom");
const react_hook_form_1 = require("react-hook-form");
const react_toastify_1 = require("react-toastify");
const components_1 = require("../../../components");
const configs_1 = require("../../../configs");
const utils_1 = require("../../../utils");
const react_query_1 = require("@tanstack/react-query");
const api_1 = require("../../../api");
const LoginForm = ({ setStage, }) => {
    const { register, handleSubmit, watch, formState: { errors, isValid, isDirty }, } = (0, react_hook_form_1.useForm)({
        mode: "onChange",
        resolver: (0, yup_1.yupResolver)(utils_1.loginSchema),
    });
    const email = watch("email");
    const { isPending, mutateAsync } = (0, react_query_1.useMutation)({
        mutationFn: api_1.loginApi,
        onSuccess(response) {
            react_toastify_1.toast.success(response.message);
            setStage({ current: "otp", email });
        },
        onError(error) {
            react_toastify_1.toast.error(error.message);
        },
    });
    const onSubmit = (data) => __awaiter(void 0, void 0, void 0, function* () {
        yield mutateAsync(data);
    });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit(onSubmit), className: "space-y-5 md:mt-16" }, { children: [(0, jsx_runtime_1.jsx)(components_1.Text, { value: "Login", variant: "h2", weight: 400, className: "text-center text-5xl" }, void 0), (0, jsx_runtime_1.jsx)(components_1.Input, { id: "email", register: register("email"), label: "Email", placeholder: "Enter your Email", error: errors.email }, void 0), (0, jsx_runtime_1.jsx)(components_1.Input, { type: "password", id: "password", placeholder: "Enter your password", register: register("password"), label: "Password", error: errors.password }, void 0), (0, jsx_runtime_1.jsx)(components_1.Button, { text: "Login", type: "submit", isLoading: isPending, disabled: !isValid || !isDirty, className: "mx-auto !mt-10 !px-14" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(components_1.Text, Object.assign({ variant: "p2", weight: 500, className: "!mt-10 text-center" }, { children: ["Don`t have an account?", " ", (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: configs_1.PAGE_ROUTES.SIGNUP, className: "text-primary underline" }, { children: "Register here" }), void 0)] }), void 0)] }, void 0));
};
exports.default = LoginForm;
//# sourceMappingURL=login-form.js.map