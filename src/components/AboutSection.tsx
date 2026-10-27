import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { UserCheck, Video, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
  onContactDirector: () => void;
  hideHeader?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  language,
  onContactDirector,
  hideHeader = false,
}) => {
  const t = translations[language];
  const a = t.about;

  return (
    <section id="about" className={`${hideHeader ? 'py-16 sm:py-24' : 'py-24 sm:py-32'} bg-[#FBFBF8] border-b border-slate-200/70`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-3">
              MISSION & FOUNDING PURPOSE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              {a.sectionTitle}
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              {a.sectionSubtitle}
            </p>
          </div>
        )}

        {/* Mission & Vision Block: Linear / Vercel Craftsmanship Plaque */}
        <div className="craft-card p-8 sm:p-14 mb-20 bg-white">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-accent-theme font-mono font-semibold">
              OUR CALLING · 异象使命
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              {a.missionTitle}
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              {a.missionText}
            </p>
          </div>

          {/* 3 Values: Editorial Tri-Column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-10 border-t border-slate-100">
            {a.values.map((val, idx) => {
              const romanNumerals = ['01', '02', '03'];
              return (
                <div key={idx} className="space-y-2">
                  <div className="font-mono font-medium text-slate-400 text-xs tracking-wider">
                    {romanNumerals[idx]}.
                  </div>
                  <h4 className="font-serif font-bold text-slate-900 text-lg sm:text-xl tracking-tight">
                    {language === 'zh' ? val.titleZh : val.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {language === 'zh' ? val.descZh : val.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership & Pastoral Team */}
        <div className="space-y-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-2">
              STEWARDSHIP & LEADERSHIP
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              {a.leadershipTitle}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-light">
              {a.leadershipSubtitle}
            </p>
          </div>

          <div className={`grid grid-cols-1 ${a.leaders.length > 1 ? 'md:grid-cols-2 max-w-5xl' : 'max-w-2xl'} gap-8`}>
            {a.leaders.map((leader, idx) => (
              <div
                key={idx}
                className="craft-card p-8 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-[8px] bg-slate-900 text-accent-theme flex items-center justify-center font-serif font-bold text-xl border border-slate-800 shrink-0 shadow-xs">
                      {leader.avatarPlaceholder}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
                        {language === 'zh' ? leader.nameZh : leader.nameEn}
                      </h4>
                      <div className="text-xs font-mono font-medium text-accent-theme mt-0.5">
                        {language === 'zh' ? leader.roleZh : leader.roleEn}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-4 border-t border-slate-100 font-light">
                    {language === 'zh' ? leader.bioZh : leader.bioEn}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-3">
                  <span className="text-slate-500 font-medium flex items-center gap-2">
                    {idx === 0 ? <UserCheck className="w-4 h-4 text-primary-theme shrink-0" /> : <Video className="w-4 h-4 text-primary-theme shrink-0" />}
                    <span className="leading-relaxed">{language === 'zh' ? leader.contactNoteZh : leader.contactNoteEn}</span>
                  </span>
                  {idx === 0 && (
                    <button
                      onClick={onContactDirector}
                      className="text-primary-theme font-semibold hover:underline cursor-pointer flex items-center gap-1 font-mono text-xs shrink-0 self-start sm:self-auto"
                    >
                      <span>{language === 'zh' ? '发信交流' : 'Connect'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
