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
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { doSignup } from "../services/userService";
import ToastService from "../components/toast/ToastService";

export const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
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
    doSignup(values)
      .then((res) => {
        ToastService.success(
          "Account created, activate your account by verifying your mail, check mail for more details"
        );
        navigate("/email-verification-message");
      })
      .catch((err) => {
        ToastService.error(err?.response?.data?.message);
      });
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
          sx={{
            padding: "20px",
            width: "500px",
          }}
          elevation={20}
          square={false}
        >
          <Stack sx={{ height: "100%", paddingBottom: "20px" }}>
            <Stack alignItems={"center"} sx={{ marginBottom: "20px" }}>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
            </Stack>
            <Stack justifyContent={"center"} height={"300px"}>
              <Formik
                initialValues={initialValues}
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
                            <PermIdentityIcon />
                          </InputAdornment>
                        ),
                      }}
                      label="Name"
                      name="name"
                      type="text"
                    />
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      label="Password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                    />
                    <FormButton variant="contained" endIcon={<LoginIcon />}>
                      Create account
                    </FormButton>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography variant="body2">
                        <Link to="/login">
                          Already have an account? Sign In
                        </Link>
                      </Typography>
                    </Stack>
                  </Stack>
                </Form>
              </Formik>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};
