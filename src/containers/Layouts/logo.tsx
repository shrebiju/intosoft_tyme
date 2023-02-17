import React from "react";
import "../../css/logo.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
const Logo = () => {
  return (
    <div>
      <header>
        <div>
          <div className="logoName">Trappie</div>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </header>
      <div className="main-content">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
};

export default Logo;
