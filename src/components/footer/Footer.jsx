import { Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import BookIcon from "@mui/icons-material/Book";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "./footer.scss";

export const Footer = () => {
  return (
    <>
      <Stack
        sx={{
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "150px",
          paddingInline: "20px",
          borderTop: "1px solid black",
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack sx={{ width: "30%" }}>
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
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Topic TREK <BookIcon />
            </Typography>
            <Typography>Your passport to infinite knowledge</Typography>
          </Stack>
          <Stack
            sx={{
              width: "30%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <IconButton>
              <FacebookIcon
                sx={{ color: "inherit", "&:hover": { color: "black" } }}
              />
            </IconButton>

            <IconButton>
              <TwitterIcon
                sx={{ color: "inherit", "&:hover": { color: "black" } }}
              />
            </IconButton>

            <IconButton>
              <GitHubIcon
                sx={{ color: "inherit", "&:hover": { color: "black" } }}
              />
            </IconButton>

            <IconButton>
              <LinkedInIcon
                sx={{ color: "inherit", "&:hover": { color: "black" } }}
              />
            </IconButton>

            <IconButton>
              <EmailIcon
                sx={{ color: "inherit", "&:hover": { color: "black" } }}
              />
            </IconButton>
          </Stack>
        </Stack>
        <Divider
          sx={{ width: "100%", backgroundColor: "black", height: "2px" }}
        />
        <Stack
          sx={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack>&copy; Topic Trek All rights reserved 2023</Stack>
        </Stack>
      </Stack>
    </>
  );
};
