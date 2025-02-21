import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

const images = [image1, image2, image3, image4];

const Dashboard = () => {
  const { username } = useUser();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mt-6">
        Hi {username || "Naam daalde bsdk"}, welcome to SportMate
      </h1>

      {/* Quote */}
      <p className="text-gray-700 italic text-center mt-2 mb-6">
        "Let's get back to the ground where we belong"
      </p>

      {/* Image Carousel */}
      <div className="relative w-full max-w-3xl h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt="Sports"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-xl">
  <button className="bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-all">
    Build Your Profile
  </button>

  <button className="bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-all">
    Discover Athletes Near You
  </button>

  <button className="bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-all">
    Upcoming Tournaments
  </button>

  <button className="bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-all">
    Invite Players
  </button>
</div>

    </div>
  );
};

export default Dashboard;
