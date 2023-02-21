import { useState, useCallback } from "react";
import { buildStats } from "../utilities/stats";

export const useStats = () => {
  const [stats, setGameStats] = useState(buildStats());
  const addLinesCleared = useCallback((lines) => {
    // update game stats anytime lines have cleared
    setGameStats((previous) => {}, []);
  }, []);

  return [stats, addLinesCleared];
};
