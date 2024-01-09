import Register from "./components/Register";
import PortalBerita from "./components/PortalBerita";
import DashboardPage from "./components/DashboardComponent";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/form" element={<Register />} />
        <Route path="/portal-berita" element={<PortalBerita />} />
      </Routes>
    </div>
  );
}

export default App;
