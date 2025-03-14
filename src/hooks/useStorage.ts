import { APP_NAME, STORAGE_KEYS } from "../configs";
import { User } from "../types";

export const useStorage = () => {
  const storageId = APP_NAME;
  const isBrowser = () => typeof window !== "undefined";
  const appendStorageIdToKey = (key: string) => `${storageId}-${key}`;

  const getItem = (key: string) => {
    if (isBrowser()) {
      try {
        const value = window["localStorage"][appendStorageIdToKey(key)];

        return JSON.parse(value);
      } catch (error) {
        console.log({error})
        return "";
      }
    } else {
      return "";
    }
  };

  const setItem = (key: string, value: string | object) => {
    if (isBrowser()) {
      window["localStorage"].setItem(
        appendStorageIdToKey(key),
        JSON.stringify(value),
      );

      return true;
    } else {
      return false;
    }
  };

  const clearStorage = () => {
    if (isBrowser()) {
      window["localStorage"].clear();

      return true;
    } else {
      return false;
    }
  };

  const getAuth = () => {
    const auth = getItem(STORAGE_KEYS.auth);

    return auth;
  };

  const saveAuth = (auth: { token: string; user: User }) => {
    return setItem(STORAGE_KEYS.auth, auth);
  };

  const clearAuth = () => {
    return clearStorage();
  };

  return { clearAuth, getAuth, saveAuth };
};
