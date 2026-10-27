import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { SpringPlumeMotif, ChristianCrossMotif } from './WaterMotifs';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-850 to-slate-800 text-white py-14 sm:py-20 border-b border-slate-700 relative overflow-hidden">
      {/* 极简圣爱活水十字架微水印 (Subtle Clean Christian Cross Watermark on Left) */}
      <div className="absolute -left-6 sm:left-4 lg:left-12 -bottom-6 pointer-events-none opacity-10 sm:opacity-15 text-accent-theme">
        <ChristianCrossMotif className="w-36 h-48 sm:w-44 sm:h-56" strokeWidth={1.0} />
      </div>

      {/* 极简泉水纹样背景微水印 (Subtle Clean Spring Water Watermark on Right) */}
      <div className="absolute right-4 sm:right-12 lg:right-24 top-1/2 -translate-y-1/2 pointer-events-none opacity-10 sm:opacity-15 text-accent-theme">
        <SpringPlumeMotif className="w-48 h-32 sm:w-64 sm:h-44 transition-opacity" strokeWidth={1.0} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div>
            <span className="text-xs sm:text-sm text-accent-theme font-serif tracking-widest font-semibold inline-flex items-center gap-1.5">
              <span>{language === 'zh' ? '主恩如泉 · 润泽社区' : 'Grace Like Living Waters'}</span>
            </span>
          </div>

          {/* Main Headline in Classic Serif */}
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight tracking-normal">
            {t.hero.title}
          </h1>

          {/* Dual-color Classical Divider (Primary Blue + Accent Gold/Bronze/Jade) */}
          <div className="flex items-center gap-2 my-2">
            <div className="w-14 h-0.5 bg-primary-theme" />
            <div className="w-4 h-0.5 bg-accent-theme" />
            <div className="w-1.5 h-0.5 bg-accent-theme/60" />
          </div>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {t.hero.subtitle}
          </p>

          {/* Classical Scripture Motto with Accent Border */}
          <div className="pt-2">
            <blockquote className="border-l-2 border-accent-theme pl-3.5 py-1 text-xs sm:text-sm text-slate-300 italic font-serif bg-white/5 rounded-r-xs max-w-2xl">
              {language === 'zh'
                ? '「神能将各样的恩惠多多的加给你们，使你们凡事常常充足，能多行各样善事。」—— 哥林多后书 9:8'
                : '"And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work." — 2 Cor 9:8'}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
