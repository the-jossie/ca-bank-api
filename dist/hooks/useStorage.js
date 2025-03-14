"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStorage = void 0;
const configs_1 = require("../configs");
const useStorage = () => {
    const storageId = configs_1.APP_NAME;
    const isBrowser = () => typeof window !== "undefined";
    const appendStorageIdToKey = (key) => `${storageId}-${key}`;
    const getItem = (key) => {
        if (isBrowser()) {
            try {
                const value = window["localStorage"][appendStorageIdToKey(key)];
                return JSON.parse(value);
            }
            catch (error) {
                console.log({ error });
                return "";
            }
        }
        else {
            return "";
        }
    };
    const setItem = (key, value) => {
        if (isBrowser()) {
            window["localStorage"].setItem(appendStorageIdToKey(key), JSON.stringify(value));
            return true;
        }
        else {
            return false;
        }
    };
    const clearStorage = () => {
        if (isBrowser()) {
            window["localStorage"].clear();
            return true;
        }
        else {
            return false;
        }
    };
    const getAuth = () => {
        const auth = getItem(configs_1.STORAGE_KEYS.auth);
        return auth;
    };
    const saveAuth = (auth) => {
        return setItem(configs_1.STORAGE_KEYS.auth, auth);
    };
    const clearAuth = () => {
        return clearStorage();
    };
    return { clearAuth, getAuth, saveAuth };
};
exports.useStorage = useStorage;
//# sourceMappingURL=useStorage.js.map