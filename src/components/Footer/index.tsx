"use client";
import {
  Grid,
  Container,
  Divider,
  IconButton,
  TextField,
  Typography,
  InputAdornment,
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
    title: "Home",
    href: "/",
  },

  {
    id: 1,
    title: "Help",
    href: "/help",
  },

  {
    id: 2,
    title: "Contact",
    href: "/contact",
  },
  {
    id: 3,
    title: "Search",
    href: "/search",
  },
  {
    id: 4,
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    id: 5,
    title: "Login",
    href: "/sign-in",
  },
  {
    id: 6,
    title: "Shopping bag",
    href: "/shopping-bag",
  },
];

const Footer = () => {
  return (
    <>
      <Container>
        <Divider
          sx={{
            margin: "4rem 0 3rem 0",
            bgcolor: "#D8D8D8",
          }}
        />

        <Grid
          container
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs="auto"
            md="auto"
            sx={{
              display: "flex",
              gap: 2,
              color: "#707070",
              flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
            }}
          >
            {footerDate.map((props) => {
              return (
                <Link
                  style={{
                    marginTop: 8,
                  }}
                  key={props?.id}
                  href={props?.href}
                >
                  {props?.title}
                </Link>
              );
            })}
          </Grid>

          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              type="email"
              label="Give an email, get the newsletter"
              variant="standard"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowRightAltOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            marginTop: 3,
            display: {
              xs: "block",
              sm: "flex",
            },
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
          <Grid item xs={12} sm={6}>
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
