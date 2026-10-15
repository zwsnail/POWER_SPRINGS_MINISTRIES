import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { Shield, Heart, Users, CheckCircle2, UserCheck, Video } from 'lucide-react';
import { SpringWaveDivider, CornerWaveAccent, CrossOliveDivider, ChristianCrossMotif } from './WaterMotifs';

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
    <section id="about" className={`${hideHeader ? 'py-12 sm:py-16' : 'py-20'} bg-white border-b border-slate-200/80`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-1">
              MISSION & FOUNDING PURPOSE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-normal">
              {a.sectionTitle}
            </h2>
            <CrossOliveDivider className="my-3" lineWidth="w-12 sm:w-16" />
            <p className="text-slate-600 text-base">
              {a.sectionSubtitle}
            </p>
          </div>
        )}

        {/* Mission & Vision Block: Classical Ledger Plaque with Subtle Water & Cross Motif */}
        <div className="bg-slate-50/70 border border-slate-200 rounded-xs p-8 sm:p-12 mb-16 relative overflow-hidden">
          {/* 简笔水纹角饰 (右上) */}
          <div className="absolute top-2 right-2 pointer-events-none opacity-15 text-accent-theme">
            <CornerWaveAccent className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          {/* 简笔十字架活水微水印 (左下) */}
          <div className="absolute -bottom-6 left-2 pointer-events-none opacity-10 text-accent-theme">
            <ChristianCrossMotif className="w-24 h-32" />
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-3 relative z-10">
            <h3 className="font-serif font-bold text-2xl text-slate-900 tracking-normal">
              {a.missionTitle}
            </h3>
            <CrossOliveDivider className="my-2" lineWidth="w-10 sm:w-14" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {a.missionText}
            </p>
          </div>

          {/* 3 Values: Editorial Tri-Column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-200">
            {a.values.map((val, idx) => {
              const romanNumerals = ['I', 'II', 'III'];
              return (
                <div key={idx} className="bg-white p-6 rounded-xs border border-slate-200 space-y-2">
                  <div className="font-serif font-bold text-slate-400 text-lg mb-1 tracking-wider">
                    {romanNumerals[idx]}.
                  </div>
                  <h4 className="font-serif font-semibold text-slate-900 text-base">
                    {language === 'zh' ? val.titleZh : val.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {language === 'zh' ? val.descZh : val.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership & Pastoral Team */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-1">
              STEWARDSHIP & LEADERSHIP
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-normal">
              {a.leadershipTitle}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              {a.leadershipSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {a.leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xs p-6 sm:p-8 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xs bg-slate-900 text-amber-300 flex items-center justify-center font-serif font-bold text-xl border border-slate-700 shrink-0">
                      {leader.avatarPlaceholder}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl text-slate-900">
                        {language === 'zh' ? leader.nameZh : leader.nameEn}
                      </h4>
                      <div className="text-xs font-medium text-slate-500 mt-0.5">
                        {language === 'zh' ? leader.roleZh : leader.roleEn}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                    {language === 'zh' ? leader.bioZh : leader.bioEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs gap-2">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    {idx === 0 ? <UserCheck className="w-4 h-4 text-emerald-600" /> : <Video className="w-4 h-4 text-purple-600" />}
                    <span>{language === 'zh' ? leader.contactNoteZh : leader.contactNoteEn}</span>
                  </span>
                  {idx === 0 && (
                    <button
                      onClick={onContactDirector}
                      className="text-primary-theme font-semibold hover:underline cursor-pointer"
                    >
                      {language === 'zh' ? '发信交流 →' : 'Connect →'}
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
