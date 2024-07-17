import LoginComponent from "@/components/LoginComponent";
import RegisterComponent from "@/components/RegisterComponent";
import { Container } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <>
      <Container>
        <LoginComponent />
        <RegisterComponent />
      </Container>
    </>
  );
};

export default Register;
