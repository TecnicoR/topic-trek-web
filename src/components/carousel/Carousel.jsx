import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { Button, Paper } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Carousel = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const imageStyle = {
    objectFit: "cover", // Resize the image to cover the container
    height: "300px", // Set your desired height here
    width: "100%", // Make the image take up the full width of the container
  };
  return (
    <>
      <Paper>
        <CCarousel
          controls
          indicators
          interval={3000}
          dark
          touch
          pause={"hover"}
          wrap
        >
          <CCarouselItem>
            <CImage
              style={imageStyle}
              className="d-block w-100"
              src={
                "https://images.unsplash.com/photo-1594377157609-5c996118ac7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              }
              alt="slide 1"
            />
            <CCarouselCaption className="d-none d-md-block">
              <h5>Write your ideas here.</h5>
              <p>
                Let people know about your thoughts{" "}
                {user == null ? (
                  <Button
                    sx={{
                      "&:active": {
                        transform: "scale(95%)",
                      },
                    }}
                    variant="contained"
                    onClick={() => navigate("/sign-up")}
                  >
                    Signup For Free
                  </Button>
                ) : (
                  <Button
                    sx={{
                      "&:active": {
                        transform: "scale(95%)",
                      },
                    }}
                    variant="contained"
                    onClick={() => navigate("/add-blog")}
                  >
                    Post a Blog
                  </Button>
                )}
              </p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              style={imageStyle}
              className="d-block w-100"
              src={
                "https://images.unsplash.com/photo-1529854140025-25995121f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              }
              alt="slide 2"
            />
            <CCarouselCaption className="d-none d-md-block">
              <h5>
                Explore the world of inspiring people's ideas here in{" "}
                <strong>Topic Trek</strong>{" "}
              </h5>
              <p>
                “Don’t let yesterday take up too much of today.” — Will Rogers
              </p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              style={imageStyle}
              className="d-block w-100"
              src={
                "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
              }
              alt="slide 3"
            />
            <CCarouselCaption className="d-none d-md-block">
              <h5>Be you! Don't stop yourself from being creative</h5>
              <p>
                "Creativity is seeing what others see and thinking what no one
                else ever thought." - Albert Einstein
              </p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              style={imageStyle}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              alt="slide 4"
            />
            <CCarouselCaption className="d-none d-md-block">
              <h5>Discover new perspectives in writing</h5>
              <p>Open your mind to new ideas and expand your creativity.</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              style={imageStyle}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1580618432485-1e08c5039909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=364&q=80"
              alt="slide 5"
            />
            <CCarouselCaption className="d-none d-md-block">
              <h5>Connect with like-minded individuals</h5>
              <p>
                Join a vibrant community of writers and enthusiasts to share and
                collaborate.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </Paper>
    </>
  );
};
