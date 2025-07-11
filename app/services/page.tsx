'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Comprehensive consulting solutions that bridge strategic excellence with sustainable innovation.
          </p>
        </div>
      </section>

      {/* Strategic Consulting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-16 h-16 bg-[#0072CE]/10 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-[#0072CE] text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Consulting</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Navigate complexity with proven frameworks and executive-level insights. Our strategic consulting
                services help organizations make informed decisions that drive sustainable growth and competitive advantage.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#0072CE] font-semibold hover:text-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Discuss Your Strategy
                <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>
            <div>
              <img
                src="/images/04f2c057-8ea8-4b51-bcdf-dbbe028a37b7_large.png"
                alt="Strategic Consulting Session"
                className="rounded-xl shadow-lg object-cover w-full h-80 object-top"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-rocket-line text-[#0072CE] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop scalable growth frameworks that align with market opportunities and organizational capabilities.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-door-open-line text-[#0072CE] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exit Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Plan and execute strategic exits that maximize value for stakeholders and ensure smooth transitions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-presentation-line text-[#0072CE] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sales Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimize sales processes and go-to-market strategies for improved performance and customer acquisition.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-refresh-line text-[#0072CE] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Transformation</h3>
              <p className="text-gray-600 leading-relaxed">
                Guide organizations through critical transformations with minimal disruption and maximum impact.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-focus-3-line text-[#0072CE] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand & Market Clarity</h3>
              <p className="text-gray-600 leading-relaxed">
                Define clear brand positioning and market strategy that resonates with target audiences.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0072CE]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-team-line text-[#0072CE] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership Advisory</h3>
              <p className="text-gray-600 leading-relaxed">
                Provide senior executives with strategic guidance and decision-making support for complex challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Consulting */}
      <section className="py-20 bg-[#7AC943]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="/images/fb618b26-a214-4aea-ac6a-68a6998d4229_0.png"
                alt="Sustainability Consulting"
                className="rounded-xl shadow-lg object-cover w-full h-80 object-top"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-[#7AC943]/10 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-leaf-line text-[#7AC943] text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainability Consulting</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Data-driven sustainability strategies powered by EcoFocus Worldwide research. We help organizations
                align environmental responsibility with business performance, creating value for all stakeholders.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#7AC943] font-semibold hover:text-green-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Explore Sustainability Solutions
                <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#7AC943]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-[#7AC943] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ESG Strategy & Implementation</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop comprehensive ESG frameworks that meet stakeholder expectations and regulatory requirements.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#7AC943]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-cloud-line text-[#7AC943] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Carbon Footprint Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive carbon assessments with actionable reduction strategies and offset recommendations.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#7AC943]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-truck-line text-[#7AC943] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Supply Chain</h3>
              <p className="text-gray-600 leading-relaxed">
                Design resilient supply chains that minimize environmental impact while optimizing efficiency.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#7AC943]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-bar-chart-line text-[#7AC943] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impact Measurement</h3>
              <p className="text-gray-600 leading-relaxed">
                Establish metrics and reporting systems to track and communicate sustainability performance.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#7AC943]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-lightbulb-line text-[#7AC943] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Green Innovation Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify and develop sustainable innovation opportunities that create competitive advantage.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#7AC943]/10 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-file-text-line text-[#7AC943] w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Navigate evolving environmental regulations with proactive compliance strategies and risk management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach that combines strategic rigor with practical implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0072CE] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                Deep dive into your organization's challenges, opportunities, and strategic objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#7AC943] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Analysis</h3>
              <p className="text-gray-600 text-sm">
                Data-driven assessment using proprietary frameworks and EcoFocus research insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2C300] text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Develop actionable strategies that align with your vision and market realities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Support execution with ongoing guidance, monitoring, and adaptive refinements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how our strategic and sustainability consulting services can help your organization thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#F2C300] text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors cursor-pointer whitespace-nowrap"
            >
              Schedule a Consultation
              <i className="ri-calendar-line ml-2 w-5 h-5 flex items-center justify-center"></i>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap"
            >
              Learn More About Us
              <i className="ri-arrow-right-line ml-2 w-5 h-5 flex items-center justify-center"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}