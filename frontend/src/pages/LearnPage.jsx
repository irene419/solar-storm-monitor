const topics = [
  {
    title: "What Is a Sunspot?",
    body: "Sunspots are darker, cooler patches on the Sun's surface caused by tangled magnetic field lines. More sunspots generally means the Sun is more magnetically active, which makes flares and CMEs more likely.",
  },
  {
    title: "What Is a Solar Flare?",
    body: "A solar flare is a sudden, intense burst of radiation released from the Sun's surface — essentially a giant explosion of energy. Flares travel at the speed of light and can reach Earth in about 8 minutes, causing brief radio blackouts and interference.",
  },
  {
    title: "What Is a Coronal Mass Ejection (CME)?",
    body: "A CME is a massive cloud of plasma and magnetic field physically ejected from the Sun's outer atmosphere. Unlike a flare's burst of light, a CME is actual matter traveling through space — it can take 1 to 3 days to reach Earth, and only causes effects here if it's aimed in our direction.",
  },
  {
    title: "What Is a Geomagnetic Storm?",
    body: "When a CME reaches Earth, it can disturb our planet's magnetic field — this disturbance is called a geomagnetic storm. The Kp Index measures how strong this disturbance is, on a scale from 0 (quiet) to 9 (extreme).",
  },
  {
    title: "How Do Solar Storms Cause Auroras?",
    body: "Geomagnetic storms funnel charged particles toward Earth's poles, where they collide with gases in our atmosphere and release light — this is the aurora (Northern and Southern Lights). Stronger storms push the aurora visible further from the poles.",
  },
  {
    title: "How Do Solar Storms Affect Earth's Technology?",
    body: "Even though solar storms don't harm people directly, they can disrupt the technology we depend on: inducing damaging currents in power grids, degrading GPS accuracy, disturbing radio communication, increasing drag on satellites, and exposing astronauts and high-altitude flights to extra radiation.",
  },
];

export default function LearnPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Learn</h1>
      <p className="text-slate-500 mt-2">
        A plain-language explainer for how solar storms form and why they matter.
      </p>
      <div className="border-b border-slate-200 my-6"></div>

      <div className="space-y-4">
        {topics.map((topic) => (
          <div key={topic.title} className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">{topic.title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{topic.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}