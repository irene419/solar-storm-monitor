import SummaryCard from "../components/SummaryCard";
import { useSunspotNumber } from "../hooks/useSunspotNumber";

export default function SunspotActivityPage() {
  const { data, status } = useSunspotNumber();

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Sunspot Activity</h1>
      <p className="text-slate-500 mt-2 mb-6">Latest observed sunspot number from SILSO.</p>
      <SummaryCard
        label="Sunspot Number"
        value={status === "loading" ? "…" : status === "error" ? "N/A" : data}
        unit=""
        description={status === "error" ? "Requires backend proxy (CORS)" : "Latest observation"}
      />
    </>
  );
}