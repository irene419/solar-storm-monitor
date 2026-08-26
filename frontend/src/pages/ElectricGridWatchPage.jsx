import CmeTable from "../components/CmeTable";
import { useKpIndex } from "../hooks/useKpIndex";
import { useCmeEvents } from "../hooks/useCmeEvents";
import { getGridRisk } from "../utils/gridRisk";

export default function ElectricGridWatchPage() {
  const { data: kpData, status: kpStatus } = useKpIndex();
  const { data: cmeData, status: cmeStatus } = useCmeEvents();

  const latestKp = kpData && kpData.length > 0 ? kpData[kpData.length - 1].Kp : null;
  const risk = kpStatus === "success" ? getGridRisk(latestKp) : getGridRisk(null);

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Electric Grid Watch</h1>
      <p className="text-slate-500 mt-2">
        For grid operators — know if incoming solar activity could affect the power grid.
      </p>
      <div className="border-b border-slate-200 my-6"></div>

      <div className={`${risk.bg} ${risk.border} border rounded-lg p-5 mb-6`}>
        <p className="text-sm font-medium text-slate-500">Current Grid Risk</p>
        <p className={`text-3xl font-bold mt-1 ${risk.text}`}>{risk.level}</p>
        <p className="text-xs text-slate-500 mt-2">
          Based on the current Kp Index ({kpStatus === "success" ? latestKp : "…"})
        </p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-6">
        <h2 className="text-base font-semibold text-slate-800 mb-2">Why This Matters</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Strong geomagnetic storms can induce unwanted electrical currents in long power lines and
          transformers — called geomagnetically induced currents (GICs). In severe cases, this can
          damage equipment or cause voltage instability. Grid operators use Kp Index and incoming CME
          data to anticipate these conditions and take precautionary measures.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
        <h2 className="text-base font-semibold text-slate-800 mb-1">Recent CME Events</h2>
        <p className="text-xs text-slate-500 mb-4">Last 7 days — check incoming activity</p>
        <CmeTable data={cmeData} status={cmeStatus} />
      </div>
    </>
  );
}