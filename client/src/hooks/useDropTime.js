import { useState, useCallback, useEffect } from "react";

const DEFAULT = 1000;
const MINIMUM = 100;
const SPEED = 50;

export const useDropTime = ({ stats }) => {
  const [dropTime, setDropTime] = useState(DEFAULT);
  const [previousDropTime, setPreviousDropTime] = useState(); // allows for pause

  const resumeDropTime = useCallback(() => {
    if (!previousDropTime) {
      return;
    }
    setDropTime(previousDropTime);
    setPreviousDropTime(null);
  }, [previousDropTime]);

  const pauseDropTime = useCallback(() => {
    if (dropTime) {
      setPreviousDropTime(dropTime);
    }
    setDropTime(null);
  }, [dropTime, setPreviousDropTime]);

  useEffect(() => {
    const level = SPEED * (stats.level - 1);
    const updateDropTime = Math.max(DEFAULT - level, MINIMUM);
    setDropTime(updateDropTime);
  }, [stats.level, setDropTime]);

  return [dropTime, pauseDropTime, resumeDropTime];
};
