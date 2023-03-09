import React from "react";
import "../styles/Stats.css";

const Stats = ({ stats }) => {
  const { level, score, linesPerLevel, linesComplete } = stats;
  const lines = linesPerLevel - linesComplete;

  return (
    <ul className="Stats">
      <li>
        <h2 className="title">Level</h2>
      </li>
      <li className="value">{level}</li>
      <li>
        <h2 className="title">Lines</h2>
      </li>
      <li className="value">{lines}</li>
      <li>
        <h2 className="title">Score</h2>
      </li>
      <li className="value">{score}</li>
    </ul>
  );
};

export default React.memo(Stats); // component only updates when stats prop changes
