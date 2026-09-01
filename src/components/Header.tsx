import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { 
  Menu, 
  X, 
  Globe, 
  Waves
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary-light-theme border border-primary-theme/30 flex items-center justify-center text-primary-theme shadow-xs group-hover:scale-105 transition-transform">
            <Waves className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-base sm:text-lg tracking-tight leading-tight flex items-center gap-2">
              <span>{t.brand.name}</span>
            </div>
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
              <span className="text-primary-theme font-semibold">{t.brand.chineseName}</span>
              <span className="text-slate-300">·</span>
              <span className="truncate max-w-[160px] sm:max-w-xs">{t.brand.slogan}</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
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

        {/* Far Right: Language Switcher */}
        <div className="hidden sm:flex items-center">
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
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5 text-primary-theme" />
            <span>{language === 'zh' ? 'EN' : '中文'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1.5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 pb-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'text-primary-theme bg-primary-light-theme font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
