import DOMPurify from "dompurify";
import React from "react";

export const HtmlParser = ({ htmlContent }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    ></div>
  );
};
