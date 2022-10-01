import React from "react";
import Dashboard3 from "./DashboardComponents/Dashboar3";
import Navbar from "./DashboardComponents/Navbar";
import Sidebar from "./DashboardComponents/Sidebar";
import Footer from "./DashboardComponents/footer";

function UserDash() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <Dashboard3 />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default UserDash;
