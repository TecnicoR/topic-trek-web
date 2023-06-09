import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

export const FormButton = ({ children, ...rest }) => {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };

  const defaultConfiguration = {
    onClick: handleSubmit,
    ...rest
  };
  return <Button {...defaultConfiguration}>{children}</Button>;
};