import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

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
      <Typography variant="h1" style={{ color: "black" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "black" }}>
        The page you're looking for doesn't exist.
      </Typography>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Back Home
      </Button>
    </Box>
  );
};
