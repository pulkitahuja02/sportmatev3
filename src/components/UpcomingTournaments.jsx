// src/components/UpcomingTournaments.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const UpcomingTournaments = () => {
  const tournaments = [
    {
      id: 1,
      name: "Local Football League",
      date: "25th October 2023",
      location: "City Sports Complex",
    },
    {
      id: 2,
      name: "Cricket T20 Tournament",
      date: "30th October 2023",
      location: "Central Cricket Ground",
    },
    {
      id: 3,
      name: "Basketball Championship",
      date: "5th November 2023",
      location: "Downtown Arena",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-6">Upcoming Tournaments</h2>
      <div className="space-y-4">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">{tournament.name}</h3>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Date:</span> {tournament.date}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Location:</span> {tournament.location}
            </p>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full flex items-center justify-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
        View All Tournaments <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default UpcomingTournaments;