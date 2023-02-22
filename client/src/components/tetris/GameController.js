import React from "react";
import {
  actionForKey,
  actionIsDrop,
  Action,
} from "../../utilities/input/action";
import { playerController } from "../../utilities/player";
import { useDropTime } from "../../hooks/useDropTime";
import { useInterval } from "../../hooks/useInterval";
import "../styles/GameController.css";

const GameController = ({ board, stats, player, setPlayer, setIsGameOver }) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ stats });

  useInterval(() => {
    handleOnInput({ action: Action.SlowDrop });
  }, dropTime);

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (actionIsDrop(action)) resumeDropTime();
  };

  const onKeyDown = ({ code }) => {
    console.log("onKeyDown: code", code);
    const action = actionForKey(code);
    console.log("onKeyDown: dropTime", dropTime);

    // handle on action
    if (action === Action.Pause) {
      if (dropTime) pauseDropTime();
      else resumeDropTime();
    } else if (action === Action.Quit) setIsGameOver(true);
    else {
      if (actionIsDrop(action)) pauseDropTime();
      handleOnInput({ action });
    }
  };

  const handleOnInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setIsGameOver,
    });
  };

  return (
    <input
      className="GameController"
      type="text"
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      autoFocus
    ></input>
  );
};

export default GameController;
