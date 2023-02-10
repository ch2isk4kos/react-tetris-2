import React from "react";
import { actionForKey, Action } from "../../utilities/input/action";
import "../styles/GameController.css";

const GameController = ({ board, stats, player, setPlayer, setIsGameOver }) => {
  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (action === Action.Quit) setIsGameOver(true);
  };

  const onKeyDown = ({ code }) => {
    console.log("onKeyDown:", code);
  };

  const onInput = ({ action }) => {};

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
