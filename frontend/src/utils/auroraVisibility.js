export const auroraVisibility = [
  { range: "Kp 0–2", min: 0, max: 2, description: "Aurora rarely visible outside the far north — Alaska, northern Scandinavia, Iceland" },
  { range: "Kp 3–4", min: 3, max: 4, description: "Visible across northern Canada, Scandinavia, and southern Alaska" },
  { range: "Kp 5 (G1 Storm)", min: 5, max: 5, description: "Reaches the northernmost US states and northern Europe" },
  { range: "Kp 6 (G2 Storm)", min: 6, max: 6, description: "Visible further south — parts of the northern-tier US and central Europe" },
  { range: "Kp 7 (G3 Storm)", min: 7, max: 7, description: "Can reach mid-latitude states and the UK" },
  { range: "Kp 8–9 (G4–G5 Extreme)", min: 8, max: 9, description: "Aurora can become visible at many mid-latitude locations worldwide" },
];

export function getAuroraRangeIndex(kp) {
  if (kp === null || kp === undefined || isNaN(kp)) return null;
  const rounded = Math.min(9, Math.max(0, Math.round(kp)));
  return auroraVisibility.findIndex((row) => rounded >= row.min && rounded <= row.max);
}