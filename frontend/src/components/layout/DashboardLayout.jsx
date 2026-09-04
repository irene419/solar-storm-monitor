import { useState } from "react";
import Sidebar from "../Sidebar";

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-slate-900 text-white flex items-center px-4 z-30">
        <button onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
        <span className="ml-3 font-bold">Solar Storm Monitor</span>
      </div>

      {/* Overlay behind sidebar on mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main className="flex-1 p-4 pt-20 md:p-8 md:pt-8 md:ml-64">{children}</main>
    </div>
  );
}