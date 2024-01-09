import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/form" className="link">
        Tugas Form Registrasi
      </Link>
      <br />
      <Link to="/portal-berita" className="link">
        Tugas Portal Berita
      </Link>
    </div>
  );
};

export default Dashboard;
