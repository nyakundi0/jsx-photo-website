// src/components/layout/Footer.jsx
import React from 'react';
import { Camera, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Camera className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold">HD Studio</span>
          </div>
          
          <div className="flex gap-6">
            <Instagram className="h-6 w-6 hover:text-purple-400 transition-colors cursor-pointer" />
            <Facebook className="h-6 w-6 hover:text-purple-400 transition-colors cursor-pointer" />
            <Twitter className="h-6 w-6 hover:text-purple-400 transition-colors cursor-pointer" />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 HD Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;