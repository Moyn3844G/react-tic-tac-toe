import { useState } from "react";
import Board from "./Components/Board";
import History from "./Components/History";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setXIsNext(!xIsNext);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const move = history.map((square, move) => {
    const description = move ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move} className="mb-2">
        <button
          onClick={() => jumpTo(move)}
          className="w-full bg-slate-800 hover:bg-slate-700 text-white text-sm px-4 py-2 rounded-md transition"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
        <History history={move} />
      </div>
    </div>
  );
}

export default App;
