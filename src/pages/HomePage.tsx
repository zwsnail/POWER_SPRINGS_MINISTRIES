import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { Hero } from '../components/Hero';
import { ImpactStats } from '../components/ImpactStats';
import { SaturdaySeminarBanner } from '../components/SaturdaySeminarBanner';
import { SpringWaveDivider, CloudWaterMotif, CrossOliveDivider, ChristianCrossMotif } from '../components/WaterMotifs';
import { 
  ArrowRight, 
  Layers, 
  Images, 
  ShieldCheck, 
  PhoneCall,
  Mail
} from 'lucide-react';

interface HomePageProps {
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ language }) => {
  const navigate = useNavigate();
  const t = translations[language];

  return (
    <div className="animate-in fade-in duration-200">
      {/* 1. Hero Section (Clean dark gradient matching PageHeader) */}
      <Hero language={language} />

      {/* 2. Real Milestone & Impact Stats */}
      <ImpactStats language={language} />

      {/* 3. Saturday Zoom Pastoral Counseling Banner */}
      <SaturdaySeminarBanner
        language={language}
        onJoinZoom={() => {
          window.location.href = `mailto:peterqu@powerspring.org?subject=${encodeURIComponent(language === 'zh' ? '预约参加周六Zoom心灵辅导' : 'Request Saturday Zoom Counseling Details')}`;
        }}
      />

      {/* 4. Classical Institutional Navigation Grid */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Core Ministries */}
            <div className="bg-white p-5 sm:p-7 rounded-[8px] border border-slate-200 border-t-2 border-t-primary-theme hover:border-primary-theme/50 transition-colors flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 border border-slate-200 rounded-[6px] bg-slate-50 text-slate-700 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-slate-900 mb-2 tracking-normal">
                  {language === 'zh' ? '核心关怀事工' : 'Core Ministries'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {language === 'zh' 
                    ? '提供临时安居、查经聚会餐饮、出行与道路救援、英语角与生活报税、心灵关怀与周六心灵辅导。'
                    : 'Providing emergency shelter, Bible study fellowship meals, mobility support, conversational English, tax help, and pastoral counseling.'}
                </p>
              </div>

              <button
                onClick={() => navigate('/ministries')}
                className="btn-secondary w-full py-2.5 rounded-[6px] text-xs font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer hover:border-primary-theme/60 hover:text-primary-theme group transition-all shadow-2xs"
              >
                <span>{language === 'zh' ? '查看事工详情' : 'Explore Ministries'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary-theme group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>

            {/* Box 2: Photo Gallery Preview */}
            <div className="bg-white p-5 sm:p-7 rounded-[8px] border border-slate-200 border-t-2 border-t-primary-theme hover:border-primary-theme/50 transition-colors flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 border border-slate-200 rounded-[6px] bg-slate-50 text-slate-700 flex items-center justify-center mb-4">
                  <Images className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-slate-900 mb-2 tracking-normal">
                  {language === 'zh' ? '爱心图集 · 见证温暖足迹' : 'Our Gallery · Moments of Love'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {language === 'zh'
                    ? '浏览社区安居、查经聚会餐饮、长者陪伴、道路救援以及每周心灵辅导研讨会的温暖剪影。'
                    : 'Browse through our visual moments of warm meals at Bible studies, shelter hosting, senior care, and seminar gatherings.'}
                </p>
              </div>

              <button
                onClick={() => navigate('/gallery')}
                className="btn-secondary w-full py-2.5 rounded-[6px] text-xs font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer hover:border-primary-theme/60 hover:text-primary-theme group transition-all shadow-2xs"
              >
                <span>{language === 'zh' ? '浏览活动图集' : 'View Visual Gallery'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary-theme group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>

            {/* Box 3: Leadership & About Us */}
            <div className="bg-white p-5 sm:p-7 rounded-[8px] border border-slate-200 border-t-2 border-t-primary-theme hover:border-primary-theme/50 transition-colors flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 border border-slate-200 rounded-[6px] bg-slate-50 text-slate-700 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-slate-900 mb-2 tracking-normal">
                  {language === 'zh' ? '了解我们 · Peter & 社区事工' : 'About Us · Leadership & Vision'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {language === 'zh'
                    ? '了解能量泉的异象与使命，以及负责人 Peter 长期深耕社区的关怀服事历程。'
                    : 'Learn about our mission, vision, and director Peter’s long-standing dedication to community care.'}
                </p>
              </div>

              <button
                onClick={() => navigate('/about')}
                className="btn-secondary w-full py-2.5 rounded-[6px] text-xs font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer hover:border-primary-theme/60 hover:text-primary-theme group transition-all shadow-2xs"
              >
                <span>{language === 'zh' ? '了解机构与团队' : 'Read Our Story'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary-theme group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dignified Direct Contact Banner with subtle water and cross motif */}
      <section className="py-14 sm:py-16 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
        {/* 简笔十字架微水印 (左下) */}
        <div className="absolute -left-4 sm:left-10 -bottom-4 pointer-events-none opacity-15 sm:opacity-20 text-accent-theme">
          <ChristianCrossMotif className="w-36 h-48 sm:w-44 sm:h-56" strokeWidth={1.2} />
        </div>

        {/* 祥云流水简笔水纹微水印 (右侧) */}
        <div className="absolute right-4 sm:right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-15 sm:opacity-20 text-accent-theme">
          <CloudWaterMotif className="w-56 h-28 sm:w-72 sm:h-36" strokeWidth={1.2} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5 relative z-10">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-accent-theme font-mono font-semibold">
            <span>✝</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-normal">
            {language === 'zh' 
              ? '欢迎与能量泉取得联系' 
              : 'Get in Touch with Power Spring Ministries'}
          </h2>
          <CrossOliveDivider className="my-2.5" lineWidth="w-12 sm:w-16" />

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {language === 'zh'
              ? '如需咨询事工服务、了解周六心灵辅导讲座或任何社区交流，请随时通过联系页面与我们联络。'
              : 'For inquiries about our ministries, Saturday spiritual & pastoral counseling seminars, or general questions, please reach out.'}
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary-theme hover:bg-primary-theme-hover text-white font-semibold px-7 py-3 rounded-xs text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer tracking-wide w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              <span>{language === 'zh' ? '前往联系页面' : 'Go to Contact Page'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
