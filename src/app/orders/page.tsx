import React from "react";
import SixMenuMyAccount from "@/components/SixMenuMyAccount";
import { Container } from "@mui/material";
import OrderComponent from "@/components/OrdersComponent";

const Orders = () => {
  return (
    <>
      <Container>
        <SixMenuMyAccount />
        <OrderComponent />
      </Container>
    </>
  );
};

export default Orders;
