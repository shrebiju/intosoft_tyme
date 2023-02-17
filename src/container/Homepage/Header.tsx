import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Banner from "./BannerImage";
import styled from "styled-components";
import Index from ".";
const StyledHeader = styled.div<{
  isHome: boolean;
}>`
  height: 60px;
  position: fixed;
  background-color: white;

  left: 0;
  right: 0;
  top: 0;

  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // padding: 0px 40px;
  // @media screen and (min-width: 992px) {
  //   padding: 20px 20px;
  // }
  // @media screen and (min-width: 1200px) {
  //   padding: 20px 30px;
  // }
  // @media screen and (min-width: 1400px) {
  //   padding: 20px 50px;
  // }

  ${({ isHome }) => !isHome && ` border-bottom: 1px solid #f0f0f0;`}
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.div`
  padding: 0 10px;
`;

const Input = styled.input`
  border: none;
  /* border-bottom: 1px solid #f0f0f0; */
  outline: none;
  height: 40px;
  width: 600px;
  padding-left: 20px;
  &:active {
    background-color: #fafafa;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 120px;
  margin-left: 40px;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  console.log("location", isHome);
  return (
    <>
      <StyledHeader isHome={isHome}>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo src="/logo.svg" alt="logo" onClick={() => navigate("/")} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <RightContent>
            <Index />
          </RightContent>
        </div>
      </StyledHeader>
      {/* <div>
        <Banner />
      </div> */}
    </>
  );
};

export default Header;
