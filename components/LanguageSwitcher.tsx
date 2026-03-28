'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-[#f5f5f5] rounded-md p-1">
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 ${locale === 'en'
          ? 'text-white'
          : 'text-[#3c4c59] hover:opacity-70'
          }`}
        style={
          locale === 'en'
            ? {
              background: '#789ebf'
            }
            : {}
        }
      >
        EN
      </button>
      <button
        onClick={() => setLocale('hy')}
        className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 ${locale === 'hy'
          ? 'text-white'
          : 'text-[#3c4c59] hover:opacity-70'
          }`}
        style={
          locale === 'hy'
            ? {
              background: '#789ebf'
            }
            : {}
        }
      >
        HY
      </button>
    </div>
  );
}

