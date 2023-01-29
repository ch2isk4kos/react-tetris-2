export const boardBuild = ({ rows, columns }) => {
  const matrix = Array.from({ length: rows }, () =>
    // Array.from({ length: columns }, () => { ...defaultCell })
    Array.from({ length: columns }, () => {})
  );

  return {
    rows: matrix,
    size: { rows, columns },
  };
};
