import Register from "./components/Form/Register";
import PortalBerita from "./components/Hooks/PortalBerita";
import DashboardPage from "./components/DashboardComponent";
import Contack from "./components/Router/Contack";
import About from "./components/Router/About";
import { Route, Routes } from "react-router-dom";
import Redux from "./components/Redux";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/form" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contack" element={<Contack />} />
        <Route path="/portal-berita" element={<PortalBerita />} />
        <Route path="/tugas-redux" element={<Redux />} />
      </Routes>
    </div>
  );
}

export default App;
