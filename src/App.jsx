import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Wiki from "./pages/wikipedia/Wiki";
import WikiWorld from "./pages/wikipedia/WikiWorld";
import WikiEntry from "./pages/wikipedia/WikiEntry";
import Campaign from "./pages/Campaign";
import Calendar from "./pages/Calendar";
import Character from "./pages/Character";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/wiki/:slug" element={<WikiWorld />} />
        <Route path="/wiki/:slug/:entry" element={<WikiEntry />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </>
  );
}

export default App;
