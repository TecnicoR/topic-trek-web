import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useField } from "formik";

export const TextInput = ({ name, type, ...rest }) => {
  const [field, meta] = useField(name);
  const defaultConfiguration = {
    ...field,
    ...rest,
    type,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    defaultConfiguration.error = true;
    defaultConfiguration.helperText = meta.error;
  }

  return <TextField {...defaultConfiguration} />;
};
