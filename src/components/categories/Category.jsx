import React from "react";
import { Box, Typography } from "@mui/material";

export const Category = ({ category }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "85px",
        justifyContent: "center",
        alignItems: "center",
        padding: "6px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <Box
        sx={{
          width: "50px",
          height: "70px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10%",
        }}
      >
        <img
          src={category?.image}
          alt="Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
      </Box>
      <Typography textAlign="center" variant="h6" component="p">
        {category?.name}
      </Typography>
    </Box>
  );
};