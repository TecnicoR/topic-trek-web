import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { useField } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const TextInput = ({ name, type, ...rest }) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);
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

  return type === "password" ? (
    <TextField
      type={showPassword ? "text" : "password"}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPassword((show) => !show)}
            onMouseDown={(e) => e.preventDefault()}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      {...defaultConfiguration}
    />
  ) : (
    <TextField {...defaultConfiguration} />
  );
};