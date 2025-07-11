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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://readdy.ai/api/forms/forward-focus-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Let's Talk</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Ready to navigate complexity and build sustainable success? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <form id="forward-focus-contact" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072CE] focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072CE] focus:border-transparent text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072CE] focus:border-transparent text-sm"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072CE] focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select a service</option>
                    <option value="strategic-consulting">Strategic Consulting</option>
                    <option value="sustainability-consulting">Sustainability Consulting</option>
                    <option value="both-services">Both Services</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072CE] focus:border-transparent text-sm resize-vertical"
                    placeholder="Tell us about your challenges and how we can help..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-[#0072CE] text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <i className="ri-check-circle-line text-green-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                      <p className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <i className="ri-error-warning-line text-red-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                      <p className="text-red-700 font-medium">There was an error sending your message. Please try again.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Started</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Whether you're looking to scale strategically or build sustainable practices, 
                    we're here to help navigate your path forward.
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#0072CE]/10 rounded-lg flex items-center justify-center">
                      <i className="ri-time-line text-[#0072CE] w-4 h-4 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700">Typical response within 24 hours</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Expertise</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#0072CE]/10 rounded-lg flex items-center justify-center">
                        <i className="ri-line-chart-line text-[#0072CE] w-4 h-4 flex items-center justify-center"></i>
                      </div>
                      <span className="text-gray-700">Strategic Consulting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#7AC943]/10 rounded-lg flex items-center justify-center">
                        <i className="ri-leaf-line text-[#7AC943] w-4 h-4 flex items-center justify-center"></i>
                      </div>
                      <span className="text-gray-700">Sustainability Consulting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#F2C300]/10 rounded-lg flex items-center justify-center">
                        <i className="ri-database-2-line text-[#F2C300] w-4 h-4 flex items-center justify-center"></i>
                      </div>
                      <span className="text-gray-700">EcoFocus Research Partnership</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Who We Serve</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <i className="ri-check-line text-[#7AC943] mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Emerging startups and scale-ups
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-[#7AC943] mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Mid-market companies
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-[#7AC943] mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Enterprise organizations
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-[#7AC943] mr-2 w-4 h-4 flex items-center justify-center"></i>
                      C-Suite executives and boards
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Partnership with EcoFocus</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our sustainability consulting is powered by EcoFocus Worldwide's research and market intelligence, 
                  ensuring our recommendations are backed by the latest environmental data and trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}