import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "80vh",
      }}
    >
      <ErrorIcon
        sx={{
          fontSize: "68px",
        }}
      />
      <Typography variant="h1" style={{ color: "black" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "black" }}>
        The page you're looking for doesn't exist.
      </Typography>
      <Button
        sx={{
          marginTop: "6px",
        }}
        variant="outlined"
        onClick={() => navigate("/")}
      >
        Back Home
      </Button>
    </Box>
  );
};
