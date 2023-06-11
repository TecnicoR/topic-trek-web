import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CommentIcon from "@mui/icons-material/Comment";
import { UserContext } from "../../context/UserContext";

export const AddComment = ({ value, onChange, onSubmit }) => {
  const { user } = useContext(UserContext);
  return (
    <Box
      display="flex"
      flexDirection="column"
      mb={2}
      borderRadius={1}
      boxShadow={1}
      p={2}
      bgcolor="white"
      gap={1}
      sx={{ marginTop: "6px" }}
    >
      <TextField
        label="Add a comment"
        variant="outlined"
        value={value}
        onChange={onChange}
        multiline
        rows={4}
        size="small"
        InputProps={{
          readOnly: !user,
          disabled: !user,
        }}
      />
      <Button
        variant="contained"
        onClick={onSubmit}
        color="primary"
        mt={2}
        size="small"
        endIcon={<CommentIcon />}
        disabled={!user}
      >
        {user ? "Post Comment" : "Login to post a comment"}
      </Button>
    </Box>
  );
};
