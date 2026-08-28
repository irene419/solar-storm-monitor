const bands = [
  { range: "Kp 0–4", min: 0, max: 4, color: "bg-green-500", title: "Calm to small disturbance", effect: "No real effect on devices or people." },
  { range: "Kp 5 (G1)", min: 5, max: 5, color: "bg-yellow-400", title: "Minor geomagnetic storm", effect: "Minor grid fluctuations and slight satellite effects are possible." },
  { range: "Kp 6 (G2)", min: 6, max: 6, color: "bg-amber-500", title: "Moderate geomagnetic storm", effect: "High-latitude grids may face stress; prolonged storms can strain transformers, and HF radio may weaken." },
  { range: "Kp 7 (G3)", min: 7, max: 7, color: "bg-orange-500", title: "Strong geomagnetic storm", effect: "Protective devices may false-trigger, and satellites may need orientation corrections." },
  { range: "Kp 8 (G4)", min: 8, max: 8, color: "bg-red-500", title: "Severe geomagnetic storm", effect: "Widespread grid voltage problems are possible, and satellite navigation may degrade for hours." },
  { range: "Kp 9 (G5)", min: 9, max: 9, color: "bg-red-800", title: "Extreme geomagnetic storm", effect: "Transformer damage and grid collapse are possible, and HF radio communication may fail entirely." },
];

function getBandIndex(kp) {
  if (kp === null || kp === undefined || isNaN(kp)) return null;
  const rounded = Math.min(9, Math.max(0, Math.round(kp)));
  return bands.findIndex((b) => rounded >= b.min && rounded <= b.max);
}

export default function KpReferenceChart({ currentKp }) {
  const activeIndex = getBandIndex(currentKp);

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm h-full overflow-hidden">
      <div className="p-5 pb-3">
        <h2 className="text-base font-semibold text-slate-800 mb-1">How to Read the Kp Scale</h2>
        <p className="text-xs text-slate-500">Today's level is highlighted</p>
      </div>
      <div className="divide-y divide-slate-100">
        {bands.map((band, index) => (
          <div
            key={band.range}
            className={`flex items-stretch text-sm ${index === activeIndex ? "ring-2 ring-inset ring-slate-800" : ""}`}
          >
            <div className={`${band.color} w-20 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs px-2 text-center`}>
              {band.range}
            </div>
            <div className="px-4 py-2.5 flex-1">
              <p className="font-medium text-slate-700">{band.title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{band.effect}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}