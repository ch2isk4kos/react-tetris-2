import React from "react";
import "../styles/Options.css";

const Options = () => {
  return (
    <ul className="Options">
      <li>
        <h2 className="options-title">Options</h2>
      </li>
      <li className="keypress">
        P <span className="keypress-action">pause</span>
      </li>
      <li className="keypress">
        Q <span className="keypress-action">quit</span>
      </li>
      <li className="keypress">
        Up Arrow <span className="keypress-action">rotate</span>
      </li>
      <li className="keypress">
        Down Arrow <span className="keypress-action">slow drop</span>
      </li>
      <li className="keypress">
        Spacebar <span className="keypress-action">fast drop</span>
      </li>
    </ul>
  );
};

export default Options;
