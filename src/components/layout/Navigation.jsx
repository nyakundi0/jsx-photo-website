import React from 'react';
import { Camera } from 'lucide-react';
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
      <Link to="/dashboard" className={commonClasses}>Dashboard</Link>
    </>
  );
};

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Left Section: Logo and Icon */}
        <div className="flex items-center gap-2">
          <Camera className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            HD Studio
          </span>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
