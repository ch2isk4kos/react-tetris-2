import React from "react";
import logo from "../assets/images/logo.svg";
import "./styles/Landing.css";

const Landing = ({ start }) => {
  return (
    <div className="Landing">
      <header className="landing-header">
        <img src={logo} className="react-logo" alt="logo" />
        <button className="button" onClick={start}>
          Play
        </button>
      </header>
    </div>
  );
};

export default Landing;
