import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { APP_IMAGES } from '../assets/images';
import { Video, Calendar, Users, CheckCircle, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { CornerWaveAccent, ChristianDoveMotif } from './WaterMotifs';

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
    <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 简笔泉浪回纹角饰 (Delicate Spring Wave Corner Motif) */}
      <div className="absolute top-3 right-3 pointer-events-none opacity-20 sm:opacity-25 text-accent-theme">
        <CornerWaveAccent className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>

      {/* 简笔圣灵和平白鸽微水印 (Subtle Holy Spirit Dove Line Art) */}
      <div className="absolute -bottom-2 -left-2 pointer-events-none opacity-15 sm:opacity-20 text-accent-theme">
        <ChristianDoveMotif className="w-36 h-28 sm:w-44 sm:h-32" strokeWidth={1.2} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Details & Action */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent-theme font-mono font-semibold">
              <span>✝</span>
              <span>WEEKLY ZOOM MENTAL HEALTH & COUNSELING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-normal leading-snug">
              {s.title}
            </h2>

            <p className="font-serif text-accent-theme text-sm sm:text-base italic">
              {s.subtitle}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
              {s.desc}
            </p>

            {/* Time & Attendance Highlights: Classical Framing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 p-3 rounded-xs">
                <Calendar className="w-4 h-4 text-primary-theme shrink-0" />
                <div className="text-xs">
                  <div className="text-slate-400 uppercase tracking-wider text-[10px]">{language === 'zh' ? '讲座时间' : 'Schedule'}</div>
                  <div className="text-white font-medium">{s.scheduleTime}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 p-3 rounded-xs">
                <Users className="w-4 h-4 text-accent-theme shrink-0" />
                <div className="text-xs">
                  <div className="text-slate-400 uppercase tracking-wider text-[10px]">{language === 'zh' ? '交流规模' : 'Community'}</div>
                  <div className="text-white font-medium">{s.attendeeCount}</div>
                </div>
              </div>
            </div>

            {/* Features check list */}
            <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
              {s.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button - Uses btn-accent */}
            <div className="pt-2">
              <button
                onClick={onJoinZoom}
                className="btn-accent px-6 py-2.5 rounded-xs text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Video className="w-4 h-4" />
                <span>{s.btnJoin}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Framed Archival Illustration */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xs overflow-hidden border border-slate-700 bg-slate-850 p-1.5 shadow-lg">
              <img
                src={APP_IMAGES.counseling}
                alt="Saturday Zoom Pastoral Counseling with Philip & Dora Wu"
                className="w-full h-72 sm:h-80 object-cover rounded-xs"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 backdrop-blur-md p-3 rounded-xs border border-slate-700 text-xs flex items-center gap-3">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-serif font-semibold text-white">
                    {language === 'zh' ? '主领教牧：Philip & Dora Wu 牧师' : 'Led by Rev. Philip & Dora Wu'}
                  </div>
                  <div className="text-slate-400 text-[11px] font-sans">
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
