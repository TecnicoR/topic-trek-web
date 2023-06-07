import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import BookIcon from "@mui/icons-material/Book";
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PostAddIcon from '@mui/icons-material/PostAdd';

const menuIconStyle = { color: "white", fontSize: "30px" };

export const Navbar = () => {
  return (
    <AppBar
      position="static"
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
                <PostAddIcon sx={menuIconStyle}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="My Profile">
            <IconButton >
              <AccountCircleIcon sx={menuIconStyle} />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>
    </AppBar>
  );
};
