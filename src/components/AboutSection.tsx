import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { 
  UserCheck, 
  Video, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  MapPin, 
  Globe, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Compass
} from 'lucide-react';
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
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18 flex flex-col items-center">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-3">
              {language === 'zh' ? '使命与创立初衷' : 'MISSION & FOUNDING PURPOSE'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight text-center">
              {a.sectionTitle}
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-light max-w-2xl text-center">
              {a.sectionSubtitle}
            </p>
          </div>
        )}

        {/* 1. Official Mission Statement Plaque */}
        <div className="craft-card p-6 sm:p-12 lg:p-14 mb-16 bg-white border-t-4 border-t-accent-theme relative overflow-hidden shadow-sm text-center flex flex-col items-center">
          {/* Subtle Background Watermark */}
          <div className="absolute top-4 right-6 pointer-events-none opacity-5 text-accent-theme">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 bg-accent-theme/10 rounded-full border border-accent-theme/30 text-accent-theme font-medium text-xs tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{a.officialMissionTitle}</span>
            </div>

            {/* Localized Mission Statement */}
            <div className="w-full">
              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-slate-900 font-bold leading-relaxed sm:leading-snug tracking-tight border-y border-accent-theme/30 py-5 px-4 sm:px-6 text-center max-w-3xl mx-auto">
                {language === 'zh' ? `“${a.officialMissionQuoteZh}”` : `"${a.officialMissionQuoteEn}"`}
              </blockquote>
            </div>
          </div>
        </div>

        {/* 2. Target Audience: The SSFI Breakdown */}
        <div className="mb-20 space-y-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-2">
              {language === 'zh' ? '关怀服事群体' : 'TARGET COMMUNITY FOCUS'}
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight text-center">
              {a.ssfiTitle}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-light max-w-2xl mx-auto text-center">
              {a.ssfiSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.ssfiItems.map((item, idx) => (
              <div 
                key={idx}
                className="craft-card p-6 sm:p-7 bg-white flex flex-col justify-between hover:border-primary-theme/50 transition-colors shadow-2xs text-center"
              >
                <div>
                  <h4 className="font-serif font-bold text-lg text-slate-900 mb-2 tracking-tight text-center">
                    {language === 'zh' ? item.groupZh : item.groupEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light text-center">
                    {language === 'zh' ? item.descZh : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The Three-Stage Journey of Empowerment: Settle Down · Build Up · Thrive */}
        <div className="mb-20 space-y-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-2">
              {language === 'zh' ? '赋能三阶段路径' : 'THREE-STAGE EMPOWERMENT PATHWAY'}
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight text-center">
              {a.pathwayTitle}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-light max-w-2xl mx-auto text-center">
              {a.pathwaySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {a.pathways.map((path) => (
              <div 
                key={path.key} 
                className="craft-card p-6 sm:p-8 bg-white flex flex-col justify-between border-t-2 border-t-primary-theme shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {language === 'zh' ? `阶段 ${path.step}` : `STAGE ${path.step}`}
                    </span>
                    <span className="text-xs text-accent-theme font-medium font-mono">
                      {language === 'zh' ? path.tagZh : path.tagEn}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 tracking-tight mb-2">
                    {language === 'zh' ? path.titleZh : path.titleEn}
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-6">
                    {language === 'zh' ? path.descZh : path.descEn}
                  </p>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                      {language === 'zh' ? '涵盖具体服务:' : 'Key Offerings:'}
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {(language === 'zh' ? path.pointsZh : path.pointsEn).map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-theme shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Mission & Vision Calling Block (Values) */}
        <div className="craft-card p-8 sm:p-14 mb-20 bg-white">
          <div className="max-w-3xl mx-auto text-center space-y-4 flex flex-col items-center">
            <div className="text-xs uppercase tracking-widest text-accent-theme font-mono font-semibold flex items-center justify-center gap-2">
              <Compass className="w-4 h-4 text-accent-theme" />
              <span>{language === 'zh' ? '使命异象与核心价值观' : 'OUR CALLING · MISSION & VALUES'}</span>
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight text-center">
              {a.missionTitle}
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light text-center">
              {a.missionText}
            </p>
          </div>

          {/* 3 Values: Editorial Tri-Column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-10 border-t border-slate-100">
            {a.values.map((val, idx) => {
              const romanNumerals = ['01', '02', '03'];
              return (
                <div key={idx} className="space-y-2 text-center flex flex-col items-center">
                  <div className="font-mono font-medium text-slate-400 text-xs tracking-wider">
                    {romanNumerals[idx]}.
                  </div>
                  <h4 className="font-serif font-bold text-slate-900 text-lg sm:text-xl tracking-tight text-center">
                    {language === 'zh' ? val.titleZh : val.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light text-center">
                    {language === 'zh' ? val.descZh : val.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership & Pastoral Team */}
        <div className="space-y-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-2">
              {language === 'zh' ? '机构负责人与同工团队' : 'STEWARDSHIP & LEADERSHIP'}
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight text-center">
              {a.leadershipTitle}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-light text-center">
              {a.leadershipSubtitle}
            </p>
          </div>

          <div className={`grid grid-cols-1 ${a.leaders.length > 1 ? 'md:grid-cols-2 max-w-5xl' : 'max-w-2xl'} gap-8 mx-auto`}>
            {a.leaders.map((leader, idx) => (
              <div
                key={idx}
                className="craft-card p-8 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 mb-5">
                    <div className="w-14 h-14 rounded-[8px] bg-slate-900 text-accent-theme flex items-center justify-center font-serif font-bold text-xl border border-slate-800 shrink-0 shadow-xs mx-auto sm:mx-0">
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

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-4 border-t border-slate-100 font-light text-center sm:text-left">
                    {language === 'zh' ? leader.bioZh : leader.bioEn}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-3">
                  <span className="text-slate-500 font-medium flex items-center justify-center sm:justify-start gap-2">
                    {idx === 0 ? <UserCheck className="w-4 h-4 text-primary-theme shrink-0" /> : <Video className="w-4 h-4 text-primary-theme shrink-0" />}
                    <span className="leading-relaxed">{language === 'zh' ? leader.contactNoteZh : leader.contactNoteEn}</span>
                  </span>
                  {idx === 0 && (
                    <button
                      onClick={onContactDirector}
                      className="text-primary-theme font-semibold hover:underline cursor-pointer flex items-center justify-center sm:justify-start gap-1 font-mono text-xs shrink-0 self-center sm:self-auto"
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
            <div className="max-w-3xl mx-auto text-center space-y-2 flex flex-col items-center">
              <div className="text-xs uppercase tracking-widest text-accent-theme font-mono font-semibold flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-theme shrink-0" />
                <span>{language === 'zh' ? '机构法人资质与合规治理' : 'LEGAL INCORPORATION & GOVERNANCE'}</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight text-center">
                {language === 'zh' ? '非营利公共慈善机构资质认定' : 'IRS 501(c)(3) Public Charity Certification'}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light text-center">
                {language === 'zh'
                  ? 'POWER SPRING MINISTRIES INC 依据美国《国内税收法》第 501(c)(3) 条款合法注册设立，享有联邦与州所得税豁免资质。所有关怀活动均遵循非营利与公开透明原则，受公众监督。'
                  : 'POWER SPRING MINISTRIES INC is an officially incorporated non-profit public charity recognized under Section 501(c)(3) of the US Internal Revenue Code. All activities strictly adhere to non-profit governance, public benefit, and fiscal transparency.'}
              </p>
            </div>

            {/* 4-Item Archival Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-100">
              {/* Item 1: Legal Name */}
              <div className="space-y-1.5 text-center flex flex-col items-center">
                <div className="text-xs font-mono font-medium text-slate-400 flex items-center justify-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{language === 'zh' ? '法定注册全称' : 'Legal Entity Name'}</span>
                </div>
                <div className="font-serif font-bold text-slate-900 text-base text-center">
                  {ORGANIZATION_DETAILS.legalName}
                </div>
                <div className="text-xs text-slate-500 text-center">
                  {language === 'zh' ? '中文品牌: 能量泉' : 'DBA: Power Spring Ministries'}
                </div>
              </div>

              {/* Item 2: Charity ID / EIN */}
              <div className="space-y-1.5 text-center flex flex-col items-center">
                <div className="text-xs font-mono font-medium text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-theme shrink-0" />
                  <span>{language === 'zh' ? '慈善机构代码' : 'Charity ID / IRS EIN'}</span>
                </div>
                <div className="font-mono font-bold text-slate-900 text-base text-center">
                  {ORGANIZATION_DETAILS.charityId}
                </div>
                <div className="text-xs text-slate-500 text-center">
                  {language === 'zh' ? '免税公共慈善机构' : '501(c)(3) Public Charity'}
                </div>
              </div>

              {/* Item 3: Registered Physical Address */}
              <div className="space-y-1.5 text-center flex flex-col items-center">
                <div className="text-xs font-mono font-medium text-slate-400 flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary-theme shrink-0" />
                  <span>{language === 'zh' ? '注册实体地址' : 'Physical Address'}</span>
                </div>
                <div className="font-mono text-xs sm:text-sm text-slate-800 font-medium leading-snug text-center">
                  {ORGANIZATION_DETAILS.address.fullFormatted}
                </div>
                <div className="text-xs text-slate-500 text-center">
                  {language === 'zh' ? '总部所在行政区' : 'Headquarters'}
                </div>
              </div>

              {/* Item 4: Verified Domain */}
              <div className="space-y-1.5 text-center flex flex-col items-center">
                <div className="text-xs font-mono font-medium text-slate-400 flex items-center justify-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{language === 'zh' ? '官方唯一主域名' : 'Official Primary Domain'}</span>
                </div>
                <div className="font-mono font-bold text-slate-900 text-base text-center">
                  {ORGANIZATION_DETAILS.officialDomain}
                </div>
                <div className="text-xs text-emerald-700 font-medium text-center">
                  {language === 'zh' ? '✓ 全权拥有并运营' : '✓ Owned & Operated'}
                </div>
              </div>
            </div>

            {/* Official Ownership Footer Strip */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs text-xs text-slate-600 leading-relaxed text-center">
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
