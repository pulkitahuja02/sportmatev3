import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Profile icon ke liye

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Navbar */}
      <nav className="bg-white p-6 shadow-md"> {/* Padding increase kiya hai (p-6) */}
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: SportMate (Green Color) */}
          <h1 className="text-4xl font-bold text-green-600">SportMate</h1> {/* text-4xl se bada heading */}

          {/* Mid: Links */}
          <div className="flex space-x-12"> {/* Space increase kiya hai (space-x-12) */}
            <a href="/game-buddies" className="text-xl text-gray-700 hover:text-green-600">Game Buddies</a> {/* text-xl se bada */}
            <a href="/tournaments" className="text-xl text-gray-700 hover:text-green-600">Tournaments</a>
            <a href="/leaderboard" className="text-xl text-gray-700 hover:text-green-600">Leaderboard</a>
            <a href="/community" className="text-xl text-gray-700 hover:text-green-600">Community</a>
          </div>

          {/* Right: Profile Icon */}
          <div className="text-gray-700 hover:text-green-600">
            <FaUserCircle className="text-4xl" /> {/* text-4xl se bada icon */}
          </div>
        </div>
      </nav>

      {/* Baaki Page Empty Hai */}
      <div className="p-6">
        {/* Yahan baaki content add karna hai */}
      </div>
    </div>
  );
};

export default DashboardPage;
