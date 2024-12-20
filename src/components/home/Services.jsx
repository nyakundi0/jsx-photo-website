// src/components/home/Services.jsx
import React from 'react';

import { services } from '../../data/portfolioData';

const Services = () => {
  return (
    <section id="services">
      <div className="max-w-7xl mx-auto px-4">
        <h2>Our Services</h2>
        <p>Tailored photography solutions for every need. Our team specializes in capturing stunning visuals that meet the needs of your business or personal project.</p>

        <div className="service-cards">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.imageUrl} alt={service.title} />
              <div className="service-card-content">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
