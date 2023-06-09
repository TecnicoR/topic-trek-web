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
      <img
        src={category?.image}
        style={{
          border: "1px solid black",
          height: "70%",
          width: "70%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
        alt="Logo"
      />
      <Typography textAlign={"center"} variant="h6" component={"p"}>
        {category?.name}
      </Typography>
    </div>
  );
};
