import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function KpActivityChart({ data }) {
  if (!data || data.length === 0) return null;

  const last24h = data.slice(-8).map((entry) => ({
    time: new Date(entry.time_tag).toLocaleTimeString("en-US", { hour: "2-digit", hour12: false }),
    kp: entry.Kp,
  }));

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
      <h2 className="text-base font-semibold text-slate-800 mb-1">Kp Activity.Last 24 Hours</h2>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={last24h}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="time" tick={{ fontSize: 11 }} />
          <YAxis domain={[0, 9]} tick={{ fontSize: 11 }} />
          <Tooltip />
          <Line type="monotone" dataKey="kp" stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}