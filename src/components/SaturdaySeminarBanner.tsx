import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { APP_IMAGES } from '../assets/images';
import { Video, ArrowRight, Shield } from 'lucide-react';

interface SaturdaySeminarBannerProps {
  language: Language;
  onJoinZoom: () => void;
}

export const SaturdaySeminarBanner: React.FC<SaturdaySeminarBannerProps> = ({
  language,
  onJoinZoom,
}) => {
  const t = translations[language];
  const s = t.saturdaySeminar;

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#091322] text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Streamlined Details & Action (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              {s.title}
            </h2>

            <p className="text-accent-theme font-serif text-sm sm:text-base font-medium">
              {s.subtitle}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              {s.desc}
            </p>

            {/* 3 simple sentences (no button styling, no flashy colorful icons) */}
            <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-300 font-light">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-theme shrink-0 mt-1.5" />
                <span className="leading-relaxed">{s.scheduleTime}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-theme shrink-0 mt-1.5" />
                <span className="leading-relaxed">{s.attendeeCount}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-theme shrink-0 mt-1.5" />
                <span className="leading-relaxed">{language === 'zh' ? '免费开放 · 严格保密' : 'Free & Confidential'}</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onJoinZoom}
                className="btn-accent px-5 py-2.5 rounded-xs text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto shadow-2xs"
              >
                <Video className="w-4 h-4" />
                <span>{s.btnJoin}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Framed Archival Illustration (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[8px] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
              <img
                src={APP_IMAGES.counseling}
                alt={language === 'zh' 
                  ? '周六线上心灵关怀与辅导研讨会 - Philip & Dora Wu 牧师主领 | 能量泉' 
                  : 'Saturday Zoom Pastoral Counseling with Rev. Philip & Dora Wu | Power Spring Ministries'}
                title={language === 'zh' ? '周六线上心灵辅导讲座' : 'Saturday Pastoral Counseling Seminar'}
                loading="lazy"
                decoding="async"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 sm:p-5 bg-[#0d1726] border-t border-white/10 text-xs flex items-center gap-3.5">
                <Shield className="w-5 h-5 text-accent-theme shrink-0" />
                <div>
                  <div className="font-serif font-semibold text-white text-sm">
                    {language === 'zh' ? '主领教牧：Philip & Dora Wu 牧师' : 'Led by Rev. Philip & Dora Wu'}
                  </div>
                  <div className="text-slate-400 text-xs font-sans mt-0.5">
                    {language === 'zh' ? '关怀陪伴 · 保密守诺 · 共同成长' : 'Compassionate, Confidential & Loving Care'}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
