import AuthFooter from "@/components/molecules/AuthFooter";
import AuthHeader from "@/components/molecules/AuthHeader";
import SignUpForm from "@/components/molecules/SignUpForm";
import React from "react";

const SignupPage = () => {
  return (
    <>
      <AuthHeader />
      <SignUpForm />
      <AuthFooter />
    </>
  );
};

export default SignupPage;
