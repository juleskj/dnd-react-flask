import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import Campaign from "./pages/Campaign";
import Calendar from "./pages/Calendar";
import Character from "./pages/Character";
import Login from "./pages/Login";
import Signup from "./pages/Wiki";

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
    </Routes>
  );
}

export default App;
