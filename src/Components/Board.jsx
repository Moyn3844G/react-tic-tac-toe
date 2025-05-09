import Squar from "./Squar";

export default function Board({ squares, xIsNext, onPlay }) {
    const winner = calculateWinner(squares);
    const status = winner
        ? `🎉 Winner: ${winner}`
        : `Next Player: ${xIsNext ? "❌ X" : "⭕ O"}`;

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    return (
        <div className="space-y-4">
            <div className="text-lg font-semibold text-slate-800">{status}</div>
            <div className="grid grid-cols-3 gap-2">
                {squares.map((value, i) => (
                    <Squar key={i} value={value} handelOnClick={() => handleClick(i)} />
                ))}
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
