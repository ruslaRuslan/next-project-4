"use client";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";
import { myAccountItems, navItems } from "../Data";
import Link from "next/link";

const MyAccountComponent = (props: any) => {
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
        }}
      >
        {myAccountItems.map(({ id, href, title }) => (
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
    </>
  );
};

export default MyAccountComponent;
