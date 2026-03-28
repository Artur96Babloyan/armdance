'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getMediaUrl, SITE_LOGO_PATH } from '@/lib/media';

const galleryImagePaths = [
  '/IMG_6579.jpeg',
  '/IMG_6725.jpeg',
  '/IMG_6731.jpeg',
  '/IMG_6737.jpeg',
  '/5S5A4242.jpg',
  '/5S5A4298.jpg',
  '/5S5A4388.jpg',
  '/5S5A4396.jpg',
  '/5S5A4406.jpg',
  '/IMG_0996.JPG',
  '/IMG_6512.jpeg',
] as const;

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src={getMediaUrl(SITE_LOGO_PATH)}
            alt="Armenian Dance Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 z-0"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-50 text-primary" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
              Armenian Heritage
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-8 font-bold tracking-tight leading-tight" style={{ color: 'var(--foreground)' }}>
            {t.home.subtitle}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed" style={{ color: 'var(--foreground-light)' }}>
            {t.home.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-10 py-4 text-white rounded-lg text-base font-semibold transition-all duration-300 btn-primary shadow-lg hover:shadow-xl"
            >
              {t.home.learnMore}
            </Link>
            <Link
              href="/review"
              className="px-10 py-4 rounded-lg text-base font-semibold transition-all duration-300 bg-white border-2 hover:bg-gray-50 hover:border-primary shadow-sm hover:shadow-md"
              style={{ color: 'var(--primary)', borderColor: 'var(--primary-light)' }}
            >
              {t.home.shareExperience}
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section - Kids Dancing */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight" style={{ color: 'var(--foreground)' }}>
              Our Dancers
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Talented performers preserving Armenian dance traditions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImagePaths.map((path) => (
              <div
                key={path}
                className="relative aspect-[3/4] rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={getMediaUrl(path)}
                  alt="Armenian Dance Show - Young Dancers"
                  fill
                  className="object-cover image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced Grid */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight" style={{ color: 'var(--foreground)' }}>
              {t.home.whyChoose}
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Discover what makes our dance school unique
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-10 rounded-xl text-center hover:border-primary transition-all duration-300">
              <div className="text-5xl mb-6 text-center transform hover:scale-110 transition-transform duration-300">🎭</div>
              <h3 className="text-lg font-bold mb-4 text-center" style={{ color: 'var(--primary)' }}>{t.home.traditionalDances}</h3>
              <p className="text-center leading-relaxed font-light" style={{ color: 'var(--foreground-light)' }}>
                {t.home.traditionalDancesDesc}
              </p>
            </div>
            <div className="card p-10 rounded-xl text-center hover:border-secondary transition-all duration-300">
              <div className="text-5xl mb-6 text-center transform hover:scale-110 transition-transform duration-300">👑</div>
              <h3 className="text-lg font-bold mb-4 text-center" style={{ color: 'var(--secondary)' }}>{t.home.masterInstructors}</h3>
              <p className="text-center leading-relaxed font-light" style={{ color: 'var(--foreground-light)' }}>
                {t.home.masterInstructorsDesc}
              </p>
            </div>
            <div className="card p-10 rounded-xl text-center hover:border-secondary transition-all duration-300">
              <div className="text-5xl mb-6 text-center transform hover:scale-110 transition-transform duration-300">🌟</div>
              <h3 className="text-lg font-bold mb-4 text-center" style={{ color: 'var(--secondary)' }}>{t.home.unescoHeritage}</h3>
              <p className="text-center leading-relaxed font-light" style={{ color: 'var(--foreground-light)' }}>
                {t.home.unescoHeritageDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-primary-50 via-white to-secondary-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight" style={{ color: 'var(--foreground)' }}>
            {t.home.getInTouch}
          </h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto" style={{ color: 'var(--foreground-light)' }}>
            {t.home.getInTouchDesc}
          </p>
          <a
            href="#footer"
            className="inline-block px-12 py-4 text-white rounded-lg text-base font-semibold transition-all duration-300 btn-primary shadow-lg hover:shadow-xl"
          >
            {t.home.viewContact}
          </a>
        </div>
      </section>
    </div>
  );
}
