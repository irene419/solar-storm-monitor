import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function KpChart({ data }) {
  if (!data || data.length === 0) return null;

  const chartData = data.map((entry) => ({
    time: new Date(entry.time_tag).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    kp: entry.Kp,
  }));

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800 mb-1">Kp Index History</h2>
      <p className="text-sm text-slate-500 mb-4">Geomagnetic activity over the recent period</p>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="time" tick={{ fontSize: 12 }} interval="preserveStartEnd" />
          <YAxis domain={[0, 9]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="kp" stroke="#2563eb" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}