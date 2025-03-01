import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import UpcomingTournaments from "../components/UpcomingTournaments";
import Component2 from "../components/Component2"; // Import Component2

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <Carousel />

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Tournaments */}
          <UpcomingTournaments />

          {/* Component 2 */}
          <Component2 />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;