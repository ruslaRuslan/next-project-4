"use client";
import {
  Box,
  Container,
  Divider,
  Grid,
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

const footerData: Footer[] = [
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
    <Box sx={{ bgcolor: "#f0f0f0", py: 4 }}>
      <Container maxWidth="lg">
        <Divider />
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              {footerData.map((item) => (
                <Grid item key={item.id}>
                  <Link href={item.href} passHref>
                    <Typography
                      sx={{ color: "#707070", textDecoration: "none" }}
                      variant="body2"
                      component="a"
                    >
                      {item.title}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ color: "#707070" }}>
                Give an email, get the newsletter.
              </Typography>
              <ArrowRightAltOutlinedIcon sx={{ width: 50 }} />
            </Box>
            <Box sx={{ borderTop: "2px solid #000", mt: 2 }} />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography>
              © 2021 Shelly.
              <Typography sx={{ color: "#707070", display: "inline" }}>
                Terms of use
              </Typography>
              and
              <Typography sx={{ color: "#707070", display: "inline" }}>
                privacy policy.
              </Typography>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
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
    </Box>
  );
};

export default Footer;
