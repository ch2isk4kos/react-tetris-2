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
  }, dropTime);

  const onKeyUp = ({ code }) => {
    console.log("onKeyUp: code", code);
    const action = actionForKey(code);
    console.log("onKeyUp: action", action);
  };

  const onKeyDown = ({ code }) => {
    console.log("onKeyDown: code", code);
    const action = actionForKey(code);
    console.log("onKeyDown: action", action);
    console.log("onKeyDown: dropTime", dropTime);

    // if (action === Action.Pause) {
    //   if (dropTime) {
    //     console.log("GAME PAUSED!");
    //     pauseDropTime();
    //   } else {
    //     console.log("GAME UNPAUSED!");
    //     resumeDropTime();
    //   }
    // } else if (action === Action.Quit) {
    //   console.log("GAME OVER!");
    //   setIsGameOver(true);
    // } else {
    //   handleOnInput({ action });
    // }

    // handle on action
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
