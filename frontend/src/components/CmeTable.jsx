export default function CmeTable({ data, status }) {
  if (status === "loading") {
    return <p className="text-sm text-slate-400">Loading events…</p>;
  }
  if (status === "error") {
    return <p className="text-sm text-slate-400">Data currently unavailable (rate limited).</p>;
  }
  if (!data || data.length === 0) {
    return <p className="text-sm text-slate-400">No events found for this period.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500 border-b border-slate-200">
            <th className="pb-2 pr-4 font-medium">Start Time</th>
            <th className="pb-2 pr-4 font-medium">Speed</th>
            <th className="pb-2 font-medium">Instrument</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((event) => {
            const analysis = event.cmeAnalyses?.[0];
            const instrument = event.instruments?.[0]?.displayName || "Unknown";
            return (
              <tr key={event.activityID} className="border-b border-slate-100 last:border-0">
                <td className="py-2 pr-4 text-slate-700">{new Date(event.startTime).toLocaleString()}</td>
                <td className="py-2 pr-4 text-slate-700">{analysis ? `${analysis.speed} km/s` : "N/A"}</td>
                <td className="py-2 text-slate-500">{instrument}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}