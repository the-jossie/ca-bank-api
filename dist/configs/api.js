"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosInstanceWithMultiPart = exports.axiosInstance = void 0;
const axios_1 = __importDefault(require("axios"));
const react_toastify_1 = require("react-toastify");
const app_1 = require("./app");
const APIURL = "http://localhost:5000";
const getToken = () => {
    if (typeof window !== "undefined") {
        try {
            const store = JSON.parse(window["localStorage"][`${app_1.APP_NAME}-${app_1.STORAGE_KEYS.auth}`]);
            const apiToken = store && store.token;
            return apiToken ? `Bearer ${apiToken}` : "";
        }
        catch (error) {
            console.log({ error });
            return "";
        }
    }
};
const getApiConfig = (url, contentType = "application/json") => {
    return {
        baseURL: url,
        headers: {
            "Content-Type": contentType,
            Authorization: getToken(),
            Accept: "*/*",
            // 'Access-Control-Allow-Origin': '*',
            // ngrokSkipBrowserWarning: "true"
        },
        timeout: 10000,
    };
};
const axiosInstance = axios_1.default.create(getApiConfig(APIURL));
exports.axiosInstance = axiosInstance;
const axiosInstanceWithMultiPart = axios_1.default.create(getApiConfig(APIURL, "multipart/form-data"));
exports.axiosInstanceWithMultiPart = axiosInstanceWithMultiPart;
const interceptRequestFor = (instance) => {
    instance.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        if (error.response.status === 401) {
            localStorage.clear();
            react_toastify_1.toast.error("Session expired. Please sync account.");
        }
        return Promise.reject(error);
    });
};
interceptRequestFor(axiosInstance);
interceptRequestFor(axiosInstanceWithMultiPart);
//# sourceMappingURL=api.js.map