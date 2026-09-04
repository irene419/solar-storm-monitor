import { useKpIndex } from "../hooks/useKpIndex";
import { getKpLevel } from "../utils/kpLevels";
import { auroraVisibility, getAuroraRangeIndex } from "../utils/auroraVisibility";

export default function AuroraGuidePage() {
  const { data: kpData, status: kpStatus } = useKpIndex();

  const latestKp = kpData && kpData.length > 0 ? kpData[kpData.length - 1].Kp : null;
  const kpLevel = kpStatus === "success" ? getKpLevel(latestKp) : null;
  const activeRangeIndex = kpStatus === "success" ? getAuroraRangeIndex(latestKp) : null;
  const activeRange = activeRangeIndex !== null ? auroraVisibility[activeRangeIndex] : null;

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Track the storm. Find the glow.</h1>
      <p className="text-slate-500 mt-2">
        For aurora chasers and photographers, know when conditions are right.
      </p>
      <div className="border-b border-slate-200 my-6"></div>

      <div className={`${kpLevel ? kpLevel.cardBg : "bg-slate-50"} rounded-lg border border-slate-200 p-5 mb-6`}>
        <p className="text-sm font-medium text-slate-500">Aurora Chance Right Now</p>
        <p className={`text-3xl font-bold mt-1 ${kpLevel ? kpLevel.cardText : "text-slate-800"}`}>
          Kp {kpStatus === "loading" ? "…" : kpStatus === "error" ? "N/A" : latestKp}
        </p>
        <p className="text-sm text-slate-600 mt-2">
          {kpStatus === "error"
            ? "Data currently unavailable"
            : activeRange
            ? activeRange.description
            : "Loading current conditions…"}
        </p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-6">
        <h2 className="text-base font-semibold text-slate-800 mb-2">What Determines Visibility</h2>
        <ul className="text-sm text-slate-600 leading-relaxed space-y-1.5">
          <li>
            <span className="font-medium text-slate-700">Kp Index</span> The higher it is, the further
            from the poles the aurora becomes visible.
          </li>
          <li>
            <span className="font-medium text-slate-700">Your latitude</span> — The further north (or
            south) you are, the lower the Kp needed to see aurora where you live.
          </li>
          <li>
            <span className="font-medium text-slate-700">Darkness and clear skies</span> — You'll still
            need a dark, cloud-free night regardless of Kp Index.
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
        <h2 className="text-base font-semibold text-slate-800 mb-1">Aurora Visibility by Kp Index</h2>
        <p className="text-xs text-slate-500 mb-4">Today's level is highlighted below</p>
        <div className="space-y-2">
          {auroraVisibility.map((row, index) => (
            <div
              key={row.range}
              className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 rounded-md ${
                index === activeRangeIndex ? "bg-slate-800 text-white" : "bg-slate-50 text-slate-700"
              }`}
            >
              <span className="font-semibold text-sm sm:w-40 flex-shrink-0">{row.range}</span>
              <span className="text-sm">{row.description}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}