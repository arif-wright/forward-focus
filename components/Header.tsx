// components/Header.tsx

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/85 shadow-sm px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between">
      {/* Logo Block */}
      <div className="flex items-center gap-3 leading-tight">
        {/* Actual logo image */}
        <div className="relative w-10 h-10">
          <Image
            src="images/ff-logo.png"
            alt="Forward Focus logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900">
            Forward<span className="text-[#00AEEF]">Focus</span>
          </h1>
          <span className="text-sm text-gray-700 -mt-1">
            Strategic & Sustainability Consulting
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap gap-6 mt-4 md:mt-0 md:items-center">
        {[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'EcoFocus', href: 'https://www.ecofocusworldwide.com/' },
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

        {/* Logo-inspired CTA */}
        <Link
          href="/contact"
          className="ml-4 text-[#0072CE] font-medium tracking-tight hover:underline underline-offset-4 transition-colors"
        >
          Let’s Talk
        </Link>
      </nav>

    </header>
  );
}

