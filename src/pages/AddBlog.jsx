import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { FileUpload } from "../components/form-components/FileUpload";
import { PostAddOutlined } from "@mui/icons-material";
import "./styles/add-post.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { createBlog } from "../services/blogService";
import ToastService from "../components/toast/ToastService";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../services/categoryService";
import { uploadFileToGetURL } from "../services/fileService";

export const AddBlog = () => {
  const [post, setPost] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [options, setOptions] = useState([]);
  const [fileErrorMessage, setFileErrorMessage] = useState("");
  const MAX_CHARACTER_COUNT = 1500;

  const navigate = useNavigate();

  const fetchCategories = () => {
    getCategories()
      .then((res) => {
        setOptions(res);
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const validationSchema = yup.object({
    title: yup.string().required("Title is required"),
    categories: yup.array().min(1, "At least one category is required"),
    content: yup
      .string()
      .required("Content is required")
      .test(
        "character-count",
        "Content should not exceed 1500 characters",
        (value) =>
          value.replace(/(<([^>]+)>)/gi, "").length <= MAX_CHARACTER_COUNT
      ),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      categories: [],
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setPost({ ...post, ...values });
      if (post?.image == null || post?.image === "") {
        setFileErrorMessage("Image is required");
      } else {
        setDialogOpen(true);
      }
    },
  });

  const handleQuillChange = (value) => {
    formik.setFieldValue("content", value);
    setCharacterCount(value.replace(/(<([^>]+)>)/gi, "").length);
  };

  const handleOptionChange = (event, value) => {
    formik.setFieldValue("categories", value);
  };

  const handleConfirm = () => {
    const temp = { ...post };
    delete temp["categories"];
    temp["categories"] = post?.categories?.map((v, k) => v?.id);
    uploadFileToGetURL(temp?.image)
      .then((res) => {
        temp["image"] = res;
        createBlog(temp)
          .then((res) => {
            ToastService.success("Blog posted");
            navigate("/");
          })
          .catch((err) => {
            ToastService.error(err?.response?.data?.message);
          });
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });

    setDialogOpen(false);
  };

  const handleCancel = () => {
    setDialogOpen(false);
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // Text formatting options
      [{ header: [1, 2, 3, 4, 5, 6] }], // Header formatting options
      ["link"], // Insert link, image, and video options
      [{ list: "ordered" }, { list: "bullet" }], // List options
      [{ align: [] }],
      ["clean"], // Remove formatting option
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
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          error={formik.touched.title && formik.errors.title ? true : false}
          helperText={formik.touched.title && formik.errors.title}
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
            getOptionLabel={(option) => option.name}
            value={formik.values.categories}
            onChange={handleOptionChange}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id && option.name === value.name;
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Categories"
                placeholder="Search category"
                error={
                  formik.touched.categories && formik.errors.categories
                    ? true
                    : false
                }
                helperText={
                  formik.touched.categories && formik.errors.categories
                }
                sx={{
                  fontSize: "20px", // Adjust the font size here
                  "& .MuiInputLabel-root": {
                    fontSize: "17px", // Adjust the label font size here
                  },
                }}
              />
            )}
          />
          <Typography color="red" variant="subtitle1">
            {fileErrorMessage}
          </Typography>
          <FileUpload post={post} setPost={setPost} />
        </Box>
        <Box
          sx={{
            overflowY: "auto",
            marginBottom: "10px",
            // border: "1px solid black",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            marginTop: "6px",
          }}
        >
          <Stack
            sx={{
              paddingInline: "10px",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ margin: "5px 12px", marginInline: "6px", color: "#666666" }}
            >
              Content{" "}
              {formik.touched.content && formik.errors.content && (
                <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                  {formik.errors.content}
                </Typography>
              )}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                mt: 1,
                color:
                  characterCount > MAX_CHARACTER_COUNT ? "error" : "inherit",
              }}
            >
              Character Count: {characterCount}/{MAX_CHARACTER_COUNT}
            </Typography>
          </Stack>
          <ReactQuill
            placeholder="Write your blog post here..."
            theme="snow"
            name="content"
            value={formik.values.content}
            onChange={handleQuillChange}
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
          type="submit"
        >
          Post blog
        </Button>
      </form>
      <Dialog open={dialogOpen} onClose={handleCancel}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to post this blog?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
