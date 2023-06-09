import {
  Autocomplete,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { FileUpload } from "../components/form-components/FileUpload";
import { PostAddOutlined } from "@mui/icons-material";
import "./styles/add-post.scss";

export const AddPost = () => {
  const [value, setValue] = useState("");
  const [post, setPost] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event, value) => {
    setSelectedOptions(value);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    // Add more options as needed
  ];

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // Text formatting options
      [{ header: [1, 2, 3, 4, 5, 6] }], // Header formatting options
      ["link"], // Insert link, image, and video options
      [{ list: "ordered" }, { list: "bullet" }], // List options
      [{ align: [] }],
      ["clean"], // Remove formatting option
      ["undo", "redo"],
    ],
  };

  return (
    <div
      style={{
        minHeight: "110vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: "6px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          borderBottom: "1px solid black",
        }}
      >
        Post a new Blog
      </Typography>
      <TextField
        fullWidth
        label="Title"
        variant="outlined"
        type="text"
        name="title"
        value={post?.title}
        // InputProps={{
        //   style: {
        //     fontSize: "26px",
        //     fontWeight: "bold",
        //   },
        // }}
        // InputLabelProps={{
        //   style: {
        //     fontSize: "22px",
        //   },
        // }}
        sx={{
          fontSize: "20px", // Adjust the font size here
          "& .MuiInputLabel-root": {
            fontSize: "18px", // Adjust the label font size here
          },
        }}
      />

      <Box
        sx={{
          width: "100%",
          marginTop: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "30px",
          // paddingInline: "20px",
          boxSizing: "border-box",
        }}
      >
        <Autocomplete
          sx={{
            width: "50%",
          }}
          multiple
          options={options}
          getOptionLabel={(option) => option.label}
          value={selectedOptions}
          onChange={handleOptionChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Select Categories"
              placeholder="Search category"
              sx={{
                fontSize: "20px", // Adjust the font size here
                "& .MuiInputLabel-root": {
                  fontSize: "18px", // Adjust the label font size here
                },
              }}
            />
          )}
        />
        <FileUpload />
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          marginBottom: "10px",
          // border: "1px solid black",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ margin: "5px 12px", marginInline: "6px", color: "#666666" }}
        >
          Content
        </Typography>
        <ReactQuill
          placeholder="Write your blog post here..."
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          style={{
            height: "600px",
          }}
        />
      </Box>
      <Button
        endIcon={<PostAddOutlined />}
        sx={{
          marginTop: "10px",
          fontSize: "18px",
        }}
        fullWidth
        variant="contained"
      >
        Post blog
      </Button>
    </div>
  );
};
