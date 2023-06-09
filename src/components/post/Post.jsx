import { Stack, Typography } from "@mui/material";
import React from "react";

export const Post = ({ post }) => {
  return (
    <>
      <Stack
        sx={{
          width: "400px",
          height: "600px",
        }}
      >
        <div
          style={{
            height: "60%",
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
          variant="h6"
          sx={{
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
