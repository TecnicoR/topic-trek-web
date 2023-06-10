import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Paper, Box, Stack, IconButton } from "@mui/material";
import { DateTime } from "luxon";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { HtmlParser } from "../components/html-parser/HtmlParser";

export const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    id: 1,
    title: "The Importance of Exercise",
    content:
      "<h2>Heading</h2><p>This is a sample blog post about the importance of exercise.</p>",
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    userName: "John Doe",
    publicationDate: "2023-06-11T10:15:00",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ maxWidth: 1000, margin: "0 auto" }}>
      <Paper sx={{ padding: 2 }}>
        <Stack
          sx={{
            width: "100%",
            alignItems: "flex-start",
          }}
        >
          <IconButton sx={{ left: -15 }} onClick={handleGoBack}>
            <ArrowBackIcon fontSize="medium" />
          </IconButton>
        </Stack>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          {post?.title}
        </Typography>
        <img
          src={post?.image}
          alt=""
          style={{
            border: "2px solid black",
            borderRadius: "10px",
            height: 500,
            display: "block",
            margin: "0 auto",
            marginBottom: 16,
          }}
        />
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          <HtmlParser htmlContent={post?.content} />
        </Typography>
        <Stack direction="row" alignItems="center">
          <PermIdentityIcon sx={{ marginRight: 1 }} />
          <Typography variant="body2" sx={{ fontStyle: "italic" }}>
            {post?.userName}
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontStyle: "italic" }}
        >
          {DateTime.fromISO(post?.publicationDate).toLocaleString(
            DateTime.DATETIME_MED
          )}
        </Typography>
      </Paper>
    </Box>
  );
};
