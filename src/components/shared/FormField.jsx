// src/components/shared/FormField.jsx
import React from 'react';

const FormField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
