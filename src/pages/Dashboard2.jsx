import React, { useState, useEffect } from "react";
import { FaUserCircle, FaBars, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons ke liye
import gameBuddiesImage from "../images/image1.jpg";
import tournamentsImage from "../images/image2.jpg";
import leaderboardImage from "../images/image3.jpg";
import communityImage from "../images/image4.jpg";

const DashboardPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu open/close ke liye state

  const features = [
    {
      title: "Game Buddies",
      description: "Find and connect with players.",
      image: gameBuddiesImage, // Local image path
    },
    {
      title: "Tournaments",
      description: "Join or create tournaments.",
      image: tournamentsImage, // Local image path
    },
    {
      title: "Leaderboard",
      description: "Track your rankings.",
      image: leaderboardImage, // Local image path
    },
    {
      title: "Community",
      description: "Engage with the SportMate community.",
      image: communityImage, // Local image path
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  // Automatic Slide Change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Har 3 seconds mein next slide par jayega
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]); // currentIndex ke change par interval reset hoga

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

      {/* Slide Bar (Carousel) */}
      <div className="relative mt-8">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            {/* Feature Slide */}
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {features.map((feature, index) => (
                <div key={index} className="min-w-full flex-shrink-0">
                  <img src={feature.image} alt={feature.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-3xl font-bold">{feature.title}</h2>
                      <p className="text-xl mt-2">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-lg hover:bg-opacity-100"
          >
            <FaChevronLeft className="text-2xl text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-lg hover:bg-opacity-100"
          >
            <FaChevronRight className="text-2xl text-gray-700" />
          </button>
        </div>
      </div>

      {/* Baaki Page Empty Hai */}
      <div className="p-6">
        {/* Yahan baaki content add karna hai */}
      </div>
    </div>
  );
};

export default DashboardPage;