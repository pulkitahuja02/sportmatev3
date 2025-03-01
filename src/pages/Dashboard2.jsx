// src/pages/DashboardPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import UpcomingTournaments from "../components/UpcomingTournaments";
const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <Carousel />
      <UpcomingTournaments />
      {/* Baaki Page Empty Hai */}
      <div className="p-6">
        {/* Yahan baaki content add karna hai */}
      </div>
      
    </div>
  );
};

export default DashboardPage;