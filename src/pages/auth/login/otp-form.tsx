

import { useMutation } from "@tanstack/react-query";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import { verifyOtpApi } from "../../../api";
import { useAuthContext } from "../../../contexts";
import React, { useState } from "react";
import { Button } from "../../../components";

const OtpForm = ({ email }: { email: string }) => {
  const { saveAuth } = useAuthContext();
  const [otp, setOtp] = useState("");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: verifyOtpApi,
    onSuccess(response) {
      saveAuth({ token: response.token, user: response.userDetails });

      toast.success(response.message);

      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    },
    onError(error) {
      toast.error(error.message ?? "An error occured. Please try again!");
    }
  });

  const onSubmit = async () => {
      await mutateAsync({ email, otp });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 md:mt-16">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <Button
        text="Verify"
        type="submit"
        isLoading={isPending}
        disabled={!otp || otp.length < 6}
        className="mx-auto !mt-10 !px-14"
      />
    </form>
  );
};

export default OtpForm;
