import { IconButton, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Category } from "../categories/Category";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export const TopCategories = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ]);

  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <Stack
      sx={{
        width: "1107px",
        boxSizing: "border-box",
        padding: "5px 15px",
        boxSizing: "border-box",
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
        Trending Categories <TrendingUpIcon fontSize="large" />
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "100%",
        }}
      >
        <IconButton onClick={handleScrollLeft}>
          <ChevronLeft />
        </IconButton>
        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5px",
            overflowX: "auto",
            width: "100%",
          }}
        >
          {categories.map((v, k) => {
            return <Category key={k} category={v} />;
          })}
        </div>
        <IconButton onClick={handleScrollRight}>
          <ChevronRight />
        </IconButton>
      </div>
    </Stack>
  );
};
