import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { UserCheck, Video, ArrowRight, ShieldCheck, Building2, MapPin, Globe } from 'lucide-react';
import { ORGANIZATION_DETAILS } from '../config/organization';

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

        {/* Institutional Governance & Legal Incorporation (Google for Nonprofits Compliance) */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="craft-card p-8 sm:p-12 bg-white space-y-8">
            <div className="max-w-3xl space-y-2">
              <div className="text-xs uppercase tracking-widest text-accent-theme font-mono font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-theme shrink-0" />
                <span>{language === 'zh' ? '机构法人资质与合规治理' : 'LEGAL INCORPORATION & GOVERNANCE'}</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                {language === 'zh' ? '非营利公共慈善机构资质认定' : 'IRS 501(c)(3) Public Charity Certification'}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                {language === 'zh'
                  ? 'POWER SPRING MINISTRIES INC 依据美国《国内税收法》第 501(c)(3) 条款合法注册设立，享有联邦与州所得税豁免资质。所有关怀活动均遵循非营利与公开透明原则，受公众监督。'
                  : 'POWER SPRING MINISTRIES INC is an officially incorporated non-profit public charity recognized under Section 501(c)(3) of the US Internal Revenue Code. All activities strictly adhere to non-profit governance, public benefit, and fiscal transparency.'}
              </p>
            </div>

            {/* 4-Item Archival Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-100">
              {/* Item 1: Legal Name */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-medium text-slate-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{language === 'zh' ? '法定注册全称' : 'Legal Entity Name'}</span>
                </div>
                <div className="font-serif font-bold text-slate-900 text-base">
                  {ORGANIZATION_DETAILS.legalName}
                </div>
                <div className="text-xs text-slate-500">
                  {language === 'zh' ? '中文品牌: 能量泉' : 'DBA: Power Spring Ministries'}
                </div>
              </div>

              {/* Item 2: Charity ID / EIN */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-medium text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-theme shrink-0" />
                  <span>{language === 'zh' ? '慈善机构代码 (EIN)' : 'Charity ID / IRS EIN'}</span>
                </div>
                <div className="font-mono font-bold text-slate-900 text-base">
                  {ORGANIZATION_DETAILS.charityId}
                </div>
                <div className="text-xs text-slate-500">
                  {language === 'zh' ? '501(c)(3) 公共慈善机构' : '501(c)(3) Public Charity'}
                </div>
              </div>

              {/* Item 3: Registered Physical Address */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-medium text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary-theme shrink-0" />
                  <span>{language === 'zh' ? '注册实体地址' : 'Physical Address'}</span>
                </div>
                <div className="font-mono text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                  {ORGANIZATION_DETAILS.address.fullFormatted}
                </div>
                <div className="text-xs text-slate-500">
                  {language === 'zh' ? '总部所在行政区' : 'Headquarters'}
                </div>
              </div>

              {/* Item 4: Verified Domain */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-medium text-slate-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{language === 'zh' ? '官方唯一主域名' : 'Official Primary Domain'}</span>
                </div>
                <div className="font-mono font-bold text-slate-900 text-base">
                  {ORGANIZATION_DETAILS.officialDomain}
                </div>
                <div className="text-xs text-emerald-700 font-medium">
                  {language === 'zh' ? '✓ 全权拥有并运营' : '✓ Owned & Operated'}
                </div>
              </div>
            </div>

            {/* Official Ownership Footer Strip */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-800">
                {language === 'zh' ? '域名确权声明: ' : 'Domain Ownership Declaration: '}
              </span>
              <span>
                {language === 'zh' ? ORGANIZATION_DETAILS.domainOwnershipZh : ORGANIZATION_DETAILS.domainOwnershipEn}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
