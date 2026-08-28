import SummaryCard from "../components/SummaryCard";
import KpChart from "../components/KpChart";
import KpReferenceChart from "../components/KpReferenceChart";
import { useKpIndex } from "../hooks/useKpIndex";
import { getKpLevel } from "../utils/kpLevels";

export default function Overview() {
  const { data: kpData, status: kpStatus } = useKpIndex();

  const latestKp = kpData && kpData.length > 0 ? kpData[kpData.length - 1].Kp : null;
  const kpLevel = kpStatus === "success" ? getKpLevel(latestKp) : null;

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Space Weather Overview</h1>
      <p className="text-slate-500 mt-2">Current conditions and recent activity.</p>
      <p className="text-slate-600 mt-3 max-w-3xl leading-relaxed">
        The Kp index (Planetary K-index) is a 0–9 scale that tells us how disturbed Earth's magnetic
        field is by space weather. Lower values indicate calm conditions, while higher values indicate
        stronger geomagnetic activity.
      </p>
      <div className="border-b border-slate-200 my-6"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-1">
          <SummaryCard
            label="Current Kp Index"
            value={kpStatus === "loading" ? "…" : kpStatus === "error" ? "N/A" : latestKp}
            unit=""
            description={
              kpStatus === "error"
                ? "Data currently unavailable"
                : kpLevel
                ? `${kpLevel.label} — Geomagnetic activity level`
                : "Geomagnetic activity level"
            }
            colorClasses={kpLevel}
          />
        </div>
        <div className="lg:col-span-2">
          <KpReferenceChart currentKp={kpStatus === "success" ? latestKp : null} />
        </div>
      </div>

      {kpStatus === "success" && <KpChart data={kpData} />}
    </>
  );
}