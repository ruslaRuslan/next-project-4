"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  Tabs,
  TextField,
} from "@mui/material";
import BasicRating from "../BasicRating";
import ThreeCard from "../ThreeCard";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function FloatingButton() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 7,
          width: "100%",
        }}
      >
        <Box position="static" color="default">
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab label="Description" {...a11yProps(0)} />
            <Tab
              label="Aditional information"
              {...a11yProps(1)}
              sx={{
                color: "#707070",
              }}
            />
            <Tab
              label="Reviews(0)"
              {...a11yProps(2)}
              sx={{
                color: "#707070",
              }}
            />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography
            sx={{
              color: "#707070",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor
            odio, in molestie diam bibendum sed.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography
            sx={{
              marginTop: 2,
            }}
          >
            Weight:{" "}
            <span
              style={{
                color: "#707070",
              }}
            >
              0.3 kg
            </span>
          </Typography>
          <Typography
            sx={{
              marginTop: 2,
            }}
          >
            Dimentions:{" "}
            <span
              style={{
                color: "#707070",
              }}
            >
              15 x 10 x 1 cm
            </span>
          </Typography>
          <Typography
            sx={{
              marginTop: 2,
            }}
          >
            Colours:{" "}
            <span
              style={{
                color: "#707070",
              }}
            >
              Black, Browns, White
            </span>
          </Typography>
          <Typography
            sx={{
              marginTop: 2,
            }}
          >
            Material:{" "}
            <span
              style={{
                color: "#707070",
              }}
            >
              Metal
            </span>
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6}>
              <Box>
                <Typography
                  sx={{
                    fontSize: 20,
                  }}
                >
                  2 Reviews for lira earings
                </Typography>
                <Box
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                    }}
                  >
                    Scarlet withch{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#707070",
                    }}
                  >
                    6 May, 2020
                  </Typography>
                </Box>
                <BasicRating />
                <Typography sx={{ marginTop: 3, color: "#707070" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.{" "}
                </Typography>
              </Box>
              <Divider
                sx={{
                  marginBottom: 5,
                  marginTop: 5,
                }}
              />

              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: 20,
                  }}
                >
                  2 Reviews for lira earings
                </Typography>
                <Box
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                    }}
                  >
                    Scarlet withch{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#707070",
                    }}
                  >
                    6 May, 2020
                  </Typography>
                </Box>
                <BasicRating />
                <Typography
                  sx={{ marginTop: 3, color: "#707070", marginBottom: 5 }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6}>
              <Typography>Add a Review</Typography>
              <Typography
                sx={{
                  color: "#707070",
                  fontSize: 13,
                  marginTop: 2,
                }}
              >
                Your email address will not be published. Required fields are
                marked *
              </Typography>
              <TextField
                sx={{
                  marginTop: 3,
                }}
                type="text"
                fullWidth
                variant="standard"
                label="Your Review*"
                multiline
                rows={4}
              />
              <TextField
                sx={{
                  marginTop: 3,
                }}
                type="text"
                fullWidth
                variant="standard"
                label="Enter your name**"
              />
              <TextField
                sx={{
                  marginTop: 3,
                }}
                type="email"
                fullWidth
                variant="standard"
                label="Enter your Email***"
              />
              <Box
                sx={{
                  marginTop: 4,
                  display: "flex",
                  justifyContent: "space-between",
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
              <Typography
                sx={{
                  marginTop: 3,
                  marginBottom: 1,

                  color: "#707070",
                }}
              >
                Your Rating*
              </Typography>
              <BasicRating />
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
                Submit
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
      <Container
        sx={{
          marginBottom: 7,
          pr: 0,
        }}
      >
        <ThreeCard />
      </Container>
    </>
  );
}
