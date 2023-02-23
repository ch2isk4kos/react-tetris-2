import React from "react";
import "./styles/Menu.css";

const Menu = ({ start }) => {
  return (
    <div className="Menu">
      <div className="column col-1">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ao7ZvoE2IbP1pTz4xRXq_QHaEK%26pid%3DApi&f=1&ipt=45b65e059dc575f5c35139ab02e0620dd19f21d251be221b21dfe0309cd61d91&ipo=images"></img>
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
