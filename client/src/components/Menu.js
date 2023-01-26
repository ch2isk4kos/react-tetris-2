import React from "react";
import "../styles/Menu.css";

const Menu = ({ start }) => {
  return (
    <div className="Menu">
      <button className="button" onClick={start}>
        Start Game
      </button>
    </div>
  );
};

export default Menu;
