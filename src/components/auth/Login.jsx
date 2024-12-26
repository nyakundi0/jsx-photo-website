import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure react-router-dom is installed and configured
import FormField from '../shared/FormField';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });
            setMessage('Login successful');
            console.log('Login successful:', response.data);
            // Save the token to localStorage or context
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard'); // Redirect to dashboard
        } catch (error) {
            setMessage('Login failed');
            console.error('Login error:', error);
        }
    };

    return (
        <section id="login" className="py-20 bg-gray-100">
            <div className="max-w-md mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4">Login</h2>
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
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        Login
                    </button>
                </form>
                {message && <p>{message}</p>}

                {/* Navigation Links */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 mb-2">
                        <Link
                            to="/forgotpassword"
                            className="text-purple-600 hover:text-purple-800 font-semibold"
                        >
                            Forgot Password?
                        </Link>
                    </p>
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link
                            to="/register"
                            className="text-purple-600 hover:text-purple-800 font-semibold"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
