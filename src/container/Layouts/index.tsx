import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../Homepage/Header";

const Layouts = ({ children }: any) => {
  let location = useLocation();

  return (
    <div
      style={{
        paddingTop: 60,
      }}
    >
      <Header />
      <div
        style={{
          minHeight: "calc(100vh - 60px)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layouts;
