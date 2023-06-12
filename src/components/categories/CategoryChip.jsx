import React from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CategoryIcon from "@mui/icons-material/Category";

export const CategoryChip = ({ categories }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <CategoryIcon color="primary" />
        <Typography variant="subtitle1">Categories:</Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
        {categories.map((category) => (
          <Chip
            key={category.id}
            label={category.name}
            variant="outlined"
            sx={{
              borderRadius: "16px",
              color: "#007bff",
              borderColor: "#007bff",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
