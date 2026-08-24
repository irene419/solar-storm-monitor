import DashboardLayout from "./components/layout/DashboardLayout";
import SummaryCard from "./components/SummaryCard";
import { useKpIndex } from "./hooks/useKpIndex";

function App() {
  const { data: kpData, status: kpStatus } = useKpIndex();

  const latestKp = kpData && kpData.length > 0 ? kpData[kpData.length - 1].Kp : null;

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-slate-800">Space Weather Overview</h1>
      <p className="text-slate-500 mt-2 mb-6">Current conditions and recent activity.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          label="Kp Index"
          value={
            kpStatus === "loading" ? "…" : kpStatus === "error" ? "N/A" : latestKp
          }
          unit=""
          description={
            kpStatus === "error" ? "Data currently unavailable" : "Geomagnetic activity level"
          }
        />
        <SummaryCard label="Recent CME Events" value="2" unit="events" description="Last 24 hours" />
        <SummaryCard label="Sunspot Number" value="96.7" unit="" description="Latest observation" />
        <SummaryCard label="Data Status" value="Live" unit="" description="All sources reachable" />
      </div>
    </DashboardLayout>
  );
}

export default App;