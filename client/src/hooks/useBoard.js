import { useState, useEffect } from "react";
import { buildBoard, nextBoard } from "../utilities/board";

export const useBoard = ({
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared,
}) => {
  const [board] = useState(buildBoard({ rows, columns }));

  useEffect(() => {
    setBoard((previousBoard) =>
      nextBoard({ board: previousBoard, player, resetPlayer, addLinesCleared })
    );
  }, [player, resetPlayer, addLinesCleared]);

  return [board];
};
