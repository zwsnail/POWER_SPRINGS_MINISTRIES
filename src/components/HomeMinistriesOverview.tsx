import React from 'react';
import { translations } from '../locales/translations';
import { Language, NavTab } from '../types';
import { 
  Home, 
  Utensils, 
  Car, 
  BookOpen, 
  Video, 
  ArrowRight, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';

interface HomeMinistriesOverviewProps {
  language: Language;
  onNavigateToMinistries: () => void;
  onRequestMinistry: (id: string) => void;
}

export const HomeMinistriesOverview: React.FC<HomeMinistriesOverviewProps> = ({
  language,
  onNavigateToMinistries,
  onRequestMinistry,
}) => {
  const t = translations[language];

  const getMinistryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 text-primary-theme" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-amber-600" />;
      case 'Car':
        return <Car className="w-5 h-5 text-emerald-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 'Video':
        return <Video className="w-5 h-5 text-purple-600" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-primary-theme" />;
    }
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 badge-primary px-3 py-1 rounded-full text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '事工全景' : 'Core Ministries'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {language === 'zh' ? '五大关怀事工与社区支持' : 'Our 5 Core Pillars of Community Support'}
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              {language === 'zh' 
                ? '以基督之爱服侍社区，100% 免费为需要的人群提供安居、暖餐、出行、教育与心灵陪伴。'
                : 'Serving the community with Christian compassion across housing, meals, mobility, education, and pastoral care.'}
            </p>
          </div>

          <button
            onClick={onNavigateToMinistries}
            className="inline-flex items-center gap-2 text-primary-theme hover:text-primary-theme-hover font-bold text-sm group shrink-0 cursor-pointer"
          >
            <span>{language === 'zh' ? '查看事工详细服务项目' : 'View Full Ministry Details'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {t.ministries.items.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-primary-theme/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  {getMinistryIcon(item.iconName)}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                  {language === 'zh' ? item.titleZh : item.titleEn}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-3">
                  {language === 'zh' ? item.descZh : item.descEn}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  {language === 'zh' ? '100% 免费' : 'Free'}
                </span>
                <button
                  onClick={() => onRequestMinistry(item.id)}
                  className="text-xs font-bold text-primary-theme hover:underline cursor-pointer"
                >
                  {language === 'zh' ? '申请 →' : 'Apply →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
