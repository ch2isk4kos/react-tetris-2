import { useState, useCallback } from "react";
import { buildStats } from "../utilities/stats";

export const useStats = () => {
  const [stats, setGameStats] = useState(buildStats());
  const addLinesCleared = useCallback((lines) => {
    // update game stats anytime lines have cleared
    setGameStats((previous) => {
      const points = previous.points + lines + 100;
      const { linesPerLevel } = previous;
      const completedLines = previous.linesComplete + lines;
      const level =
        completedLines >= linesPerLevel ? previous.level + 1 : previous.level;
    }, []);
  }, []);

  return [stats, addLinesCleared];
};
