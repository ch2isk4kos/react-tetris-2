import React from "react";
import "./styles/Tetris.css";

const Tetris = ({ rows, columns, setIsGameOver }) => {
  return (
    <div className="Tetris">
      <h1>Tetris</h1>
      <p>Rows: {rows}</p>
      <p>Columns: {columns}</p>
    </div>
  );
};

export default Tetris;
