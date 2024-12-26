// src/components/auth/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormField from '../shared/FormField';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
      });
      setMessage('Registration successful');
      console.log('Registration successful:', response.data);
      navigate('/'); // Redirect to home page
    } catch (error) {
      setMessage('Registration failed');
      console.error('Registration error:', error);
    }
  };

  return (
    <section id="register" className="py-20 bg-gray-100">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <FormField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Register
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </section>
  );
};

export default Register;
