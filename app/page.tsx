'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/6148022a-3cb0-4baf-9d89-8884d1722e0a_0.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-md rounded-md p-6 sm:p-8 shadow-md max-w-2xl">
              <div className="h-1 w-16 bg-[#F2C300] rounded-full mb-4"></div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Strategy Backed by Experience.{' '}
                <span className="text-[#007A33]">Sustainability Informed by Data.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Forward Focus is a boutique consulting firm helping organizations navigate complexity,
                define their next chapter, and align purpose with performance. From boardrooms to emerging brands,
                we bring decades of hands-on business insight and a data-rich sustainability lens.
              </p>
              <Link
                href="/contact"
                className="text-[#0072CE] font-medium text-base sm:text-lg underline underline-offset-4 hover:text-[#005fa3] transition-colors"
              >
                Let’s Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Forward Focus */}
      <section className="py-12 sm:py-20 bg-[#F9FAFB] border-t-4 border-[#F2C300]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-4xl mx-auto text-left">
            <span className="inline-block mb-2 text-sm font-medium text-[#0072CE] uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">About Forward Focus</h2>
            <div className="flex items-center mb-6">
              <div className="w-2 h-2 bg-[#F2C300] rounded-full mr-2" />
              <p className="italic text-gray-600 text-sm sm:text-base">
                “Helping organizations define what’s next — and deliver it with purpose.”
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-[#0072CE] rounded-sm" />
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Forward Focus operates at the intersection of strategic clarity and sustainable growth.
                Our dual focus on traditional business strategy and sustainability consulting allows us to
                help organizations not just succeed today, but thrive tomorrow. We partner with companies
                across all stages—from ambitious startups to established enterprises—delivering actionable
                insights backed by decades of executive experience and rigorous data analysis from our
                research partner, EcoFocus Worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <span className="inline-block mb-2 text-sm font-medium text-[#0072CE] uppercase tracking-wider">
              Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Two complementary consulting practices designed to drive sustainable growth and strategic clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Strategic Consulting */}
            <div className="border-l-4 border-[#0072CE] rounded-md p-6 sm:p-8 hover:shadow-sm transition-shadow max-w-xl mx-auto">
              <span className="inline-block text-xs font-semibold text-[#F2C300] uppercase tracking-wide mb-2">
                Strategy
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Strategic Consulting</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Navigate complexity with proven frameworks and executive-level insights that drive measurable results.
              </p>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start"><span className="text-[#7AC943] mr-2">✓</span> Growth Strategy Development</li>
                <li className="flex items-start"><span className="text-[#7AC943] mr-2">✓</span> Exit Strategy Planning</li>
                <li className="flex items-start"><span className="text-[#7AC943] mr-2">✓</span> Sales Strategy Optimization</li>
                <li className="flex items-start"><span className="text-[#7AC943] mr-2">✓</span> Business Transformation</li>
                <li className="flex items-start"><span className="text-[#7AC943] mr-2">✓</span> Brand & Market Clarity</li>
              </ul>
            </div>

            {/* Sustainability Consulting */}
            <div className="border-l-4 border-[#7AC943] rounded-md p-6 sm:p-8 hover:shadow-sm transition-shadow max-w-xl mx-auto">
              <span className="inline-block text-xs font-semibold text-[#F2C300] uppercase tracking-wide mb-2">
                Sustainability
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Sustainability Consulting</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Data-driven sustainability strategies that align environmental responsibility with business performance.
              </p>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start"><span className="text-[#7AC943] mr-2">✓</span> Data-Driven Strategy Development</li>
                <li className="flex items-start"><span className="text-[#7AC943] mr-2">✓</span> Custom Insights & Trend Interpretation</li>
                <li className="flex items-start"><span className="text-[#7AC943] mr-2">✓</span> Segmentation & Targeting Guidance</li>
                <li className="flex items-start"><span className="text-[#7AC943] mr-2">✓</span> Sustainability Narrative Support</li>
                <li className="flex items-start"><span className="text-[#7AC943] mr-2">✓</span> Innovation Input Powered by EcoFocus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EcoFocus Partnership */}
      <section className="py-12 sm:py-20 bg-[#0072CE]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block mb-2 text-sm font-medium text-[#F2C300] uppercase tracking-wider">
                Research Partnership
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Powered by EcoFocus Worldwide</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Our sustainability consulting is uniquely informed by our partnership with EcoFocus Worldwide,
                a leading research organization specializing in consumer attitudes and behaviors since 2010. This collaboration ensures our recommendations are grounded in the latest research, market trends, and regulatory developments.
              </p>
              <p className="text-sm text-gray-600">
                Together, we offer data-driven insights that enable meaningful change.
              </p>
            </div>
            <div className="order-1 lg:order-2 text-center">
              <Image
                src="/images/07a5c41c-2a00-446b-8c30-f8f9a3bc2fbf_0.png"
                alt="EcoFocus Research Dashboard"
                width={500}
                height={400}
                className="rounded-lg shadow object-cover w-full max-w-sm mx-auto h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-900 to-[#001F3F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Move Forward?</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
            Whether you're looking to scale strategically or build a more sustainable future,
            we're here to help you navigate the path ahead.
          </p>
          <Link
            href="/contact"
            className="text-[#F2C300] font-medium text-base sm:text-lg underline underline-offset-4 hover:text-yellow-400 transition-colors"
          >
            Start the Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}


