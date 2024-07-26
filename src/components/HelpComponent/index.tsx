import { Box, CardMedia, Container, Divider, Typography } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const HelpComponent = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            marginTop: 5,
            marginBottom: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <CardMedia
              sx={{
                height: { lg: 60, md: 60, sm: 50, xs: 40 },
                width: { lg: 60, md: 60, sm: 50, xs: 40 },
              }}
              component="img"
              image="/images/accepted1.svg"
              alt=""
            />
            <Typography
              sx={{
                fontSize: 20,
              }}
            >
              Terms of Services
            </Typography>
          </Box>
          <ArrowForwardIosOutlinedIcon />
        </Box>
        <Divider
          sx={{
            border: "1px solid #D8D8D8",
          }}
        />
        <Box
          sx={{
            marginTop: 5,
            marginBottom: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <CardMedia
              sx={{
                height: { lg: 60, md: 60, sm: 50, xs: 40 },
                width: { lg: 60, md: 60, sm: 50, xs: 40 },
              }}
              component="img"
              image="/images/group15.svg"
              alt=""
            />
            <Typography
              sx={{
                fontSize: 20,
              }}
            >
              Shipping
            </Typography>
          </Box>
          <ArrowForwardIosOutlinedIcon />
        </Box>
      </Container>
    </>
  );
};

export default HelpComponent;
