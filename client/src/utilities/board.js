import { defaultCell } from "./cell";

export const buildBoard = ({ rows, columns }) => {
  const matrix = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: matrix,
    size: { rows, columns },
  };
};

export const nextBoard = ({
  board,
  player,
  resetPlayer,
  addLinesCleared,
}) => {};
