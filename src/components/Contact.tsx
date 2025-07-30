import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../lib/i18n';
import { submitContactForm, type ContactSubmissionResult } from '../services/contact-service';
import type { ContactFormData } from '../types/contact-formdata';
import { getDeviceType } from '../utils/device';
interface FormStatus {
  isSubmitting: boolean;
  message: string;
  type: 'success' | 'error' | 'idle';
}

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    isSubmitting: false,
    message: '',
    type: 'idle',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (status.type === 'error') {
      setStatus({ isSubmitting: false, message: '', type: 'idle' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus({ isSubmitting: true, message: '', type: 'idle' });

    // Convert form data to API format 
    const contactData: ContactFormData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      companyName: formData.company || undefined,
      source: getDeviceType(),
    };

    try {
      const result: ContactSubmissionResult = await submitContactForm(contactData);

      if (result.success) {
        setStatus({
          isSubmitting: false,
          message: t('contact.form.thankYou'),
          type: 'success',
        });

        // Reset form on success
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        setStatus({
          isSubmitting: false,
          message: result.message,
          type: 'error',
        });
      }
    } catch (error) {
      setStatus({
        isSubmitting: false,
        message: 'An unexpected error occurred. Please try again.',
        type: 'error',
      });
    }
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
          {t('contact.title')}
        </h2>
        <p className="text-green text-xl mb-8">
          {t('contact.subtitle')}
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
              placeholder={t('contact.form.name')}
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
              placeholder={t('contact.form.email')}
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="company"
              placeholder={t('contact.form.company')}
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              onChange={handleChange}
              value={formData.company}
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder={t('contact.form.message')}
              rows={4}
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
          </div>

          {/* Status Message */}
          {status.message && (
            <motion.div
              className={`mb-6 p-4 rounded-lg ${status.type === 'success'
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {status.message}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={status.isSubmitting}
            className={`font-bold py-3 px-8 rounded-full transition-all duration-300 ${status.isSubmitting
              ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
              : 'bg-green text-gray-900 hover:bg-blue hover:scale-105'
              }`}
          >
            {status.isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              t('contact.form.send')
            )}
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
} 