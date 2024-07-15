import { CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { earrings } from "../Data";

const ThreeCard = () => {
  const selectedProducts = [earrings[1], earrings[4], earrings[3]];
  return (
    <>
      <Typography
        sx={{
          fontSize: 23,
        }}
      >
        Similar Items
      </Typography>
      <Grid container justifyContent="center" spacing={3}>
        {selectedProducts.map(({ id, img, title, price }) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={id}>
              <CardMedia
                component="img"
                image={img}
                alt=""
                sx={{
                  marginTop: 3,
                  height: 370,
                  borderRadius: 2,
                }}
              />
              <Typography
                sx={{
                  marginTop: 2,
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  marginTop: 2,
                  color: "#A18A68",
                }}
              >
                ${price}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ThreeCard;
