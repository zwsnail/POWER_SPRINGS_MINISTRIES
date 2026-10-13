import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { PageBanner } from '../components/PageBanner';
import { AboutSection } from '../components/AboutSection';

interface AboutPageProps {
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const navigate = useNavigate();
  const t = translations[language];

  return (
    <div className="animate-in fade-in duration-200">
      <PageBanner
        title={t.about.sectionTitle}
        subtitle={t.about.sectionSubtitle}
      />
      <AboutSection
        language={language}
        onContactDirector={() => navigate('/contact')}
        hideHeader
      />
    </div>
  );
};
