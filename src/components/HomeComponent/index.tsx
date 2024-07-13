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
import { earrings } from "../Data";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const HomeComponent = () => {
  const [view, setView] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setView(event.target.value as string);
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
            value={view}
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
                <CardMedia
                  sx={{
                    width: "100%",
                    height: 300,
                    position: "relative",
                    ":hover": {
                      "& .icon-box": {
                        opacity: 1,
                      },
                    },
                  }}
                  image={img}
                >
                  <Box
                    className="icon-box"
                    sx={{
                      position: "absolute",
                      top: "45%",
                      left: "30%",
                      opacity: 0,
                      transition: "opacity 0.9s ease",
                    }}
                  >
                    <IconButton color="inherit" aria-label="basket">
                      <ShoppingCartOutlinedIcon />
                    </IconButton>

                    <IconButton color="inherit" aria-label="basket">
                      <VisibilityOutlinedIcon />
                    </IconButton>

                    <IconButton color="inherit" aria-label="basket">
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />
                    </IconButton>
                  </Box>
                </CardMedia>
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
            </Grid>
          );
        })}
      </Grid>
      {/* </Stack> */}
    </>
  );
};

export default HomeComponent;
