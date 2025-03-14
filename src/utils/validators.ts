import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Kindly enter your email address")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address",
    ),
  password: yup
    .string()
    .required("Kindly enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long",
    ),
});

export const signupSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Kindly enter your First Name")
    .min(3, "First name must be at least 3 characters long"),
  lastName: yup
    .string()
    .required("Kindly enter your Last Name")
    .min(3, "Last name must be at least 3 characters long"),
  email: yup
    .string()
    .required("Kindly enter your email address")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address",
    ),
  password: yup
    .string()
    .required("Kindly enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long",
    ),
  passwordConfirmation: yup
    .string()
    .required("Kindly confirm your password")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});
