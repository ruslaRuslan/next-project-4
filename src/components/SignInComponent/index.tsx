"use client";
import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignInComponent = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Box
        sx={{
          marginTop: 3,
          textAlign: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          sx={{
            marginTop: 5,
          }}
        >
          <TextField
            sx={{
              width: 260,
            }}
            type="email"
            variant="standard"
            label="Email"
            multiline
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          sx={{
            marginTop: 5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormControl sx={{ width: 260 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <Checkbox defaultChecked color="default" />
          <Typography>Remember me</Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            marginTop: 3,
            border: "1px solid #000",
            padding: "7px 1rem 7px 1rem",
            bgcolor: "#000",
            transition: "0.3s",
            "&:hover": {
              color: "#fff",
              border: "1px solid #fff",
              bgcolor: "red",
            },
          }}
        >
          SIGN IN
        </Button>
      </Box>
    </>
  );
};

export default SignInComponent;
