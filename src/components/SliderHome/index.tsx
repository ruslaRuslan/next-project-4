"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import Switch from "@mui/material/Switch";

const Input = styled(MuiInput)`
  width: 42px;
`;
function valuetext(value: number) {
  return `${value}°C`;
}

export default function InputSlider() {
  const [value, setValue] = React.useState<number[]>([0, 180]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const [value2, setValue2] = React.useState(30);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const label = { inputProps: { "aria-label": "Size switch demo" } };
  return (
    <Box
      sx={{
        marginTop: 3,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={180}
            min={0}
          />
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <span
            style={{
              color: "#707070",
            }}
          >
            Price: $
          </span>
          <Input
            sx={{
              color: "#707070",
            }}
            value={value[0]}
            size="small"
            onChange={handleInputChange}
            inputProps={{
              step: 10,
              min: 0,
              max: 180,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
          <span
            style={{
              color: "#707070",
            }}
          >
            $
          </span>
          <Input
            sx={{
              color: "#707070",
            }}
            value={value[1]}
            size="small"
            onChange={handleInputChange}
            inputProps={{
              step: 10,
              min: 0,
              max: 180,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Box>
        <Typography
          sx={{
            color: "#707070",
          }}
        >
          Filter
        </Typography>
      </Grid>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>On sale</Typography>
        <Switch {...label} defaultChecked />
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>In stock</Typography>
        <Switch {...label} defaultChecked />
      </Box>
    </Box>
  );
}
