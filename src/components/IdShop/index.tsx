"use client";
import React, { useState, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Checkbox, IconButton, Typography } from "@mui/material";
import BasicRating from "../BasicRating";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  addBasket,
  decreaseCount,
  increaseCount,
  removeProduct,
} from "@/store/basketSlice";

interface BasketItem {
  id: number;
  img: string;
  title: string;
  price: number;
  count: number;
  basket: string;
}

const IdShop = ({ id, img, title, price, basket }: BasketItem) => {
  const dispatch = useAppDispatch();
  const [isClient, setIsClient] = useState(false);

  const product = useAppSelector((state) =>
    state.basket.basketState.find((el) => el.id === id)
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Ensure this component is rendered correctly on the server by avoiding rendering client-specific logic
    return null;
  }

  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <BasicRating />
        <Typography
          sx={{
            color: "#707070",
            fontSize: 14,
          }}
        >
          1 customer review
        </Typography>
      </Box>
      <Typography
        sx={{
          marginTop: 3,
          color: "#707070",
          fontSize: 15,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.
      </Typography>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => {
              dispatch(decreaseCount({ id }));
            }}
          >
            <RemoveIcon />
          </IconButton>
          <Typography>{product?.count ?? 0}</Typography>
          <IconButton
            onClick={() => {
              dispatch(increaseCount({ id }));
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
        <Button
          onClick={() => {
            if (product?.count) {
              dispatch(removeProduct({ id }));
            } else {
              dispatch(addBasket({ image: img, id, price, title, count: 1 }));
            }
          }}
          variant="outlined"
          sx={{
            border: "1px solid #000",
            color: "#000",
            "&:hover": {
              border: "1px solid #000",
              color: "#000",
            },
          }}
        >
          {product?.count ? "remove product" : "add to cart"}
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        <IconButton color="inherit" aria-label="basket">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <Box>
          <IconButton>
            <MailOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <FacebookOutlinedIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          gap: 3,
        }}
      >
        <Typography>SKU:</Typography>
        <Typography
          sx={{
            color: "#707070",
          }}
        >
          12
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          gap: 3,
        }}
      >
        <Typography>Categories:</Typography>
        <Typography
          sx={{
            color: "#707070",
          }}
        >
          Fashion, Style
        </Typography>
      </Box>
    </>
  );
};

export default IdShop;
