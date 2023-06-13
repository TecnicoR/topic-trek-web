import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, RemoveCircle } from "@mui/icons-material";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";
import { getFavorites, removeFromFav } from "../services/favouriteService";
import ToastService from "../components/toast/ToastService";

export const Favorites = () => {
  const [favoriteBlogs, setFavoriteBlogs] = useState([]);

  const navigate = useNavigate();

  const fetchFavoritesBlogs = () => {
    getFavorites()
      .then((res) => {
        setFavoriteBlogs(res);
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });
  };

  useEffect(() => {
    fetchFavoritesBlogs();
  }, []);

  const onRemoveFavorite = (id) => {
    removeFromFav(id)
      .then((res) => {
        ToastService.success("Removed from favorites");
        fetchFavoritesBlogs();
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });
  };

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" sx={{ mt: 4, mb: 2 }}>
        Favorites
      </Typography>
      {!favoriteBlogs || favoriteBlogs.length === 0 ? (
        <Typography variant="body1" align="center">
          You haven't added any blogs to your favorites yet.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {favoriteBlogs.map((blog) => (
            <Grid item key={blog.id} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  p: 2,
                }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {blog.title}
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Button
                    endIcon={<RemoveCircle />}
                    variant="contained"
                    disableElevation
                    onClick={() => onRemoveFavorite(blog.id)}
                  >
                    Remove
                  </Button>
                  <Button
                    onClick={() => handleClick(blog?.id)}
                    variant="outlined"
                    color="primary"
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
