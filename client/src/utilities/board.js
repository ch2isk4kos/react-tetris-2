import { defaultCell } from "./cell";
import { displayTetromino, moveTetromino } from "./tetrominoes";

export const buildBoard = ({ rows, columns }) => {
  const matrix = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: matrix,
    size: { rows, columns },
  };
};

const findDropPosition = ({ board, position, shape }) => {
  let max = board.size.rows - position.row + 1;
  let row = 0;

  for (let i = 0; i < max; i++) {
    const delta = { row: i, column: 0 };
    const result = moveTetromino({
      delta,
      position,
      shape,
      board,
    });
    const { collided } = result;

    if (collided) break;

    // if no collision
  }
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
  const { tetromino, position } = player;
  const { className, shape } = tetromino;

  // copy/clear spaces used by pieces that haven't collided
  let rows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  // drop position
  const dropPosition = findDropPosition({
    board,
    position,
    shape: tetromino.shape,
  });

  // update rows
  rows = displayTetromino({
    className,
    isOccupied: player.collided,
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
          console.log("Collision Occurred!!");
          return true;
        }
      }
    }
  }
  console.log("No Collision");
  return false;
};

export const isInBounds = ({ board, position, shape }) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;
        const isValidPosition = board.rows[row] && board.rows[row][column];
        // if (!isValidPosition) return false;
        if (!isValidPosition) {
          console.log("Out of Bounds!!");
          return false;
        }
      }
    }
  }
  console.log("Is In Bounds");
  return true;
};
