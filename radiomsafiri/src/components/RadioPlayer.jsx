// src/components/RadioPlayer.jsx
import React, { useState } from 'react';
import { X, Music } from 'lucide-react';

export const RadioPlayerModal = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-300 z-50
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900
          rounded-2xl p-6 shadow-2xl transition-all duration-500 z-50
          ${isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
          }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/80 hover:text-white 
            hover:scale-110 transition-all duration-300"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="animate-pulse">
              <Music size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Radio Msafiri Live</h2>
          </div>

          {/* Player container with animation */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-lg animate-pulse" />
            <iframe
              src="https://zeno.fm/player/radiomsafiri"
              width="300"
              height="250"
              frameBorder="0"
              scrolling="no"
              className="relative z-10 rounded-lg shadow-xl"
            />
          </div>

          {/* Audio visualizer bars */}
          <div className="flex justify-center space-x-1 h-8 items-end">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 bg-white/80 rounded-full animate-music-bar"
                style={{
                  height: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>

          <a
            href="https://zeno.fm/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-white/60 hover:text-white text-sm 
              transition-colors duration-300"
          >
            A Zeno.FM Station
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes music-bar {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .animate-music-bar {
          animation: music-bar 1s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default RadioPlayerModal;