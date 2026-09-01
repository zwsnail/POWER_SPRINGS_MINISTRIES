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
  ArrowRight, 
  HeartHandshake,
  Sparkles
} from 'lucide-react';

interface MinistriesSectionProps {
  language: Language;
  onRequestService: (ministryId: string) => void;
}

export const MinistriesSection: React.FC<MinistriesSectionProps> = ({
  language,
  onRequestService,
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
    <section id="ministries" className="py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 badge-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.ministries.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.ministries.sectionTitle}
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            {t.ministries.sectionSubtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'btn-primary shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {language === 'zh' ? '全部 5 大事工' : 'All 5 Ministries'}
          </button>
          {t.ministries.items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedFilter(item.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedFilter === item.id
                  ? 'btn-primary shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
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
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center"
            >
              {/* Image side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-xl overflow-hidden border border-slate-100 shadow-xs h-64 sm:h-72">
                  <img
                    src={item.image}
                    alt={language === 'zh' ? item.titleZh : item.titleEn}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs flex items-center gap-1.5">
                    <span className="text-primary-theme">{getMinistryIcon(item.icon)}</span>
                    <span>{language === 'zh' ? item.tagZh : item.tagEn}</span>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    <span>{language === 'zh' ? item.titleZh : item.titleEn}</span>
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {language === 'zh' ? item.keyStatZh : item.keyStatEn}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'zh' ? item.summaryZh : item.summaryEn}
                </p>

                {/* Bullet Points */}
                <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/70">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                    {language === 'zh' ? '具体服务内容 (Services Provided):' : 'Key Offerings & Impact:'}
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {(language === 'zh' ? item.detailsZh : item.detailsEn).map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onRequestService(item.id)}
                    className="btn-primary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <span>{t.ministries.learnMore}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-400">
                    {language === 'zh' ? '免费登记 · 保密无忧' : '100% Free & Confidential'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
