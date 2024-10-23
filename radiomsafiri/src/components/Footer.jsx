import { Link } from 'react-router-dom'
import { Radio, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
          <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/images/logo.jpeg" 
                alt="RadioMsafiri" 
                className="h-12 w-auto" 
              />
              <span className="font-bold text-2xl hidden md:block">RadioMsafiri</span>
            </Link>
            <p className="text-gray-400">
              Bringing hope and inspiration through the power of radio ministry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/sermons" className="text-gray-400 hover:text-white">Sermons</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-400">info@radiomsafiri.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-400">+254 7203 78689</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RadioMsafiri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer