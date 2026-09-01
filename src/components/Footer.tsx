import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { Waves, Globe, ArrowUp, PhoneCall } from 'lucide-react';

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
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight block">
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
                <a href="mailto:peter.qu@powerspringsministries.org" className="text-sky-400 hover:underline">
                  peter.qu@powerspringsministries.org
                </a>
              </div>
              <div>
                <strong className="text-slate-300">{language === 'zh' ? '心理辅导教牧' : 'Pastoral Counselors'}: </strong>
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
              <li>• {language === 'zh' ? '每周六 Zoom 心理辅导讲座 (30+人)' : 'Saturday Zoom Counseling Seminars'}</li>
              <li>• {language === 'zh' ? '英语会话角与生活报税协助' : 'Conversational English & Tax Clinic'}</li>
            </ul>

            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full btn-primary font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{language === 'zh' ? '前往联系页面' : 'Contact Us'}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Power Springs Ministries INC. {f.rights}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{f.switchLangText}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
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
