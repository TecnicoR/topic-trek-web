import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";

export const SingleBlog = ({ blog }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/${blog?.id}`);
  };
  const parseContent = (content) => {
    content = content.replace(/<\/?[^>]+(>|$)/g, " ");
    const dummyElement = document.createElement("div");
    dummyElement.innerHTML = content;
    return dummyElement.textContent || dummyElement.innerText;
    // return textContent. // Replace HTML tags with spaces
  };
  return (
    <>
      <Grid item key={blog.id} xs={12} sm={6} md={4}>
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              objectFit: "cover",
              height: "200px",
              width: "100%",
            }}
          />
          <div sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {blog.title}
            </Typography>
            <Typography variant="body2" paragraph>
              {parseContent(blog.content).slice(0, 100)}...
            </Typography>
            <Typography variant="body2">
              Author:{" "}
              <span style={{ fontWeight: "bold" }}>{blog.userName} </span>|
              Published:{" "}
              <span style={{ fontStyle: "italic", marginTop: 1 }}>
                {DateTime.fromISO(blog?.publicationDate).toLocaleString(
                  DateTime.DATETIME_MED
                )}
              </span>
            </Typography>
            <Button
              onClick={handleClick}
              sx={{ marginTop: "6px" }}
              variant="outlined"
              color="primary"
            >
              Read More
            </Button>
          </div>
        </div>
      </Grid>
    </>
  );
};
