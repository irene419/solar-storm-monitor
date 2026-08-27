import { useState, useEffect } from "react";
import { apiRequest } from "../api";

export default function MyAlertsPage() {
  const [alerts, setAlerts] = useState([]);
  const [metric, setMetric] = useState("Kp Index");
  const [threshold, setThreshold] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadAlerts() {
    try {
      const data = await apiRequest("/alert-rules");
      setAlerts(data.items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAlerts();
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    setError("");
    try {
      await apiRequest("/alert-rules", {
        method: "POST",
        body: JSON.stringify({ metric, threshold_value: parseFloat(threshold) }),
      });
      setThreshold("");
      loadAlerts();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await apiRequest(`/alert-rules/${id}`, { method: "DELETE" });
      loadAlerts();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">My Alerts</h1>
      <p className="text-slate-500 mt-2">Set custom thresholds you want to be notified about.</p>
      <div className="border-b border-slate-200 my-6"></div>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleCreate} className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-6 flex gap-3 items-end">
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Metric</label>
          <select value={metric} onChange={(e) => setMetric(e.target.value)} className="border border-slate-300 rounded-md px-3 py-2 text-sm">
            <option>Kp Index</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Threshold</label>
          <input
            type="number"
            step="0.1"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 text-sm w-32"
            placeholder="e.g. 5"
            required
          />
        </div>
        <button type="submit" className="bg-slate-900 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-slate-800">
          Add Alert
        </button>
      </form>

      <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
        {loading ? (
          <p className="p-5 text-sm text-slate-400">Loading…</p>
        ) : alerts.length === 0 ? (
          <p className="p-5 text-sm text-slate-400">No alerts saved yet.</p>
        ) : (
          alerts.map((alert) => (
            <div key={alert.id} className="flex justify-between items-center p-4 border-b border-slate-100 last:border-0">
              <span className="text-sm text-slate-700">
                Notify me when <strong>{alert.metric}</strong> crosses <strong>{alert.threshold_value}</strong>
              </span>
              <button onClick={() => handleDelete(alert.id)} className="text-sm text-red-600 hover:text-red-800">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}