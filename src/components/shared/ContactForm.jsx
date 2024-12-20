// src/components/shared/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-12">Let's create something amazing together</p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-lg bg-white border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-lg bg-white border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full px-6 py-4 rounded-lg bg-white border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;