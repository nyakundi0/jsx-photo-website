// src/App.jsx
import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/home/Hero';
import Portfolio from './components/home/Portfolio';
import Services from './components/home/Services';
import ContactForm from './components/shared/ContactForm';
import Footer from './components/layout/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Portfolio />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;