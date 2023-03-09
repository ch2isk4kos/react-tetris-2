import React from "react";
import "../styles/Options.css";

const Options = () => {
  return (
    <ul className="Options">
      <li>
        <span className="keypress">P</span>{" "}
        <span className="keypress-action">:pause :resume</span>
      </li>
      <li>
        <span className="keypress">Q</span>{" "}
        <span className="keypress-action">:quit</span>
      </li>
      <li>
        <span className="keypress">Up Arrow</span>{" "}
        <span className="keypress-action">:rotate</span>
      </li>
      <li>
        <span className="keypress">Down Arrow</span>{" "}
        <span className="keypress-action">:slow drop</span>
      </li>
      <li>
        <span className="keypress">Spacebar</span>{" "}
        <span className="keypress-action">:fast drop</span>
      </li>
    </ul>
  );
};

export default Options;
