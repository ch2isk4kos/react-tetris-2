import React from "react";
import Menu from "./Menu";
import { useGame } from "../hooks/useGame";
import "../styles/Game.css";

const Game = ({ rows, columns }) => {
  const [isGameOver, setIsGameOver, resetGame] = useGame();

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
