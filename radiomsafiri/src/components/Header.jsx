import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="relative bg-cover bg-center h-screen transition-all duration-1000"
      style={{ backgroundImage: `url('${backgroundImages[currentImage]}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="container mx-auto text-center text-white relative z-10 flex flex-col items-center justify-center h-full">
        {/* Main Header */}
        <h1 className="text-6xl font-extrabold mb-4 pt-32 animate-fadeIn tracking-wide">
          Welcome to <span className="text-gold-500 animate-pulse">Radio Msafiri</span>
        </h1>

        {/* Mission Statement */}
        <p className="text-2xl font-bold mb-4 animate-fadeInUp text-gray-300">
          Spreading the <span className="text-red-400 font-bold">Heavenly Message</span>
        </p>
        <p className="text-lg mb-6 animate-fadeIn text-gray-300">
          Depopulating Earth to Populate Heaven
        </p>

        {/* Live Broadcast Message */}
        <p className="text-xl font-semibold mb-4 animate-fadeIn text-gray-200">
          Press the <span className="text-red-400">Live Icon</span> for Live Broadcast
        </p>

        {/* Bible Verse */}
        <blockquote className="text-lg italic mb-6 animate-fadeIn text-gray-400 max-w-xl">
          "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." 
          <br />
          — Matthew 28:19
        </blockquote>
      </div>

      {/* Custom Styling */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 3s ease-in-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 2s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
