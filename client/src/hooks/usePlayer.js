import { useState, useCallback } from "react";

import { buildPlayer } from "../utilities/player";

export const usePlayer = () => {
  const [player, setPlayer] = useState(buildPlayer());

  const resetPlayer = useCallback(() => {
    setPlayer((p) => buildPlayer(p));
  }, []);

  return [player, setPlayer, resetPlayer];
};
