import React, { useState } from 'react';
import { translations } from '../locales/translations';
import { Language, MinistryItem } from '../types';
import { 
  Home, 
  Utensils, 
  Car, 
  BookOpen, 
  Video, 
  Check, 
  HeartHandshake
} from 'lucide-react';
import { SpringWaveDivider, CrossOliveDivider } from './WaterMotifs';

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
        return <Home className="w-5 h-5" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Car':
        return <Car className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      default:
        return <HeartHandshake className="w-5 h-5" />;
    }
  };

  const filteredItems = selectedFilter === 'all'
    ? t.ministries.items
    : t.ministries.items.filter((item) => item.id === selectedFilter);

  return (
    <section id="ministries" className={`${hideHeader ? 'py-12 sm:py-16' : 'py-20'} bg-slate-50/60 border-b border-slate-200/80`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-1">
              MINISTRY PROGRAMS & INITIATIVES
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-normal">
              {t.ministries.sectionTitle}
            </h2>
            <CrossOliveDivider className="my-3" lineWidth="w-12 sm:w-16" />
            <p className="text-slate-600 text-base">
              {t.ministries.sectionSubtitle}
            </p>
          </div>
        )}

        {/* Filter Controls (Classical Segmented Tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 rounded-xs text-xs sm:text-sm font-medium transition-colors cursor-pointer border ${
              selectedFilter === 'all'
                ? 'btn-primary border-primary-theme'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {language === 'zh' ? '全部 5 大事工' : 'All 5 Ministries'}
          </button>
          {t.ministries.items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedFilter(item.id)}
              className={`px-3.5 py-1.5 rounded-xs text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer border ${
                selectedFilter === item.id
                  ? 'btn-primary border-primary-theme'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {getMinistryIcon(item.icon)}
              <span>{language === 'zh' ? item.titleZh : item.titleEn}</span>
            </button>
          ))}
        </div>

        {/* Ministry Cards Grid */}
        <div className="space-y-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-xs overflow-hidden shadow-xs hover:border-slate-300 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center"
            >
              {/* Image side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-xs overflow-hidden border border-slate-200 h-64 sm:h-72">
                  <img
                    src={item.image}
                    alt={language === 'zh' ? item.titleZh : item.titleEn}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Classical Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xs border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs flex items-center gap-1.5">
                    <span className="text-primary-theme">{getMinistryIcon(item.icon)}</span>
                    <span>{language === 'zh' ? item.tagZh : item.tagEn}</span>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <h3 className="font-serif font-bold text-2xl text-slate-900 tracking-normal flex items-center gap-2">
                    <span className="text-slate-400 font-mono text-lg font-normal">0{idx + 1}.</span>
                    <span>{language === 'zh' ? item.titleZh : item.titleEn}</span>
                  </h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-xs bg-slate-100 text-slate-700 border border-slate-200">
                    {language === 'zh' ? item.keyStatZh : item.keyStatEn}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'zh' ? item.summaryZh : item.summaryEn}
                </p>

                {/* Bullet Points */}
                <div className="bg-slate-50/70 rounded-xs p-4 border border-slate-200">
                  <div className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2.5 font-mono">
                    {language === 'zh' ? '具体服务内容 (Services Provided):' : 'Key Offerings & Impact:'}
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {(language === 'zh' ? item.detailsZh : item.detailsEn).map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
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
