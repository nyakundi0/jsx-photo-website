// src/components/layout/Navigation.jsx
import React from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Camera className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              HD Studio
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
            <a href="#portfolio" className="text-gray-600 hover:text-purple-600 transition-colors">Portfolio</a>
            <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Services</a>
            <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Contact Us
            </a>
          </div>

          <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors px-4">Home</a>
              <a href="#portfolio" className="text-gray-600 hover:text-purple-600 transition-colors px-4">Portfolio</a>
              <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors px-4">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors px-4">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;