import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 200, width: 200 }}
      >
        <div className="Tilt-inner">
          <img className="pt3" src={logo} alt="" width="150px"></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
