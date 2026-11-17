import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Wiki from "./pages/wikipedia/Wiki";
import SingleWiki from "./pages/wikipedia/SingleWiki";
import Campaign from "./pages/Campaign";
import Calendar from "./pages/Calendar";
import Character from "./pages/Character";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/wiki/:slug" element={<SingleWiki />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
