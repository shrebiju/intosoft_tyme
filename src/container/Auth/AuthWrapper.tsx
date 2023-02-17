import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 60px);
`;

export const Content = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  justify-content: center;
  padding: 40px 15px;
  @media screen and (min-width: 576px) {
    padding: 30px;
  }
  @media screen and (min-width: 768px) {
    padding: 30px 45px;
  }
`;

const Logo = styled.img`
  height: 100px;
  display: block;
  margin: 0px auto 20px auto;
`;

const Illustration = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IllustrationBox = styled.div`
  flex: 1;
  height: calc(100vh - 60px);
`;

const InnerContent = styled.div`
  /* margin-top: 20px; */
  max-width: 420px;
  width: 100%;
`;
const AuthWrapper = ({ children, bgImg = "trace.jpg" }: any) => {
  return (
    <Container>
      <IllustrationBox>
        <Illustration src={bgImg} />
      </IllustrationBox>
      <Content>
        {/* <Logo src="/logo.svg" alt="Logo" /> */}
        <InnerContent>{children}</InnerContent>
      </Content>
    </Container>
  );
};

export default AuthWrapper;
