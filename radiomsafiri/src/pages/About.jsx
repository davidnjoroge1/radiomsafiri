// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="container mx-auto glass-effect p-10 rounded-xl text-white text-center animate-fadeIn">
        <h2 className="text-4xl font-bold mb-6 text-gold-500">About Us</h2>
        
        <p className="text-lg mb-4">
          Radio Msafiri is an Adventist-based Christian online radio, broadcasting 24 hours a day to enrich you with our spiritual, soul-reaching music and inspiring messages.
        </p>
        
        <p className="text-lg mb-4">
          Based in Nairobi, Kenya, we have a wide range of listeners across the globe. Our major goal is to enrich, inspire, and inform our esteemed listeners through inspired Christian music, heartwarming messages from the Word of God, and top-notch live shows.
        </p>

        <p className="text-lg mb-4">
          Join us as we depopulate earth and populate heaven through the everlasting gospel!
        </p>
      </div>

      {/* Custom Styling for Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }
        @keyframes fadeIn {
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
    </section>
  );
};

export default About;
