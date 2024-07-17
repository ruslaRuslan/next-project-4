"use client";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";
import { login } from "../Data";
import Link from "next/link";

const LoginComponent = (props: any) => {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const p = usePathname();
  const isActive = (path: any) => path === p;

  const handleNavItemClick = (href: any) => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 7,
          textAlign: "center",
        }}
      >
        <Typography sx={{ marginBottom: 4, fontSize: 33 }}>
          My account
        </Typography>
        <span
          style={{
            backgroundColor: "#EFEFEF",
            padding: "12px 5px 12px 5px",
          }}
        >
          {login.map(({ id, href, title }) => (
            <Link
              key={id}
              style={{
                color: "#000",
                textDecoration: "none",
                textTransform: "none",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                backgroundColor: isActive(href) ? "#fff" : "#EFEFEF",
                padding: "8px 16px",
                transition: "0.3s",
              }}
              href={href}
              onClick={() => handleNavItemClick(href)}
              passHref
            >
              {title}
            </Link>
          ))}
        </span>
      </Box>
    </>
  );
};

export default LoginComponent;
