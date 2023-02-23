import React from "react";
import "./styles/Menu.css";

const Menu = ({ start }) => {
  return (
    <div className="Menu">
      <div className="column col-1">
        <img src=""></img>
      </div>
      <div className="column col-2">
        <div className="play-button">
          <h1 className="title">TETRIS</h1>
          <button className="button" onClick={start}>
            Play
          </button>
        </div>
      </div>
      <div className="column col-3">Column 3</div>
    </div>
  );
};

export default Menu;
