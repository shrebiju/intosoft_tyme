import { Row, Typography } from "antd";
import { Button } from "antd";
import { Field, Form, Formik } from "formik";
import InputField from "../../components/InputField";
import Header from "../Homepage/Header";
// import useAPI from "../../hooks/api";
// import { omit } from "lodash";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import AuthWrapper from "./AuthWrapper";
// import AuthWrapper from "./AuthWrapper";
// import { toast } from "react-toastify";
// import LinkedIn from "./LinkedIn";
const loginValidationSchema = yup.object().shape({
  firstName: yup
    .string()

    .required("Please enter your first name"),
  lastName: yup
    .string()

    .required("Please enter your last name"),
  email: yup
    .string()
    .email("Email is not valid")
    .required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
  remember: yup.boolean(),
});

const Register = () => {
  const navigate = useNavigate();

  // const [linkedInError, setLinkedInError] = useState("");

  return (
    <>
      <div className="test">
        <div>
          <Header />
        </div>
        <AuthWrapper>
          <Formik
            initialValues={{}}
            onSubmit={() => {}}
            validationSchema={loginValidationSchema}
          >
            {() => {
              return (
                <Form>
                  <Typography.Title level={5}>Create Account</Typography.Title>
                  <Typography.Title level={5}>
                    Already a member? <Link to="/login"> Login</Link>
                  </Typography.Title>
                  <Field
                    component={InputField}
                    label="First Name"
                    name="firstName"
                  />
                  <Field
                    component={InputField}
                    label="Last Name"
                    name="lastName"
                  />
                  <Field component={InputField} label="Email" name="email" />
                  <Field
                    component={InputField}
                    name="password"
                    type="password"
                    label="Password"
                  />
                  <Field
                    component={InputField}
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                  />
                  <Row
                    justify="space-between"
                    style={{
                      marginBottom: 10,
                    }}
                  >
                    <Link to="/forgotPassword">Forgot Password?</Link>
                  </Row>
                  {/* <Error message={error} isFormError /> */}
                  <Typography.Text
                    style={{
                      display: "block",
                    }}
                  >
                    By submitting the form, I accept Terms and Condition
                  </Typography.Text>
                  {/* <Button
                  backgroundColor="primary"
                  htmlType="submit"
                  disabled={loading || isSubmitting}
                  loading={loading || isSubmitting}
                >
                  Create Account
                </Button>
                

                <LinkedIn title="Create with LinkedIn" /> */}
                  <Button type="primary">Create Account</Button>
                  &nbsp;&nbsp;
                  <Button type="primary">Create with LinkedIn</Button>
                </Form>
              );
            }}
          </Formik>
        </AuthWrapper>
      </div>
    </>
  );
};

export default Register;
