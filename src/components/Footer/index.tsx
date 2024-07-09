"use client";
import { BorderBottom, BorderTop } from "@mui/icons-material";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
interface Footer {
  id: number;
  title: string;
  href: any;
}

const footerDate: Footer[] = [
  {
    id: 0,

    title: "CONTACT",

    href: "contact",
  },

  {
    id: 1,

    title: "TERMS OF SERVICES",

    href: "/",
  },

  {
    id: 2,
    title: "SHIPPING AND RETURNS",
    href: "/",
  },
];

const Footer = () => {
  return (
    <>
      <Container>
        <Divider
          sx={{
            margin: "4rem 0 3rem 0",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 4,
              color: "#707070",
            }}
          >
            {footerDate.map((props) => {
              return (
                <Link key={props.id} href={props.href}>
                  {props.title}
                </Link>
              );
            })}
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  color: "#707070",
                }}
              >
                Give an email, get the newsletter.
              </Typography>
              <ArrowRightAltOutlinedIcon
                sx={{
                  width: 50,
                }}
              />
            </Box>
            <Box
              sx={{
                borderTop: "2px solid #000",
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            © 2021 Shelly.{" "}
            <span
              style={{
                color: "#707070",
              }}
            >
              Terms of use{" "}
            </span>{" "}
            and{" "}
            <span
              style={{
                color: "#707070",
              }}
            >
              privacy policy.
            </span>
          </Typography>
          <Box>
            <IconButton>
              <LinkedInIcon />
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
      </Container>
    </>
  );
};

export default Footer;
