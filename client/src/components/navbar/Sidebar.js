import React from "react";

const Sidebar = () => {
  const handleOnOpen = () => {
    console.log("sidebar click");
  };

  return (
    <div className="Sidebar">
      <h1>Sidebar</h1>
      <div className="rows">
        <div className="row-1"></div>
        <div className="row-2"></div>
        <div className="row-3"></div>
        <div className="row-4"></div>
        <div className="row-5"></div>
      </div>
    </div>
  );
};

export default Sidebar;
