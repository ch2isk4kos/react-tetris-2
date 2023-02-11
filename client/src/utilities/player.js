import { Action } from "./input/action";
import {
  randomTetromino,
  checkForRotation,
  rotateTetromino,
} from "./tetrominoes";

export const buildPlayer = (previous) => {
  let tetrominoes;

  if (previous) {
    tetrominoes = [...previous.tetrominoes];
    tetrominoes.unshift(randomTetromino());
  } else {
    tetrominoes = Array(5)
      .fill(0)
      .map((_) => randomTetromino());
  }

  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop(),
  };
};

export const playerController = ({
  action,
  board,
  player,
  setPlayer,
  setIsGameOver,
}) => {
  if (!action) return;
  if (action === Action.Rotate) rotateTetromino({ board, player, setPlayer });
};
