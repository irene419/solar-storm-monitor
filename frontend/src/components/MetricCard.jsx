export default function MetricCard({ label, value, unit, status }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm text-center">
      <p className="text-xs font-medium text-slate-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-slate-800">
        {status === "loading" ? "…" : status === "error" ? "N/A" : value}
        {status === "success" && <span className="text-sm font-normal text-slate-400 ml-1">{unit}</span>}
      </p>
    </div>
  );
}