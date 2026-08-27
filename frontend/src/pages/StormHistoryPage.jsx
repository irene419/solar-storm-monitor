const events = [
  {
    date: "September 1859",
    title: "The Carrington Event",
    description:
      "The strongest geomagnetic storm ever recorded. Telegraph systems worldwide sparked, shocked operators, and some offices caught fire — even after telegraph wires were disconnected from their power supplies.",
  },
  {
    date: "March 1989",
    title: "Quebec Blackout",
    description:
      "A severe geomagnetic storm induced currents that collapsed Quebec's entire power grid within 90 seconds, leaving about 6 million people without electricity for roughly 9 hours.",
  },
  {
    date: "October 2003",
    title: "Halloween Storms",
    description:
      "A series of powerful storms disrupted satellites and GPS signals worldwide and caused a power outage in parts of Sweden — among the strongest storms of the modern satellite era.",
  },
  {
    date: "July 2012",
    title: "The Near-Miss Superstorm",
    description:
      "One of the fastest CMEs ever recorded narrowly missed Earth by about a week. It struck NASA's STEREO-A spacecraft instead, giving scientists the only direct measurements ever taken from inside a storm of that intensity. Researchers estimate a direct hit would have rivaled the Carrington Event.",
  },
  {
    date: "February 2022",
    title: "Starlink Satellite Loss",
    description:
      "A moderate geomagnetic storm heated and expanded Earth's upper atmosphere, increasing drag on 49 newly launched SpaceX Starlink satellites. 38 of them lost altitude and burned up in the atmosphere — notable because it took only a moderate storm to cause this much loss.",
  },
];

export default function StormHistoryPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Storm History</h1>
      <p className="text-slate-500 mt-2">
        Solar storms have shaped history more than most people realize.
      </p>
      <div className="border-b border-slate-200 my-6"></div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.title} className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{event.date}</p>
            <h2 className="text-lg font-semibold text-slate-800 mt-1 mb-2">{event.title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{event.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}