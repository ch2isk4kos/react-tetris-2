import React from "react";

const Tetris = ({ rows, columns }) => {
  return (
    <div className="Tetris">
      <h1>Tetris</h1>
      <p>Rows: {rows}</p>
      <p>Columns: {columns}</p>
    </div>
  );
};

export default Tetris;
