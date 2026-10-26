import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { Logo } from './Logo';
import { DonationModal } from './DonationModal';
import { 
  Menu, 
  X, 
  Heart,
  ChevronRight
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
  const location = useLocation();
  const t = translations[language];

  // Auto-close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Auto-close menu on desktop resize (>= 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/ministries', label: t.nav.ministries },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors shadow-2xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-4 lg:gap-8">
          
          {/* Zone 1: Brand Wordmark (Responsive lockup) */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer focus:outline-none shrink-0 min-w-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="shrink-0">
              <Logo size={40} className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 drop-shadow-xs" />
            </div>
            <div className="min-w-0">
              <div className="font-serif font-bold text-slate-900 text-sm sm:text-base lg:text-lg tracking-tight leading-snug truncate">
                {t.brand.name}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium flex items-center gap-1.5 mt-0.5 min-w-0">
                <span className="text-primary-theme font-semibold shrink-0">{t.brand.chineseName}</span>
                <span className="text-slate-300 shrink-0" aria-hidden="true">·</span>
                <span className="text-slate-500 truncate">{t.brand.slogan}</span>
              </div>
            </div>
          </Link>

          {/* Zone 2: Desktop Horizontal Nav Links (Always shown on md:flex and up) */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-8 shrink-0">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `group relative py-2 text-xs lg:text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-primary-theme font-semibold'
                      : 'text-slate-600 hover:text-slate-900 font-medium'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 transition-colors duration-200 group-hover:text-primary-theme">
                      {item.label}
                    </span>
                    {/* Active & Hover Underline indicator */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] lg:h-[2.5px] rounded-full transition-all duration-200 ease-out ${
                        isActive
                          ? 'bg-primary-theme scale-x-100'
                          : 'bg-accent-theme scale-x-0 group-hover:scale-x-100 origin-center opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Desktop Language Switcher & Donate CTA (Always shown on md:flex and up) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">

            {/* Donate CTA Button */}
            <button
              onClick={() => setDonationModalOpen(true)}
              className="btn-donate px-3 lg:px-4 py-1.5 lg:py-2 rounded-[6px] text-xs lg:text-sm font-semibold tracking-wide flex items-center gap-1.5 cursor-pointer group shadow-2xs"
              title={language === 'zh' ? '支持能量泉爱心捐款' : 'Donate to Power Spring Ministries'}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>{t.nav.donate}</span>
            </button>
          </div>

          {/* Zone 4: Mobile-Only Hamburger Toggle (md:hidden) */}
          <div className="flex md:hidden items-center shrink-0">
            {/* Hamburger / Close Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-[6px] transition-colors cursor-pointer border ${
                mobileMenuOpen 
                  ? 'bg-slate-100 text-slate-900 border-slate-300' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-slate-200'
              }`}
              aria-label={mobileMenuOpen ? '关闭菜单' : '打开导航菜单'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile-Only Drawer Menu with Dimmed Backdrop (md:hidden) */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop Overlay */}
            <div 
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Dropdown Panel */}
            <div className="fixed top-16 left-0 right-0 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-2 duration-200">
              <div className="max-w-md mx-auto px-4 py-5 space-y-4">
                
                {/* Navigation Links */}
                <div className="flex flex-col gap-1.5">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === '/'}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-[6px] text-sm font-medium transition-all flex items-center justify-between border-l-3 group cursor-pointer ${
                          isActive
                            ? 'text-primary-theme bg-primary-theme/5 border-primary-theme font-semibold'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50 border-transparent hover:border-slate-300'
                        }`
                      }
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.label}</span>
                        {item.path === '/' && (
                          <span className="text-[11px] text-slate-400 font-normal">Home</span>
                        )}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary-theme group-hover:translate-x-0.5 transition-all" />
                    </NavLink>
                  ))}
                </div>

                {/* Primary Donate CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setDonationModalOpen(true);
                    }}
                    className="btn-donate w-full py-3 rounded-[6px] text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <Heart className="w-4 h-4" />
                    <span>{t.nav.donate}</span>
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

