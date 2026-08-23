export default function SummaryCard({ label, value, unit, description }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="text-3xl font-bold text-slate-800 mt-1">
        {value} <span className="text-lg font-normal text-slate-400">{unit}</span>
      </p>
      {description && <p className="text-xs text-slate-400 mt-2">{description}</p>}
    </div>
  );
}