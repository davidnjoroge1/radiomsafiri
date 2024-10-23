import { Radio, Headphones, Heart, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to RadioMsafiri
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your Journey of Faith Through Radio Ministry
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
              Listen Live
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Radio size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Radio</h3>
              <p className="text-gray-600">
                Listen to our live broadcasts 24/7 for inspiration and guidance
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Podcasts</h3>
              <p className="text-gray-600">
                Access our archive of sermons and special programs
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Us</h3>
              <p className="text-gray-600">
                Partner with us in spreading the message of hope
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold border border-blue-600 hover:bg-blue-50 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home