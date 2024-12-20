// src/components/home/Portfolio.jsx
import React from 'react';
import { portfolioItems } from '../../data/portfolioData';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Portfolio</h2>
        <p className="text-gray-600 text-center mb-12">Discover our diverse collection of photography</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;