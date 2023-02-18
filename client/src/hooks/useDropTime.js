import { useState, useCallback, useEffect } from "react";

const DEFAULT = 1000;
const MINIMUM = 100;
const SPEED = 50;

export const useDropTime = ({ stats }) => {
  const [dropTime, setDropTime] = useState(DEFAULT);
  const [prevDropTime, setPrevDropTime] = useState(); // allows for pause

  useEffect(() => {
    const level = SPEED * (stats.level - 1);
    const updateDropTime = Math.max(DEFAULT - level, MINIMUM);
    setDropTime(updateDropTime);
  }, [stats.level, setDropTime]);

  const pauseDropTime = useCallback(() => {
    if (dropTime) setPrevDropTime(dropTime);
    setPrevDropTime(null);
  }, [dropTime, setPrevDropTime]);

  const resumeDropTime = useCallback(() => {
    if (!prevDropTime) return;
    setDropTime(prevDropTime);
    setPrevDropTime(null);
  }, [prevDropTime]);

  return [dropTime, pauseDropTime, resumeDropTime];
};
