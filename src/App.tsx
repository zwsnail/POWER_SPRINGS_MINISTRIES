import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MinistriesPage } from './pages/MinistriesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Language } from './types';

function TitleUpdater({ language }: { language: Language }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const pageTitlesZh: Record<string, string> = {
      '/': '首页',
      '/ministries': '五大事工',
      '/gallery': '爱心图集',
      '/about': '关于我们',
      '/contact': '联系我们',
    };
    const pageTitlesEn: Record<string, string> = {
      '/': 'Home',
      '/ministries': 'Ministries',
      '/gallery': 'Gallery',
      '/about': 'About Us',
      '/contact': 'Contact Us',
    };

    const title = language === 'zh'
      ? `${pageTitlesZh[path] || '页面'} | Power Springs Ministries INC (涌泉事工)`
      : `${pageTitlesEn[path] || 'Page'} | Power Springs Ministries INC`;

    document.title = title;
  }, [location.pathname, language]);

  return null;
}

export default function App() {
  const [language, setLanguage] = useState<Language>('zh');

  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <TitleUpdater language={language} />

        <div className="min-h-screen flex flex-col bg-[var(--color-bg-base)] text-slate-900 selection:bg-sky-500 selection:text-white">
          {/* Header Navigation */}
          <Header
            language={language}
            setLanguage={setLanguage}
          />

          {/* Dedicated Page Routes */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage language={language} />} />
              <Route path="/ministries" element={<MinistriesPage language={language} />} />
              <Route path="/gallery" element={<GalleryPage language={language} />} />
              <Route path="/about" element={<AboutPage language={language} />} />
              <Route path="/contact" element={<ContactPage language={language} />} />
              <Route path="*" element={<NotFoundPage language={language} />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer
            language={language}
            setLanguage={setLanguage}
          />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}
