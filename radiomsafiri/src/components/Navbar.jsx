import React, { useState } from 'react';
import { Menu, X, Heart, Music } from 'lucide-react';

// First, let's add the RadioPlayerModal component at the top of the file
const RadioPlayerModal = ({ isOpen, onClose }) => {
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
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '#home', icon: <img src="/images/home.png" alt="Home" className="w-6 h-6" /> },
    { name: 'Sermons', path: '#sermons', icon: <img src="/images/book.png" alt="Sermons" className="w-6 h-6" /> },
    { name: 'Services', path: '#services', icon: <img src="/images/customer-review.png" alt="Services" className="w-6 h-6" /> },
    { name: 'Events', path: '#events', icon: <img src="/images/event.png" alt="Events" className="w-6 h-6" /> },
    { name: 'Contact', path: '#contact', icon: <img src="/images/supportcu.png" alt="Contact" className="w-6 h-6" /> },
  ];

  const persistentActions = [
    { 
      name: 'Live Radio', 
      icon: <div className="relative">
              <img src="/images/lives.png" alt="Live Radio" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
            </div>,
      action: () => setIsPlayerOpen(true),
      className: "text-red-500"
    },
    { 
      name: 'Podcasts', 
      icon: <img src="/images/podcast.png" alt="Podcasts" className="w-10 h-10" />,
      action: () => console.log('Podcasts clicked'),
      className: "text-blue-500"
    }
  ];

  const donateAction = {
    name: 'Donate',
    icon: <Heart size={24} className="text-pink-500" />,
    path: 'support'
  };

  const handleScroll = (path) => {
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* ... Logo section remains the same ... */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center space-x-3">
              <img 
                src="/images/logo.jpeg" 
                alt="RadioMsafiri" 
                className="h-12 w-auto" 
              />
              <span className="font-bold text-2xl hidden md:block">RadioMsafiri</span>
            </a>
          </div>

          {/* Persistent Actions */}
          <div className="flex items-center space-x-6">
            {persistentActions.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className={`p-3 hover:bg-gray-100 rounded-full transition-colors duration-200 ${item.className} relative group`}
                title={item.name}
              >
                {item.icon}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.path)}
                className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
            
            {/* Desktop Donate Button */}
            <a
              href={donateAction.path}
              className="p-3 hover:bg-gray-100 rounded-full transition-colors duration-200 ml-4 border-l pl-4 relative group"
              title={donateAction.name}
            >
              {donateAction.icon}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {donateAction.name}
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-transform transform"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } md:hidden fixed top-0 left-0 h-screen w-4/5 z-50 bg-white shadow-2xl transition-all duration-500 ease-in-out transform`}
      >
        {/* Mobile Header */}
        <div className="bg-gray-50 p-4 flex items-center justify-between border-b">
          <img src="/images/logo.jpeg" alt="RadioMsafiri" className="h-10 w-auto" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Mobile Navigation Items */}
        <div className="py-6 px-4 space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.path)}
              className="w-full text-left p-4 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center space-x-4 group"
            >
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                {item.icon}
              </div>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Actions Section */}
        <div className="absolute bottom-0 left-0 right-0 border-t bg-gray-50 p-4 space-y-3">
          <a
            href={donateAction.path}
            className="w-full bg-pink-500 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-pink-600 transition-colors"
          >
            <Heart size={20} />
            <span className="font-medium">Support Us</span>
          </a>
        </div>
      </div>

      {/* Radio Player Modal */}
      <RadioPlayerModal
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
      />

      <style jsx global>{`
        @keyframes music-bar {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .animate-music-bar {
          animation: music-bar 1s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;