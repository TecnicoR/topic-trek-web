import React, { useState } from "react";
import {
  Avatar,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import LoginIcon from "@mui/icons-material/Login";
import { TextInput } from "../components/form-components/TextInput";
import { FormButton } from "../components/form-components/FormButton";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(16, "Password must not exceed 16 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      ),
  });

  const handleSubmit = (values) => {
    console.log("Login => ", values);
  };

  return (
    <>
      <Container
        sx={{
          display: "grid",
          placeItems: "center",
          height: "600px",
        }}
      >
        <Paper
          className="login"
          sx={{
            padding: "20px",
            width: "500px",
          }}
          elevation={20}
          square={false}
        >
          <Stack alignItems={"center"}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Stack>
          <Stack justifyContent={"center"} height={"300px"}>
            <Formik
              initialValues={initialValue}
              validationSchema={validationSchema}
              onSubmit={(values) => handleSubmit(values)}
            >
              <Form>
                <Stack
                  width={"inherit"}
                  display={"flex"}
                  gap={3}
                  direction={"column"}
                >
                  <TextInput
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    label="Email"
                    name="email"
                    type="text"
                  />
                  <TextInput
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PasswordIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
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
                      ),
                    }}
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                  />
                  <FormButton variant="contained" endIcon={<LoginIcon />}>
                    Login
                  </FormButton>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="body2">
                      <Link>Forgot password?</Link>
                    </Typography>
                    <Typography variant="body2">
                      <Link to="/sign-up">Don't have an account? Sign Up</Link>
                    </Typography>
                  </Stack>
                </Stack>
              </Form>
            </Formik>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};
