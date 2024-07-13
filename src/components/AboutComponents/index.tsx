"use client";
import * as React from "react";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function BadgeVisibility() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Badge color="error" badgeContent={count}>
        <ShoppingCartOutlinedIcon />
      </Badge>
      <ButtonGroup>
        <Button
          onClick={() => {
            setCount(Math.max(count - 1, 0));
          }}
        >
          <RemoveIcon />
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AddIcon />
        </Button>
      </ButtonGroup>
    </>
  );
}
