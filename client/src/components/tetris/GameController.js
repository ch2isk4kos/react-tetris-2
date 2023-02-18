import React from "react";
import { actionForKey, Action } from "../../utilities/input/action";
import { playerController } from "../../utilities/player";
import { useDropTime } from "../../hooks/useDropTime";
import { useInterval } from "../../hooks/useInterval";
import "../styles/GameController.css";

const GameController = ({ board, stats, player, setPlayer, setIsGameOver }) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ stats });

  useInterval(() => {
    handleOnInput({ action: Action.SlowDrop });
  }, 1000);

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
  };

  const onKeyDown = ({ code }) => {
    console.log("onKeyDown:", code);

    const action = actionForKey(code);

    // handle on pause
    if (action === Action.Pause) {
      if (dropTime) pauseDropTime();
      else resumeDropTime();
    } else if (action === Action.Quit) setIsGameOver(true);
    else handleOnInput({ action });
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
