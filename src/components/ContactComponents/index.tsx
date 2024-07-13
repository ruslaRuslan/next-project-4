import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";

const ContactComponents = () => {
  return (
    <>
      <Container
        sx={{
          marginTop: 7,
        }}
      >
        <Typography
          sx={{
            fontSize: 33,
            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            marginTop: 4,
            marginBottom: 6,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Say Hello send us your thoughts about our products or share your ideas
          with our Team!
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              type="text"
              fullWidth
              variant="standard"
              label="First name"
            />
            <TextField
              sx={{
                marginTop: 5,
              }}
              type="email"
              fullWidth
              variant="standard"
              label="Email"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              type="text"
              fullWidth
              variant="standard"
              label="Last name"
            />
            <TextField
              sx={{
                marginTop: 5,
              }}
              type="text"
              fullWidth
              variant="standard"
              label="Subject"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} sm={12}>
            <TextField
              sx={{
                marginTop: 5,
              }}
              type="text"
              fullWidth
              variant="standard"
              label="Message"
              multiline
              rows={2}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: 7,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              padding: "5px 3rem 5px 3rem",
              bgcolor: "#000",
              "&:hover": {
                color: "#000",
                bgcolor: "grey",
              },
              transition: "0.3s",
            }}
          >
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ContactComponents;
