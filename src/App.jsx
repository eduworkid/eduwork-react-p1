import Register from "./components/Register";
import PortalBerita from "./components/PortalBerita";
import Dashboard from "./components/dashboard";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<Register />} />
        <Route path="/portal-berita" element={<PortalBerita />} />
      </Routes>
    </div>
  );
}

export default App;
