import React from "react";
import { Carousel } from "../components/carousel/Carousel";
import { Stack } from "@mui/material";
import { TopCategories } from "../components/top-categories/TopCategories";

export const Home = () => {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          boxSizing: "border-box",
          overflow : "hidden"
        }}
      >
        <Carousel />
        <TopCategories />
      </Stack>
    </>
  );
};
