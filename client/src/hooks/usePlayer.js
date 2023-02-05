import { useState, useCallback } from "react";

import { buildPlayer } from "../utilities/player";
import { randomTetromino } from "../utilities/tetrominoes";

export const usePlayer = () => {
  const [player, setPlayer] = useState(buildPlayer());
};
