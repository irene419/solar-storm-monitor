export default function SummaryCard({ label, value, unit, description, colorClasses }) {
  const bgClass = colorClasses ? colorClasses.cardBg : "bg-white";
  const textClass = colorClasses ? colorClasses.cardText : "text-slate-800";

  return (
    <div className={`${bgClass} rounded-lg border border-slate-200 p-5 shadow-sm h-full`}>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className={`text-3xl font-bold mt-1 ${textClass}`}>
        {value} <span className="text-lg font-normal text-slate-400">{unit}</span>
      </p>
      {description && <p className="text-xs text-slate-400 mt-2">{description}</p>}
    </div>
  );
}