import { useState, useCallback } from "react";

export const useGame = () => {
  const [isGameOver, setIsGameOver] = useState(true);
  const resetGame = useCallback(() => setIsGameOver(false), []);

  return [isGameOver, setIsGameOver, resetGame];
};
