import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { Logo } from './Logo';
import { DonationModal } from './DonationModal';
import { 
  Menu, 
  X, 
  Globe,
  Heart
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
  const [donationModalOpen, setDonationModalOpen] = useState(false);
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
    <>
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

          {/* Far Right: Donate Button (Desktop) */}
          <div className="hidden sm:flex items-center shrink-0">
            {/* Donate CTA Button */}
            <button
              onClick={() => setDonationModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-800 border border-rose-200/90 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all shadow-2xs hover:shadow-xs cursor-pointer group"
              title={language === 'zh' ? '支持涌泉事工爱心捐款' : 'Donate to Power Spring Ministries'}
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20 group-hover:fill-rose-500 transition-colors" />
              <span>{t.nav.donate}</span>
            </button>
          </div>

          {/* Mobile Menu & Donate */}
          <div className="flex sm:hidden items-center gap-2 shrink-0">
            {/* Mobile Donate Button */}
            <button
              onClick={() => setDonationModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title={t.nav.donate}
            >
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>{t.nav.donate}</span>
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

            <div className="pt-2 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDonationModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/90 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                <span>{t.nav.donate}</span>
              </button>

              {/* Auxiliary Language Selector in Mobile Drawer */}
              <div className="flex items-center justify-between px-2 pt-1 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>语言 / Language</span>
                </span>
                <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setLanguage('zh')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                      language === 'zh'
                        ? 'bg-white text-slate-900 shadow-2xs font-bold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    中文
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                      language === 'en'
                        ? 'bg-white text-slate-900 shadow-2xs font-bold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Donation Modal */}
      <DonationModal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
        language={language}
      />
    </>
  );
};
