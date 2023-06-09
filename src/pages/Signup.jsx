import React from "react";
import { Avatar, Container, Paper, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import LoginIcon from "@mui/icons-material/Login";
import { TextInput } from "../components/form-components/TextInput";
import { FormButton } from "../components/form-components/FormButton";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export const Signup = () => {
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
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Signup => ", values);
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
                    <TextInput label="Name" name="name" type="text" />
                    <TextInput label="Email" name="email" type="text" />
                    <TextInput
                      label="Password"
                      name="password"
                      type="password"
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
