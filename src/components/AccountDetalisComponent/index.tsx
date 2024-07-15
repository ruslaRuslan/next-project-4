import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const AccountDetalisComponent = () => {
  return (
    <>
      <Typography
        sx={{
          marginTop: 8,
          fontSize: 33,
          textAlign: "center",
        }}
      >
        Account details
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            sx={{
              marginTop: 5,
            }}
            type="text"
            fullWidth
            variant="standard"
            label="First name*"
          />
          <TextField
            sx={{
              marginTop: 5,
            }}
            type="text"
            fullWidth
            variant="standard"
            label="Last name*"
          />
          <TextField
            sx={{
              marginTop: 5,
            }}
            type="text"
            fullWidth
            variant="standard"
            label="Display name*"
          />
          <Typography
            sx={{
              color: "#707070",
              marginTop: 1,
            }}
          >
            This will be how your name will be displayed in the account section
            and in reviews.
          </Typography>
          <TextField
            sx={{
              marginTop: 5,
            }}
            type="email"
            fullWidth
            variant="standard"
            label="Email address*"
          />
          <Typography
            sx={{
              marginTop: 5,
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            Password change
          </Typography>

          <TextField
            sx={{
              marginTop: 5,
            }}
            type="number"
            fullWidth
            variant="standard"
            label="Current password (leave blank to leave unchanged)*"
          />
          <TextField
            sx={{
              marginTop: 5,
            }}
            type="number"
            fullWidth
            variant="standard"
            label="New password (leave blank to leave unchanged)"
          />
          <TextField
            sx={{
              marginTop: 5,
            }}
            type="number"
            fullWidth
            variant="standard"
            label="Confirm new password"
          />
        </Grid>
        <Button
          variant="contained"
          sx={{
            marginTop: 5,
            padding: "5px 3rem 5px 3rem",
            bgcolor: "#000",
            "&:hover": {
              color: "#000",
              bgcolor: "grey",
            },
            transition: "0.3s",
          }}
        >
          SAVE CHANGES
        </Button>
      </Grid>
    </>
  );
};

export default AccountDetalisComponent;
