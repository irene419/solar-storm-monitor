export const kpLevels = [
  { value: 0, label: "Quiet", gScale: null, bg: "bg-green-500", cardBg: "bg-green-50", cardText: "text-green-800" },
  { value: 1, label: "Quiet", gScale: null, bg: "bg-green-500", cardBg: "bg-green-50", cardText: "text-green-800" },
  { value: 2, label: "Unsettled", gScale: null, bg: "bg-green-500", cardBg: "bg-green-50", cardText: "text-green-800" },
  { value: 3, label: "Unsettled", gScale: null, bg: "bg-green-400", cardBg: "bg-green-50", cardText: "text-green-800" },
  { value: 4, label: "Active", gScale: null, bg: "bg-yellow-400", cardBg: "bg-yellow-50", cardText: "text-yellow-800" },
  { value: 5, label: "Minor Storm", gScale: "G1", bg: "bg-orange-400", cardBg: "bg-orange-50", cardText: "text-orange-800" },
  { value: 6, label: "Moderate Storm", gScale: "G2", bg: "bg-orange-500", cardBg: "bg-orange-50", cardText: "text-orange-800" },
  { value: 7, label: "Strong Storm", gScale: "G3", bg: "bg-red-500", cardBg: "bg-red-50", cardText: "text-red-800" },
  { value: 8, label: "Severe Storm", gScale: "G4", bg: "bg-red-600", cardBg: "bg-red-50", cardText: "text-red-800" },
  { value: 9, label: "Extreme Storm", gScale: "G5", bg: "bg-red-700", cardBg: "bg-red-50", cardText: "text-red-800" },
];

export function getKpLevel(kp) {
  if (kp === null || kp === undefined || isNaN(kp)) return null;
  const rounded = Math.min(9, Math.max(0, Math.round(kp)));
  return kpLevels[rounded];
}