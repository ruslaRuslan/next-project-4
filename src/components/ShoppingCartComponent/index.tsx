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
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CountrySelect from "../CountrySelect";
import CitySelect from "../CitySelect";
const ShopingCartComponent = () => {
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
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: 500,
          }}
        >
          Shopping Cart
        </Typography>
        <Grid container spacing={4}>
          <Grid item lg={7}>
            {basketState?.map(({ image, id, title, price, count }) => {
              return (
                <Box key={id}>
                  <Box
                    sx={{
                      marginTop: 3,
                      display: "flex",
                      flexWrap: "wrap",
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
                          flexWrap: "wrap",
                          gap: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            width: { xs: 150 },
                            display: "flex",
                            flexDirection: {
                              xs: "column",
                              sm: "column",
                              md: "row",
                              lg: "row",
                            },
                          }}
                        >
                          {title}
                        </Typography>
                        <Grid>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
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
                        </Grid>
                        <Box>
                          <IconButton
                            onClick={() => {
                              dispatch(removeProduct({ id }));
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          marginTop: 1,
                          color: "#707070",
                        }}
                      >
                        Black / Medium
                      </Typography>
                      <Typography
                        sx={{
                          marginTop: 1,

                          color: "#A18A68",
                        }}
                      >
                        {price * count} $
                      </Typography>
                    </Box>
                  </Box>
                  <Divider
                    sx={{
                      marginTop: 3,
                      bgcolor: "#D8D8D8",
                    }}
                  />
                </Box>
              );
            })}

            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#707070",
                }}
              >
                Coupon Code
              </Typography>

              <Box
                sx={{
                  marginTop: 5,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: "#000",
                    border: "1px solid #000",
                    "&:hover": {
                      color: "red",
                      border: "1px solid red",
                    },
                  }}
                >
                  UPDATE CART
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    marginTop: 3,
                    bgcolor: "#000",
                    color: "#fff",
                    border: "1px solid #000",
                    "&:hover": {
                      bgcolor: "#000",
                      color: "red",
                      border: "1px solid red",
                    },
                  }}
                >
                  APPLY COUPON
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={5} xs={12} sm={12}>
            <Typography sx={{ fontSize: 25, marginTop: 5 }}>
              Cart totals
            </Typography>
            <Box
              sx={{
                marginTop: 3,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>SHIPPING</Typography>
              <Typography
                sx={{
                  width: 250,
                  color: "#707070",
                }}
              >
                Shipping costs will be calculated once you have provided
                address.
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: 3,
                marginBottom: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p></p>
              <Accordion
                sx={{
                  marginTop: 3,
                  width: 280,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  CALCULATE SHIPPING
                </AccordionSummary>
                <AccordionDetails>
                  <CountrySelect />
                  <CitySelect />
                  <TextField
                    sx={{
                      marginTop: 1,
                    }}
                    id="standard-basic"
                    label="POST CODE / ZIP"
                    variant="standard"
                  />
                  <Box
                    sx={{
                      marginTop: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#000",
                        border: "1px solid #000",

                        "&:hover": {
                          color: "red",
                          border: "1px solid red",
                        },
                      }}
                    >
                      UPDATE TOTALS
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Divider
              sx={{
                bgcolor: "#D8D8D8",
              }}
            />
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>TOTAL</Typography>
              <Typography>$ {totalSum}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  marginTop: 3,
                  bgcolor: "#000",
                  color: "#fff",
                  border: "1px solid #000",
                  "&:hover": {
                    bgcolor: "#000",
                    color: "red",
                    border: "1px solid red",
                  },
                }}
              >
                PROCEED TO CHECKOUT
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ShopingCartComponent;
