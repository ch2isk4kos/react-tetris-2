import { useState, useCallback, useEffect } from "react";

const DefaultDropTime = 1000;
const MinimumDropTime = 100;
const Speed = 50;

export const useDropTime = ({ stats }) => {
  const [dropTime, setDropTime] = useState(DefaultDropTime);
  const [prevDropTime, setPrevDropTime] = useState(); // allows for pause

  const pauseDropTime = useCallback(() => {}, []);

  const resumeDropTime = useCallback(() => {}, []);

  return [dropTime, pauseDropTime, resumeDropTime];
};
