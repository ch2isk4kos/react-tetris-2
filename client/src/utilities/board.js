import { defaultCell } from "./cell";

export const boardBuild = ({ rows, columns }) => {
  const matrix = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: matrix,
    size: { rows, columns },
  };
};
