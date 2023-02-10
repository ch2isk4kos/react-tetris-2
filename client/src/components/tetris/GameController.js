import React from "react";
import "../styles/GameController.css";

const GameController = ({ board, stats, player, setPlayer, setIsGameOver }) => {
  return (
    <input
      className="GameController"
      type="text"
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
    >
      {/*  */}
    </input>
  );
};

export default GameController;
