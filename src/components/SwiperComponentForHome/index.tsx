"use client";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Button, CardMedia, Typography } from "@mui/material";

interface SwiperItem {
  id: number;
  img: any;
  title: string;
  price: number;
}

const swiperData: SwiperItem[] = [
  {
    id: 0,
    img: "/images/swiper1.svg",
    title: "Gold big hoops",
    price: 68.0,
  },
  {
    id: 1,
    img: "/images/swiper2.jpeg",
    title: "Fantasy drop",
    price: 126.0,
  },
  {
    id: 2,
    img: "/images/swiper3.jpeg",
    title: "Grey translucent circular hoop",
    price: 597,
  },
  {
    id: 3,
    img: "/images/swiper4.jpeg",
    title: "CLIO opal hoop",
    price: 352,
  },
  {
    id: 4,
    img: "/images/swiper5.jpeg",
    title: "Golden personalised cursive",
    price: 299,
  },
];
export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 950,
      }}
      loop
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 1,
        },
        900: {
          slidesPerView: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        {swiperData.map(({ id, img, title, price }) => {
          return (
            <SwiperSlide key={id}>
              <CardMedia
                component="img"
                image={img}
                alt=""
                sx={{ height: 600, width: "100%", borderRadius: 2 }}
              />
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  top: "50%",
                  marginLeft: 8,
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 33,
                    fontWeight: 500,
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 33,
                    fontWeight: 500,
                  }}
                >
                  ${price}
                </Typography>
                <Button
                  sx={{
                    border: "1px solid #fff",
                    color: "#fff",
                    top: 20,
                  }}
                >
                  VIEW PRODUCT
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}
      </Box>
    </Swiper>
  );
};
