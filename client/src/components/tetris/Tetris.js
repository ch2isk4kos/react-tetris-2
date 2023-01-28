import React from "react";
import Board from "./Board";
import "../styles/Tetris.css";

const Tetris = ({ rows, columns, setIsGameOver }) => {
  return (
    <div className="Tetris">
      <h1>Tetris</h1>
      <Board />
      <p>Rows: {rows}</p>
      <p>Columns: {columns}</p>
    </div>
  );
};

export default Tetris;
