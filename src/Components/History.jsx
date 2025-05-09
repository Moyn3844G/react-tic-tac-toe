export default function History({ history }) {
    return (
        <div className="w-full md:w-60 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Move History</h2>
            <ol className="space-y-2">{history}</ol>
        </div>
    );
}
  