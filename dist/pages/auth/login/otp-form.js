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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_query_1 = require("@tanstack/react-query");
const react_otp_input_1 = __importDefault(require("react-otp-input"));
const react_toastify_1 = require("react-toastify");
const api_1 = require("../../../api");
const contexts_1 = require("../../../contexts");
const react_1 = require("react");
const components_1 = require("../../../components");
const OtpForm = ({ email }) => {
    const { saveAuth } = (0, contexts_1.useAuthContext)();
    const [otp, setOtp] = (0, react_1.useState)("");
    const { isPending, mutateAsync } = (0, react_query_1.useMutation)({
        mutationFn: api_1.verifyOtpApi,
        onSuccess(response) {
            saveAuth({ token: response.token, user: response.userDetails });
            react_toastify_1.toast.success(response.message);
            if (typeof window !== "undefined") {
                window.location.href = "/";
            }
        },
        onError(error) {
            var _a;
            react_toastify_1.toast.error((_a = error.message) !== null && _a !== void 0 ? _a : "An error occured. Please try again!");
        }
    });
    const onSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        yield mutateAsync({ email, otp });
    });
    return ((0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: onSubmit, className: "space-y-5 md:mt-16" }, { children: [(0, jsx_runtime_1.jsx)(react_otp_input_1.default, { value: otp, onChange: setOtp, numInputs: 6, renderSeparator: (0, jsx_runtime_1.jsx)("span", { children: "-" }, void 0), renderInput: (props) => (0, jsx_runtime_1.jsx)("input", Object.assign({}, props), void 0) }, void 0), (0, jsx_runtime_1.jsx)(components_1.Button, { text: "Verify", type: "submit", isLoading: isPending, disabled: !otp || otp.length < 6, className: "mx-auto !mt-10 !px-14" }, void 0)] }), void 0));
};
exports.default = OtpForm;
//# sourceMappingURL=otp-form.js.map