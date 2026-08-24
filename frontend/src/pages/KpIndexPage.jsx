import KpChart from "../components/KpChart";
import { useKpIndex } from "../hooks/useKpIndex";

export default function KpIndexPage() {
  const { data, status } = useKpIndex();

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Kp Index</h1>
      <p className="text-slate-500 mt-2 mb-6">
        The Kp Index measures geomagnetic activity on a scale from 0 to 9.
      </p>
      {status === "loading" && <p className="text-slate-400">Loading…</p>}
      {status === "error" && <p className="text-slate-400">Data currently unavailable.</p>}
      {status === "success" && <KpChart data={data} />}
    </>
  );
}