import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const ForgotPasswordComponent = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: 7,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 25,
            fontWeight: 600,
          }}
        >
          Have you Forgotten Your Password ?
        </Typography>
        <Typography
          sx={{
            marginTop: 4,
          }}
        >
          If you've forgotten your password, enter your e-mail address and we'll
          send you an e-mail
        </Typography>
        <Grid container justifyContent="center">
          <Grid item lg={6} md={5} sm={8} xs={12}>
            <TextField
              sx={{
                marginTop: 5,
              }}
              type="email"
              fullWidth
              variant="standard"
              label="Email"
            />
            <Button
              variant="contained"
              sx={{
                marginTop: 5,
                border: "1px solid #000",
                bgcolor: "#000",
                color: "#fff",
                "&:hover": {
                  color: "red",
                  border: "1px solid red",
                  bgcolor: "grey",
                },
              }}
            >
              RESET PASSWORD
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ForgotPasswordComponent;
