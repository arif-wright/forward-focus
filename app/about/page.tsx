'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Forward Focus</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Founded on the principle that sustainable success requires both strategic clarity and environmental responsibility.
          </p>
        </div>
      </section>

      {/* Jerry Croft Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img
                src="/images/jerry_croft.jpg"
                alt="Jerry Croft, Founder"
                className="rounded-xl shadow-lg object-cover w-80 h-96 mx-auto lg:mx-0 object-top"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Jerry Croft</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With over two decades of executive leadership experience, Jerry Croft founded Forward Focus
                to bridge the gap between traditional business strategy and sustainable growth. His background
                spans multiple industries, from scaling emerging companies to serving in senior advisory roles
                for established enterprises.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Jerry's approach combines hands-on operational experience with data-driven insights, helping
                organizations make decisions that drive both immediate results and long-term value creation.
                His expertise in business transformation has guided companies through critical growth phases,
                strategic pivots, and successful exits.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-award-line text-[#0072CE] w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <span className="text-gray-700">20+ years executive leadership experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-rocket-line text-[#0072CE] w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <span className="text-gray-700">Successfully scaled multiple companies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-user-star-line text-[#0072CE] w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <span className="text-gray-700">Senior advisory roles across industries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EcoFocus Partnership */}
      <section className="py-20 bg-[#7AC943]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">EcoFocus Worldwide Partnership</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Forward Focus's sustainability consulting is powered by our strategic partnership with
                EcoFocus Worldwide, a leading environmental research organization. This collaboration
                serves as our sustainability research engine, providing access to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-check-line text-[#7AC943] mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <strong className="text-gray-900">Comprehensive Market Intelligence</strong>
                    <p className="text-gray-600 text-sm mt-1">Real-time data on sustainability trends, regulations, and market opportunities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#7AC943] mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <strong className="text-gray-900">Industry Benchmarking</strong>
                    <p className="text-gray-600 text-sm mt-1">Comparative analysis across sectors for informed decision-making</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#7AC943] mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <strong className="text-gray-900">Regulatory Insights</strong>
                    <p className="text-gray-600 text-sm mt-1">Early identification of regulatory changes and compliance requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#7AC943] mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <strong className="text-gray-900">Innovation Tracking</strong>
                    <p className="text-gray-600 text-sm mt-1">Monitoring emerging technologies and sustainable business models</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src="/images/laptop.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe sustainable success comes from aligning strategic clarity with environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0072CE]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-compass-3-line text-[#0072CE] text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Clarity</h3>
              <p className="text-gray-600 leading-relaxed">
                We help organizations define clear strategic direction based on data-driven insights and market realities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#7AC943]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-[#7AC943] text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Our sustainability expertise ensures growth strategies align with environmental responsibility and future resilience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2C300]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-[#F2C300] text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We translate complex challenges into actionable solutions that drive both performance and positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how Forward Focus can help your organization navigate complexity and build sustainable success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#F2C300] text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors cursor-pointer whitespace-nowrap"
          >
            Get in Touch
            <i className="ri-arrow-right-line ml-2 w-5 h-5 flex items-center justify-center"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}