import { useState, useCallback, useEffect } from "react";

const DefaultDropTime = 1000;
const MinimumDropTime = 100;
const Speed = 50;

export const useDropTime = ({ stats }) => {
  const [dropTime, setDropTime] = useState(DefaultDropTime);
  const [prevDropTime, setPrevDropTime] = useState(); // allows for pause

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
