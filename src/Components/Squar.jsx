export default function Squar({ value, handelOnClick }) {
    return (
        <button
            onClick={handelOnClick}
            className="bg-white border border-gray-400 h-16 w-16 text-xl font-bold text-slate-700 hover:bg-slate-100 transition"
        >
            {value}
        </button>
    );
}
  