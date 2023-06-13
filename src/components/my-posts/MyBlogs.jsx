import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteBlogById, getBlogByUserId } from "../../services/blogService";
import { UserContext } from "../../context/UserContext";
import ToastService from "../toast/ToastService";

export const MyBlogs = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to track the dialog visibility
  const [blogIdToDelete, setBlogIdToDelete] = useState(null); // State to track the ID of the blog to delete

  const fetchBlogs = () => {
    getBlogByUserId(user?.id)
      .then((res) => {
        setMyBlogs(res);
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = (blogId) => {
    setBlogIdToDelete(blogId); // Set the ID of the blog to delete
    setIsDialogOpen(true); // Open the dialog when the delete button is clicked
  };

  const handleConfirmDelete = () => {
    deleteBlogById(blogIdToDelete)
      .then((res) => {
        ToastService.success("Blog deleted successfully");
        fetchBlogs();
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });
    setIsDialogOpen(false); // Close the dialog after deletion
  };

  const handleCancelDelete = () => {
    setBlogIdToDelete(null); // Reset the ID of the blog to delete
    setIsDialogOpen(false); // Close the dialog if the deletion is canceled
  };

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/blog-edit/${id}`);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" sx={{ mt: 4, mb: 2 }}>
        My Blogs
      </Typography>
      {!myBlogs || myBlogs.length === 0 ? (
        <Typography variant="body1" align="center">
          You haven't posted any blogs yet.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {myBlogs.map((blog) => (
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
                  <ButtonGroup>
                    <Tooltip title="Delete">
                      <IconButton
                        onClick={() => handleDelete(blog?.id)}
                        aria-label="Delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton
                        onClick={() => handleEdit(blog?.id)}
                        aria-label="Edit"
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  </ButtonGroup>
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
      <Dialog open={isDialogOpen} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          {/* Add your confirmation message or additional content here */}
          Are you sure you want to delete the blog ?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
