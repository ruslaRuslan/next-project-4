import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: 10,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 33,
          }}
        >
          404 ERROR
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            marginTop: 3,
            marginBottom: 6,
          }}
        >
          This page not found; back to home and start again
        </Typography>
        <Link href="/" style={{}}>
          <Button
            variant="text"
            sx={{
              border: "1px solid #000",
              color: "#000",
              "&:hover": {
                color: "red",
                border: "1px solid red",
              },
            }}
          >
            HOMEPAGE
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default NotFound;
