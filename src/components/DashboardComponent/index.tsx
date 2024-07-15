import React from "react";
import { Container, Typography } from "@mui/material";

const DashboardComponent = () => {
  return (
    <>
      <Typography
        sx={{
          marginTop: 5,
        }}
      >
        Hello Vitatheme (not Vitatheme?{" "}
        <span
          style={{
            color: "#A18A68",
          }}
        >
          Log out
        </span>
        )
      </Typography>
      <Typography>
        From your account dashboard you can view your{" "}
        <span
          style={{
            color: "#A18A68",
          }}
        >
          recent orders
        </span>
        , manage your{" "}
        <span
          style={{
            color: "#A18A68",
          }}
        >
          shipping and billing addresses
        </span>
        , and edit your{" "}
        <span
          style={{
            color: "#A18A68",
          }}
        >
          password and account details
        </span>
        .
      </Typography>
    </>
  );
};

export default DashboardComponent;
