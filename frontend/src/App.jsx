import DashboardLayout from "./components/layout/DashboardLayout";
import SummaryCard from "./components/SummaryCard";
import { useKpIndex } from "./hooks/useKpIndex";
import { useCmeEvents } from "./hooks/useCmeEvents";


function App() {
  const { data: kpData, status: kpStatus } = useKpIndex();
  const { data: cmeData, status: cmeStatus } = useCmeEvents();

  const latestKp = kpData && kpData.length > 0 ? kpData[kpData.length - 1].Kp : null;

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-slate-800">Space Weather Overview</h1>
      <p className="text-slate-500 mt-2 mb-6">Current conditions and recent activity.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          label="Recent CME Events"
          value={
            cmeStatus === "loading" ? "…" : cmeStatus === "error" ? "N/A" : cmeData.length
          }
          unit="events"
          description={
            cmeStatus === "error" ? "Data currently unavailable" : "Last 7 days"
          }
        />
        <SummaryCard label="Sunspot Number" value="96.7" unit="" description="Latest observation" />
        <SummaryCard label="Data Status" value="Live" unit="" description="All sources reachable" />
      </div>
    </DashboardLayout>
  );
}

export default App;