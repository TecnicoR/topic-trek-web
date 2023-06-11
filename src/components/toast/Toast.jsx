import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Slide } from "@mui/material";

const Toast = ({ open, message, type, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      TransitionComponent={Slide}
      TransitionProps={{
        direction: "down",
        timeout: { enter: 100, exit: 900 },
      }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={type}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Toast;
