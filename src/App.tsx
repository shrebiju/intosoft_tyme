import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Register from "./container/Auth/Register";
import Header from "./container/Homepage/Header";
import { Route, Routes } from "react-router-dom";
import BannerImage from "./container/Homepage/BannerImage";
import Layouts from "./container/Layouts";
import Login from "./container/Auth/Login";

function App() {
  return (
    <div className="App">
      <Layouts>
        <Routes>
          <Route path="/" element={<BannerImage />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </Layouts>
      {/* <Login /> */}
    </div>
  );
}

export default App;
