import { TopNav } from "./components/TopNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardFeed from "./components/DashboardFeed";
import MembersList from "./components/MembersList";
import SettingsLayout from "./components/SettingsLayout";

export function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<DashboardFeed />} />
        <Route path="/members" element={<MembersList />} />
        <Route path="/settings" element={<SettingsLayout />} />
      </Routes>
    </Router>
  );
}
