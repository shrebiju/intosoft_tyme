import { Checkbox, Row, Typography } from "antd";

import { Field, Form, Formik } from "formik";
import InputField from "../../components/InputField";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import AuthWrapper from "./AuthWrapper";
import Header from "../Homepage/Header";
import Button from "../../components/Button";
// import LinkedIn from "./LinkedIn";
// import Socket from "@/socket";
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email is not valid")
    .required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
  remember: yup.boolean(),
});

const Login = () => {
  const navigate = useNavigate();
  // const { setAuth } = useRoot();
  const [rememberMe, setRememberMe] = useState(false);

  // const handleSuccess = async (data) => {
  //   axios.defaults.headers.Authorization = `Bearer ${data.token}`;
  //   // Socket.connectSocket();

  //   setAuth(data);
  //   await localStorage.setItem("user", JSON.stringify(data));

  //   if (data.onboardingStep < (data?.role === "service" ? 5 : 4)) {
  //     // history.replace('/onboarding');
  //     navigate("/onboarding", { replace: true });
  //   } else {
  //     // history.replace('/dashboard');
  //     navigate("/dashboard", { replace: true });
  //   }
  // };

  // const handleSubmit = async (values, formikHelpers) => {
  //   const data = await handleSubmitRequest({
  //     method: "post",
  //     url: "v1/auth/login",
  //     data: { ...values },
  //   });
  //   handleSuccess(data);

  //   // navigate('/verifyOTP', { email: values.email, rememberMe });
  // };

  return (
    <>
      <AuthWrapper>
        <Formik initialValues={{}} onSubmit={() => {}}>
          {() => {
            return (
              <Form>
                <Typography.Title level={5}>Login</Typography.Title>
                <Typography.Title level={5}>
                  Don't have an account?{" "}
                  <Link to="/Register">Create Account</Link>
                </Typography.Title>
                <Field component={InputField} label="Email" name="email" />
                <Field
                  component={InputField}
                  name="password"
                  type="password"
                  label="Password"
                />
                <Row
                  justify="space-between"
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <Checkbox onChange={() => setRememberMe((prev) => !prev)}>
                    Remember me
                  </Checkbox>
                  <Link to="/forgotPassword">Forgot Password?</Link>
                </Row>
                <Button
                  block={true}
                  backgroundcolor="primary"
                  htmlType="submit"

                  // onClick={() => navigate('/landlord')}
                >
                  Login
                </Button>
              </Form>
            );
          }}
        </Formik>
      </AuthWrapper>
    </>
  );
};

export default Login;
