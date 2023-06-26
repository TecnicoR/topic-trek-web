import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Grid,
  Typography,
} from "@mui/material";
import { AccountCircle, Edit, Save } from "@mui/icons-material";
import { getMe, updateMe } from "../../services/userService";
import ToastService from "../toast/ToastService";

export const ProfileSection = () => {
  const [profile, setProfile] = useState();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getMe()
      .then((res) => {
        setProfile(res);
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    updateMe(profile)
      .then((res) => {
        ToastService.success("Profile updated");
        getMe().then((res) => {
          setProfile(res);
        });
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });
  };

  const handleChange = (event) => {
    if (!isEditing) return; // Return early if not in editing mode

    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ marginTop: "6px" }}
    >
      <Grid item xs={12} sm={4} md={3} lg={2}>
        <Box display="flex" justifyContent="center">
          <img
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            alt="Profile"
            style={{ width: 150, height: 150, borderRadius: "50%" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box display="flex" flexDirection="column" alignItems="center">
          {isEditing ? (
            <Input
              name="name"
              value={profile?.name}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          ) : (
            <Typography variant="h6">{profile?.name}</Typography>
          )}
          <Typography variant="body1">{profile?.email}</Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {isEditing ? (
          <Button variant="contained" endIcon={<Save />} onClick={handleSave}>
            Save
          </Button>
        ) : (
          <IconButton onClick={handleEdit}>
            <Edit />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};
