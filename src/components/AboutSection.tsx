import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { Sparkles, Shield, Heart, Users, CheckCircle2, UserCheck, Video } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
  onContactDirector: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  language,
  onContactDirector,
}) => {
  const t = translations[language];
  const a = t.about;

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 badge-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{a.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {a.sectionTitle}
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            {a.sectionSubtitle}
          </p>
        </div>

        {/* Mission & Vision Block */}
        <div className="bg-gradient-to-br from-slate-50 to-sky-50/40 border border-slate-200/80 rounded-3xl p-8 sm:p-12 mb-16 shadow-xs">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {a.missionTitle}
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {a.missionText}
            </p>
          </div>

          {/* 3 Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-200/80">
            {a.values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-primary-light-theme text-primary-theme flex items-center justify-center font-bold text-sm mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  {language === 'zh' ? val.titleZh : val.titleEn}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'zh' ? val.descZh : val.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Pastoral Team */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
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
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 text-amber-300 flex items-center justify-center font-black text-xl shadow-md border-2 border-slate-700">
                      {leader.avatarPlaceholder}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {language === 'zh' ? leader.nameZh : leader.nameEn}
                      </h4>
                      <div className="text-xs font-semibold text-primary-theme mt-0.5">
                        {language === 'zh' ? leader.roleZh : leader.roleEn}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {language === 'zh' ? leader.bioZh : leader.bioEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    {idx === 0 ? <UserCheck className="w-4 h-4 text-emerald-600" /> : <Video className="w-4 h-4 text-purple-600" />}
                    <span>{language === 'zh' ? leader.contactNoteZh : leader.contactNoteEn}</span>
                  </span>
                  {idx === 0 && (
                    <button
                      onClick={onContactDirector}
                      className="text-primary-theme font-bold hover:underline cursor-pointer"
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
