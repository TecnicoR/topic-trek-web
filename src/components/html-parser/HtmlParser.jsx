import DOMPurify from "dompurify";
import React from "react";
import ReactQuill from "react-quill";

export const HtmlParser = ({ htmlContent }) => {
  // const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  return (
    <ReactQuill value={htmlContent} readOnly={true} theme={"bubble"} />
  );
};
