import React from "react";
import SixMenuMyAccount from "@/components/SixMenuMyAccount";
import AccountDetalisComponent from "@/components/AccountDetalisComponent";
import { Container } from "@mui/material";
const AccountDetalis = () => {
  return (
    <>
      <Container>
        <SixMenuMyAccount />
        <AccountDetalisComponent />
      </Container>
    </>
  );
};

export default AccountDetalis;
