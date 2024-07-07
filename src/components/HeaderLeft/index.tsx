"use client";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Button, CardMedia, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Link from "next/link";
import { useState } from "react";

interface BasketItem {
  id?: string | number;
  img?: string;
  info?: string;
  price?: number;
  lowPrice?: string | boolean | number;
  count?: number;
  size?: string;
}

export default function HomeComponentsRight(props: BasketItem) {
  const [open, setOpen] = useState(false);
  const { id, img, info, price, lowPrice } = props;
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("");

  const sizes = [
    { id: 0, title: "SMALL" },
    { id: 1, title: "MEDIUM" },
    { id: 2, title: "LARGE" },
    { id: 3, title: "DELUXE" },
    { id: 4, title: "LUXE" },
  ];

  const addToCart = () => {
    const data: BasketItem = {
      id,
      img,
      info,
      price,
      lowPrice,
      count,
      size,
    };

    let basket: BasketItem[] = JSON.parse(
      localStorage.getItem("basket") || "[]"
    );

    let itemExists = false;
    basket = basket.map((item) => {
      if (item.id === id && item.size === size) {
        item.count = count;
        itemExists = true;
      }
      return item;
    });

    if (!itemExists) {
      basket.push(data);
    }

    localStorage.setItem("basket", JSON.stringify(basket));
    window.location.reload(); // Reload the window to reflect changes (consider better state management if avoiding reload is needed)
  };

  return (
    <>
      <Link href="#" onClick={() => setOpen(true)}>
        Shop
      </Link>
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 400 }} role="presentation">
          <List>
            <Typography>1</Typography>
            <Typography>2</Typography>
            <Typography>3</Typography>
            <Typography>4</Typography>
            <Typography>5</Typography>
            <Typography>6</Typography>
            <Typography>7</Typography>
            <Typography>8</Typography>
            <Typography>9</Typography>
            <Typography>10</Typography>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
