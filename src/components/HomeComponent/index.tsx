"use client";
import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface Earrings {
  id: number;
  img: any;
  title: string;
  price: number;
  basket: any;
}

const earrings: Earrings[] = [
  {
    id: 0,
    img: "/images/earring1.svg",
    title: "Lira Earrings",
    price: 20,
    basket: "/images/basket.svg",
  },
  {
    id: 1,
    img: "/images/earring2.svg",
    title: "Hal Earrings",
    price: 25,
    basket: "/images/basket.svg",
  },
  {
    id: 2,
    img: "/images/earring3.svg",
    title: "Kaede Hair Pin Set Of 3 ",
    price: 30,
    basket: "/images/basket.svg",
  },
  {
    id: 3,
    img: "/images/earring4.svg",
    title: "Hair Pin Set of 3",
    price: 30,
    basket: "/images/basket.svg",
  },
  {
    id: 4,
    img: "/images/earring5.svg",
    title: "Plaine Necklace",
    price: 19,
    basket: "/images/basket.svg",
  },
  {
    id: 5,
    img: "/images/earring6.svg",
    title: "Yuki Hair Pin Set of 3",
    price: 29,
    basket: "/images/basket.svg",
  },
];

const HomeComponent = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: 25,
            fontWeight: 500,
          }}
        >
          Shop The Latest
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 500,
              color: "#A18A68",
            }}
          >
            View All
          </Typography>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem>Lira Earrings</MenuItem>
            <MenuItem>Hal Earrings</MenuItem>
            <MenuItem>Kaede Hair Pin Set Of 3 </MenuItem>
            <MenuItem>Hal Earrings </MenuItem>
            <MenuItem>Plaine Necklace </MenuItem>
            <MenuItem>Yuki Hair Pin Set of 3 </MenuItem>
          </Select>
        </Box>
      </Box>
      <Stack
        flexDirection={"row"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Card
            sx={{
              marginTop: 1,
            }}
          >
            <TextField
              fullWidth
              label={
                <>
                  <SearchIcon sx={{ marginRight: 1 }} />
                  Search
                </>
              }
              variant="filled"
            />
          </Card>
        </Grid>
        <Grid container spacing={4} justifyContent="center">
          {earrings.map(({ id, img, title, price }) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box
                  key={id}
                  sx={{
                    marginTop: 1,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      "&:hover button": {
                        opacity: 1,
                      },
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: 300,
                        position: "relative",
                      }}
                      image={img}
                    />
                    <IconButton
                      color="inherit"
                      aria-label="basket"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "5rem",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <ShoppingCartOutlinedIcon />
                    </IconButton>

                    <IconButton
                      color="inherit"
                      aria-label="basket"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "8rem",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <VisibilityOutlinedIcon />
                    </IconButton>

                    <IconButton
                      color="inherit"
                      aria-label="basket"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "11rem",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <Checkbox
                        sx={{
                          bottom: 9,
                        }}
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />
                    </IconButton>
                  </Box>
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: 20,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 500,
                        color: "#A18A68",
                      }}
                    >
                      ${price}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};

export default HomeComponent;
