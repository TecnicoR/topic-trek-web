import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import BookIcon from "@mui/icons-material/Book";
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { UserContext } from "../../context/UserContext";
import LoginIcon from "@mui/icons-material/Login";

const menuIconStyle = {
  color: "white",
  fontSize: "30px",
  "&:hover": { transform: "scale(110%)", color: "#f5f5f5" },
};

export const Navbar = () => {
  const { user } = useContext(UserContext);

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
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Tooltip title="Home">
            <IconButton>
              <HomeIcon sx={menuIconStyle} />
            </IconButton>
          </Tooltip>
          {user != null ? (
            <>
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
            </>
          ) : (
            <>
              <Button
                size="small"
                disableRipple
                disableElevation
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": {
                    transform: "scale(110%)",
                    backgroundColor: "white",
                    color: "black",
                  },
                  "&:active": {
                    transform: "scale(100%)",
                  },
                }}
                variant="contained"
                endIcon={<LoginIcon />}
              >
                Login
              </Button>
            </>
          )}
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
