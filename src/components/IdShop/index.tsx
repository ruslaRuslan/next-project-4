"use client";
import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import BasicRating from "../BasicRating";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FloatingButton from "../FloatingButton";
import ThreeCard from "@/components/ThreeCard";
const IdShop = () => {
  const [count, setCount] = useState<number>(0);
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
          <IconButton>
            <RemoveIcon
              onClick={() => {
                if (count !== 0) {
                  setCount(count - 1);
                }
              }}
            />
          </IconButton>
          <Typography>{count}</Typography>

          <IconButton>
            <AddIcon onClick={() => setCount((prev) => prev + 1)} />
          </IconButton>
        </Box>
        <Button
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
          add to cart
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
