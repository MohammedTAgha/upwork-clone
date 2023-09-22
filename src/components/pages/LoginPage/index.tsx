import AuthFooter from "@/components/molecules/AuthFooter";
import AuthHeader from "@/components/molecules/AuthHeader";
import LoginForm from "@/components/molecules/LoginForm";
import React from "react";
const LoginPage = () => {
  return (
    <>
      <AuthHeader />
      <LoginForm />
      <AuthFooter />
    </>
  );
};

export default LoginPage;
