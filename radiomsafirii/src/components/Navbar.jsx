import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, Music } from 'lucide-react';

const RadioPlayerModal = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-300 z-50
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed left-1/2 bottom-0 w-full md:w-auto md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 
          bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900
          rounded-t-2xl md:rounded-2xl p-6 shadow-2xl transition-all duration-500 z-50
          ${isOpen 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-full md:translate-y-10 opacity-0 scale-90 pointer-events-none'
          }`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/80 hover:text-white 
            hover:scale-110 transition-all duration-300"
        >
          <X size={24} />
        </button>

        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="animate-pulse">
              <Music size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Radio Msafiri Live</h2>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-lg animate-pulse" />
            <iframe
              src="https://zeno.fm/player/radiomsafiri"
              title="Radiomsafiri"
              width="100%"
              height="250"
              frameBorder="0"
              scrolling="no"
              className="relative z-10 rounded-lg shadow-xl"
            />
          </div>

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
    { name: 'Home', path: '/', icon: <img src="/images/home.png" alt="Home" className="w-6 h-6" /> },
    { name: 'Sermons', path: '/sermons', icon: <img src="/images/book.png" alt="Sermons" className="w-6 h-6" /> },
    { name: 'Services', path: '/services', icon: <img src="/images/customer-review.png" alt="Services" className="w-6 h-6" /> },
    { name: 'Events', path: '/events', icon: <img src="/images/event.png" alt="Events" className="w-6 h-6" /> },
    { name: 'Contact', path: '/contact', icon: <img src="/images/supportcu.png" alt="Contact" className="w-6 h-6" /> },
    { name: 'Team', path: '/team', icon: <img src="/images/team.png" alt="Team" className="w-6 h-6" /> },
    { name: 'Support', path: '/support', icon: <Heart size={24} className="text-pink-500" /> }
  ];

  const persistentActions = [
    { 
      name: 'Live Radio', 
      icon: <div className="relative">
              <img src="/images/lives.png" alt="Live Radio" className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
            </div>,
      action: () => setIsPlayerOpen(true),
      className: "text-red-500"
    },
    { 
      name: 'Podcasts', 
      icon: <img src="/images/podcast.png" alt="Podcasts" className="w-8 h-8 md:w-10 md:h-10" />,
      action: () => console.log('Podcasts clicked'),
      className: "text-blue-500"
    }
  ];

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          {/* Logo section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/images/logo.jpeg" alt="RadioMsafiri" className="h-10 w-auto" />
              <span className="font-bold text-xl md:text-2xl hidden md:block">RadioMsafiri</span>
            </Link>
          </div>

          {/* Persistent Actions - Mobile Optimized */}
          <div className="flex items-center space-x-2 md:space-x-6">
            {persistentActions.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className={`p-2 md:p-3 hover:bg-gray-100 rounded-full transition-colors duration-200 ${item.className} relative group`}
                title={item.name}
              >
                {item.icon}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.name}
                </span>
              </button>
            ))}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="p-4 bg-gray-50 flex items-center justify-between border-b">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <img src="/images/logo.jpeg" alt="RadioMsafiri" className="h-8 w-auto" />
              <span className="font-bold text-lg">RadioMsafiri</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Radio Player Modal */}
      <RadioPlayerModal isOpen={isPlayerOpen} onClose={() => setIsPlayerOpen(false)} />
    </nav>
  );
};

export default Navbar;