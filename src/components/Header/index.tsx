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
import { Badge, Container, Stack } from "@mui/material";
import Image from "next/image";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { navItems } from "../Data";
import { useAppSelector } from "@/store/store";

function DrawerAppBar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);

  const p = usePathname();
  const isActive = (path: any) => path === p;

  const length = useAppSelector((state) => state.basket.basketState.length);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (href: any) => {
    setMobileOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDisplay = () => {
    return isSearchOpen ? "none" : "block";
  };

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Ensure this component is rendered correctly on the server by avoiding rendering client-specific logic
    return null;
  }

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Divider />
      <List sx={{ position: "relative" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p></p>
            <Box>
              <IconButton>
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <IconButton
                onClick={() => setMobileOpen(false)}
                sx={{
                  fontSize: 30,
                  color: "#000",
                }}
              >
                <ClearOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <TextField
            sx={{
              marginBottom: 2,
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
        {navItems.slice(0, 7).map(({ id, href, title }) => (
          <ListItem
            key={id}
            disablePadding
            onClick={() => handleNavItemClick(href)}
            sx={{
              backgroundColor: isActive(href) ? "#000" : "inherit",
            }}
          >
            <Link
              style={{
                color: isActive(href) ? "#fff" : "#000",
                textDecoration: "none",
                paddingLeft: "12px",
                fontSize: 20,
                fontWeight: 500,
              }}
              href={href}
              passHref
            >
              {title}
            </Link>
          </ListItem>
        ))}
        <Divider
          sx={{
            marginTop: 3,
          }}
        />
        <Box
          sx={{
            marginTop: 3,
          }}
        >
          {navItems.slice(7, 8).map(({ id, href, title }) => (
            <ListItem
              key={id}
              disablePadding
              onClick={() => handleNavItemClick(href)}
              sx={{
                backgroundColor: isActive(href) ? "#000" : "inherit",
              }}
            >
              <Link
                style={{
                  color: isActive(href) ? "#fff" : "#000",
                  textDecoration: "none",
                  paddingLeft: "12px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: 20,
                  fontWeight: 500,
                }}
                href={href}
                passHref
              >
                <PersonOutlineOutlinedIcon />
                {title}
              </Link>
            </ListItem>
          ))}
          <ListItem
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <IconButton>
              <Image src="/images/logo.svg" width={20} height={15} alt="" />
            </IconButton>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              Logout
            </Typography>
          </ListItem>
        </Box>
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
                marginTop: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
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

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {navItems.slice(1, 4).map(({ href, title, id }) => (
                  <Box key={id} sx={{ display: { xs: "none", sm: "block" } }}>
                    <Link
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
                  </Box>
                ))}

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

                {navItems.slice(7, 8).map(({ id, href }) => {
                  return (
                    <Link key={id} href={href}>
                      <IconButton
                        color="inherit"
                        edge="start"
                        sx={{
                          "@media screen and (max-width: 599px)": {
                            display: "none",
                          },
                        }}
                      >
                        <PersonOutlineOutlinedIcon />
                      </IconButton>
                    </Link>
                  );
                })}
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Badge
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    badgeContent={length}
                    color="error"
                  >
                    <IconButton color="inherit">
                      <ShoppingCartOutlinedIcon />
                    </IconButton>
                  </Badge>
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
              </Box>
            </Container>
          </AppBar>
        </Container>

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
            },
          }}
        >
          {drawer}
        </Drawer>
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
