import React from "react";
import Preview from "./Preview";

const Previews = ({ tetrominoes }) => {
  const previews = tetrominoes.slice(1 - tetrominoes.length).reverse();
  return (
    <>
      {previews.map((tetromino, index) => (
        <Preview tetromino={tetromino} index={index} key={index} />
      ))}
    </>
  );
};

export default React.memo(Previews);
