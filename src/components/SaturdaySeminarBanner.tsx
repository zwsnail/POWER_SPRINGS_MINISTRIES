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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Title, Subtitle & Description - Centered */}
        <div className="space-y-4 max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight text-center">
            {s.title}
          </h2>

          <p className="text-accent-theme font-serif text-sm sm:text-base font-medium text-center">
            {s.subtitle}
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light text-center">
            {s.desc}
          </p>

          {/* 3 bullet features - Centered Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs sm:text-sm text-slate-300 font-light">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-theme shrink-0" />
              <span>{s.scheduleTime}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-theme shrink-0" />
              <span>{s.attendeeCount}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-theme shrink-0" />
              <span>{language === 'zh' ? '免费开放 · 严格保密' : 'Free & Confidential'}</span>
            </div>
          </div>

          {/* Centered CTA Button */}
          <div className="pt-2">
            <button
              onClick={onJoinZoom}
              className="btn-accent px-7 py-3 rounded-xs text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-accent-theme/20 transition-all mx-auto"
            >
              <Video className="w-4 h-4" />
              <span>{s.btnJoin}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Framed Archival Illustration - Centered Below */}
        <div className="w-full max-w-2xl mx-auto mt-10 sm:mt-12">
          <div className="relative rounded-[8px] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
            <img
              src={APP_IMAGES.counseling}
              alt={language === 'zh' 
                ? '周六线上心灵关怀与辅导研讨会 - Philip & Dora Wu 牧师主领 | 能量泉' 
                : 'Saturday Zoom Pastoral Counseling with Rev. Philip & Dora Wu | Power Spring Ministries'}
              title={language === 'zh' ? '周六线上心灵辅导讲座' : 'Saturday Pastoral Counseling Seminar'}
              loading="lazy"
              decoding="async"
              className="w-full h-64 sm:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 sm:p-5 bg-[#0d1726] border-t border-white/10 text-xs flex items-center justify-center gap-3.5 text-center">
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
    </section>
  );
};
