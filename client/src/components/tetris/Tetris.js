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
            strings: [
              "<span style=color:gray;font-size:0.75em;>built by <strong><span style=color:#2000A0;font-size:1.25em;font-weight:lighter;>Chris Kakos</span></strong></span>",
            ],
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
