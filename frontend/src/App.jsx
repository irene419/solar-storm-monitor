import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Overview from "./pages/Overview";
import KpIndexPage from "./pages/KpIndexPage";
import CmeEventsPage from "./pages/CmeEventsPage";
import SunspotActivityPage from "./pages/SunspotActivityPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import LearnPage from "./pages/LearnPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/kp-index" element={<KpIndexPage />} />
        <Route path="/cme-events" element={<CmeEventsPage />} />
        <Route path="/sunspot-activity" element={<SunspotActivityPage />} />
        <Route path="/solar-activity" element={<PlaceholderPage title="Solar Activity" />} />
        <Route path="/alerts" element={<PlaceholderPage title="Alerts" />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;