import { useKpIndex } from "../hooks/useKpIndex";
import { getGridRisk } from "../utils/gridRisk";

export default function ElectricGridWatchPage() {
  const { data: kpData, status: kpStatus } = useKpIndex();

  const latestKp = kpData && kpData.length > 0 ? kpData[kpData.length - 1].Kp : null;
  const risk = kpStatus === "success" ? getGridRisk(latestKp) : getGridRisk(null);

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Electric Grid Watch</h1>
      <p className="text-slate-500 mt-2">
        For grid operators. Know if incoming solar activity could affect the power grid.
      </p>
      <p className="text-slate-600 mt-3 max-w-3xl leading-relaxed">
        Earth in the 21st century is covered in millions of kilometres of wire transporting
        electricity and a complex grid of machine-like transformers. Our dependence on
        electricity from hospitals and communication systems to homes, businesses,
        transportation, and the technology we use every day makes the stability of the power
        grid critical.
      </p>
      <div className="border-b border-slate-200 my-6"></div>

      <div className={`${risk.bg} ${risk.border} border rounded-lg p-5`}>
        <p className="text-sm font-medium text-slate-500">Current Grid Risk</p>
        <p className={`text-3xl font-bold mt-1 ${risk.text}`}>{risk.level}</p>
        <p className="text-xs text-slate-500 mt-2">
          Based on the current Kp Index ({kpStatus === "success" ? latestKp : "…"})
        </p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mt-6">
        <h2 className="text-base font-semibold text-slate-800 mb-2">Why This Matters</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Strong geomagnetic storms can induce unwanted electrical currents in long power lines and
          transformers called geomagnetically induced currents (GICs). In severe cases, this can
          damage equipment or cause voltage instability. Grid operators use Kp Index data to
          anticipate these conditions and take precautionary measures.
        </p>
      </div>
    </>
  );
}