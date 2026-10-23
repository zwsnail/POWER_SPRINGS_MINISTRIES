import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { SpringWaveDivider } from './WaterMotifs';
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

  // Helper to render lucide icon dynamically
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-amber-600" />;
      case 'Home':
        return <Home className="w-5 h-5 text-sky-600" />;
      case 'ShieldHeart':
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-accent-theme" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-accent-theme" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-slate-700" />;
      case 'Car':
        return <Car className="w-5 h-5 text-primary-theme" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-slate-600" />;
      case 'Video':
        return <Video className="w-5 h-5 text-accent-theme" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-primary-theme" />;
    }
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-1">
            ANNUAL MILESTONES & REPORT
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-normal">
            {t.impact.sectionTitle}
          </h2>
          <SpringWaveDivider className="my-3.5" lineWidth="w-12 sm:w-16" />
          <p className="text-slate-600 text-sm sm:text-base">
            {t.impact.sectionSubtitle}
          </p>
        </div>

        {/* 8-Grid Impact Stats: Classical Institutional Ledger Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.impact.items.map((stat) => (
            <div
              key={stat.id}
              className="bg-white border border-slate-200 rounded-xs p-5 hover:border-primary-theme/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="mb-3 text-slate-500">
                  <span className="inline-flex p-1.5 border border-slate-200 rounded-xs bg-slate-50">
                    {renderIcon(stat.icon)}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-serif font-bold text-primary-theme tracking-normal tabular-nums">
                  {stat.number}
                </div>

                <div className="font-serif font-semibold text-slate-900 text-sm mt-1">
                  {language === 'zh' ? stat.labelZh : stat.labelEn}
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                {language === 'zh' ? stat.descZh : stat.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
