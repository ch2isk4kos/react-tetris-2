import React from "react";
import Menu from "./Menu";
import { useGame } from "../hooks/useGame";
import "../styles/Game.css";

const Game = ({ rows, columns }) => {
  const [isGameOver, setIsGameOver, resetGame] = useGame();

  const start = () => {
    resetGame();
    console.log(`isGameOver: ${isGameOver}`);
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
