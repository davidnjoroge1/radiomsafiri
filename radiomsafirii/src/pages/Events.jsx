import React from 'react';
import { Calendar, Book, Headphones, Gift } from 'lucide-react';

const Events = () => {
  const eventTypes = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      title: "Seminars",
      description: "Join our enlightening spiritual seminars"
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-500" />,
      title: "Podcasts",
      description: "Listen to our inspiring podcast sessions"
    },
    {
      icon: <Book className="w-8 h-8 text-indigo-500" />,
      title: "Evangelistic Missions",
      description: "Participate in our book reading sessions"
    },
    {
      icon: <Gift className="w-8 h-8 text-pink-500" />,
      title: "Donations",
      description: "Support our community through donations"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
            <p className="text-xl text-blue-100 mb-8">Discover upcoming events and join our community</p>
            
            {/* Event Types Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {eventTypes.map((type, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex justify-center mb-3">
                    {type.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{type.title}</h3>
                  <p className="text-sm text-blue-100">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Tailor Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600">Click below to check all our upcoming events and secure your spot</p>
          </div>
          
          {/* Placeholder for Ticket Tailor Widget */}
          <div className="bg-gray-50 rounded-lg p-8">
            {/* Add your Ticket Tailor widget code here */}
            <div className="text-center text-gray-500">
              <p className="mb-4">Ticket Tailor Widget will be integrated here</p>
              <p className="text-sm">You can replace this placeholder with your Ticket Tailor widget embed code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;