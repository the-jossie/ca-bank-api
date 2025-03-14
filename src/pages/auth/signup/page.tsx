import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Input, Text } from "../../../components";
import { signupApi, SignupProps } from "../../../api";
import { PAGE_ROUTES } from "../../../configs";
import { signupSchema } from "../../../utils";
import AuthLayout from "../layout";

const SignupPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signupSchema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: signupApi,
    onSuccess(response) {
      toast.success(response.message);

      navigate(PAGE_ROUTES.LOGIN);
    },
    onError(error) {
      toast.error(error.message ?? "An error occured. Please try again!");
    },
  });

  const onSubmit = async (data: SignupProps) => {
    await mutateAsync(data);
  };

  return (
    <AuthLayout>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Text
        value="Register"
        variant="h2"
        weight={400}
        className="text-center text-5xl"
      />
      <Input
        register={register("firstName")}
        label="First Name"
        error={errors.firstName}
      />
      <Input
        register={register("lastName")}
        label="Last name"
        error={errors.lastName}
      />
      <Input
        type="email"
        register={register("email")}
        label="Email"
        error={errors.email}
      />
      <Input
        type="password"
        register={register("password")}
        label="Password"
        error={errors.password}
      />
      <Input
        type="password"
        register={register("passwordConfirmation")}
        label="Confirm Password"
        error={errors.passwordConfirmation}
      />

      <div className="flex flex-col items-center justify-center space-y-4 mx-auto text-center !mt-10">
        <Button
          isLoading={isPending}
          disabled={!isValid || !isDirty}
          type="submit"
          text="Register"
          className="!px-14"
        />
        <Text variant="p2" weight={500} className="!mt-10">
          Already have an account?{" "}
          <Link to={PAGE_ROUTES.LOGIN} className="text-primary underline">
            Login here
          </Link>
        </Text>
      </div>
    </form>
    </AuthLayout>
  );
};

export { SignupPage };
