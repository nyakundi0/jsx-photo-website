import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Import the local image
import HeroImage from '../../assets/images/hero_image.jpg'; // Adjust path based on your structure

const Hero = () => {
  return (
    <section id="home" className="pt-20">
      <div className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          {/* Use the imported local image */}
          <img
            src={HeroImage} // Update to use the imported image
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Capturing Life's<br />
            Beautiful Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
            Professional photography services that bring your vision to life through stunning visuals and creative excellence.
          </p>
          <Link to="/our-works"> {/* Wrap the button with Link */}
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              View Our Work
              <ChevronRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
