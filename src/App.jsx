import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import Campaign from "./pages/Campaign";
import Calendar from "./pages/Calendar";
import Character from "./pages/Character";

import "./App.css";

function App() {
  return (
    <div className="my-4 mx-4  lg:mx-32 lg:my-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
