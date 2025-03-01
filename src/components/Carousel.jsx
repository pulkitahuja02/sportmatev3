// src/components/Carousel.jsx
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import gameBuddiesImageMobile from "../images/caraousel12.jpeg"; // Mobile image (800x450 px)
import gameBuddiesImageDesktop from "../images/caraousel1.jpg"; // Desktop image (1200x675 px)
import tournamentsImageMobile from "../images/caraousel12.jpeg"; // Mobile image (800x450 px)
import tournamentsImageDesktop from "../images/caraousel11.jpg"; // Desktop image (1200x675 px)
import leaderboardImageMobile from "../images/caraousel12.jpeg"; // Mobile image (800x450 px)
import leaderboardImageDesktop from "../images/caraousel11.jpg"; // Desktop image (1200x675 px)
import communityImageMobile from "../images/caraousel12.jpeg"; // Mobile image (800x450 px)
import communityImageDesktop from "../images/caraousel11.jpg"; // Desktop image (1200x675 px)

const Carousel = () => {
  const features = [
    {
      title: "Game Buddies",
      description: "Find and connect with players.",
      imageMobile: gameBuddiesImageMobile,
      imageDesktop: gameBuddiesImageDesktop,
    },
    {
      title: "Tournaments",
      description: "Join or create tournaments.",
      imageMobile: tournamentsImageMobile,
      imageDesktop: tournamentsImageDesktop,
    },
    {
      title: "Leaderboard",
      description: "Track your rankings.",
      imageMobile: leaderboardImageMobile,
      imageDesktop: leaderboardImageDesktop,
    },
    {
      title: "Disclaimer",
      description: "We created this app to encourage you to step onto the field and enjoy the sport. We recommend using this site for no more than 15-20 minutes a day. Happy playing!",
      imageMobile: communityImageMobile,
      imageDesktop: communityImageDesktop,
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
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: "56.25vw", maxHeight: "500px" }}> {/* 16:9 aspect ratio */}
          {/* Feature Slide */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {features.map((feature, index) => (
              <div key={index} className="min-w-full flex-shrink-0">
                {/* Image with responsive height */}
                <img
                  srcSet={`${feature.imageMobile} 800w, ${feature.imageDesktop} 1200w`} // Responsive images
                  sizes="(max-width: 600px) 800px, 1200px" // Breakpoints
                  src={feature.imageDesktop} // Fallback image
                  alt={feature.title}
                  className="w-full h-full object-cover" // Use object-cover to fill the container
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