import Board from "./Board";
import GameController from "./GameController";
import Options from "./Options";
import Previews from "./Previews";
import Stats from "./Stats";
import { useBoard } from "../../hooks/useBoard";
import { useStats } from "../../hooks/useStats";
import { usePlayer } from "../../hooks/usePlayer";
import Typewriter from "typewriter-effect";
import "../styles/Tetris.css";

const Tetris = ({ rows, columns, setIsGameOver }) => {
  const [stats, addLinesCleared] = useStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className="Tetris">
      <Stats stats={stats} />
      <Board board={board} />
      <Previews tetrominoes={player.tetrominoes} />
      <Options />
      <div className="TypeWriterEffect">
        <Typewriter
          options={{
            strings: ["built by Chris Kakos"],
            autoStart: true,
            pauseFor: 50000,
            loop: true,
          }}
        />
      </div>
      <GameController
        board={board}
        stats={stats}
        player={player}
        setPlayer={setPlayer}
        setIsGameOver={setIsGameOver}
      />
    </div>
  );
};

export default Tetris;
