'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight" style={{ color: 'var(--foreground)' }}>
            {t.about.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: 'var(--foreground-light)' }}>
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="card rounded-xl p-12 shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-center tracking-tight" style={{ color: 'var(--foreground)' }}>
              {t.about.mission}
            </h2>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto font-light" style={{ color: 'var(--foreground-light)' }}>
              {t.about.missionText}
            </p>
          </div>
        </div>
      </section>

      {/* Armenian Culture Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: 'var(--foreground)' }}>
              {t.about.beauty}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--primary)' }}>{t.about.traditionalFolk}</h3>
              <p className="leading-relaxed font-light mb-8 text-base" style={{ color: 'var(--foreground-light)' }}>
                {t.about.traditionalFolkDesc}
              </p>
              <ul className="text-sm font-light space-y-3 list-none" style={{ color: 'var(--foreground-light)' }}>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--primary)' }}></span>
                  <span><strong style={{ color: 'var(--primary)', fontWeight: 600 }}>{t.about.kochari}</strong> - {t.about.kochariDesc}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--primary)' }}></span>
                  <span><strong style={{ color: 'var(--primary)', fontWeight: 600 }}>{t.about.tamzara}</strong> - {t.about.tamzaraDesc}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--primary)' }}></span>
                  <span><strong style={{ color: 'var(--primary)', fontWeight: 600 }}>{t.about.lorke}</strong> - {t.about.lorkeDesc}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--primary)' }}></span>
                  <span><strong style={{ color: 'var(--primary)', fontWeight: 600 }}>{t.about.berd}</strong> - {t.about.berdDesc}</span>
                </li>
              </ul>
            </div>
            <div className="card rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--secondary)' }}>{t.about.culturalSignificance}</h3>
              <p className="leading-relaxed font-light text-base" style={{ color: 'var(--foreground-light)' }}>
                {t.about.culturalSignificanceDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="card rounded-xl p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center tracking-tight" style={{ color: 'var(--foreground)' }}>
              {t.about.ourStory}
            </h2>
            <div className="space-y-8 font-light" style={{ color: 'var(--foreground-light)' }}>
              <p className="text-lg leading-relaxed">
                {t.about.story1}
              </p>
              <p className="text-lg leading-relaxed">
                {t.about.story2}
              </p>
              <p className="text-lg leading-relaxed">
                {t.about.story3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: 'var(--foreground)' }}>
              {t.about.ourValues}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card rounded-xl p-10 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary">
              <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--primary)' }}>{t.about.excellence}</h3>
              <p className="leading-relaxed font-light" style={{ color: 'var(--foreground-light)' }}>
                {t.about.excellenceDesc}
              </p>
            </div>
            <div className="card rounded-xl p-10 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:border-secondary">
              <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">❤️</div>
              <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--secondary)' }}>{t.about.passion}</h3>
              <p className="leading-relaxed font-light" style={{ color: 'var(--foreground-light)' }}>
                {t.about.passionDesc}
              </p>
            </div>
            <div className="card rounded-xl p-10 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:border-secondary">
              <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--secondary)' }}>{t.about.community}</h3>
              <p className="leading-relaxed font-light" style={{ color: 'var(--foreground-light)' }}>
                {t.about.communityDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary-50 via-white to-secondary-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight" style={{ color: 'var(--foreground)' }}>
            {t.about.joinFamily}
          </h2>
          <p className="text-xl mb-10 font-light max-w-2xl mx-auto" style={{ color: 'var(--foreground-light)' }}>
            {t.about.joinFamilyDesc}
          </p>
          <a
            href="/#footer"
            className="inline-block px-12 py-4 text-white rounded-lg text-base font-semibold transition-all duration-300 btn-primary shadow-lg hover:shadow-xl"
          >
            {t.about.contactToday}
          </a>
        </div>
      </section>
    </div>
  );
}
