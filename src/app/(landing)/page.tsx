import HomeComponent from "@/components/HomeComponent";
import SwiperComponentForHome from "@/components/SwiperComponentForHome";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container>
        <SwiperComponentForHome />
        <HomeComponent />
      </Container>
    </>
  );
}
