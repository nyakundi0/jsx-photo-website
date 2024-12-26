import React from 'react';

// Reusable page wrapper component
const PageWrapper = ({ title, children }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {children}
    </div>
  </div>
);

export default PageWrapper;