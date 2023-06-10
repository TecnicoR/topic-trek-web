import React, { useRef } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelIcon from "@mui/icons-material/Cancel";
import { Typography } from "@mui/material";

export const FileUpload = ({ post, setPost }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setPost({ ...post, image: file });
    // Do something with the selected file
  };

  const handleRemoveImage = () => {
    const temp = { ...post };
    delete temp["image"];
    setPost(temp);
  };

  return (
    <>
      <Typography variant="subtitle1">Upload a cover image</Typography>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
        onClick={handleButtonClick}
      >
        {post?.image ? post?.image?.name : "Upload Image"}
      </Button>
      {post?.image && (
        <Button
          variant="outlined"
          startIcon={<CancelIcon />}
          onClick={handleRemoveImage}
        >
          Remove
        </Button>
      )}
    </>
  );
};
