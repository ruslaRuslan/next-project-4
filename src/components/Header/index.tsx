"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Container } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  {
    id: 0,
    title: "Shop",
    href: "/",
  },
  {
    id: 1,
    title: "Blog",
    href: "/blog",
  },
  {
    id: 2,
    title: "Our Story",
    href: "/ourStory",
  },
];

function DrawerAppBar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const p = usePathname();
  const isActive = (path: any) => path === p;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (href: any) => {
    setMobileOpen(false);
  };
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDisplay = () => {
    if (isSearchOpen) {
      return "none";
    } else {
      return "block";
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EARRINGS
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ id, href, title }) => (
          <ListItem
            key={id}
            disablePadding
            onClick={() => handleNavItemClick(href)}
            sx={{
              borderBottom: isActive(href) ? "#000" : "green",
              "&:hover": {
                borderBottom: isActive(href) ? "blue" : "green",
              },
            }}
          >
            <Link
              style={{
                color: isActive(href) ? "#red" : "#000",
                textDecoration: "none",
                textTransform: "none",
                fontSize: 24,
                fontWeight: 500,
              }}
              href={href}
              passHref
            >
              {title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", height: 62 }}>
        <CssBaseline />
        <Container>
          <AppBar
            component="nav"
            sx={{ backgroundColor: "transparent", boxShadow: "none" }}
          >
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  fontSize: 35,
                }}
              >
                <span
                  style={{
                    color: "#A18A68",
                    fontSize: 35,
                  }}
                >
                  S
                </span>
                HOPPE
              </Typography>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map(({ href, title, id }) => (
                  <Link
                    key={id}
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      textTransform: "none",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      borderBottom: isActive(href)
                        ? "1px solid #000"
                        : "1px solid transparent",
                      padding: "8px 16px",
                    }}
                    href={href}
                    onClick={() => handleNavItemClick(href)}
                    passHref
                  >
                    {title}
                  </Link>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    display: toggleDisplay(),
                    "@media screen and (max-width: 599px)": {
                      display: "none",
                    },
                    "@media screen and (max-width: 960px)": {
                      display: "none",
                    },
                  }}
                >
                  |
                </Typography>
                {isSearchOpen && (
                  <TextField
                    fullWidth
                    label="Search"
                    variant="filled"
                    sx={{
                      "@media screen and (max-width: 900px)": {
                        display: "none",
                      },
                    }}
                  />
                )}
                <IconButton
                  onClick={handleSearchClick}
                  sx={{
                    "@media screen and (max-width: 599px)": {
                      display: "none",
                    },
                    "@media screen and (max-width: 900px)": {
                      display: "none",
                    },
                  }}
                >
                  <SearchIcon
                    sx={{
                      "@media screen and (max-width: 599px)": {
                        display: "none",
                      },
                      "@media screen and (max-width: 900px)": {
                        display: "none",
                      },
                    }}
                  />
                </IconButton>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <IconButton color="inherit" aria-label="basket">
                    <ShoppingCartOutlinedIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" } }}
                  >
                    <MenuIcon style={{ color: "#000" }} />
                  </IconButton>
                </Box>
                <IconButton
                  color="inherit"
                  aria-label="basket"
                  sx={{
                    "@media screen and (max-width: 599px)": {
                      display: "none",
                    },
                  }}
                >
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </Box>
            </Container>
          </AppBar>
        </Container>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "100%",
                height: 200,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
      <Container
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            xl: "none",
          },
        }}
      >
        <TextField
          sx={{
            marginBottom: 4,
          }}
          fullWidth
          label={
            <>
              <SearchIcon sx={{ marginRight: 1 }} />
              Search
            </>
          }
          variant="filled"
        />
      </Container>
    </>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
