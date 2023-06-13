import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress, Box, Typography } from "@mui/material";

const loaderStyle = {
  zIndex: 9999,
  color: "#fff",
  display: "flex",
  flexDirection: "column",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  // backgroundColor: "rgba(0, 0, 0, 0.5)",
  // backgroundColor: "transparent",
  zIndex: 9998,
};

export const Loader = () => {
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Might take a few seconds...");
    }, 3000);

    const timeout = setTimeout(() => {
      setMessage(
        "Taking longer than usual... Hold on while we try to complete the request."
      );
      const refreshTimer = setTimeout(() => {
        window.location.reload(); // Refresh the window after 2 seconds
      }, 2000);
      return () => clearTimeout(refreshTimer);
    }, 10000);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Box style={overlayStyle} />
      <Backdrop style={loaderStyle} open={true}>
        <CircularProgress color="inherit" />
        <Typography variant="subtitle1" color="inherit">
          {message}
        </Typography>
      </Backdrop>
    </>
  );
};
