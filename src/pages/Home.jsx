import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { Box, Container } from "@mui/material";
import React from "react";
import { Carousel } from "../components/carousel/Carousel";

export const Home = () => {

  return (
    <>
      <Container>
        <Carousel/>
      </Container>
    </>
  );
};
