import React from "react";
import "./styles/Landing.css";

const Landing = ({ start }) => {
  return (
    <div className="Landing">
      <button className="button" onClick={start}>
        Play
      </button>
    </div>
  );
};

export default Landing;
