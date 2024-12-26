import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure react-router-dom is installed and configured
import FormField from '../shared/FormField';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                password,
                email,
            });
            setMessage('Login successful');
            console.log('Login successful:', response.data);
            // Save the token to localStorage or context
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard'); // Redirect to dashboard or another page
        } catch (error) {
            setMessage('Login failed');
            console.error('Login error:', error);
        }
    };

    return (
        <section id="login" className="py-20 bg-gray-100">
            <div className="max-w-md mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <FormField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <FormField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Login
                    </button>
                </form>
                {message && <p className="mt-4 text-red-500">{message}</p>}
                <p className="mt-4">
                    Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
                </p>
            </div>
        </section>
    );
};

export default Login;