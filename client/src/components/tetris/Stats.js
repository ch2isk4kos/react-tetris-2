import React from "react";

const Stats = ({ stats }) => {
  const { level, score, linesPerLevel, linesComplete } = stats;
  const lines = linesPerLevel - linesComplete;

  return (
    <ul className="Stats stats__right">
      <li>Score</li>
      <li className="value">{level}</li>
      <li>Score</li>
      <li className="value">{lines}</li>
      <li>Score</li>
      <li className="value">{score}</li>
    </ul>
  );
};

export default Stats;
