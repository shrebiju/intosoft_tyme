import { Typography, Rate, Row, Col, Tabs } from "antd";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import SelectField from "@shared/web/components/SelectField";
// import Button from "@shared/web/components/Button";
import { Formik, Field } from "formik";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const url = '/search-bar-bg.png';
// const url =
//   "https://mir-s3-cdn-cf.behance.net/project_modules/1400/66383c63498577.5ab28d9d4f11d.jpg";
const Banner = styled.div`
  display: flex;
  background-image: url(banner-image.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 120vh;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  position: relative;
  overflow: hidden;
  .ant-tabs-nav:before {
    border-bottom: none;
  }
`;

// const Search = styled.input`
//   width: 700px;

//   border-radius: 2px;
//   border: none;
//   outline: none;
//   opacity: 0.9;
//   padding: 0 20px;
// `;

const BannerContent = styled.div`
  z-index: 1;
  text-align: center;
  width: 100%;
`;

const TymeIcon = styled.img`
  height: 40px;
  margin: 0px 20px;
`;
const Truck = styled.img`
  height: 100px;
  margin: 0px 20px;
`;

// const StyledInput = styled.input`
//   height: 60px;
//   width: 600px;
//   border-radius: 2px;
//   border: 1px solid ${({ theme }) => theme.colors.border};
//   outline: none;
//   padding-left: 60px;
//   &:focus {
//     border-color: ${({ theme }) => theme.colors.primary};
//   }
// `;

// const SearchIcon = styled(FontAwesomeIcon)`
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   font-size: 20px;
//   color: ${({ theme }) => theme.colors.border};
// `;

const BannerImage = () => {
  const navigate = useNavigate();

  const [tab, setTab] = useState(0);
  return (
    <div>
      <Banner>
        <BannerContent>
          <Typography.Title>Tyme System</Typography.Title>
          <Typography.Text style={{ display: "block" }}>
            Automatically track mileage & expenses
          </Typography.Text>
          <Typography.Text>
            Automatically track mileage & expenses and Automatically track
            mileage & expenses
          </Typography.Text>
          <Row
            justify="center"
            align="middle"
            style={{ marginTop: "20px", marginBottom: "40px" }}
          >
            <Col>
              <Truck src="/truck.svg" />

              {/* <Typography.Text>12,200 Landlords</Typography.Text> */}
            </Col>
            <TymeIcon src="/logo.svg" />
            <Col>
              <Truck src="/truck.svg" />
              {/* <Typography.Text>15,100 Tenants</Typography.Text> */}
            </Col>
          </Row>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/search");
            }}
          ></form>
          <div className="inside-banner-img">
            <img
              style={{ width: "100%", height: "50%" }}
              src="/images/banner.jpg"
              alt="Banner"
              className="bannerimage"
            />
          </div>
        </BannerContent>
      </Banner>
    </div>
  );
};

export default BannerImage;
