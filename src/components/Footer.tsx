import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { Logo } from './Logo';
import { Globe, ArrowUp, PhoneCall } from 'lucide-react';
import { CrossOliveDivider } from './WaterMotifs';

interface FooterProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}
 
export const Footer: React.FC<FooterProps> = ({
  language,
  setLanguage,
}) => {
  const t = translations[language];
  const f = t.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Purpose Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="shrink-0">
                <Logo size={42} className="w-10 h-10 sm:w-11 sm:h-11" />
              </div>
              <div>
                <span className="font-serif font-bold text-white text-lg tracking-normal block">
                  {t.brand.name}
                </span>
                <span className="text-xs text-sky-400 font-semibold">
                  {t.brand.chineseName} · {t.brand.slogan}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {f.desc}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>
                <strong className="text-slate-300">{language === 'zh' ? '机构负责人' : 'Executive Director'}: </strong>
                Peter Qu
              </div>
              <div>
                <strong className="text-slate-300">{language === 'zh' ? '电子邮箱' : 'Email'}: </strong>
                <a href="mailto:peterqu@powerspring.org" className="text-sky-400 hover:underline">
                  peterqu@powerspring.org
                </a>
              </div>
              <div>
                <strong className="text-slate-300">{language === 'zh' ? '心灵辅导教牧' : 'Pastoral Counselors'}: </strong>
                Philip & Dora Wu 牧师
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {f.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/ministries"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.ministries}
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Ministries & Direct CTA */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {f.serviceList}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• {language === 'zh' ? '临时安居与长者关怀' : 'Temporary Shelter & Senior Care'}</li>
              <li>• {language === 'zh' ? '爱心餐饮与每周蔬果食品站' : '2,000+ Warm Meals & Food Pantry'}</li>
              <li>• {language === 'zh' ? '二手车捐赠与道路急难救援' : 'Vehicle Support & Roadside Rescues'}</li>
              <li>• {language === 'zh' ? '每周六 Zoom 心灵辅导讲座 (30+人)' : 'Saturday Zoom Counseling Seminars'}</li>
              <li>• {language === 'zh' ? '英语会话角与生活报税协助' : 'Conversational English & Tax Clinic'}</li>
            </ul>

            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full btn-primary font-semibold px-4 py-2.5 rounded-xs text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{language === 'zh' ? '前往联系页面' : 'Contact Us'}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 圣洁十字橄榄枝中轴线描 (Delicate Cross & Olive Branch Divider) */}
        <div className="pt-6 pb-2 opacity-60">
          <CrossOliveDivider className="my-0" lineWidth="w-16 sm:w-32" />
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 leading-relaxed">
            <span>© {new Date().getFullYear()} Power Spring Ministries INC. {f.rights}</span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <Link to="/terms" className="hover:text-slate-300 transition-colors underline-offset-2 hover:underline">
              {language === 'zh' ? '服务条款与免责声明' : 'Terms & Disclaimers'}
            </Link>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <Link to="/privacy" className="hover:text-slate-300 transition-colors underline-offset-2 hover:underline">
              {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
            </Link>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <Link to="/donate/thank-you" className="hover:text-slate-300 transition-colors underline-offset-2 hover:underline text-accent-theme/80 hover:text-accent-theme">
              {language === 'zh' ? '捐赠致谢' : 'Donation Gratitude'}
            </Link>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
            {/* Clear, refined language switcher */}
            <div className="flex items-center gap-1 bg-slate-800/90 py-1 px-1.5 rounded-xs border border-slate-700/80 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1 shrink-0" />
              <button
                onClick={() => setLanguage('zh')}
                className={`px-2.5 py-1 rounded-xs text-xs font-semibold transition-all cursor-pointer ${
                  language === 'zh'
                    ? 'bg-primary-theme text-white font-bold shadow-2xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-xs text-xs font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-primary-theme text-white font-bold shadow-2xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                English
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors py-1.5 px-2.5 rounded-xs hover:bg-slate-800"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '返回顶部' : 'Top'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
