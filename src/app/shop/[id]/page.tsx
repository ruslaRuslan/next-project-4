import { CardMedia, Container, Grid, Typography } from "@mui/material";
import FloatingButton from "@/components/FloatingButton";
import { earrings } from "@/components/Data";
import IdShop from "@/components/IdShop";
import { redirect } from "next/navigation";

export default async function Page({ params }: any) {
  const element = earrings.find(({ id }) => id == params.id);
  if (!element) {
    return redirect("/not-found");
  }
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
            <IdShop
              count={0}
              basket=""
              id={element?.id}
              img={element?.img}
              title={element?.title}
              price={element?.price}
            />
          </Grid>
          <FloatingButton />
        </Grid>
      </Container>
    </>
  );
}
