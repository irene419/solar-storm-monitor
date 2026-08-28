import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("userEmail");

  const navItems = [
    { label: "Overview", path: "/" },
    { label: "Electric Grid Watch", path: "/electric-grid-watch" },
    { label: "Aurora Guide", path: "/aurora-guide" },
    { label: "Storm History", path: "/storm-history" },
    { label: "Learn", path: "/learn" },
  ];

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    navigate("/login");
  }

  return (
    <aside className="w-64 h-screen bg-slate-900 text-slate-100 flex flex-col p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 px-2 mb-4">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M13 2 L4 14 L11 14 L10 22 L20 9 L12 9 Z" />
        </svg>
        <h1 className="text-xl font-bold">Solar Storm Monitor</h1>
      </div>
      <div className="border-b border-slate-700 mb-6"></div>
      <nav className="flex flex-col gap-1 flex-1">
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
        {token && (
          <>
            <div className="border-b border-slate-700 my-2"></div>
            <NavLink
              to="/my-alerts"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                  isActive ? "bg-slate-800 text-white" : "hover:bg-slate-800"
                }`
              }
            >
              My Alerts
            </NavLink>
            <NavLink
              to="/my-sightings"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                  isActive ? "bg-slate-800 text-white" : "hover:bg-slate-800"
                }`
              }
            >
              My Sightings
            </NavLink>
          </>
        )}
      </nav>

      <div className="border-t border-slate-700 pt-3">
        {token ? (
          <div className="px-2">
            <p className="text-xs text-slate-400 mb-2 truncate">{userEmail}</p>
            <button
              onClick={handleLogout}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Log Out
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800"
          >
            Log In
          </NavLink>
        )}
      </div>
    </aside>
  );
}