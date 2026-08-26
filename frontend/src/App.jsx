import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Overview from "./pages/Overview";
import StormHistoryPage from "./pages/StormHistoryPage";
import AuroraGuidePage from "./pages/AuroraGuidePage";
import ElectricGridWatchPage from "./pages/ElectricGridWatchPage";
import LearnPage from "./pages/LearnPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/storm-history" element={<StormHistoryPage />} />
        <Route path="/aurora-guide" element={<AuroraGuidePage />} />
        <Route path="/electric-grid-watch" element={<ElectricGridWatchPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;