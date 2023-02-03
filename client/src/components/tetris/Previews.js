import React from "react";
import Preview from "./Preview";

const Previews = ({ tetrominoes }) => {
  const previews = tetrominoes.slice(1 - tetrominoes.length).reverse();
  return (
    <div className="Previews">
      <Preview />
    </div>
  );
};

export default React.memo(Previews);
