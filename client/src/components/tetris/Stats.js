import React from "react";

const Stats = ({ score, level }) => {
  return (
    <div className="Stats">
      <div className="score">{score}</div>
      <div className="level">{level}</div>
    </div>
  );
};

export default Stats;
