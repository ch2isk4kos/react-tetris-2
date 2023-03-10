import React from "react";
import Landing from "./Landing";
// import Menu from "./Menu";
import Tetris from "./tetris/Tetris";
import { useGame } from "../hooks/useGame";
import "./styles/Game.css";

const Game = ({ rows, columns }) => {
  const [isGameOver, setIsGameOver, resetGame] = useGame();

  const start = () => {
    resetGame();
  };

  return (
    <div className="Game">
      {isGameOver ? (
        // <Menu start={start} />
        <Landing start={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setIsGameOver={setIsGameOver} />
      )}
    </div>
  );
};

export default Game;
