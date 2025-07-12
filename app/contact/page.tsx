'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/.netlify/functions/contact-forward-focus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Let's Talk</h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Ready to navigate complexity and build sustainable success? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                  <p>Message sent successfully! We'll get back to you soon.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072CE] text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072CE] text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072CE] text-sm"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072CE] text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="strategic-consulting">Strategic Consulting</option>
                      <option value="sustainability-consulting">Sustainability Consulting</option>
                      <option value="both-services">Both Services</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      maxLength={500}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072CE] text-sm"
                      placeholder="Tell us about your challenges and how we can help..."
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting' || formData.message.length > 500}
                    className="w-full bg-[#0072CE] text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Contact Info (unchanged) */}
            <div className="lg:pl-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-10 text-gray-700">
                {/* You can keep your existing info list here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



