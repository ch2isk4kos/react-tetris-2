import { useState } from "react";
import { boardBuild } from "../utilities/board";

export const useBoard = ({ rows, columns }) => {
  const [board, setBoard] = useState(boardBuild(rows, columns));

  return [board, setBoard];
};
