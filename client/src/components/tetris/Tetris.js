import React from "react";
import Board from "./Board";
import { useBoard } from "../../hooks/useBoard";
import "../styles/Tetris.css";

const Tetris = ({ rows, columns, setIsGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns });

  return (
    <div className="Tetris">
      <h1>Tetris</h1>
      <Board board={board} />
    </div>
  );
};

export default Tetris;
