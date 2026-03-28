'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { getMediaUrl } from '@/lib/media';

export default function FoundersPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight" style={{ color: 'var(--foreground)' }}>
            {t.founders.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: 'var(--foreground-light)' }}>
            {t.founders.subtitle}
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Gevorg Xachatryan */}
            <div className="card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative w-full aspect-[3/4] mb-6 rounded-t-xl overflow-hidden">
                <Image
                  src={getMediaUrl('/faunders.jpeg')}
                  alt="Gevorg Xachatryan - Founder of Arm Dance Show Ballet"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-10">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--primary)' }}>{t.founders.gevorg}</h2>
                  <p className="font-semibold text-sm uppercase tracking-wider" style={{ color: 'var(--secondary)' }}>{t.founders.gevorgRole}</p>
                </div>
                <div className="space-y-5 font-light leading-relaxed text-base" style={{ color: 'var(--foreground-light)' }}>
                  <p>{t.founders.gevorgDesc1}</p>
                  <p>{t.founders.gevorgDesc2}</p>
                  <p>{t.founders.gevorgDesc3}</p>
                </div>
              </div>
            </div>

            {/* Lilit Xachatryan */}
            <div className="card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative w-full aspect-[3/4] mb-6 rounded-t-xl overflow-hidden">
                <Image
                  src={getMediaUrl('/faunders.jpeg')}
                  alt="Lilit Xachatryan - Founder of Arm Dance Show Ballet"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-10">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--secondary)' }}>{t.founders.lilit}</h2>
                  <p className="font-semibold text-sm uppercase tracking-wider" style={{ color: 'var(--secondary)' }}>{t.founders.lilitRole}</p>
                </div>
                <div className="space-y-5 font-light leading-relaxed text-base" style={{ color: 'var(--foreground-light)' }}>
                  <p>{t.founders.lilitDesc1}</p>
                  <p>{t.founders.lilitDesc2}</p>
                  <p>{t.founders.lilitDesc3}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Studio Story */}
          <div className="card rounded-xl p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center tracking-tight" style={{ color: 'var(--foreground)' }}>
              {t.founders.studioStory}
            </h2>
            <div className="max-w-4xl mx-auto space-y-8 font-light leading-relaxed" style={{ color: 'var(--foreground-light)' }}>
              <p className="text-lg">{t.founders.studioStory1}</p>
              <p className="text-lg">{t.founders.studioStory2}</p>
              <p className="text-lg">{t.founders.studioStory3}</p>
              <p className="text-lg">{t.founders.studioStory4}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
