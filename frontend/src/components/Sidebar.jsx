import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { label: "Overview", path: "/" },
    { label: "Storm History", path: "/storm-history" },
    { label: "Aurora Guide", path: "/aurora-guide" },
    { label: "Electric Grid Watch", path: "/electric-grid-watch" },
    { label: "Learn", path: "/learn" },
    { label: "Log In", path: "/login" },
  ];

  return (
    <aside className="w-64 h-screen bg-slate-900 text-slate-100 flex flex-col p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 px-2 mb-4">
        <svg width="24" height="24" viewBox="0 0 32 32">
          <defs>
            <radialGradient id="sunGradient" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="60%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ea580c" />
            </radialGradient>
          </defs>
          <circle cx="14" cy="16" r="9" fill="url(#sunGradient)" />
          <path d="M21 12 L29 6 L25 14 L30 15 L22 21 Z" fill="#fbbf24" opacity="0.9" />
        </svg>
        <h1 className="text-xl font-bold">Solar Storm Monitor</h1>
      </div>
      <div className="border-b border-slate-700 mb-6"></div>
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