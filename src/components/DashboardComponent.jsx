import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <h1>dashboard</h1>
      <Link to="/form" className="link">
        Tugas Form
      </Link>
      <br />
      <Link to="/portal-berita" className="link">
        Tugas Portal Berita
      </Link>
    </div>
  );
};

export default DashboardPage;
