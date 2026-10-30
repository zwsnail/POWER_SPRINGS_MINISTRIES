import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { 
  Utensils, 
  Home, 
  HeartHandshake, 
  HeartPulse, 
  ShoppingBag, 
  Car, 
  Wrench, 
  Video 
} from 'lucide-react';

interface ImpactStatsProps {
  language: Language;
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({ language }) => {
  const t = translations[language];

  // Helper to render lucide icon with unified institutional styling
  const renderIcon = (name: string) => {
    const iconClass = "w-4 h-4 text-primary-theme";
    switch (name) {
      case 'Utensils':
        return <Utensils className={iconClass} />;
      case 'Home':
        return <Home className={iconClass} />;
      case 'HeartHandshake':
        return <HeartHandshake className={iconClass} />;
      case 'ShieldHeart':
      case 'HeartPulse':
        return <HeartPulse className={iconClass} />;
      case 'ShoppingBag':
        return <ShoppingBag className={iconClass} />;
      case 'Car':
        return <Car className={iconClass} />;
      case 'Wrench':
        return <Wrench className={iconClass} />;
      case 'Video':
        return <Video className={iconClass} />;
      default:
        return <HeartHandshake className={iconClass} />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-2">
            {language === 'zh' ? '年度服事实效与关怀纪实' : 'ANNUAL MILESTONES & REPORT'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            {t.impact.sectionTitle}
          </h2>
          
          {/* Subtle Golden Wave Divider Motif */}
          <div className="flex justify-center my-3 text-accent-theme">
            <svg
              viewBox="0 0 36 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-3.5 opacity-80"
              aria-hidden="true"
            >
              <path
                d="M2 9 C6 9, 8 5, 12 5 C16 5, 17 9, 21 9 C25 9, 26 5, 30 5 C32 5, 34 7, 34 8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="18" cy="3" r="1.1" fill="currentColor" opacity="0.9" />
            </svg>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.impact.sectionSubtitle}
          </p>
        </div>

        {/* 4x2 Grid of 8 Uniform White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.impact.items.map((stat) => (
            <div
              key={stat.id}
              className="bg-white border border-slate-200 rounded-[8px] p-5 sm:p-6 hover:border-slate-300 transition-colors flex flex-col justify-between shadow-2xs"
            >
              <div>
                {/* Unified subtle icon container badge */}
                <div className="w-9 h-9 rounded-[6px] border border-slate-200 bg-slate-50 flex items-center justify-center mb-4 sm:mb-5 shadow-2xs">
                  {renderIcon(stat.icon)}
                </div>

                {/* Large Serif Number */}
                <div className="text-2xl sm:text-3xl lg:text-[1.75rem] xl:text-4xl font-serif font-bold text-slate-900 tracking-tight tabular-nums">
                  {stat.number}
                </div>

                {/* Label / Title with balanced height across languages */}
                <div className="font-serif font-bold text-slate-800 text-sm sm:text-base mt-1.5 min-h-[2.6rem] sm:min-h-[3rem] flex items-center leading-snug">
                  {language === 'zh' ? stat.labelZh : stat.labelEn}
                </div>

                {/* Subtle Divider Hairline */}
                <div className="w-full border-t border-slate-100 my-3 sm:my-3.5" />

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {language === 'zh' ? stat.descZh : stat.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
