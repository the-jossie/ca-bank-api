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
exports.signupApi = exports.verifyOtpApi = exports.loginApi = void 0;
const configs_1 = require("../configs");
const loginApi = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield configs_1.axiosInstance.post("/login", body);
    return data;
});
exports.loginApi = loginApi;
const verifyOtpApi = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield configs_1.axiosInstance.post("/verify-otp", body);
    return data;
});
exports.verifyOtpApi = verifyOtpApi;
const signupApi = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield configs_1.axiosInstance.post("/signup", body);
    return data;
});
exports.signupApi = signupApi;
//# sourceMappingURL=auth.js.map