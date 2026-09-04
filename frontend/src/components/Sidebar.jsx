import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar({ mobileOpen, onClose }) {
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
    onClose();
  }

  return (
    <aside
      className={`w-64 h-screen bg-slate-900 text-slate-100 flex flex-col p-4 fixed top-0 left-0 z-50 transform transition-transform duration-200 md:translate-x-0 ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 px-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M13 2 L4 14 L11 14 L10 22 L20 9 L12 9 Z" />
          </svg>
          <h1 className="text-xl font-bold">Solar Storm Monitor</h1>
        </div>
        <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white" aria-label="Close menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="border-b border-slate-700 mb-6"></div>
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
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
              onClick={onClose}
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
              onClick={onClose}
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
            <button onClick={handleLogout} className="text-sm text-slate-300 hover:text-white transition-colors">
              Log Out
            </button>
          </div>
        ) : (
          <NavLink to="/login" onClick={onClose} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800">
            Log In
          </NavLink>
        )}
      </div>
    </aside>
  );
}