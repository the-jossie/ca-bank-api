

import React, { useState } from "react";
import LoginForm from "./login-form";
import OtpForm from "./otp-form";
import AuthLayout from "../layout";

const LoginPage = () => {
  const [stage, setStage] = useState({current:"login", email: ""});

  const CurrentView = VIEWS[stage.current as keyof typeof VIEWS];

  return (
    <AuthLayout>
      <CurrentView email={stage.email} setStage={setStage} />
    </AuthLayout>
  );
};

const VIEWS = {
  login: LoginForm,
  otp: OtpForm,
}

export {LoginPage};
