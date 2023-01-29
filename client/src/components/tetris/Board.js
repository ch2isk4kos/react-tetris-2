import React from "react";
import "../styles/Board.css";

const Board = ({ board }) => {
  console.log("board:", board);

  const boardClassStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateCols: `repeat(${board.size.columns}, 1fr)`,
  };

  return (
    <div className="Board">
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
};

export default Board;
