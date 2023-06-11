import React, { useState } from "react";
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

export const MyBlogs = () => {
  const [myBlogs, setMyBlogs] = useState([
    {
      id: 1,
      title: "The Importance of Exercise",
      content:
        "<h2>Heading</h2><p>This is a sample blog post about the importance of exercise.</p>",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
      userName: "John Doe",
      publicationDate: "2023-06-11T10:15:00",
    },
    {
      id: 2,
      title: "Delicious Pasta Recipes",
      content:
        "<h2>Heading</h2><p>This blog post features some mouth-watering pasta recipes.</p>",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Jane Smith",
      publicationDate: "2023-06-10T14:30:00",
    },
    {
      id: 3,
      title: "Exploring Nature",
      content:
        "<h2>Heading</h2><p>In this blog post, we'll take a virtual tour of some beautiful natural landscapes.</p>",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Emily Johnson",
      publicationDate: "2023-06-09T09:45:00",
    },
    {
      id: 4,
      title: "The Art of Photography",
      content:
        "<h2>Heading</h2><p>Learn about the fundamentals of photography and capture stunning images.</p>",
      image:
        "https://plus.unsplash.com/premium_photo-1661662822053-399798abee3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Michael Brown",
      publicationDate: "2023-06-08T16:20:00",
    },
    {
      id: 5,
      title: "Healthy Breakfast Ideas",
      content:
        "<h2>Heading</h2><p>Start your day with these nutritious and delicious breakfast recipes.</p>",
      image:
        "https://plus.unsplash.com/premium_photo-1672243970579-8cd2d0e9e0b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Sarah Wilson",
      publicationDate: "2023-06-07T11:10:00",
    },
    {
      id: 6,
      title: "Exploring the History of Art",
      content:
        "<h2>Heading</h2><p>Dive into the fascinating world of art history and discover influential artists and their works.</p>",
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      userName: "David Thompson",
      publicationDate: "2023-06-06T08:05:00",
    },
    {
      id: 7,
      title: "Traveling on a Budget",
      content:
        "<h2>Heading</h2><p>Discover useful tips and tricks to explore the world without breaking the bank.</p>",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      userName: "Jennifer Adams",
      publicationDate: "2023-06-05T13:45:00",
    },
    {
      id: 8,
      title: "The World of Fashion",
      content:
        "<h2>Heading</h2><p>Stay updated with the latest fashion trends and get inspired to create stylish outfits.</p>",
      image:
        "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Christopher Lee",
      publicationDate: "2023-06-04T17:55:00",
    },
    {
      id: 9,
      title: "Introduction to Coding",
      content:
        "<h2>Heading</h2><p>Get started with coding and learn the basics of programming languages.</p>",
      image:
        "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Stephanie Carter",
      publicationDate: "2023-06-03T10:30:00",
    },
    {
      id: 10,
      title: "Tips for Productivity",
      content:
        "<h2>Heading</h2><p>Learn effective strategies to boost productivity and manage your time efficiently.</p>",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Robert Wilson",
      publicationDate: "2023-06-02T14:20:00",
    },
    {
      id: 11,
      title: "The Science of Meditation",
      content:
        "<h2>Heading</h2><p>Explore the benefits of meditation and learn techniques for a peaceful mind.</p>",
      image:
        "https://images.unsplash.com/photo-1638248308805-d488b66ea854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Laura Davis",
      publicationDate: "2023-06-01T09:15:00",
    },
    {
      id: 12,
      title: "Exploring Space",
      content:
        "<h2>Heading</h2><p>Discover the wonders of the universe and learn about celestial objects.</p>",
      image:
        "https://plus.unsplash.com/premium_photo-1685312182226-20af33367686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Daniel Moore",
      publicationDate: "2023-05-31T11:40:00",
    },
    {
      id: 13,
      title: "Tips for a Healthy Lifestyle",
      content:
        "<h2>Heading</h2><p>Learn about healthy habits and make positive changes for a better life.</p>",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Sophia Martinez",
      publicationDate: "2023-05-30T16:25:00",
    },
    {
      id: 14,
      title: "Exploring Different Cuisines",
      content:
        "<h2>Heading</h2><p>Embark on a culinary journey and discover the flavors of various cuisines.</p>",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG51bWJlciUyMGN1aXNpbmVzfGVufDB8fDB8fHww%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Matthew Thompson",
      publicationDate: "2023-05-29T20:50:00",
    },
    {
      id: 15,
      title: "The Benefits of Reading",
      content:
        "<h2>Heading</h2><p>Discover the joys of reading and how it can broaden your horizons.</p>",
      image:
        "https://images.unsplash.com/photo-1554286830-55d8b8f1f55b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Olivia Wilson",
      publicationDate: "2023-05-28T12:15:00",
    },
    {
      id: 16,
      title: "Exploring the Ocean",
      content:
        "<h2>Heading</h2><p>Dive into the mysteries of the ocean and learn about its diverse marine life.</p>",
      image:
        "https://images.unsplash.com/photo-1501554728187-6ade42fc2a92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Daniel Roberts",
      publicationDate: "2023-05-27T15:30:00",
    },
    {
      id: 17,
      title: "Tips for Starting a Business",
      content:
        "<h2>Heading</h2><p>Learn the essential steps to start your own successful business.</p>",
      image:
        "https://images.unsplash.com/photo-1525268771113-6965d92bb1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG51bWJlciUyMGN1aXNpbmVzfGVufDB8fDB8fHww%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Sophia Williams",
      publicationDate: "2023-05-26T09:40:00",
    },
    {
      id: 18,
      title: "Photography Tips and Techniques",
      content:
        "<h2>Heading</h2><p>Improve your photography skills and capture stunning images with expert tips and techniques.</p>",
      image:
        "https://images.unsplash.com/photo-1475516975006-67c02f17f34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fENEd3V3WEpBYkV3fHxlbnwwfHwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "William Johnson",
      publicationDate: "2023-05-25T13:55:00",
    },
    {
      id: 19,
      title: "The Art of Public Speaking",
      content:
        "<h2>Heading</h2><p>Master the art of public speaking and deliver impactful presentations with confidence.</p>",
      image:
        "https://images.unsplash.com/photo-1560807707-b2d43a065d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fENEd3V3WEpBYkV3fHxlbnwwfHwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Sophia Davis",
      publicationDate: "2023-05-24T17:10:00",
    },
    {
      id: 20,
      title: "Tips for Home Decoration",
      content:
        "<h2>Heading</h2><p>Transform your living space with creative home decoration ideas and tips.</p>",
      image:
        "https://images.unsplash.com/photo-1560807707-b2d43a065d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fENEd3V3WEpBYkV3fHxlbnwwfHwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "Emma Thompson",
      publicationDate: "2023-05-23T10:25:00",
    },
  ]);

  const navigate = useNavigate();

  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to track the dialog visibility
  const [blogIdToDelete, setBlogIdToDelete] = useState(null); // State to track the ID of the blog to delete

  const handleDelete = (blogId) => {
    setBlogIdToDelete(blogId); // Set the ID of the blog to delete
    setIsDialogOpen(true); // Open the dialog when the delete button is clicked
  };

  const handleConfirmDelete = () => {
    // Code to handle the deletion logic for the blog with blogIdToDelete
    // Add your logic here to delete the blog with the given ID
    setIsDialogOpen(false); // Close the dialog after deletion
  };

  const handleCancelDelete = () => {
    setBlogIdToDelete(null); // Reset the ID of the blog to delete
    setIsDialogOpen(false); // Close the dialog if the deletion is canceled
  };

  const onRemoveFavorite = (id) => {
    console.log("Blog to remove ", id);
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
