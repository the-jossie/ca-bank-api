

import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Input, Text } from "../../../components";
import { PAGE_ROUTES } from "../../../configs";
import { loginSchema } from "../../../utils";
import { useMutation } from "@tanstack/react-query";
import { loginApi, LoginProps } from "../../../api";

const LoginForm = ({
  setStage,
}: {
  setStage: Dispatch<
    SetStateAction<{
      current: string;
      email: string;
    }>
  >;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const email = watch("email");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: loginApi,
    onSuccess(response) {
      toast.success(response.message);

      setStage({ current: "otp", email });
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const onSubmit = async (data: LoginProps) => {
    await mutateAsync(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:mt-16">
        <Text
          value="Login"
          variant="h2"
          weight={400}
          className="text-center text-5xl"
        />
        <Input
          id="email"
          register={register("email")}
          label="Email"
          placeholder="Enter your Email"
          error={errors.email}
        />
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          register={register("password")}
          label="Password"
          error={errors.password}
        />
        <Button
          text="Login"
          type="submit"
          isLoading={isPending}
          disabled={!isValid || !isDirty}
          className="mx-auto !mt-10 !px-14"
        />
      </form>
      <Text variant="p2" weight={500} className="!mt-10 text-center">
        Don`t have an account?{" "}
        <Link to={PAGE_ROUTES.SIGNUP} className="text-primary underline">
          Register here
        </Link>
      </Text>
    </div>
  );
};

export default LoginForm;
