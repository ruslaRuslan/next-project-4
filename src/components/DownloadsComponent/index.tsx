import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

const DownloadsComponent = () => {
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
        <Typography>No downloads available yet.</Typography>
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

export default DownloadsComponent;
