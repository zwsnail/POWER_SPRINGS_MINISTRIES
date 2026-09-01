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

  // Helper to render lucide icon dynamically
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-amber-600" />;
      case 'Home':
        return <Home className="w-5 h-5 text-sky-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-emerald-600" />;
      case 'ShieldHeart':
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-indigo-600" />;
      case 'Car':
        return <Car className="w-5 h-5 text-blue-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-orange-600" />;
      case 'Video':
        return <Video className="w-5 h-5 text-purple-600" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-primary-theme" />;
    }
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.impact.sectionTitle}
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            {t.impact.sectionSubtitle}
          </p>
        </div>

        {/* 8-Grid Impact Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.impact.items.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-primary-theme/40 rounded-xl p-5 card-hover-effect transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-lg bg-white shadow-2xs border border-slate-200/80">
                    {renderIcon(stat.icon)}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200/60 text-slate-600">
                    {language === 'zh' ? '年度实录' : 'Milestone'}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-primary-theme">
                  {stat.number}
                </div>

                <div className="font-bold text-slate-800 text-sm mt-1">
                  {language === 'zh' ? stat.labelZh : stat.labelEn}
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200/60 leading-relaxed">
                {language === 'zh' ? stat.descZh : stat.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
