import CmeTable from "../components/CmeTable";
import { useCmeEvents } from "../hooks/useCmeEvents";

export default function CmeEventsPage() {
  const { data, status } = useCmeEvents();

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">CME Events</h1>
      <p className="text-slate-500 mt-2 mb-6">
        Coronal Mass Ejections observed in the last 7 days.
      </p>
      <CmeTable data={data} status={status} />
    </>
  );
}