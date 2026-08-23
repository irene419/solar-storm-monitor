import DashboardLayout from "./components/layout/DashboardLayout";

function App() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-slate-800">Space Weather Overview</h1>
      <p className="text-slate-500 mt-2">Current conditions and recent activity.</p>
    </DashboardLayout>
  );
}

export default App;