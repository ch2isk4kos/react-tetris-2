import { defaultCell } from "./cell";
import { displayTetromino } from "./tetrominoes";

export const buildBoard = ({ rows, columns }) => {
  const matrix = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: matrix,
    size: { rows, columns },
  };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
  const { tetromino, position, collided } = player;
  const { className, shape } = tetromino;

  // copy/clear spaces used by pieces that haven't collided
  let rows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  // update rows
  rows = displayTetromino({
    className,
    isOccupied: collided,
    position,
    rows,
    shape,
  });

  // if collision - reset player
  if (player.collided || player.isFastDropping) resetPlayer();

  return {
    rows,
    size: { ...board.size },
  };
};

export const hasCollision = ({ board, position, shape }) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;

        if (
          board.rows[row] &&
          board.rows[row][column] &&
          board.rows[row][column].occupied
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

export const isInBounds = ({ board, position, shape }) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;
        const isValidPosition = board.rows[row] && board.rows[row][column];
        if (!isValidPosition) return false;
      }
    }
  }
  return true;
};
