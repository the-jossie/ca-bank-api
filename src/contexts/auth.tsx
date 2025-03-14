// import * as React from 'react';
import { useStorage } from "../hooks";
import { User } from "../types";
import React, { createContext, useContext } from "react";

interface IAuth {
  auth: { token: string; user: User };
  saveAuth: ({ token, user }: { token: string; user: User }) => boolean;
  clearAuth: () => boolean;
}

export const AuthContext = createContext<IAuth | null>(null);

export const useAuthContext = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("'useAuthContext' must be a child of 'AuthProvider'");
  }

  return auth;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getAuth, saveAuth, clearAuth } = useStorage();

  const auth = getAuth();

  return (
    <AuthContext.Provider value={{ auth, saveAuth, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
