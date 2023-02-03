import React from "react";

const Previews = ({ tetrominoes }) => {
  const previews = tetrominoes.slice(1 - tetrominoes.length).reverse();
  return (
    <div className="Preview">
      {/*  */}
      {/*  */}
    </div>
  );
};

export default React.memo(Previews);
