import React from "react";
import Cell from "./Cell";
import { buildBoard } from "../../utilities/board";
import { displayTetrominoPreview } from "../../utilities/tetrominoes";
import "../styles/Preview.css";

const Preview = ({ tetronmino, index }) => {
  const { shape, className } = tetronmino;
  const board = buildBoard({ rows: 4, columns: 4 });
  const style = { top: `${index + 15}vw` };

  board.rows = displayTetrominoPreview({
    className,
    isOccupied: false,
    position: { rows: 0, columns: 0 },
    rows: board.rows,
    shape,
  });

  return (
    <div className="Preview" style={style}>
      <div className="preview-board">
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <Cell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
};

export default Preview;
