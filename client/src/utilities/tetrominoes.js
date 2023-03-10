import { Action } from "./input/action";
import { isInBounds, hasCollision } from "./board";
const className = "tetromino";

export const TETROMINOES = {
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    className: `${className} ${className}__i`,
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    className: `${className} ${className}__j`,
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    className: `${className} ${className}__l`,
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    className: `${className} ${className}__o`,
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    className: `${className} ${className}__s`,
  },
  T: {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    className: `${className} ${className}__t`,
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    className: `${className} ${className}__z`,
  },
};

export const randomTetromino = () => {
  const keys = Object.keys(TETROMINOES);
  const index = Math.floor(Math.random() * keys.length);
  const key = keys[index];
  return TETROMINOES[key];
};

export const displayTetromino = ({
  className,
  isOccupied,
  position,
  rows,
  shape,
}) => {
  shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        const occupied = isOccupied;
        const _y = y + position.row;
        const _x = x + position.column;
        rows[_y][_x] = { occupied, className };
      }
    });
  });

  return rows;
};

const rotateTetromino = ({ piece, direction }) => {
  // transpose rows and columns
  const tetromino = piece.map((_, index) =>
    piece.map((column) => column[index])
  );

  // reverse rows to achieve a rotated matrix
  if (direction > 0) return tetromino.map((row) => row.reverse());
  return tetromino.reverse();
};

export const moveTetromino = ({ delta, position, shape, board }) => {
  // capture where player intends to go and do something based off that
  const desiredPosition = {
    row: position.row + delta.row,
    column: position.column + delta.column,
  };

  // will there be a collision where player intends to go?
  const hasCollided = hasCollision({
    board,
    position: desiredPosition,
    shape,
  });

  // will player be in bounds where it intends to go?
  const inBounds = isInBounds({
    board,
    position: desiredPosition,
    shape,
  });

  const preventMove = !inBounds || (inBounds && hasCollided);

  // if movement is prevented - find next position available
  const nextPosition = preventMove ? position : desiredPosition;

  // keep track of downward movement - important for collisions
  const isMovingDown = delta.row > 0;
  const isBlocked = isMovingDown && (hasCollided || !inBounds);

  return { collided: isBlocked, nextPosition };
};

export const checkForRotation = ({ board, player, setPlayer }) => {
  const shape = rotateTetromino({
    piece: player.tetromino.shape,
    direction: 1,
  });

  const position = player.position;

  const isValid =
    isInBounds({ board, position, shape }) &&
    !hasCollision({ board, position, shape });

  if (isValid) {
    setPlayer({
      ...player,
      tetromino: { ...player.tetromino, shape },
    });
  } else return false;
};

export const checkForMovement = ({
  action,
  board,
  player,
  setPlayer,
  setIsGameOver,
}) => {
  // capture how far player is trying to move
  const delta = { row: 0, column: 0 };

  // clear fast dropping each time through
  let isFastDropping = false;

  // modify delta movement based on keypress
  if (action === Action.FastDrop) isFastDropping = true;
  else if (action === Action.SlowDrop) delta.row += 1;
  else if (action === Action.Left) delta.column -= 1;
  else if (action === Action.Right) delta.column += 1;

  // destructure variables from moveTetromino retrun values
  const { collided, nextPosition } = moveTetromino({
    delta,
    position: player.position,
    shape: player.tetromino.shape,
    board,
  });

  // if immediate collision - game over
  const isGameOver = collided && player.position.row === 0;
  if (isGameOver) setIsGameOver(isGameOver);

  // otherwise - set player state
  setPlayer({
    ...player,
    collided,
    isFastDropping,
    position: nextPosition,
  });
};
