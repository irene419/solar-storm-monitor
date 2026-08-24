import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { label: "Overview", path: "/" },
    { label: "Kp Index", path: "/kp-index" },
    { label: "CME Events", path: "/cme-events" },
    { label: "Sunspot Activity", path: "/sunspot-activity" },
    { label: "Solar Activity", path: "/solar-activity" },
    { label: "Alerts", path: "/alerts" },
    { label: "About", path: "/about" },
  ];

  return (
    <aside className="w-64 h-screen bg-slate-900 text-slate-100 flex flex-col p-4 fixed left-0 top-0">
      <h1 className="text-xl font-bold mb-8 px-2">Solar Storm Monitor</h1>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                isActive ? "bg-slate-800 text-white" : "hover:bg-slate-800"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}