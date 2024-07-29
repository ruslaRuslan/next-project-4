"use client";
import useClient from "@/hooks/useClient";
import {
  decreaseCount,
  getTotalSum,
  increaseCount,
  removeProduct,
} from "@/store/basketSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import AddIcon from "@mui/icons-material/Add";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
const ShopingBagComponent = () => {
  const length = useAppSelector((state) => state.basket.basketState.length);
  const dispatch = useAppDispatch();

  const { basketState, totalSum } = useAppSelector((state) => state.basket);
  const isClient = useClient();
  useEffect(() => {
    dispatch(getTotalSum());
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Grid item lg={5}>
        {basketState?.map(({ image, id, title, price, count }) => {
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>{title}</Typography>
                  <IconButton
                    onClick={() => {
                      dispatch(removeProduct({ id }));
                    }}
                  >
                    <ClearRoundedIcon />
                  </IconButton>
                </Box>

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
                  {price * count} $
                </Typography>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#707070",
                      }}
                    >
                      QTY:
                    </Typography>
                    <IconButton
                      sx={{
                        color: "#707070",
                      }}
                      onClick={() => {
                        dispatch(decreaseCount({ id }));
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography
                      sx={{
                        color: "#707070",
                      }}
                    >
                      {count}
                    </Typography>
                    <IconButton
                      sx={{
                        color: "#707070",
                      }}
                      onClick={() => {
                        dispatch(increaseCount({ id }));
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Subtotal ({length} items)</Typography>
          <Typography>Total sum: {totalSum} $</Typography>
        </Box>
        <Box
          sx={{
            marginTop: 5,
            textAlign: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#000",
              border: "1px solid #000",
              paddingLeft: 5,
              paddingRight: 5,
              "&:hover": {
                color: "red",
                border: "1px solid red",
              },
            }}
          >
            VIEW CART
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default ShopingBagComponent;
