import React from "react";
import Cell from "./Cell";
import "../styles/Board.css";

const Board = ({ board }) => {
  console.log("board:", board);

  const classStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateCols: `repeat(${board.size.columns}, 1fr)`,
  };

  return (
    <div className="Board" style={classStyles}>
      {board.rows.map((row, y) =>
        row.map((cell, x) => (
          <Cell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </div>
  );
};

export default Board;
