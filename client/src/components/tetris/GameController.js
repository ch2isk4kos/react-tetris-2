import React from "react";
import "../styles/GameController.css";

const GameController = ({ board, stats, player, setPlayer, setIsGameOver }) => {
  const onKeyUp = ({ code }) => {
    //
  };
  return (
    <input
      className="GameController"
      type="text"
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      autoFocus
    >
      {/*  */}
    </input>
  );
};

export default GameController;