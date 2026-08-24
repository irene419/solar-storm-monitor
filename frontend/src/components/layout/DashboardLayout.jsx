import Sidebar from "../Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="ml-64 flex-1 p-8">
        {children}
        <footer className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-400">
          Data sources: NOAA SWPC, NASA DONKI, SILSO. Not for operational use.
        </footer>
      </main>
    </div>
  );
}