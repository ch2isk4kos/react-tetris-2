import { useState } from "react";
import { buildBoard } from "../utilities/board";

export const useBoard = ({
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared,
}) => {
  const [board] = useState(buildBoard({ rows, columns }));

  return [board];
};
