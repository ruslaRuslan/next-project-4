import HomeComponent2 from "@/components/HomeComponent2";
import SwiperComponentForHome from "@/components/SwiperComponentForHome";
import { Container } from "@mui/material";
import React from "react";

const Shop = () => {
  return (
    <>
      <Container>
        <SwiperComponentForHome />
        <HomeComponent2 />
      </Container>
    </>
  );
};

export default Shop;
