// src/pages/DashboardPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import UpcomingTournaments from "../components/UpcomingTournaments"; // Import the new component

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <Carousel />

      {/* Main Content */}
      <UpcomingTournaments />
    </div>
  );
};

export default DashboardPage;