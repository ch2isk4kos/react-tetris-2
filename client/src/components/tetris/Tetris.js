import React from "react";
import Board from "./Board";
import Previews from "./Previews";
import Stats from "./Stats";
import { useBoard } from "../../hooks/useBoard";
import { useStats } from "../../hooks/useStats";
import { usePlayer } from "../../hooks/usePlayer";
import "../styles/Tetris.css";

const Tetris = ({ rows, columns, setIsGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns });
  const [stats, addLinesCleared] = useStats();
  const [player, setPlayer, resetPlayer] = usePlayer();

  return (
    <div className="Tetris">
      <Board board={board} />
      <Stats stats={stats} />
      <Previews tetrominoes={player.tetrominoes} />
    </div>
  );
};

export default Tetris;
