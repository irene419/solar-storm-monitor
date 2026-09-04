const messages = {
  0: { headline: "Calm conditions", detail: "No measurable risk to grid operations." },
  1: { headline: "Calm conditions", detail: "No measurable risk to grid operations." },
  2: { headline: "Calm conditions", detail: "No measurable risk to grid operations." },
  3: { headline: "Calm conditions", detail: "No measurable risk to grid operations." },
  4: { headline: "Active conditions", detail: "Minor fluctuations are possible; typically no operational impact." },
  5: { headline: "Minor geomagnetic storm (G1)", detail: "Weak power grid fluctuations can occur, with low likelihood of real operational impact." },
  6: { headline: "Moderate geomagnetic storm (G2)", detail: "High-latitude power systems may see voltage alarms, and prolonged exposure can strain transformers." },
  7: { headline: "Strong geomagnetic storm (G3)", detail: "Voltage irregularities are possible, and protective devices may false-trigger." },
  8: { headline: "Severe geomagnetic storm (G4)", detail: "Widespread voltage control problems are possible, and some protective systems may mistakenly disconnect grid elements." },
  9: { headline: "Extreme geomagnetic storm (G5)", detail: "Widespread voltage problems and protective trips are possible; some grids may see transformer damage or full collapse." },
};

export function getGridImpact(kp) {
  if (kp === null || kp === undefined || isNaN(kp)) {
    return { headline: "Conditions unknown", detail: "Live data is currently unavailable." };
  }
  const rounded = Math.min(9, Math.max(0, Math.round(kp)));
  return messages[rounded];
}