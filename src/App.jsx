import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Wiki from "./pages/wikipedia/Wiki";
import WikiWorld from "./pages/wikipedia/WikiWorld";
import WikiEntry from "./pages/wikipedia/WikiEntry";
import WikiCreateEntry from "./pages/wikipedia/WikiCreateEntry";

import Campaigns from "./pages/campaigns/CampaignsView";
import Calendar from "./pages/Calendar";
import Character from "./pages/Character";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import Verification from "./pages/Verification";
import SingleCampaign from "./pages/campaigns/SingleCampaign";
import SessionEntry from "./pages/sessions/SessionEntry";
import SessionsView from "./pages/sessions/SessionsView";
import "./App.css";
import NewSession from "./pages/sessions/NewSession";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminPage from "./pages/admin/AdminPage";

function App() {
  return (
    <Routes>
      {/* wiki pages */}
      <Route path="/wiki" element={<Wiki />} />
      <Route path="/wiki/:slug" element={<WikiWorld />} />
      <Route path="/wiki/:slug/new-entry" element={<WikiCreateEntry />} />
      <Route path="/wiki/:slug/:entry" element={<WikiEntry />} />

      {/* main navigation pages */}
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/character" element={<Character />} />

      {/* sing up and login pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/verify-account" element={<Verification />} />

      {/* campaign pages */}
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/campaigns/:slug" element={<SingleCampaign />} />
      <Route path="/campaigns/:slug/sessions" element={<SessionsView />} />
      <Route path="/campaigns/:slug/sessions/new-session" element={<NewSession />} />
      <Route path="/campaigns/:campaignSlug/sessions/:sessionSlug" element={<SessionEntry />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/character" element={<Character />} />

      {/* admin login */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
