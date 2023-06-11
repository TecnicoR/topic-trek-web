import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const CommentSection = ({ comments }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>
      {comments.map((comment, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: 1,
            padding: 2,
            borderRadius: 3,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#F5F5F5",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              marginBottom: 1,
              fontWeight: "bold",
            }}
          >
            {comment.comment}
          </Typography>
          <div
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#757575",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                marginRight: 1,
                // fontWeight: "bold",
                display :"flex",
                alignItems:"center"
              }}
            >
              <PermIdentityIcon sx={{ fontSize: "16px" }} />
              {comment.userName}
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: "italic" }}>
              {comment.commentedDate}
            </Typography>
          </div>
        </Box>
      ))}
    </div>
  );
};

export default CommentSection;
