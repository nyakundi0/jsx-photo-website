// src/components/auth/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used
import FormField from '../shared/FormField';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate a password reset process
        console.log('Password reset request for:', email);

        // Example: Display a success message
        setMessage(
            'If an account with this email exists, a password reset link will be sent to it.'
        );
    };

    return (
        <section id="forgot-password" className="py-20 bg-gray-100">
            <div className="max-w-md mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4">Forgot Password</h2>
                <p className="text-sm text-gray-600 text-center mb-6">
                    Enter your email address, and we'll send you a link to reset your password.
                </p>

                <form onSubmit={handleSubmit}>
                    <FormField
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        Send Reset Link
                    </button>
                </form>

                {message && (
                    <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>
                )}

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Remember your password?{' '}
                        <Link
                            to="/login" // Replace with your actual login route
                            className="text-purple-600 hover:text-purple-800 font-semibold"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
