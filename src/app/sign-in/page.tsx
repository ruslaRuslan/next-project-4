import LoginComponent from "@/components/LoginComponent";
import SignInComponent from "@/components/SignInComponent";
import { Container } from "@mui/material";
import React from "react";

const SignIn = () => {
  return (
    <>
      <Container>
        <LoginComponent />
        <SignInComponent />
      </Container>
    </>
  );
};

export default SignIn;
