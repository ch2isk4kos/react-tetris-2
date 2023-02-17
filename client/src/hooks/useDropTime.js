import { useState, useCallback, useEffect } from "react";

export const useDropTime = ({ stats }) => {
  const [dropTime, setDropTime] = useState(0);
  return [dropTime, pauseDropTime, resumeDropTime];
};
