export function getGridRisk(kp) {
  if (kp === null || kp === undefined || isNaN(kp)) {
    return { level: "Unknown", bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" };
  }
  if (kp < 4) {
    return { level: "Low", bg: "bg-green-50", text: "text-green-800", border: "border-green-200" };
  }
  if (kp < 6) {
    return { level: "Moderate", bg: "bg-yellow-50", text: "text-yellow-800", border: "border-yellow-200" };
  }
  return { level: "High", bg: "bg-red-50", text: "text-red-800", border: "border-red-200" };
}