import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import Campaign from "./pages/Campaign";
import Calendar from "./pages/Calendar";
import Character from "./pages/Character";
import Login from "./pages/Login";
import Signup from "./pages/Wiki";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import Verification from "./pages/Verification";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wiki" element={<Wiki />} />
      <Route path="/campaign" element={<Campaign />} />
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
