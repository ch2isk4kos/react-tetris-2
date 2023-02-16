import { useState, useCallback } from "react";

export const useDropTime = () => {
  const [dropTime, setDropTime] = useState(0);
  return [dropTime, setDropTime];
};
