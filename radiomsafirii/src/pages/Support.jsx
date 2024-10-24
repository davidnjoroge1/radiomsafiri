// src/pages/Support.jsx
import React from 'react';
import { Heart, Book, Radio, Globe, ChevronRight } from 'lucide-react';

const Support = () => {
  const donationCategories = [
    {
      title: "Evangelistic Campaigns",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      description: "Support our outreach missions across different regions, helping us spread the message of hope and faith to communities in need.",
      items: [
        "Mobile Sound Systems",
        "Tents and Chairs",
        "Transportation",
        "Event Materials"
      ]
    },
    {
      title: "Book Donations",
      icon: <Book className="w-8 h-8 text-green-600" />,
      description: "Help us build our library of spiritual and educational materials that we use to nurture faith and understanding in our community.",
      items: [
        "Biblical Literature",
        "Study Materials",
        "Children's Books",
        "Educational Resources"
      ]
    },
    {
      title: "Evangelism Tools",
      icon: <Radio className="w-8 h-8 text-purple-600" />,
      description: "Equip our ministry with modern tools and equipment needed for effective evangelism in today's digital age.",
      items: [
        "Broadcasting Equipment",
        "Recording Devices",
        "Digital Media Tools",
        "Production Software"
      ]
    }
  ];

  const paymentMethods = [
    {
      title: "M-PESA",
      icon: "/images/mpesa.png",
      details: "+254720378689",
      instructions: "Send directly to the number"
    },
    {
      title: "Bank Paybill",
      icon: "/images/bank.png",
      details: "Paybill: 714888\nAccount: 206070",
      instructions: "Use account number as reference"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-pink-300" />
            <h1 className="text-4xl font-bold mb-4">Support Our Ministry</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join us in spreading the message of hope and faith. Your support enables us to reach more people and make a lasting impact in our community.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Impact Message */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Support Makes a Difference</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every contribution helps us purchase essential tools and resources for evangelism. 
            Your generosity enables us to expand our reach and strengthen our mission of sharing 
            God's word through various platforms and initiatives.
          </p>
        </div>

        {/* Donation Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {donationCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Donation Methods */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Ways to Support</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Financial Support */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Financial Support</h3>
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-start space-x-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full p-2">
                      <img src={method.icon} alt={method.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-medium">{method.title}</h4>
                      <pre className="text-gray-600 mt-1 font-mono">{method.details}</pre>
                      <p className="text-sm text-gray-500 mt-1">{method.instructions}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Donations */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Equipment & Book Donations</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  We welcome physical donations of books and equipment at our office. Your 
                  contributions help us build better resources for our ministry.
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium">What we accept:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Christian literature and study materials</li>
                    <li>Broadcasting and audio equipment</li>
                    <li>Educational resources</li>
                    <li>Office equipment and supplies</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    Please contact us beforehand to arrange for equipment donations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gray-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about making a donation or would like to discuss other 
            ways to support our ministry, please don't hesitate to reach out.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;