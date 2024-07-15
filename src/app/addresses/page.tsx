import React from "react";
import SixMenuMyAccount from "@/components/SixMenuMyAccount";
import AddressesComponent from "@/components/AddressesComponent";

import { Container } from "@mui/material";
const Addresses = () => {
  return (
    <>
      <Container>
        <SixMenuMyAccount />
        <AddressesComponent />
      </Container>
    </>
  );
};

export default Addresses;
