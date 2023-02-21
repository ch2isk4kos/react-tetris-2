import { useState, useCallback } from "react";
import { buildStats } from "../utilities/stats";

export const useStats = () => {
  const [stats, setGameStats] = useState(buildStats());
  const addLinesCleared = useCallback((lines) => {
    // update game stats anytime lines have cleared
    setGameStats((previous) => {
      const points = previous.points + lines + 100;
      const { linesPerLevel } = previous;
      const linesCompleted = previous.linesComplete + lines;
      const level =
        linesCompleted >= linesPerLevel ? previous.level + 1 : previous.level;
      const completedLines = linesCompleted % linesPerLevel;
      // output updated game stats
    }, []);
  }, []);

  return [stats, addLinesCleared];
};
