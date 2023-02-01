import React from "react";
import Board from "./Board";
import Stats from "./Stats";
import { useBoard } from "../../hooks/useBoard";
import { useStats } from "../../hooks/useStats";
import "../styles/Tetris.css";

const Tetris = ({ rows, columns, setIsGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns });
  const [stats, setStats] = useStats();

  return (
    <div className="Tetris">
      <Board board={board} />
      <Stats />
    </div>
  );
};

export default Tetris;
