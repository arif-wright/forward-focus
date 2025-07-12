'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Forward Focus</h1>
          <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
            Founded on the principle that sustainable success requires strategic clarity and a forward thinking plan. As Wayne Gretzky
            was fond of saying: “Skate to where the puck is going, not where it's been”.
          </p>
        </div>
      </section>

      {/* Jerry Croft Bio */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img
                src="/images/jerry_croft.jpg"
                alt="Jerry Croft, Founder"
                className="rounded-xl shadow-lg object-cover w-64 sm:w-80 h-80 sm:h-96 mx-auto lg:mx-0 object-top"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Meet Jerry Croft</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                With over two decades of executive leadership experience, Jerry Croft founded Forward Focus
                to bridge the gap between traditional business strategy and sustainable growth. His background
                spans multiple industries, from scaling emerging companies to serving in senior advisory roles
                for established enterprises.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Jerry's approach combines hands-on operational experience with data-driven insights, helping
                organizations make decisions that drive both immediate results and long-term value creation.
                His expertise in business transformation has guided companies through critical growth phases,
                strategic pivots, and successful exits.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-award-line text-[#0072CE] w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">20+ years executive leadership experience</span>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-rocket-line text-[#0072CE] w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Successfully scaled multiple companies</span>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-user-star-line text-[#0072CE] w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Senior advisory roles across industries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EcoFocus Partnership */}
      <section className="py-12 sm:py-20 bg-[#7AC943]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">EcoFocus Worldwide Partnership</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Forward Focus's sustainability consulting is powered by our strategic partnership with
                EcoFocus Worldwide, a leading environmental research organization. This collaboration
                serves as our sustainability research engine, providing access to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-check-line text-[#7AC943] mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <strong className="text-gray-900">Data-Driven Strategy Development</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      We help clients turn sustainability and consumer insights into actionable strategies that align with business goals and stakeholder expectations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#7AC943] mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <strong className="text-gray-900">Custom Insights & Trend Interpretation</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Beyond dashboards, we provide expert interpretation of data to reveal the “why” behind the numbers—enabling smarter product, packaging, and messaging decisions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#7AC943] mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <strong className="text-gray-900">Segmentation & Targeting Guidance</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      We identify high-value consumer segments (e.g. health-driven parents) and recommend positioning strategies that maximize relevance and ROI.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#7AC943] mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <strong className="text-gray-900">Sustainability Narrative Support</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      We connect research insights to ESG storytelling, helping clients substantiate claims and avoid greenwashing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#7AC943] mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <strong className="text-gray-900">Opportunity Scoping & Innovation Input</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      From circular packaging to functional ingredient shifts, we uncover emerging needs and innovation whitespace through the lens of consumer behavior.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src="/images/laptop.png"
                alt="EcoFocus laptop"
                className="rounded-lg mx-auto max-w-sm sm:max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We believe sustainable success comes from aligning strategic clarity with environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center max-w-xs mx-auto">
              <div className="w-16 h-16 bg-[#0072CE]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-compass-3-line text-[#0072CE] text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Strategic Clarity</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We help organizations define clear strategic direction based on data-driven insights and market realities.
              </p>
            </div>

            <div className="text-center max-w-xs mx-auto">
              <div className="w-16 h-16 bg-[#7AC943]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-[#7AC943] text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Sustainable Growth</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our sustainability expertise ensures growth strategies align with environmental responsibility and future resilience.
              </p>
            </div>

            <div className="text-center max-w-xs mx-auto">
              <div className="w-16 h-16 bg-[#F2C300]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-[#F2C300] text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Practical Innovation</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We translate complex challenges into actionable solutions that drive both performance and positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Work Together?</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
            Let's discuss how Forward Focus can help your organization navigate complexity and build sustainable success.
          </p>
          <Link
            href="/contact"
            className="text-[#F2C300] font-medium text-base sm:text-lg underline underline-offset-4 hover:text-yellow-400 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

