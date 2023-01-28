import React from "react";
import Menu from "./Menu";
import { useGame } from "../hooks/useGame";
import "../styles/Game.css";
import Tetris from "./Tetris";

const Game = ({ rows, columns }) => {
  const [isGameOver, setIsGameOver, resetGame] = useGame();

  const start = () => {
    resetGame();
  };

  return (
    <div className="Game">
      {isGameOver ? (
        <Menu start={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setIsGameOver={setIsGameOver} />
      )}
    </div>
  );
};

export default Game;
