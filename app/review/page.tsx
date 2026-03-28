'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ReviewPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '5',
    review: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', rating: '5', review: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--foreground)' }}>
              {t.review.title}
            </h1>
            <p className="text-lg max-w-2xl mx-auto font-light leading-relaxed" style={{ color: 'var(--foreground-light)' }}>
              {t.review.subtitle}
            </p>
          </div>

          <div className="card rounded-xl p-12 shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6 transform scale-100 animate-scale">✅</div>
                <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
                  {t.review.thankYou}
                </h2>
                <p className="text-lg font-light leading-relaxed max-w-md mx-auto" style={{ color: 'var(--foreground-light)' }}>
                  {t.review.thankYouDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block font-bold mb-3 text-sm uppercase tracking-wider" style={{ color: 'var(--foreground)' }}>
                    {t.review.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-lg font-light text-base focus:outline-none transition-all duration-300 shadow-sm focus:shadow-md"
                    style={{ background: 'var(--card-bg)', border: '2px solid var(--border)', color: 'var(--foreground)' }}
                    placeholder={t.review.name.replace(' *', '')}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-bold mb-3 text-sm uppercase tracking-wider" style={{ color: 'var(--foreground)' }}>
                    {t.review.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-lg font-light text-base focus:outline-none transition-all duration-300 shadow-sm focus:shadow-md"
                    style={{ background: 'var(--card-bg)', border: '2px solid var(--border)', color: 'var(--foreground)' }}
                    placeholder={t.review.email.replace(' *', '')}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="rating" className="block font-bold mb-3 text-sm uppercase tracking-wider" style={{ color: 'var(--foreground)' }}>
                    {t.review.rating}
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-lg font-light text-base focus:outline-none transition-all duration-300 shadow-sm focus:shadow-md"
                    style={{ background: 'var(--card-bg)', border: '2px solid var(--border)', color: 'var(--foreground)' }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <option value="5">{t.review.excellent}</option>
                    <option value="4">{t.review.veryGood}</option>
                    <option value="3">{t.review.good}</option>
                    <option value="2">{t.review.fair}</option>
                    <option value="1">{t.review.poor}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="review" className="block font-bold mb-3 text-sm uppercase tracking-wider" style={{ color: 'var(--foreground)' }}>
                    {t.review.review}
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-5 py-4 rounded-lg font-light text-base focus:outline-none resize-none transition-all duration-300 shadow-sm focus:shadow-md"
                    style={{ background: 'var(--card-bg)', border: '2px solid var(--border)', color: 'var(--foreground)' }}
                    placeholder={t.review.placeholder}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-white rounded-lg text-base font-semibold transition-all duration-300 btn-primary shadow-lg hover:shadow-xl"
                >
                  {t.review.submit}
                </button>
              </form>
            )}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block card rounded-xl p-10 shadow-md">
              <p className="text-base font-light leading-relaxed" style={{ color: 'var(--foreground-light)' }}>
                <span className="font-bold" style={{ color: 'var(--primary)' }}>Your voice matters!</span>
                {' '}Help us continue to provide exceptional dance education and preserve
                Armenian cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
