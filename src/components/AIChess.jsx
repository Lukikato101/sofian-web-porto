import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function AIChess() {
  const [game, setGame] = useState(new Chess());
  const [isThinking, setIsThinking] = useState(false);
  const [orientation, setOrientation] = useState("white");

  const isGameOver = game.isGameOver();

  function makeMove(move) {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    return result ? gameCopy : null;
  }

  function requestAIMove(nextGame) {
    if (!nextGame || nextGame.isGameOver()) {
      setIsThinking(false);
      return;
    }

    setTimeout(() => {
      const possibleMoves = nextGame.moves({ verbose: true });
      if (possibleMoves.length === 0) {
        setIsThinking(false);
        return;
      }

      const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

      setGame((currentGame) => {
        const updatedGame = new Chess(currentGame.fen());
        updatedGame.move(randomMove);
        return updatedGame;
      });

      setIsThinking(false);
    }, 1000);
  }

  function onDrop(sourceSquare, targetSquare) {
    if (isThinking || isGameOver) return false;

    const move = {
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    };

    const updatedGame = makeMove(move);
    if (!updatedGame) return false;

    setGame(updatedGame);
    setIsThinking(true);
    requestAIMove(updatedGame);
    return true;
  }

  function resetGame() {
    setGame(new Chess());
    setIsThinking(false);
  }

  function flipBoard() {
    setOrientation((current) => (current === "white" ? "black" : "white"));
  }

  const statusMessage = isGameOver
    ? "Game over"
    : isThinking
    ? "AI is thinking..."
    : "Your move";

  const historyMoves = game.history().join(", ");

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Play with Chess with me</h2>
            <p className="text-zinc-400 mt-2 max-w-2xl">
              Drag and drop pieces to challenge me. I will
              reply and beat you after each valid move.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={flipBoard}
              className="rounded-2xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm font-semibold transition hover:bg-zinc-700"
            >
              Flip Board
            </button>
            <button
              type="button"
              onClick={resetGame}
              className="rounded-2xl border border-violet-500 bg-violet-500/10 px-4 py-3 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/20"
            >
              Reset Game
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-[#0b0b12] p-5 border border-zinc-800">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-zinc-300">{statusMessage}</span>
            <span className="text-zinc-400 text-sm">
              {isGameOver
                ? "Game finished"
                : `Turn: ${game.turn() === "w" ? "White" : "Black"}`}
            </span>
          </div>

          <div className="mx-auto max-w-[500px]">
            <Chessboard
              position={game.fen()}
              onPieceDrop={onDrop}
              boardOrientation={orientation}
              arePiecesDraggable={!isThinking && !isGameOver}
            />
          </div>

          {historyMoves && (
            <div className="mt-6 rounded-2xl border border-zinc-800 bg-[#09090b] p-4 text-sm text-zinc-400">
              <h3 className="font-semibold text-white mb-2">Move History</h3>
              <p>{historyMoves}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}