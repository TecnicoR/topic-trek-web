import { Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Category } from "../categories/Category";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { getCategories } from "../../services/categoryService";
import ToastService from "../toast/ToastService";

export const TopCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        ToastService.error("Error while getting top categories, please refresh the page");
      });
  }, []);

  const scrollContainerRef = useRef(null);

  // const handleScrollLeft = () => {
  //   scrollContainerRef.current.scrollBy({
  //     left: -200,
  //     behavior: "smooth",
  //   });
  // };

  // const handleScrollRight = () => {
  //   scrollContainerRef.current.scrollBy({
  //     left: 200,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <Stack
      sx={{
        maxWidth: "100%",
        boxSizing: "border-box",
        padding: "5px 15px",
        marginTop: "6px",
        // width: "100%",
        borderRadius: "6px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <Typography
        variant="h5"
        style={{
          textTransform: "capitalize",
          fontWeight: "bold",
          marginBottom: "10px",
          //   borderBottom: "2px solid #000",
        }}
      >
        Top 10 Trending Categories <TrendingUpIcon fontSize="large" />
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "100%",
        }}
      >
        {/* <IconButton onClick={handleScrollLeft}>
          <ChevronLeft />
        </IconButton> */}
        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "5px",
            // overflowX: "auto",
            width: "100%",
          }}
        >
          {categories.slice(0, 10).map((v, k) => {
            return <Category key={k} category={v} />;
          })}
        </div>
        {/* <IconButton onClick={handleScrollRight}>
          <ChevronRight />
        </IconButton> */}
      </div>
    </Stack>
  );
};
