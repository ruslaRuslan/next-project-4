import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const RegisterComponent = () => {
  return (
    <>
      <Container>
        <Grid container justifyContent="center">
          <Grid item lg={6} md={5} sm={8} xs={12}>
            <TextField
              sx={{
                marginTop: 5,
              }}
              type="text"
              fullWidth
              variant="standard"
              label="Name"
            />
            <TextField
              sx={{
                marginTop: 5,
              }}
              type="text"
              fullWidth
              variant="standard"
              label="Last Name"
            />
            <TextField
              sx={{
                marginTop: 5,
              }}
              type="email"
              fullWidth
              variant="standard"
              label="Email Address"
            />
            <TextField
              sx={{
                marginTop: 5,
              }}
              type="number"
              fullWidth
              variant="standard"
              label="Mobile Number"
            />
            <TextField
              sx={{
                marginTop: 5,
              }}
              type="password"
              fullWidth
              variant="standard"
              label="Password"
            />
            <TextField
              sx={{
                marginTop: 5,
              }}
              type="password"
              fullWidth
              variant="standard"
              label="Confirm Password"
            />
            <Box
              sx={{
                marginTop: 3,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox defaultChecked color="default" />
              <Typography>Confirm Password</Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
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
              Continue
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RegisterComponent;
