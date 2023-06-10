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
} from "@mui/material";
import { DateTime } from "luxon";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { HtmlParser } from "../components/html-parser/HtmlParser";

export const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [moreBlogs, setMoreBlogs] = useState([
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
    <Box sx={{ maxWidth: 1100, margin: "0 auto" }}>
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

          {/* <Grid item xs={4}>
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
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          py: 1,
                        }}
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
              <Box
                sx={{
                  position: "relative",
                  boxShadow: "inset 0px 4px 4px -4px rgba(0, 0, 0, 0.5)",
                }}
              ></Box>
            </Paper>
          </Grid> */}
        </Grid>
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
