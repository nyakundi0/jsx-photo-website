import React from 'react';
import { Camera, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Reusable navigation links component
const NavLinks = () => {
  const commonClasses = "text-gray-600 hover:text-purple-600 transition-colors";
  const buttonClasses = "bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity";

  return (
    <>
      <Link to="/" className={commonClasses}>Home</Link>
      <Link to="/portfolio" className={commonClasses}>Portfolio</Link>
      <Link to="/services" className={commonClasses}>Services</Link>
      <Link to="/contact" className={buttonClasses}>Contact Us</Link>
      <Link to="/login" className={commonClasses}>Login</Link>
      <Link to="/register" className={commonClasses}>Register</Link>
    </>
  );
};

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

          {/* Menu Button for Mobile */}
          <button 
            className="md:hidden text-gray-600" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Navigation Links (hidden on mobile by default, shown when isMenuOpen is true) */}
        <div className={`md:flex items-center gap-8 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
