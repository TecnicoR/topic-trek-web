import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBlock : "100px"
  },
  paper: {
    width: 500,
    height: 300,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
};

export const EmailVerificationMessage = () => {
  const navigate = useNavigate();
  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div style={styles.root}>
      <Paper style={styles.paper} elevation={3}>
        <Typography variant="h5" style={styles.message}>
          Thank you for signing up!
        </Typography>
        <Typography variant="body1">
          An email verification link has been sent to your email address. Please
          click on the link to verify your account.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={handleLoginRedirect}
        >
          Go to Login
        </Button>
      </Paper>
    </div>
  );
};
