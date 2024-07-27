"use client";
import React from "react";
import { useAppSelector } from "@/store/store";
import { Box, CardMedia, Container, Typography } from "@mui/material";
import useClient from "@/hooks/useClient";
const ShoppingCartComponent = () => {
  const isClient = useClient();
  const basketState = useAppSelector((state) => state.basket);

  if (!isClient) {
    return null;
  }

  return (
    <Container>
      <Box>
        {basketState.basketState?.map(({ image, id, title, price, count }) => {
          return (
            <Box
              key={id}
              sx={{
                marginTop: 3,
                display: "flex",
                gap: 1,
              }}
            >
              <CardMedia
                sx={{
                  maxWidth: 200,
                  height: 200,
                  borderRadius: 1,
                }}
                component="img"
                image={image}
                alt=""
              />
              <Box>
                <Typography>{title}</Typography>
                <Typography
                  sx={{
                    color: "#707070",
                  }}
                >
                  Black / Medium
                </Typography>
                <Typography
                  sx={{
                    color: "#A18A68",
                  }}
                >
                  Total: {price} * {count} = {price * count} $
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ShoppingCartComponent;
