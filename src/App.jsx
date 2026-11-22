import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Wiki from "./pages/wikipedia/Wiki";
import WikiWorld from "./pages/wikipedia/WikiWorld";
import WikiEntry from "./pages/wikipedia/WikiEntry";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wiki" element={<Wiki />} />
      <Route path="/wiki/:slug" element={<WikiWorld />} />
      <Route path="/wiki/:slug/:entry" element={<WikiEntry />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/campaigns/:slug" element={<SingleCampaign />} />
      <Route path="/campaigns/:slug/sessions" element={<SessionsView />} />
      <Route path="campaigns/:slug/sessions/:slug" element={<SessionEntry />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/character" element={<Character />} />

      <Route path="/" element={<Home />} />
      <Route path="/wiki" element={<Wiki />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/character" element={<Character />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/verify-account" element={<Verification />} />
    </Routes>
  );
}

export default App;
