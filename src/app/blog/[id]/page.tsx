import { blog } from "@/components/Data";
import TopTrends from "@/components/TopTrends";
import { CardMedia, Container, Typography } from "@mui/material";

export default async function PageIdBlog({ params }: any) {
  const element = blog.find(({ id }) => params.id == id);

  return (
    <Container
      sx={{
        marginTop: 5,
      }}
    >
      <Typography
        sx={{
          fontSize: 33,
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        Fast Fashion, And Faster Fashion
      </Typography>
      <Typography
        sx={{
          color: "#707070",
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        by{" "}
        <span
          style={{
            fontSize: 18,
          }}
        >
          ANNY JOHNSON
        </span>{" "}
        - October 8,2020
      </Typography>
      <CardMedia
        sx={{
          height: 600,
          borderRadius: 2,
        }}
        component="img"
        image={element?.img}
        alt="green iguana"
      />

      <Typography
        sx={{
          marginTop: 7,
          paddingLeft: 10,
          paddingRight: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue.
      </Typography>
      <Typography
        sx={{
          marginTop: 3,
          paddingLeft: 10,
          paddingRight: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.
      </Typography>
      <TopTrends />
    </Container>
  );
}
