import { Box, Button, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { myAccountItems } from "../Data";

const OrderComponent = () => {
  return (
    <>
      <Divider
        sx={{
          marginTop: 5,
          marginBottom: 3,
          bgcolor: "#A18A68",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography>No order has been made yet.</Typography>
        <Button
          variant="outlined"
          sx={{
            color: "#A18A68",
            border: "1px solid #A18A68",
            "&:hover": {
              border: "1px solid red",
              color: "red",
            },
          }}
        >
          BROWSE PRODUCT
        </Button>
      </Box>
    </>
  );
};

export default OrderComponent;
