import React from 'react';

const services = [
  { 
    title: "Live Radio", 
    description: "Tune in to our 24/7 live radio for inspiring music, sermons, and Christian discussions. Our live broadcasts bring you a blend of gospel music and daily teachings from renowned Adventist ministers, available anytime to help you stay spiritually connected.", 
    icon: "/images/icons/radio.png"  // Updated to use custom icon
  },
  { 
    title: "Podcasts", 
    description: "Missed a sermon? Catch up with our podcasts where you can listen to recorded sermons and special discussions at your convenience. Each episode offers a deep dive into the word of God, providing spiritual insights and practical lessons to apply in your daily life.", 
    icon: "/images/icons/podcasts.png"  // Updated to use custom icon
  },
  { 
    title: "Inspirational Sermons", 
    description: "Our daily inspirational sermons are led by respected Adventist pastors and teachers. These messages provide biblical wisdom and practical teachings to guide you in living out your faith, while encouraging spiritual growth and a deeper relationship with God.", 
    icon: "/images/icons/book.png"  // Updated to use custom icon
  },
  { 
    title: "Holistic Songs", 
    description: "Experience a selection of holistic songs that blend contemporary and traditional Adventist hymns. These songs are designed to uplift your spirit and bring you closer to God through worshipful, prayerful melodies that speak to the mind, body, and spirit.", 
    icon: "/images/icons/music.png"  // Updated to use custom icon
  },
];

const Services = () => {
  return (
    <section 
      className="py-16 bg-cover bg-center text-white relative" 
      id="services" 
      style={{ backgroundImage: "url('/images/pic3.jpg')" }}  // Adding background image
    >
      <div className="container mx-auto text-center relative z-10">
        {/* Section Header */}
        <h2 className="text-5xl font-bold mb-12" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Services</h2>  {/* Updated font */}
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-white glass-effect"
            >
              {/* Icon */}
              <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto mb-4" /> {/* Using custom icon */}

              {/* Service Title */}
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{service.title}</h3>  {/* Updated font */}

              {/* Service Description */}
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Additional Text */}
        <div className="mt-16 text-center px-4">
          <p className="text-lg text-gray-200">
            At Radio Msafiri, our mission is to provide uplifting and edifying content that strengthens the faith of our listeners. 
            Tune in for daily inspirational sermons, live call-in shows, and holistic songs that will enrich your spiritual journey. 
            Join us as we bring the Adventist message to the world through music, teachings, and interactive discussions.
          </p>
        </div>
      </div>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>  {/* Adding overlay */}

      {/* Styles for Glassmorphism Effect */}
      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Services;
