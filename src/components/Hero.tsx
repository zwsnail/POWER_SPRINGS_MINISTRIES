import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-850 to-slate-800 text-white py-14 sm:py-20 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {t.hero.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
