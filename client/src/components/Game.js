import React from "react";
import Menu from "./Menu";
import "../styles/Game.css";

const Game = ({ rows, columns }) => {
  const start = () => {
    console.log("Game started...");
  };

  return (
    <div className="Game">
      <Menu start={start} />
      <p>Rows: {rows}</p>
      <p>Columns: {columns}</p>
    </div>
  );
};

export default Game;
