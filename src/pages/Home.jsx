import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react";
import { Box, Container } from "@mui/material";
import React from "react";

export const Home = () => {
  return (
    <>
      <Container>
        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage className="d-block w-100" src={"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} alt="slide 1" />
            <CCarouselCaption className="d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} alt="slide 2" />
            <CCarouselCaption className="d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} alt="slide 3" />
            <CCarouselCaption className="d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </Container>
    </>
  );
};
