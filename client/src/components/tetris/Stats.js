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
      {/* <ul className="Stats Stats__right">
        <li>
          <h2>Options</h2>
        </li>
        <li className="keypress">P</li>
        <li className="keypress">Q</li>
        <li className="keypress">Up Arrow</li>
        <li className="keypress">Down Arrow</li>
        <li className="keypress">Spacebar</li>
      </ul> */}
    </>
  );
};

export default React.memo(Stats); // component only updates when stats prop changes
