import { useState, useEffect } from "react";
import { useKpIndex } from "../hooks/useKpIndex";
import { useSolarWind } from "../hooks/useSolarWind";
import { useMagField } from "../hooks/useMagField";
import { getKpLevel } from "../utils/kpLevels";
import { getGridImpact } from "../utils/gridImpact";
import KpActivityChart from "../components/KpActivityChart";
import MetricCard from "../components/MetricCard";
import { apiRequest } from "../api";

export default function ElectricGridWatchPage() {
  const { data: kpData, status: kpStatus } = useKpIndex();
  const { data: windData, status: windStatus } = useSolarWind();
  const { data: magData, status: magStatus } = useMagField();

  const [myAlerts, setMyAlerts] = useState([]);
  const [alertsLoaded, setAlertsLoaded] = useState(false);

  const latestKp = kpData && kpData.length > 0 ? kpData[kpData.length - 1].Kp : null;
  const kpLevel = kpStatus === "success" ? getKpLevel(latestKp) : null;
  const impact = getGridImpact(kpStatus === "success" ? latestKp : null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAlertsLoaded(true);
      return;
    }
    apiRequest("/alert-rules")
      .then((data) => setMyAlerts(data.items))
      .catch(() => setMyAlerts([]))
      .finally(() => setAlertsLoaded(true));
  }, []);

  const triggeredAlerts =
    kpStatus === "success"
      ? myAlerts.filter((a) => a.metric === "Kp Index" && latestKp >= a.threshold_value)
      : [];

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Electric Grid Watch</h1>
      <p className="text-slate-500 mt-2">
        For grid operators. Know if incoming solar activity could affect the power grid.
      </p>
      <p className="text-slate-600 mt-3 max-w-3xl leading-relaxed">
        Earth in the 21st century is covered in millions of kilometres of wire transporting
        electricity and a complex grid of machine-like transformers. Strong geomagnetic storms can induce unwanted electrical currents in long power lines and transformers called geomagnetically induced currents (GICs). In severe cases, this can damage equipment or cause voltage instability. Grid operators use Kp Index data to anticipate these conditions and take precautionary measures.
      </p>
      <div className="border-b border-slate-200 my-6"></div>

      <div className={`${kpLevel ? kpLevel.cardBg : "bg-slate-50"} rounded-lg border border-slate-200 p-5`}>
        <p className="text-sm font-medium text-slate-500">Current Grid Risk</p>
        <div className="flex items-baseline gap-3 mt-1">
          <p className={`text-3xl font-bold ${kpLevel ? kpLevel.cardText : "text-slate-800"}`}>
            {kpStatus === "loading" ? "…" : kpStatus === "error" ? "N/A" : latestKp}
          </p>
          {kpLevel?.gScale && (
            <span className={`text-sm font-semibold px-2 py-0.5 rounded ${kpLevel.cardText} bg-white border border-current`}>
              {kpLevel.gScale}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-600 mt-2">
          {kpStatus === "error" ? "Data currently unavailable" : impact.headline}
        </p>
      </div>

      <div className="mt-6">
        {kpStatus === "success" && <KpActivityChart data={kpData} />}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <MetricCard label="Solar Wind Speed" value={windData?.speed?.toFixed(0)} unit="km/s" status={windStatus} />
        <MetricCard label="Bz (IMF)" value={magData?.bz?.toFixed(1)} unit="nT" status={magStatus} />
        <MetricCard label="Magnetic Field (Bt)" value={magData?.bt?.toFixed(1)} unit="nT" status={magStatus} />
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mt-6">
        <h2 className="text-base font-semibold text-slate-800 mb-2">What This Means for the Grid</h2>
        <p className="text-sm text-slate-600 leading-relaxed">{impact.detail}</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mt-6">
        <h2 className="text-base font-semibold text-slate-800 mb-2">Active Alerts</h2>
        {!localStorage.getItem("token") ? (
          <p className="text-sm text-slate-500">
            Log in to set a custom Kp threshold and see if it's been crossed.
          </p>
        ) : !alertsLoaded ? (
          <p className="text-sm text-slate-400">Checking your saved alerts…</p>
        ) : triggeredAlerts.length === 0 ? (
          <p className="text-sm text-slate-500">No active alerts right now.</p>
        ) : (
          <div className="space-y-2">
            {triggeredAlerts.map((a) => (
              <div key={a.id} className="text-sm bg-red-50 text-red-700 border border-red-200 rounded-md px-3 py-2">
                Your alert for <strong>{a.metric} ≥ {a.threshold_value}</strong> has been triggered.
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}