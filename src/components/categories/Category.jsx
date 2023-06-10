import { Stack, Typography } from "@mui/material";
import React from "react";

export const Category = ({ category }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "85px",
        justifyContent: "center",
        alignItems: "center",
        padding: "6px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "70px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={category?.image}
          style={{
            width: "100%",
            borderRadius: "10%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
          alt="Logo"
        />
      </div>
      <Typography textAlign="center" variant="h6" component="p">
        {category?.name}
      </Typography>
    </div>
  );
};
