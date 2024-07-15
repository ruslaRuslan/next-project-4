import { Box, Button, Typography } from "@mui/material";
import React from "react";

const AddressesComponent = () => {
  return (
    <>
      <Typography
        sx={{
          marginTop: 8,
        }}
      >
        The following addresses will be used on the checkout page by default.
      </Typography>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Billing address</Typography>
        <Typography>Shipping address</Typography>
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            color: "#A18A68",
          }}
        >
          Add
        </Button>
        <Button
          sx={{
            color: "#A18A68",
          }}
        >
          Add
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "#707070",
          }}
        >
          You have not set up this type of address yet.
        </Typography>
        <Typography
          sx={{
            color: "#707070",
          }}
        >
          You have not set up this type of address yet.
        </Typography>
      </Box>
    </>
  );
};

export default AddressesComponent;
