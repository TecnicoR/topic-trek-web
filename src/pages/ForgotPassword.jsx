import React from "react";
import {
  Avatar,
  Container,
  InputAdornment,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import EmailIcon from "@mui/icons-material/Email";
import { TextInput } from "../components/form-components/TextInput";
import { FormButton } from "../components/form-components/FormButton";
import ToastService from "../components/toast/ToastService";
import { forgotPassword } from "../services/userService";

export const ForgotPassword = () => {
  const initialValue = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const handleSubmit = (values) => {
    forgotPassword(values)
      .then((res) => {
        ToastService.success("Password reset link sent successfully!");
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
          className="forgot-password"
          sx={{
            padding: "20px",
            width: "500px",
          }}
          elevation={20}
          square={false}
        >
          <Stack alignItems={"center"}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <EmailIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot Password
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
                  <FormButton variant="contained" endIcon={<EmailIcon />}>
                    Send Reset Link
                  </FormButton>
                </Stack>
              </Form>
            </Formik>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};
