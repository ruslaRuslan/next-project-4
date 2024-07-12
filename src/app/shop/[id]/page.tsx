// "use client";
import BasicRating from "@/components/BasicRating";
import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";

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

export default async function Page({ params }: any) {
  const element = earrings.find(({ id }) => id == params.id);
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
                height: 200,
                maxWidth: 200,
              }}
            />
            <CardMedia
              component="img"
              image={element?.img}
              alt=""
              sx={{
                height: 200,
                maxWidth: 200,
                margin: "15px 0 15px 0",
              }}
            />
            <CardMedia
              component="img"
              image={element?.img}
              alt=""
              sx={{
                height: 200,
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
                height: 650,
                borderRadius: 0,
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
                // width: "300px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
