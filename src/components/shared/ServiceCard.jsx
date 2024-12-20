// src/components/shared/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-shadow">
      <img
        src={imageUrl} // Add the image for each service
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-6"
      />
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
