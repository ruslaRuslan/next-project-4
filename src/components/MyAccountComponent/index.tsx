"use client";
import { Typography } from "@mui/material";
import FloatingForMyAccount from "@/components/FloatingForMyAccount";

const MyAccountComponent = () => {
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: 7,
          fontSize: 33,

          fontWeight: 600,
        }}
      >
        My Account
      </Typography>
      <FloatingForMyAccount />
    </>
  );
};

export default MyAccountComponent;
