import React from "react";
import "../styles/Stats.css";

const Stats = ({ stats }) => {
  const { level, score, linesPerLevel, linesComplete } = stats;
  const lines = linesPerLevel - linesComplete;

  return (
    <>
      <ul className="Stats Stats__left">
        <li>
          <h2>Level</h2>
        </li>
        <li className="value">{level}</li>
        <li>
          <h2>Lines</h2>
        </li>
        <li className="value">{lines}</li>
        <li>
          <h2>Score</h2>
        </li>
        <li className="value">{score}</li>
      </ul>
    </>
  );
};

export default React.memo(Stats); // component only updates when stats prop changes
