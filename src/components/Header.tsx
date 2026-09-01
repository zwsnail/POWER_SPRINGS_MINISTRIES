import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { Logo } from './Logo';
import { 
  Menu, 
  X, 
  Globe 
} from 'lucide-react';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/ministries', label: t.nav.ministries },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
        {/* Brand Logo with Cross & Living Water */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer focus:outline-none shrink-0 min-w-0"
        >
          <div className="shrink-0 transition-transform group-hover:scale-105">
            <Logo size={46} className="w-10 h-10 sm:w-[46px] sm:h-[46px] drop-shadow-xs" />
          </div>
          <div className="min-w-0">
            <div className="font-extrabold text-slate-900 text-sm sm:text-base lg:text-lg tracking-tight leading-snug truncate">
              {t.brand.name}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5 truncate">
              <span className="text-primary-theme font-bold">{t.brand.chineseName}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 truncate max-w-[140px] sm:max-w-xs">{t.brand.slogan}</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 shrink-0">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-primary-theme bg-primary-light-theme font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Far Right: Language Switcher (Desktop) */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={toggleLanguage}
            className="px-3.5 py-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/80 hover:bg-white text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-2xs hover:shadow-xs cursor-pointer"
            title={language === 'zh' ? 'Switch to English' : '切换至中文'}
          >
            <Globe className="w-4 h-4 text-primary-theme" />
            <span>{language === 'zh' ? '🇺🇸 English' : '🇨🇳 中文'}</span>
          </button>
        </div>

        {/* Mobile Menu & Language Toggle */}
        <div className="flex sm:hidden items-center gap-1.5 shrink-0">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1 cursor-pointer"
            title={language === 'zh' ? 'Switch to English' : '切换至中文'}
          >
            <Globe className="w-3.5 h-3.5 text-primary-theme" />
            <span>{language === 'zh' ? 'EN' : '中文'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5 pb-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-primary-theme bg-primary-light-theme font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                <span>{item.label}</span>
                {item.path === '/' && <span className="text-xs text-slate-400 font-normal">Home</span>}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
