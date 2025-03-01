import React, { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: SportMate (Green Color) */}
          <h1 className="text-4xl font-bold text-green-600">SportMate</h1>

          {/* Mid: Links (Desktop View) */}
          <div className="hidden md:flex space-x-12">
            <a href="/game-buddies" className="text-xl text-gray-700 hover:text-green-600">Game Buddies</a>
            <a href="/tournaments" className="text-xl text-gray-700 hover:text-green-600">Tournaments</a>
            <a href="/leaderboard" className="text-xl text-gray-700 hover:text-green-600">Leaderboard</a>
            <a href="/community" className="text-xl text-gray-700 hover:text-green-600">Community</a>
          </div>

          {/* Right: Profile Icon (Desktop View) */}
          <div className="hidden md:block text-gray-700 hover:text-green-600">
            <FaUserCircle className="text-4xl" />
          </div>

          {/* Hamburger Menu (Mobile View) */}
          <div className="md:hidden text-gray-700 hover:text-green-600">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes className="text-4xl" /> : <FaBars className="text-4xl" />}
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

      {/* Fixed Bottom Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-center items-center">
        <a href="/my-profile" className="flex items-center text-xl text-gray-700 hover:text-green-600">
          <FaUserCircle className="text-2xl mr-2" />
          <span>My Profile</span>
        </a>
      </div>
    </>
  );
};

export default Navbar;