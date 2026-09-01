import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';

interface AboutPageProps {
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const navigate = useNavigate();
  const t = translations[language];

  return (
    <div className="animate-in fade-in duration-200">
      <PageHeader
        language={language}
        badge={language === 'zh' ? '关于涌泉事工' : 'About Our Ministry'}
        title={t.about.sectionTitle}
        description={t.about.sectionSubtitle}
        currentPageName={language === 'zh' ? '关于我们' : 'About Us'}
      />

      <AboutSection
        language={language}
        onContactDirector={() => navigate('/contact')}
      />
    </div>
  );
};
