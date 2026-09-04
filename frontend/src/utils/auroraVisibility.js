export const auroraVisibility = [
  { range: "Kp 0–2", min: 0, max: 2, description: "Aurora is rarely visible outside the far north, in places like Alaska, northern Scandinavia, and Iceland." },
  { range: "Kp 3–4", min: 3, max: 4, description: "You can start seeing it across northern Canada, Scandinavia, and southern Alaska." },
  { range: "Kp 5 (G1 Storm)", min: 5, max: 5, description: "It now reaches the northernmost US states and northern Europe." },
  { range: "Kp 6 (G2 Storm)", min: 6, max: 6, description: "Visibility pushes further south, into parts of the northern-tier US and central Europe." },
  { range: "Kp 7 (G3 Storm)", min: 7, max: 7, description: "Mid-latitude states and the UK can now catch a glimpse." },
  { range: "Kp 8–9 (G4–G5 Extreme)", min: 8, max: 9, description: "Aurora becomes visible across many mid-latitude locations worldwide." },
];

export function getAuroraRangeIndex(kp) {
  if (kp === null || kp === undefined || isNaN(kp)) return null;
  const rounded = Math.min(9, Math.max(0, Math.round(kp)));
  return auroraVisibility.findIndex((row) => rounded >= row.min && rounded <= row.max);
}