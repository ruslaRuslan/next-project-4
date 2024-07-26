"use client";
import * as React from "react";
import {
  Box,
  CardMedia,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { blog } from "../Data";
import SearchTextField from "@/components/SearchTextField";

const BlogComponent = () => {
  const [alignment, setAlignment] = React.useState<string | null>("left");
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
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
            fontWeight: 600,
            marginBottom: 3,
          }}
        >
          Blog
        </Typography>
      </Box>
      <Stack
        flexDirection={"row"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <SearchTextField />
          <Typography
            sx={{
              marginTop: 5,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Categories
          </Typography>
          <Typography
            sx={{
              marginTop: 2,
              color: "#707070",
              fontSize: 16,
            }}
          >
            Fashion
          </Typography>
          <Typography
            sx={{
              marginTop: 2,
              color: "#707070",
              fontSize: 16,
            }}
          >
            Style
          </Typography>
          <Typography
            sx={{
              marginTop: 2,
              color: "#707070",
              fontSize: 16,
            }}
          >
            Accessories
          </Typography>
          <Typography
            sx={{
              marginTop: 2,
              color: "#707070",
              fontSize: 16,
            }}
          >
            Season
          </Typography>
        </Grid>
        <Grid container spacing={4}>
          {blog.map(({ id, img, title, text, info, fashionDate }) => {
            return (
              <Grid key={id} item xs={12} sm={6} md={6} lg={6}>
                <CardMedia
                  sx={{
                    height: 350,
                    borderRadius: 2,
                  }}
                  component="img"
                  image={img}
                  alt=""
                />
                <Typography
                  sx={{
                    marginTop: 3,
                    color: "#707070",
                  }}
                >
                  {fashionDate}
                </Typography>
                <Typography
                  sx={{
                    marginTop: 3,
                    fontSize: 20,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    marginTop: 3,
                    marginBottom: 3,
                    color: "#707070",
                  }}
                >
                  {text}
                </Typography>
                <Link
                  href={`/blog/${id}`}
                  style={{
                    color: "#A18A68",
                    cursor: "pointer",
                  }}
                >
                  {info}
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};

export default BlogComponent;
