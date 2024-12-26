import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used
import FormField from '../shared/FormField';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password logic here
        console.log('Forgot password for:', email);
        setMessage('If an account with that email exists, a password reset link has been sent.');
    };

    return (
        <section id="forgot-password" className="py-20 bg-gray-100">
            <div className="max-w-md mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <FormField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Send Reset Link
                    </button>
                </form>
                {message && <p className="mt-4 text-green-500">{message}</p>}
                <p className="mt-4">
                    Remembered your password? <Link to="/login" className="text-blue-500">Login</Link>
                </p>
            </div>
        </section>
    );
};

export default ForgotPassword;