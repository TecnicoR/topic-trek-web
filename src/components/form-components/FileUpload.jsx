import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export const FileUpload = ({ post, setPost }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setPost({ ...post, image: file });
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    const temp = { ...post };
    delete temp["image"];
    setPost(temp);
    setSelectedFile(null);
  };

  const handleViewClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChooseAnother = () => {
    setSelectedFile(null);
    setOpenDialog(false);
    fileInputRef.current.click();
  };

  return (
    <>
      {!post?.image && (
        <Typography variant="subtitle1">Upload a cover image</Typography>
      )}
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileInputChange}
      />
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
        onClick={handleButtonClick}
        style={{
          display: "flex",
          alignItems: "center",
          height: post?.image?.name ? "auto" : "initial",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {post?.image
          ? post?.image?.name.length > 20
            ? `${post?.image?.name.slice(0, 20)}...`
            : post?.image?.name
          : "Upload Image"}
      </Button>
      {post?.image && (
        <>
          <Button variant="outlined" onClick={handleViewClick}>
            View
          </Button>
          <Button
            variant="outlined"
            startIcon={<CancelIcon />}
            onClick={handleRemoveImage}
          >
            Remove
          </Button>
        </>
      )}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Selected File</DialogTitle>
        <DialogContent>
          <img
            src={selectedFile}
            alt="Selected Image"
            style={{ maxWidth: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleChooseAnother}>
            Choose Another
          </Button>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
