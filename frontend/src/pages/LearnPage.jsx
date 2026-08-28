const topics = [
  {
    title: "The Sun Can Erupt",
    body: "The Sun isn't a quiet ball of fire. Its constantly shifting magnetic fields can suddenly release enormous amounts of energy, producing eruptions such as solar flares and coronal mass ejections (CMEs). A solar flare is a powerful burst of radiation, while a CME is a massive cloud of charged plasma and magnetic fields launched into space. They can happen together, but one does not necessarily mean the other occurred.",
  },
  {
    title: "But Does Every Eruption Threaten Earth?",
    body: "No. Direction matters. An eruption can blast material into space without coming anywhere near Earth. A CME becomes a concern for us when it is directed toward Earth and its magnetic field interacts strongly with Earth's magnetic field. Even then, the severity depends on factors such as the CME's speed, magnetic-field orientation, and the resulting geomagnetic disturbance.",
  },
  {
    title: "What Would We Detect First?",
    body: "If a powerful Earth-directed eruption happened today, one of the first things we'd detect would be the solar flare's electromagnetic radiation. X-rays travel at the speed of light and reach Earth in about 8 minutes. They can disturb the ionosphere and cause radio communication disruptions, particularly on the sunlit side of Earth.\n\nAfter that, extremely energetic particles can arrive in tens of minutes, creating a radiation storm that can be dangerous for astronauts and can damage or disrupt spacecraft electronics.\n\nThe CME itself arrives much later. Depending on its speed, it can take roughly 15 hours to several days, with many CMEs reaching Earth in around 1–3 days. When it arrives, it can compress and disturb Earth's magnetosphere, potentially producing a geomagnetic storm.",
  },
  {
    title: "And That's When the Effects Can Spread",
    body: "A strong geomagnetic storm can produce spectacular auroras, but it can also interfere with satellites, GPS, radio communications, and electrical power systems. Rapid changes in Earth's magnetic field can induce currents in long conductors, including power-transmission networks, potentially placing stress on transformers and contributing to grid instability or outages.",
  },
];

export default function LearnPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Learn</h1>
      <p className="text-slate-500 mt-2">
        Understand the Sun, its storms, and how they affect Earth.
      </p>
      <div className="border-b border-slate-200 my-6"></div>

      <div className="space-y-4">
        {topics.map((topic) => (
          <div key={topic.title} className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">{topic.title}</h2>
            {topic.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-slate-600 leading-relaxed mb-2 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}