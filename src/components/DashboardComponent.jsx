import React from "react";
import { Link } from "react-router-dom";
import NavbarBerita from "./Router/Navbar";
const DashboardPage = () => {
  return (
    <div>
      <NavbarBerita />
      <h1>dashboard</h1>
      <Link to="/form" className="link">
        Tugas Form
      </Link>
      <br />
      <Link to="/portal-berita" className="link">
        Tugas Portal Berita
      </Link>
      <br />
      <Link to="/tugas-redux" className="link">
        tugas redux
      </Link>
    </div>
  );
};

export default DashboardPage;
