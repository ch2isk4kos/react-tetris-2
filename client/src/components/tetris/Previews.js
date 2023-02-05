import React from "react";
import Preview from "./Preview";
import "../styles/Previews.css";

const Previews = ({ tetrominoes }) => {
  const previews = tetrominoes.slice(1 - tetrominoes.length).reverse();
  return (
    <div className="Previews">
      {previews.map((tetromino, index) => (
        <Preview tetromino={tetromino} index={index} key={index} />
      ))}
    </div>
  );
};

export default React.memo(Previews);
