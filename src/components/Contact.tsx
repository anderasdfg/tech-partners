import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <motion.section
      className="py-20 text-center"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">
          We don't create products. We create technological experiences.
        </h2>
        <p className="text-green text-xl mb-8">
          Find out what we can build with you
        </p>
        <motion.form
          className="max-w-xl mx-auto"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-blue transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
} 