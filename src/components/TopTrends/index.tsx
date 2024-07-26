"use client";
import React from "react";
import { blog } from "../Data";
import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const TopTrends = () => {
  return (
    <>
      {blog.slice(3).map((props) => {
        return (
          <>
            <CardMedia
              key={props.id}
              sx={{
                marginTop: 3,
                boderRadius: 2,
                height: 600,
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
              }}
              component="img"
              image={props?.img}
              alt=""
            />
            <Typography
              sx={{
                marginTop: 3,
                fontSize: 26,
              }}
            >
              Top trends
            </Typography>
            <Typography
              sx={{
                marginTop: 3,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero.s
            </Typography>
            <ul
              style={{
                marginTop: "2rem",
              }}
            >
              <li
                style={{
                  marginTop: 3,
                }}
              >
                consectetur adipiscing elit. Aliquam placerat
              </li>
              <li
                style={{
                  marginTop: 3,
                }}
              >
                {" "}
                Lorem ipsum dolor sit amet consectetur{" "}
              </li>
              <li
                style={{
                  marginTop: 3,
                }}
              >
                sapien tortor faucibus augue
              </li>
              <li
                style={{
                  marginTop: 3,
                }}
              >
                a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis
              </li>
            </ul>
            <Grid
              container
              sx={{
                marginTop: 6,
                justifyContent: "space-between",
              }}
            >
              <Grid
                sm={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography>Tags</Typography>

                <CardMedia
                  sx={{
                    height: "1px",
                    width: "4rem",
                    bgcolor: "grey",
                    color: "gray",
                  }}
                  component="img"
                  image="/images/Line1.svg"
                  alt=""
                />
                <Typography
                  sx={{
                    color: "#707070",
                  }}
                >
                  Fashion, Style, Season
                </Typography>
              </Grid>
              <Grid
                sm={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography>Share</Typography>

                <CardMedia
                  sx={{
                    height: "1px",
                    width: "4rem",
                    bgcolor: "grey",
                    color: "gray",
                  }}
                  component="img"
                  image="/images/Line1.svg"
                  alt=""
                />
                <Box>
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
              </Grid>
            </Grid>
            <Divider
              sx={{
                marginTop: 4,
                bgcolor: "#D8D8D8",
              }}
            />
            <Typography
              sx={{
                marginTop: 4,
                fontSize: 26,
              }}
            >
              Leave a Reply
            </Typography>

            <Grid item lg={6} md={6}>
              <Typography
                sx={{
                  color: "#707070",
                  // fontSize: 13,
                  marginTop: 2,
                }}
              >
                Your email address will not be published. Required fields are
                marked *
              </Typography>
              <TextField
                sx={{
                  marginTop: 7,
                }}
                type="text"
                fullWidth
                variant="standard"
                label="Enter your name*"
              />
              <TextField
                sx={{
                  marginTop: 7,
                }}
                type="email"
                fullWidth
                variant="standard"
                label="Enter your Email***"
              />
              <TextField
                sx={{
                  marginTop: 7,
                }}
                type="text"
                fullWidth
                variant="standard"
                label="Enter your Website**"
              />
              <Box
                sx={{
                  marginTop: 4,
                  display: "flex",

                  alignItems: "center",
                  fontSize: 10,
                }}
              >
                <Checkbox defaultChecked color="default" />
                <Typography
                  sx={{
                    color: "#707070",
                  }}
                >
                  Save my name, email, and website in this browser for the next
                  time I comment
                </Typography>
              </Box>
              <TextField
                sx={{
                  marginTop: 3,
                }}
                type="text"
                fullWidth
                variant="standard"
                label="Your Comment**"
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                sx={{
                  marginTop: 3,
                  bgcolor: "#000",
                  "&:hover": {
                    color: "#000",
                    bgcolor: "grey",
                  },
                  transition: "0.3s",
                }}
              >
                Post Comment
              </Button>
            </Grid>
          </>
        );
      })}
    </>
  );
};

export default TopTrends;
