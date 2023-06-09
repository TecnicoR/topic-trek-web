import React from "react";
import { Carousel } from "../components/carousel/Carousel";
import { Divider, Stack } from "@mui/material";
import { TopCategories } from "../components/top-categories/TopCategories";
import { PostsFeed } from "../components/post/PostsFeed";

export const Home = () => {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Carousel />
        <TopCategories />

        <PostsFeed />
      </Stack>
    </>
  );
};
