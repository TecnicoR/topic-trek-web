import React, { useEffect } from "react";
import { Backdrop, CircularProgress, Box } from "@mui/material";

const loaderStyle = {
  zIndex: 9999,
  color: "#fff",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 9998,
};

const Loader = () => {
  useEffect(() => {
    // Disable scrolling and user activity when the component mounts
    document.body.style.overflow = "hidden";
    return () => {
      // Enable scrolling and user activity when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <Box style={overlayStyle} />
      <Backdrop style={loaderStyle} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Loader;
