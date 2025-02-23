// src/components/Carousel.jsx
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import gameBuddiesImage from "../images/caraousel1.jpg";
import tournamentsImage from "../images/caraousel2.jpg";
import leaderboardImage from "../images/caraousel3.jpg";
import communityImage from "../images/caraousel4.jpg";

const Carousel = () => {
  const features = [
    {
      title: "Game Buddies",
      description: "Find and connect with players.",
      image: gameBuddiesImage,
    },
    {
      title: "Tournaments",
      description: "Join or create tournaments.",
      image: tournamentsImage,
    },
    {
      title: "Leaderboard",
      description: "Track your rankings.",
      image: leaderboardImage,
    },
    {
      title: "Disclaimer",
      description: "We created this app to encourage you to step onto the field and enjoy the sport. We recommend using this site for no more than 15-20 minutes a day. Happy playing!",
      image: communityImage,
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
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative mt-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: "800px" }}> {/* Set fixed height for carousel container */}
          {/* Feature Slide */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {features.map((feature, index) => (
              <div key={index} className="min-w-full flex-shrink-0">
                {/* Image with responsive height */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain" // Use object-contain to fit the entire image
                />
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
  );
};

export default Carousel;