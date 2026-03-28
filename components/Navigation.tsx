'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { SITE_LOGO_PATH } from '@/lib/media';

export default function Navigation() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/founders', label: t.nav.founders },
    { href: '/blog', label: t.nav.blog },
    { href: '/review', label: t.nav.review },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b animate-fade-in shadow-sm" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 shadow-sm group-hover:shadow-md transition-all duration-300" style={{ borderColor: 'var(--primary-light)' }}>
              <Image
                src={SITE_LOGO_PATH}
                alt="Arm Dance Show Ballet Logo"
                fill
                sizes="48px"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
                Arm Dance Show
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>
                Ballet
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-white shadow-md'
                        : 'hover:bg-gray-50'
                    }`}
                    style={
                      isActive
                        ? { 
                            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                          }
                        : { color: 'var(--foreground)' }
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: 'var(--foreground)' }}
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4 animate-fade-in" style={{ borderColor: 'var(--border)' }}>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-white shadow-md'
                        : 'hover:bg-gray-50'
                    }`}
                    style={
                      isActive
                        ? { 
                            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                          }
                        : { color: 'var(--foreground)' }
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

