import React from "react";
import "../styles/Cell.css";

const Cell = ({ cell }) => {
  return (
    <div className={`Cell ${cell.className}`}>
      <div className="shine"></div>
    </div>
  );
};

export default Cell;
