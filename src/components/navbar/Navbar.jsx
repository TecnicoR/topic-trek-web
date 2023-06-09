import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BookIcon from "@mui/icons-material/Book";
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";

const menuIconStyle = { color: "white", fontSize: "30px", "&:hover": { transform : 'scale(110%)', color : "#f5f5f5" }};

export const Navbar = () => {
  // State used for opening my profile sub menu once clicked on profile icon
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        height: "60px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingInline: "10px",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            Topic TREK <BookIcon />
          </Typography>
        </Box>
        <Box
          sx={{ width: "30%", display: "flex", justifyContent: "space-around" }}
        >
          <Tooltip title="Home">
            <IconButton>
              <HomeIcon sx={menuIconStyle} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Favorites">
            <IconButton>
              <GradeIcon sx={menuIconStyle} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add new post">
            <IconButton>
              <PostAddIcon sx={menuIconStyle} />
            </IconButton>
          </Tooltip>
          <Tooltip title="My Profile">
            <IconButton
              aria-controls={open ? "resources-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <AccountCircleIcon sx={menuIconStyle} />
            </IconButton>
          </Tooltip>
          <Menu
            id="resources-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            MenuListProps={{
              "aria-labelledby": "resources-button",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
      </Stack>
    </AppBar>
  );
};
