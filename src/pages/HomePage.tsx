import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { Hero } from '../components/Hero';
import { ImpactStats } from '../components/ImpactStats';
import { SaturdaySeminarBanner } from '../components/SaturdaySeminarBanner';
import { HomeMinistriesOverview } from '../components/HomeMinistriesOverview';
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
          navigate('/contact?category=counseling');
        }}
      />

      {/* 4. 5 Core Pillars Preview Cards */}
      <HomeMinistriesOverview
        language={language}
        onNavigateToMinistries={() => navigate('/ministries')}
        onRequestMinistry={(ministryId) => navigate(`/contact?category=${ministryId}`)}
      />

      {/* 5. Clean Navigation Bento Section to Site Pages */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Core Ministries */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-primary-theme flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {language === 'zh' ? '五大关怀事工' : 'Our 5 Core Ministries'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {language === 'zh' 
                    ? '提供临时安居、爱心餐饮与蔬果站、出行与道路救援、英语角与生活报税、心灵关怀与周六心理辅导。'
                    : 'Providing emergency shelter, food pantry, mobility support, conversational English, tax help, and pastoral counseling.'}
                </p>
              </div>

              <button
                onClick={() => navigate('/ministries')}
                className="btn-primary w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{language === 'zh' ? '查看五大事工详情' : 'Explore All Ministries'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Box 2: Photo Gallery Preview */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Images className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {language === 'zh' ? '爱心图集 · 见证温暖足迹' : 'Our Gallery · Moments of Love'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {language === 'zh'
                    ? '浏览社区安居、2000份热餐、长者陪伴、道路救援以及每周心理辅导研讨会的温暖剪影。'
                    : 'Browse through our visual moments of warm meals, shelter hosting, senior care, and seminar gatherings.'}
                </p>
              </div>

              <button
                onClick={() => navigate('/gallery')}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>{language === 'zh' ? '浏览活动图集' : 'View Visual Gallery'}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Box 3: Leadership & About Us */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {language === 'zh' ? '了解我们 · Peter Qu & 牧师团队' : 'About Us · Leadership & Vision'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {language === 'zh'
                    ? '了解涌泉事工的异象、负责人 Peter Qu 的事工历程，以及 Philip & Dora Wu 牧师带领的心灵关怀团队。'
                    : 'Learn about our 501(c)(3) mission, director Peter Qu, and pastoral counselors Rev. Philip & Dora Wu.'}
                </p>
              </div>

              <button
                onClick={() => navigate('/about')}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>{language === 'zh' ? '了解机构与团队' : 'Read Our Story'}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Clean Direct Contact Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {language === 'zh' 
              ? '欢迎与涌泉事工取得联系' 
              : 'Get in Touch with Power Springs Ministries'}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {language === 'zh'
              ? '如需咨询事工服务、了解周六心理辅导讲座或任何社区交流，请随时通过联系页面与我们联络。'
              : 'For inquiries about our ministries, Saturday counseling seminars, or general questions, please reach out.'}
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary-theme hover:bg-primary-theme-hover text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer"
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
