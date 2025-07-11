'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Tagline */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image src="/images/ff-logo.png" alt="Forward Focus Logo" width={36} height={36} />
              <h1 className="text-2xl font-bold text-gray-900">
                Forward<span className="text-[#00AEEF]">Focus</span>
              </h1>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Strategy backed by experience. Sustainability informed by data.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 uppercase tracking-wide text-xs text-[#0072CE]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-[#0072CE] transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-[#0072CE] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#0072CE] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* EcoFocus Mention */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 uppercase tracking-wide text-xs text-[#007A33]">Partnership</h3>
            <p className="text-gray-600 leading-relaxed">
              Powered by <span className="text-[#007A33] font-medium"><Link href="https://www.ecofocusworldwide.com/">EcoFocus Worldwide</Link></span> — delivering research-driven sustainability insights that inform every engagement.
            </p>
          </div>
        </div>

        {/* Divider + Legal */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500">
          <p>© 2025 Forward Focus. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-[#0072CE] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#0072CE] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
