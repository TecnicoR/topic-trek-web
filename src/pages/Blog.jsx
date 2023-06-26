import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Paper,
  Box,
  Stack,
  IconButton,
  Grid,
  List,
  ListItem,
  Divider,
  Button,
} from "@mui/material";
import { DateTime } from "luxon";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { AddComment } from "../components/comments/AddComment";
import CommentSection from "../components/comments/CommentSection";
import { CategoryChip } from "../components/categories/CategoryChip";
import { getBlogById, getBlogByUserId } from "../services/blogService";
import ToastService from "../components/toast/ToastService";
import { addToFav, removeFromFav } from "../services/favouriteService";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addComment, getAllCommentsByBlogId } from "../services/commentService";
import ReactQuill from "react-quill";

export const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [moreBlogs, setMoreBlogs] = useState([]);

  const [post, setPost] = useState();

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const fetchBlog = () => {
    getBlogById(id)
      .then((res) => {
        setPost(res);
        fetchMoreBlogs(res?.userId);
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });
  };

  const fetchComments = () => {
    getAllCommentsByBlogId(id)
      .then((res) => {
        setComments(res);
      })
      .catch((err) => {});
  };

  const fetchMoreBlogs = (userId) => {
    getBlogByUserId(userId)
      .then((res) => {
        setMoreBlogs(res);
      })
      .catch((err) => {});
  };
  // const fetchMoreBlogByUser()
  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, []);

  const handleAddToFav = () => {
    addToFav(post?.id)
      .then((res) => {
        ToastService.success("Added to favorites");
        fetchBlog();
      })
      .catch((err) => {
        ToastService.error("Could not add to favorites");
      });
  };

  const handleRemoveFromFav = () => {
    removeFromFav(post?.id)
      .then((res) => {
        ToastService.success("Removed from favorites");
        fetchBlog();
      })
      .catch((err) => {
        ToastService.error("Could not add to favorites");
      });
  };
  const postComment = () => {
    const data = { comment: comment };
    addComment(data, post?.id)
      .then((res) => {
        fetchComments();
        ToastService.success("Comment added");
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ maxWidth: 1100, margin: "0 auto" }}>
      <Paper sx={{ padding: 2 }}>
        <Stack
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <IconButton sx={{ left: -15 }} onClick={handleGoBack}>
            <ArrowBackIcon fontSize="medium" />
          </IconButton>
          {post?.isFavorite ? (
            <Button onClick={handleRemoveFromFav} startIcon={<FavoriteIcon />}>
              Remove from favorites
            </Button>
          ) : (
            <Button
              onClick={handleAddToFav}
              startIcon={<FavoriteBorderOutlined />}
            >
              Add to favorites
            </Button>
          )}
        </Stack>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          {post?.title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <img
              src={post?.image}
              alt=""
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                height: 500,
                marginBottom: 16,
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Paper
              sx={{ border: "1px solid black", height: 500, overflow: "auto" }}
            >
              <Typography variant="h6" sx={{ px: 2, pt: 2 }}>
                More Blogs by{" "}
                <span
                  style={{ backgroundColor: "#FFCC80", padding: "2px 4px" }}
                >
                  {post?.userName}
                </span>
              </Typography>
              <Box sx={{ maxHeight: 450, overflow: "auto", px: 2 }}>
                <List>
                  {moreBlogs?.map((v, k) => {
                    return (
                      <ListItem
                        disablePadding
                        sx={{
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          py: 1,
                        }}
                        onClick={() => navigate(`/blog/${v?.id}`)}
                      >
                        <img
                          src={v?.image}
                          alt=""
                          style={{
                            width: 100,
                            height: 80,
                            objectFit: "cover",
                            marginRight: 8,
                          }}
                        />
                        <Box>
                          <Typography variant="body2">{v?.title}</Typography>
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <Typography
                              variant="caption"
                              color="textSecondary"
                              sx={{ opacity: 0.7 }}
                            >
                              {DateTime.fromISO(
                                v?.publicationDate
                              ).toLocaleString(DateTime.DATETIME_MED)}
                            </Typography>
                          </Box>
                        </Box>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          <ReactQuill value={post?.content} readOnly={true} theme={"bubble"} />
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
        <Divider
          sx={{
            width: "100%",
            backgroundColor: "black",
            height: "2px",
            marginBlock: 1,
          }}
        />
        <CategoryChip categories={post?.categories} />
      </Paper>
      <AddComment
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onSubmit={postComment}
      />
      <CommentSection comments={comments} />
    </Box>
  );
};
