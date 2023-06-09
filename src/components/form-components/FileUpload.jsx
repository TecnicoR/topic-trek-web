import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelIcon from "@mui/icons-material/Cancel";
import { Typography } from "@mui/material";

export const FileUpload = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Do something with the selected file
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
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
        {selectedFile ? selectedFile.name : "Upload Image"}
      </Button>
      {selectedFile && (
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
