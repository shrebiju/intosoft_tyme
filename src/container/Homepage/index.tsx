import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styled from "styled-components";
const IconWrapper = styled.div`
  padding: 0 10px;
`;
const Index = () => {
  const navigate = useNavigate();
  // const { auth } = useRoot();
  return (
    <div>
      <>
        <>
          <Link
            to={{
              pathname: "/login",
            }}
            style={{
              marginRight: 20,
            }}
          >
            Login
          </Link>
          {/* <Button onClick={() => navigate("/Register")}>Create Test</Button> */}
        </>
        <>
          {/* <Link
            to={{
              pathname: "/Register",
            }}
            style={{
              marginRight: 40,
            }}
          ></Link> */}
          <Button
            backgroundcolor="primary"
            onClick={() => navigate("/register")}
          >
            Sign up for free
          </Button>

          <IconWrapper>{/* <Notification /> */}</IconWrapper>
          <IconWrapper>{/* <Profile user={auth} /> */}</IconWrapper>
        </>
      </>
    </div>
  );
};

export default Index;
