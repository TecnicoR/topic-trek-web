import React from "react";
import { ProfileSection } from "../components/profile-section/ProfileSection";
import { Divider } from "@mui/material";
import { MyBlogs } from "../components/my-posts/MyBlogs";

export const MyProfile = () => {
  return (
    <>
      <ProfileSection />
      <Divider
        sx={{ width: "100%", backgroundColor: "black", height: "2px" }}
      />
      <MyBlogs />
    </>
  );
};
