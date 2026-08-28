import { useState, useEffect } from "react";
import { apiRequest } from "../api";

export default function MySightingsPage() {
  const [sightings, setSightings] = useState([]);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editNote, setEditNote] = useState("");

  async function loadSightings() {
    try {
      const data = await apiRequest("/sightings");
      setSightings(data.items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSightings();
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    setError("");
    try {
      await apiRequest("/sightings", {
        method: "POST",
        body: JSON.stringify({ date, location, note }),
      });
      setDate("");
      setLocation("");
      setNote("");
      loadSightings();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await apiRequest(`/sightings/${id}`, { method: "DELETE" });
      loadSightings();
    } catch (err) {
      setError(err.message);
    }
  }

  function startEdit(sighting) {
    setEditingId(sighting.id);
    setEditNote(sighting.note || "");
  }

  async function handleSaveEdit(id) {
    try {
      await apiRequest(`/sightings/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ note: editNote }),
      });
      setEditingId(null);
      loadSightings();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">My Sightings</h1>
      <p className="text-slate-500 mt-2">Save the auroras you’ve seen and keep track of your sightings.</p>
      <div className="border-b border-slate-200 my-6"></div>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleCreate} className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-6 space-y-3">
        <div className="flex gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border border-slate-300 rounded-md px-3 py-2 text-sm" required />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-slate-500 mb-1">Location</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="border border-slate-300 rounded-md px-3 py-2 text-sm w-full" placeholder="e.g. Fairbanks, Alaska" required />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Note (optional)</label>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} className="border border-slate-300 rounded-md px-3 py-2 text-sm w-full" rows="2" />
        </div>
        <button type="submit" className="bg-slate-900 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-slate-800">
          Log Sighting
        </button>
      </form>

      <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
        {loading ? (
          <p className="p-5 text-sm text-slate-400">Loading…</p>
        ) : sightings.length === 0 ? (
          <p className="p-5 text-sm text-slate-400">No sightings logged yet.</p>
        ) : (
          sightings.map((s) => (
            <div key={s.id} className="flex justify-between items-start p-4 border-b border-slate-100 last:border-0">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-700">{s.location} — {s.date}</p>
                {editingId === s.id ? (
                  <textarea
                    value={editNote}
                    onChange={(e) => setEditNote(e.target.value)}
                    className="border border-slate-300 rounded-md px-2 py-1 text-xs w-full mt-1"
                    rows="2"
                  />
                ) : (
                  s.note && <p className="text-xs text-slate-500 mt-1">{s.note}</p>
                )}
              </div>

              <div className="flex gap-3 ml-3">
                {editingId === s.id ? (
                  <>
                    <button onClick={() => handleSaveEdit(s.id)} className="text-sm text-green-700 hover:text-green-900">
                      Save
                    </button>
                    <button onClick={() => setEditingId(null)} className="text-sm text-slate-500 hover:text-slate-700">
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(s)} className="text-sm text-slate-600 hover:text-slate-900">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(s.id)} className="text-sm text-red-600 hover:text-red-800">
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}