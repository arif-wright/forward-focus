'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/85 shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Tagline */}
        <div className="flex items-center gap-3">
          <Image src="/images/forward-focus-logo.svg" alt="Forward Focus Logo" width={36} height={36} />
          <div className="flex flex-col leading-tight">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              Forward<span className="text-[#00AEEF]">Focus</span>
            </h1>
            <span className="text-xs sm:text-sm text-gray-700">
              Strategic & Sustainability Consulting
            </span>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#0072CE] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'EcoFocus', href: '/ecofocus' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative group text-gray-800 font-medium"
            >
              {label}
              <span className="block h-0.5 bg-[#7AC943] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-4 text-[#0072CE] font-medium tracking-tight hover:underline underline-offset-4 transition-colors"
          >
            Let’s Talk
          </Link>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-800">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'EcoFocus', href: '/ecofocus' },
            { label: "Let’s Talk", href: '/contact', highlight: true },
          ].map(({ label, href, highlight }) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 py-2 text-sm font-medium ${highlight ? 'text-[#0072CE]' : 'text-gray-800'} hover:underline`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}


