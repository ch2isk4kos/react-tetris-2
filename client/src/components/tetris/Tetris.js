import React from "react";
import Board from "./Board";
import { useBoard } from "../../hooks/useBoard";
import "../styles/Tetris.css";

const Tetris = ({ rows, columns, setIsGameOver }) => {
  return (
    <div className="Tetris">
      <h1>Tetris</h1>
      <Board rows={rows} columns={columns} />
    </div>
  );
};

export default Tetris;
