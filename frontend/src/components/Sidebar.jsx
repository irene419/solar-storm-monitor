export default function Sidebar() {
  const navItems = [
    "Overview",
    "Kp Index",
    "CME Events",
    "Sunspot Activity",
    "Solar Activity",
    "Alerts",
    "About",
  ];

  return (
    <aside className="w-64 h-screen bg-slate-900 text-slate-100 flex flex-col p-4 fixed left-0 top-0">
      <h1 className="text-xl font-bold mb-8 px-2">Solar Storm Monitor</h1>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <a key={item} href="#" className="px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm font-medium">
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}