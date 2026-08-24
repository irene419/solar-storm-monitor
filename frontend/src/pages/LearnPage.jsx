const topics = [
  {
    title: "Kp Index",
    body: "The Kp Index measures geomagnetic activity — how much Earth's magnetic field is being disturbed by solar activity. It's scored 0 to 9: 0-2 is quiet, 3-4 is unsettled, and 5+ signals a geomagnetic storm strong enough to affect power grids, satellites, and GPS signals.",
  },
  {
    title: "Coronal Mass Ejections (CMEs)",
    body: "A CME is a massive burst of plasma and magnetic field ejected from the Sun's outer atmosphere. When a CME is aimed at Earth, it can take 1-3 days to arrive and, on impact, can trigger geomagnetic storms — the same activity that causes auroras and, in severe cases, power outages.",
  },
  {
    title: "Sunspots",
    body: "Sunspots are darker, cooler regions on the Sun's surface caused by intense magnetic activity. More sunspots generally means the Sun is more active, which means more solar flares and CMEs are likely. Sunspot counts follow an 11-year cycle of rising and falling activity.",
  },
  {
    title: "Why does this matter?",
    body: "Strong solar activity can disrupt power grids (through geomagnetically induced currents), damage satellites, degrade GPS accuracy, and increase radiation exposure for astronauts and high-altitude flights. Most events are minor, but tracking this data helps forecasters give advance warning before major storms.",
  },
];

export default function LearnPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Learn</h1>
      <p className="text-slate-500 mt-2 mb-6">
        A quick primer on the terms used throughout this dashboard.
      </p>
      <div className="space-y-4">
        {topics.map((topic) => (
          <div
            key={topic.title}
            className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-800 mb-2">{topic.title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{topic.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}