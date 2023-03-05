import React from "react";
import "../styles/Options.css";

const Options = () => {
  return (
    <ul className="Options">
      <li>
        <h2 className="options-title">Options</h2>
        <hr className="horizon"></hr>
      </li>
      <li className="option">
        <span className="keypress">P</span>{" "}
        <span className="keypress-action">:pause</span>
      </li>
      <li className="option">
        <span className="keypress">Q</span>{" "}
        <span className="keypress-action">:quit</span>
      </li>
      <li className="option">
        <span className="keypress">Up Arrow</span>{" "}
        <span className="keypress-action">:rotate</span>
      </li>
      <li className="option">
        <span className="keypress">Down Arrow</span>{" "}
        <span className="keypress-action">:slow drop</span>
      </li>
      <li className="option">
        <span className="keypress">Spacebar</span>{" "}
        <span className="keypress-action">:fast drop</span>
      </li>
    </ul>
  );
};

export default Options;
