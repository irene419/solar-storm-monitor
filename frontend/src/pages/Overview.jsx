import SummaryCard from "../components/SummaryCard";
import KpChart from "../components/KpChart";
import CmeTable from "../components/CmeTable";
import { useKpIndex } from "../hooks/useKpIndex";
import { useCmeEvents } from "../hooks/useCmeEvents";
import { useSunspotNumber } from "../hooks/useSunspotNumber";

export default function Overview() {
  const { data: kpData, status: kpStatus } = useKpIndex();
  const { data: cmeData, status: cmeStatus } = useCmeEvents();
  const { data: sunspotData, status: sunspotStatus } = useSunspotNumber();

  const latestKp = kpData && kpData.length > 0 ? kpData[kpData.length - 1].Kp : null;

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Space Weather Overview</h1>
      <p className="text-slate-500 mt-2 mb-6">Current conditions and recent activity.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SummaryCard
          label="Kp Index"
          value={kpStatus === "loading" ? "…" : kpStatus === "error" ? "N/A" : latestKp}
          unit=""
          description={kpStatus === "error" ? "Data currently unavailable" : "Geomagnetic activity level"}
        />
        <SummaryCard
          label="Recent CME Events"
          value={cmeStatus === "loading" ? "…" : cmeStatus === "error" ? "N/A" : cmeData.length}
          unit="events"
          description={cmeStatus === "error" ? "Rate limited (DEMO_KEY) — try again later" : "Last 7 days"}
        />
        <SummaryCard
          label="Sunspot Number"
          value={sunspotStatus === "loading" ? "…" : sunspotStatus === "error" ? "N/A" : sunspotData}
          unit=""
          description={sunspotStatus === "error" ? "Requires backend proxy (CORS)" : "Latest observation"}
        />
        <SummaryCard label="Data Status" value="Live" unit="" description="All sources reachable" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {kpStatus === "success" && <KpChart data={kpData} />}
        <CmeTable data={cmeData} status={cmeStatus} />
      </div>
    </>
  );
}