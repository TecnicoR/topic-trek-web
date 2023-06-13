import React, { useEffect, useState } from "react";
import { SingleBlog } from "./SingleBlog";
import { Grid, Paper, Typography } from "@mui/material";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { Warning } from "@mui/icons-material";
import { getLatestBlogs } from "../../services/blogService";
import ToastService from "../toast/ToastService";

export const BlogsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    getLatestBlogs()
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });
  };

  if (!posts || posts.length === 0) {
    return (
      <div
        style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Warning style={{ marginRight: "8px" }} />
        <Typography variant="body1" color="textSecondary">
          No posts available
        </Typography>
      </div>
    );
  }
  return (
    <>
      <Paper
        sx={{
          marginTop: "5px",
          padding: "5px 15px",
        }}
      >
        <Typography
          variant="h5"
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
            //   borderBottom: "2px solid #000",
          }}
        >
          Top Blogs for Today <DynamicFeedIcon fontSize="large" />
        </Typography>
        <Grid container sx={{ marginTop: "5px" }} spacing={2}>
          {posts?.map((v, k) => {
            return <SingleBlog key={k} blog={v} />;
          })}
        </Grid>
      </Paper>
    </>
  );
};
