"use client";
import BasicRating from "@/components/BasicRating";
import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FloatingButton from "@/components/FloatingButton";
import { earrings } from "@/components/Data";
import ThreeCard from "@/components/ThreeCard";

export default async function Page({ params }: any) {
  const element = earrings.find(({ id }) => id == params.id);
  // const [count, setCount] = useState<number>(0);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          gap: 3,
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={6}
            lg={2}
            sx={{
              display: { md: "none", lg: "block", xs: "none" },
            }}
          >
            <CardMedia
              component="img"
              image={element?.img}
              alt=""
              sx={{
                height: 150,
                borderRadius: 2,

                maxWidth: 200,
              }}
            />
            <CardMedia
              component="img"
              image={element?.img}
              alt=""
              sx={{
                height: 150,
                borderRadius: 2,

                maxWidth: 200,
                margin: "15px 0 15px 0",
              }}
            />
            <CardMedia
              component="img"
              image={element?.img}
              alt=""
              sx={{
                height: 150,
                borderRadius: 2,

                maxWidth: 200,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <CardMedia
              component="img"
              image={element?.img}
              alt=""
              sx={{
                height: 480,
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Typography
              sx={{
                fontSize: 26,
              }}
            >
              {element?.title}
            </Typography>
            <Typography
              sx={{
                color: "#A18A68",
                fontSize: 20,

                marginTop: 3,
              }}
            >
              ${element?.price}
            </Typography>
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
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis.
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
                  <RemoveIcon />
                  {/* onClick={() => {
                      if (count !== 1) {
                        setCount(count - 1);
                      }
                    }} */}
                </IconButton>
                <Typography>0</Typography>

                {/* onClick={() => setCount((prev) => prev + 1)} */}
                <IconButton>
                  <AddIcon />
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
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
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
          </Grid>
          <FloatingButton />
        </Grid>
      </Container>
      <Container>
        <ThreeCard />
      </Container>
    </>
  );
}
