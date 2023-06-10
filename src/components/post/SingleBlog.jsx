import { Stack, Typography } from "@mui/material";
import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";
import { HtmlParser } from "../html-parser/HtmlParser";

export const SingleBlog = ({ post }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/${post?.id}`);
  };
  return (
    <>
      <Stack
        sx={{
          cursor: "pointer",
          width: "520px",
          height: "400px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          alignItems: "left",
          justifyContent: "space-around",
          backgroundColor: "#f8f8f8",
          "&:hover": {
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 6px 12px",
            backgroundColor: "#f0f0f0",
          },
        }}
        onClick={handleClick}
      >
        <div
          style={{
            marginInline: "auto",
            height: "60%",
            width: "95%",
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
            marginTop: "-20px",
            height: "5%",
            padding: "5px",
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {post?.title}
        </Typography>
        <Typography
          sx={{
            height: "10%",
            marginTop: "-12px",
            // display: "-webkit-box",
            // WebkitLineClamp: 2,
            // WebkitBoxOrient: "vertical",
            whiteSpace: "nowrap" /* Prevent the text from wrapping */,
            overflow: "hidden" /* Hide any overflow */,
            textOverflow: "ellipsis",
            paddingInline: "5px",
            fontSize: "14px"
          }}
          variant="body"
        >
          <HtmlParser htmlContent={post?.content} />
        </Typography>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingInline: "5px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",
              display: "flex",
              alignItems: "center",
              fontStyle: "italic",
            }}
            variant="h6"
          >
            <PermIdentityIcon />
            {post?.userName}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              color: "#888888",
              fontStyle: "italic",
              display: "flex",
              alignItems: "center",
            }}
          >
            {DateTime.fromISO(post?.publicationDate).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
