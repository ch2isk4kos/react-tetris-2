import React from "react";
import "../styles/Stats.css";

const Stats = ({ stats }) => {
  const { level, score, linesPerLevel, linesComplete } = stats;
  const lines = linesPerLevel - linesComplete;

  return (
    <ul className="Stats right">
      <li>Score</li>
      <li className="value">{level}</li>
      <li>Score</li>
      <li className="value">{lines}</li>
      <li>Score</li>
      <li className="value">{score}</li>
    </ul>
  );
};

export default React.memo(Stats); // component only updates whenever stats prop changes
