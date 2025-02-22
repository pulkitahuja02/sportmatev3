import React, { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa"; // Icons ke liye

const DashboardPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu open/close ke liye state

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Navbar */}
      <nav className="bg-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: SportMate (Green Color) */}
          <h1 className="text-4xl font-bold text-green-600">SportMate</h1>

          {/* Mid: Links (Desktop View) */}
          <div className="hidden md:flex space-x-12"> {/* Chote screens par hide, bade screens par show */}
            <a href="/game-buddies" className="text-xl text-gray-700 hover:text-green-600">Game Buddies</a>
            <a href="/tournaments" className="text-xl text-gray-700 hover:text-green-600">Tournaments</a>
            <a href="/leaderboard" className="text-xl text-gray-700 hover:text-green-600">Leaderboard</a>
            <a href="/community" className="text-xl text-gray-700 hover:text-green-600">Community</a>
          </div>

          {/* Right: Profile Icon */}
          <div className="hidden md:block text-gray-700 hover:text-green-600"> {/* Chote screens par hide, bade screens par show */}
            <FaUserCircle className="text-4xl" />
          </div>

          {/* Hamburger Menu (Mobile View) */}
          <div className="md:hidden text-gray-700 hover:text-green-600">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes className="text-4xl" /> : <FaBars className="text-4xl" />} {/* Menu open/close icon */}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Chote screens par show) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <a href="/game-buddies" className="block text-xl text-gray-700 hover:text-green-600 py-2">Game Buddies</a>
            <a href="/tournaments" className="block text-xl text-gray-700 hover:text-green-600 py-2">Tournaments</a>
            <a href="/leaderboard" className="block text-xl text-gray-700 hover:text-green-600 py-2">Leaderboard</a>
            <a href="/community" className="block text-xl text-gray-700 hover:text-green-600 py-2">Community</a>
          </div>
        )}
      </nav>

      {/* Baaki Page Empty Hai */}
      <div className="p-6">
        {/* Yahan baaki content add karna hai */}
      </div>
    </div>
  );
};

export default DashboardPage;