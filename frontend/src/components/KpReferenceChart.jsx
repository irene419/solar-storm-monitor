import { kpLevels } from "../utils/kpLevels";

export default function KpReferenceChart({ currentKp }) {
  const roundedCurrent =
    currentKp !== null && currentKp !== undefined && !isNaN(currentKp)
      ? Math.min(9, Math.max(0, Math.round(currentKp)))
      : null;

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm h-full">
      <h2 className="text-base font-semibold text-slate-800 mb-1">Kp Index Reference</h2>
      <p className="text-xs text-slate-500 mb-3">What each level means — today is highlighted</p>
      <div className="grid grid-cols-5 gap-1.5">
        {kpLevels.map((level) => (
          <div
            key={level.value}
            className={`${level.bg} rounded-md p-1.5 text-center text-white ${
              level.value === roundedCurrent ? "ring-2 ring-slate-800 ring-offset-1" : ""
            }`}
          >
            <p className="text-sm font-bold leading-none">{level.value}</p>
            <p className="text-[8px] leading-tight mt-0.5">{level.label.split(" ")[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}