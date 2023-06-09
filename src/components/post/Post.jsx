import { Stack, Typography } from "@mui/material";
import React from "react";

export const Post = ({ post }) => {
  return (
    <>
      <Stack
        sx={{
          width: "500px",
          height: "400px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          alignItems: "center",
          justifyContent:"space-around"
        }}
      >
        <div
          style={{
            height: "50%",
            width: "90%",
          }}
        >
          <img
            style={{
              border: "1px solid black",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src={post?.image}
            alt=""
          />
        </div>
        <Typography
          variant="h5"
          sx={{
            padding : "5px",
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {post?.title}
        </Typography>
      </Stack>
    </>
  );
};
