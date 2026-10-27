import React, { useState } from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { 
  Home, 
  Utensils, 
  Car, 
  BookOpen, 
  Video, 
  Check, 
  HeartHandshake
} from 'lucide-react';

interface MinistriesSectionProps {
  language: Language;
  onRequestService?: (ministryId: string) => void;
  hideHeader?: boolean;
}

export const MinistriesSection: React.FC<MinistriesSectionProps> = ({
  language,
  hideHeader = false,
}) => {
  const t = translations[language];
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getMinistryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-4 h-4" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4" />;
      case 'Car':
        return <Car className="w-4 h-4" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4" />;
      case 'Video':
        return <Video className="w-4 h-4" />;
      default:
        return <HeartHandshake className="w-4 h-4" />;
    }
  };

  const filteredItems = selectedFilter === 'all'
    ? t.ministries.items
    : t.ministries.items.filter((item) => item.id === selectedFilter);

  return (
    <section id="ministries" className={`${hideHeader ? 'py-16 sm:py-20' : 'py-24 sm:py-32'} bg-[#FBFBF8] border-b border-slate-200/70`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Generous Negative Space */}
        {!hideHeader && (
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-3">
              MINISTRY PROGRAMS & INITIATIVES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              {t.ministries.sectionTitle}
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              {t.ministries.sectionSubtitle}
            </p>
          </div>
        )}

        {/* Filter Controls: Linear-style Segmented Buttons (Functional interactive filters) */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 bg-slate-100/80 p-1.5 rounded-[8px] border border-slate-200/80 w-fit max-w-full">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 sm:px-3.5 py-1.5 rounded-[6px] text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {language === 'zh' ? '全部 5 大事工' : 'All 5 Ministries'}
          </button>
          {t.ministries.items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedFilter(item.id)}
              className={`px-3 sm:px-3.5 py-1.5 rounded-[6px] text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedFilter === item.id
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {getMinistryIcon(item.icon)}
              <span>{language === 'zh' ? item.titleZh : item.titleEn}</span>
            </button>
          ))}
        </div>

        {/* Ministry Cards with 8px radius, generous padding & subtle diffuse shadows */}
        <div className="space-y-8 sm:space-y-10">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="craft-card p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center"
            >
              {/* Image side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-[8px] overflow-hidden border border-slate-200/80 h-64 sm:h-72 lg:h-80 shadow-xs">
                  <img
                    src={item.image}
                    alt={language === 'zh'
                      ? `${item.titleZh} - ${item.tagZh} | 能量泉社区关怀事工`
                      : `${item.titleEn} - ${item.tagEn} | Power Spring Ministries`}
                    title={language === 'zh' ? item.titleZh : item.titleEn}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Clean unboxed tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-[6px] border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs flex items-center gap-1.5 max-w-[calc(100%-24px)]">
                    <span className="text-primary-theme shrink-0">{getMinistryIcon(item.icon)}</span>
                    <span className="truncate">{language === 'zh' ? item.tagZh : item.tagEn}</span>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={`lg:col-span-7 space-y-4 sm:space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-100">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="text-slate-400 font-mono text-base font-normal">0{idx + 1}.</span>
                    <span>{language === 'zh' ? item.titleZh : item.titleEn}</span>
                  </h3>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-[4px] bg-slate-100 text-slate-700 w-fit">
                    {language === 'zh' ? item.keyStatZh : item.keyStatEn}
                  </span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {language === 'zh' ? item.summaryZh : item.summaryEn}
                </p>

                {/* Bullet Points */}
                <div className="bg-slate-50/80 rounded-[6px] p-5 border border-slate-100">
                  <div className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3 font-mono">
                    {language === 'zh' ? '服务具体内容 (Services Provided):' : 'Key Offerings & Impact:'}
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {(language === 'zh' ? item.detailsZh : item.detailsEn).map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-primary-theme shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
