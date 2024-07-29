"use client";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { earrings } from "../Data";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SearchComponent = () => {
  const router = useRouter();
  const handleChange = (event: any, value: any) => {
    if (value) {
      const selectedEarring = earrings.find(
        (earring) => earring.title === value
      );
      if (selectedEarring) {
        router.push(`shop/${selectedEarring.id}`);
      }
    }
  };

  return (
    <>
      <Autocomplete
        sx={{
          marginTop: 5,
        }}
        options={earrings.map((earring) => earring.title)}
        onChange={handleChange}
        fullWidth
        renderInput={(params) => (
          <TextField variant="standard" {...params} label="Subject" />
        )}
      />
    </>
  );
};

export default SearchComponent;
