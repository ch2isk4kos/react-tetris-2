import React from "react";
import "../styles/Options.css";

const Options = () => {
  return (
    <ul className="Options">
      <li className="action">
        <p className="keypress">P</p>
        <p className="keypress-action">:pause :resume</p>
      </li>
      <li className="action">
        <p className="keypress">Q</p>
        <p className="keypress-action">:quit</p>
      </li>
      <li className="action">
        <p className="keypress">Up Arrow</p>
        <p className="keypress-action">:rotate</p>
      </li>
      <li className="action">
        <p className="keypress">Down Arrow</p>
        <p className="keypress-action">:slow drop</p>
      </li>
      <li className="action">
        <p className="keypress">Spacebar</p>
        <p className="keypress-action">:fast drop</p>
      </li>
    </ul>
  );
};

export default Options;
