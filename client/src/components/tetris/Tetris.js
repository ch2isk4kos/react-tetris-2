import React from "react";
import Board from "./Board";
import Stats from "./Stats";
import { useBoard } from "../../hooks/useBoard";
import "../styles/Tetris.css";

const Tetris = ({ rows, columns, setIsGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns });

  return (
    <div className="Tetris">
      <Board board={board} />
    </div>
  );
};

export default Tetris;
