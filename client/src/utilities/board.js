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
    // ...if no collision
    row = position.row + i;
  }

  return { ...position, row };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
  const { tetromino, position } = player;

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

  // place tetromino shape || ghost on board
  const className = `${tetromino.className} ${
    player.isFastDropping ? "" : "ghost"
  }`;

  // update rows
  rows = displayTetromino({
    className,
    isOccupied: player.isFastDropping,
    position: dropPosition,
    rows,
    shape: tetromino.shape,
  });

  // check for lines cleared
  const blank = rows[0].map((_) => ({ ...defaultCell })); // generate blank row to insert on top of board
  let linesCleared = 0;
  rows = rows.reduce((accumulator, row) => {
    if (row.every((column) => column.occupied)) {
      linesCleared++;
      accumulator.unshift([...blank]);
    } else accumulator.push(row);
    return accumulator;
  }, []);
  if (linesCleared > 0) addLinesCleared(linesCleared);

  // mark the board cell if collision occurs while not fast dropping
  if (!player.isFastDropping) {
    rows = displayTetromino({
      className: tetromino.className,
      isOccupied: player.collided,
      position,
      rows,
      shape: tetromino.shape,
    });
  }

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
