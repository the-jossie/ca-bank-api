

import ctl from "@netlify/classnames-template-literals";
import { useNavigate } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { PAGE_ROUTES } from "../../configs";
import { useAuthContext } from "../../contexts";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth && auth.token) {
      navigate(PAGE_ROUTES.DASHBOARD);
    }
  }, [auth, navigate]);

  return (
    <div className={wrapperStyle}>
      <div className={contentWrapperStyle}>
        <Suspense fallback={<></>}>{children}</Suspense>
      </div>
    </div>
  );
};

const wrapperStyle = ctl(`h-screen w-screen overflow-hidden flex flex-col`);
const contentWrapperStyle = ctl(
  `mt-10 px-10 py-20 max-w-[500px] mx-auto w-full border rounded-md shadow-md`,
);

export default AuthLayout;
