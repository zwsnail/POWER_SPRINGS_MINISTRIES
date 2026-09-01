import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { APP_IMAGES } from '../assets/images';
import { Video, Calendar, Users, CheckCircle, Sparkles, ArrowRight, Shield } from 'lucide-react';

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Details & Action */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              <span>{s.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {s.title}
            </h2>

            <p className="text-amber-300 font-medium text-sm sm:text-base">
              {s.subtitle}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
              {s.desc}
            </p>

            {/* Time & Attendance Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 p-3 rounded-xl">
                <Calendar className="w-5 h-5 text-sky-400 shrink-0" />
                <div className="text-xs">
                  <div className="text-slate-400">{language === 'zh' ? '讲座时间' : 'Schedule'}</div>
                  <div className="text-white font-semibold">{s.scheduleTime}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 p-3 rounded-xl">
                <Users className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-xs">
                  <div className="text-slate-400">{language === 'zh' ? '交流规模' : 'Community'}</div>
                  <div className="text-white font-semibold">{s.attendeeCount}</div>
                </div>
              </div>
            </div>

            {/* Features check list */}
            <ul className="space-y-2 pt-1 text-xs text-slate-300">
              {s.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onJoinZoom}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer hover:scale-102"
              >
                <Video className="w-4 h-4" />
                <span>{s.btnJoin}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Cartoon Illustration of Zoom Pastoral Care */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 p-2">
              <img
                src={APP_IMAGES.counseling}
                alt="Saturday Zoom Pastoral Counseling with Philip & Dora Wu"
                className="w-full h-72 sm:h-80 object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 text-xs flex items-center gap-3">
                <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white">
                    {language === 'zh' ? '主领教牧：Philip & Dora Wu 牧师' : 'Led by Rev. Philip & Dora Wu'}
                  </div>
                  <div className="text-slate-400 text-[11px]">
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
