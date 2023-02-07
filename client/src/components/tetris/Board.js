import Cell from "./Cell";
import "../styles/Board.css";

const Board = ({ board }) => {
  console.log("Board.js: board", board);

  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateCols: `repeat(${board.size.columns}, 1fr)`,
  };

  return (
    <div className="Board" style={boardStyles}>
      {board.rows.map((row, y) =>
        row.map((cell, x) => (
          <Cell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </div>
  );
};

export default Board;
