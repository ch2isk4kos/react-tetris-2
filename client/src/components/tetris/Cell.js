import React from "react";
import "../styles/Cell.css";

const Cell = ({ cell }) => {
  return (
    <div className={`Cell ${cell.className}`}>
      <div className="shine">
        <p>TESTING!</p>
      </div>
    </div>
  );
};

export default Cell;
