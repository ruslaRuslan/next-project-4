import { CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import { blog } from "../Data";

const AboutComponents = () => {
  return (
    <>
      <Container>
        <Typography
          sx={{
            fontSize: 30,
            textAlign: "center",
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            marginTop: 5,
            textAlign: "center",
          }}
        >
          Who we are and why we do what we do!
        </Typography>
        <Typography
          sx={{
            marginTop: 5,
          }}
        >
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.
        </Typography>
        <Typography
          sx={{
            marginTop: 5,
            fontSize: 26,
          }}
        >
          Top trends
        </Typography>

        {blog.find((item, index) => index === 3) && (
          <CardMedia
            key={blog[3]?.id}
            sx={{
              marginTop: 3,
              height: 550,
              borderRadius: 2,
            }}
            component="img"
            image={blog[3]?.img}
            alt=""
          />
        )}
        <Typography
          sx={{
            marginTop: 5,
            marginBottom: 3,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.{" "}
        </Typography>
        <ul
          style={{
            marginLeft: "3rem",
          }}
        >
          <li
            style={{
              marginBottom: 8,
            }}
          >
            consectetur adipiscing elit. Aliquam placerat
          </li>
          <li>Lorem ipsum dolor sit amet consectetur </li>
        </ul>
        <Typography
          sx={{
            marginTop: 5,
            fontSize: 26,
          }}
        >
          Produced with care
        </Typography>
        {blog.find((item, index) => index === 0) && (
          <CardMedia
            key={blog[0]?.id}
            sx={{
              marginTop: 3,
              height: 550,
              borderRadius: 2,
            }}
            component="img"
            image={blog[0]?.img}
            alt=""
          />
        )}
        <Typography
          sx={{
            marginTop: 5,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie diam bibendu.
        </Typography>
      </Container>
    </>
  );
};

export default AboutComponents;
