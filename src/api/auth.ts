import { axiosInstance } from "../configs";

export interface LoginProps {
  email: string;
  password: string;
}

export const loginApi = async (body: LoginProps) => {
  const { data } = await axiosInstance.post("/login", body);

  return data;
};


export interface VerifyOtpProps {
  email: string;
  otp: string;
}

export const verifyOtpApi = async (body: VerifyOtpProps) => {
  const { data } = await axiosInstance.post("/verify-otp", body);

  return data;
};

export interface SignupProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const signupApi = async (body: SignupProps) => {
  const { data } = await axiosInstance.post("/signup", body);

  return data;
};
