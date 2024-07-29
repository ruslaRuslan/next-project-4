import ShopingBagComponent from "@/components/ShopingBagComponent";
import { Grid, Typography, Box, Container } from "@mui/material";
import React from "react";

const ShopingBag = () => {
  return (
    <>
      <Container
        sx={{
          marginTop: 7,
        }}
      >
        <Grid container>
          <Grid item lg={7}>
            <Typography
              sx={{
                marginTop: 3,
                fontSize: 30,
                textAlign: "center",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              sx={{
                marginTop: 3,
              }}
            >
              Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
              sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
              eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor
              magna et, placerat urna. Curabitur eu magna enim. Proin placerat
              tortor lacus, ac sodales lectus placerat quis.{" "}
            </Typography>
            <Typography
              sx={{
                marginTop: 3,
                fontSize: 26,
              }}
            >
              Security
            </Typography>
            <Typography
              sx={{
                marginTop: 3,
              }}
            >
              Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
              sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
              eget pellentesque risus scelerisque.
            </Typography>
            <Typography
              sx={{
                marginTop: 3,
                marginBottom: 3,
                fontSize: 26,
              }}
            >
              Cookies
            </Typography>
            <Box
              sx={{
                marginBottom: "10rem",
                marginLeft: 3,
              }}
            >
              <ul>
                <li>
                  Duis rutrum dictum libero quis rutrum. Etiam sed neque
                  aliquam, sollicitudin.
                </li>
                <li
                  style={{
                    marginTop: 6,
                  }}
                >
                  Nam fringilla molestie velit, eget pellentesque risus
                  scelerisque a
                </li>
              </ul>
            </Box>
          </Grid>
          <ShopingBagComponent />
        </Grid>
      </Container>
    </>
  );
};

export default ShopingBag;
