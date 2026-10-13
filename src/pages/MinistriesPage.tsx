import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { PageBanner } from '../components/PageBanner';
import { MinistriesSection } from '../components/MinistriesSection';

interface MinistriesPageProps {
  language: Language;
}

export const MinistriesPage: React.FC<MinistriesPageProps> = ({ language }) => {
  const navigate = useNavigate();
  const t = translations[language];

  const handleRequestService = (ministryId: string) => {
    navigate(`/contact?category=${ministryId}`);
  };

  return (
    <div className="animate-in fade-in duration-200">
      <PageBanner
        title={t.ministries.sectionTitle}
        subtitle={t.ministries.sectionSubtitle}
      />
      <MinistriesSection
        language={language}
        onRequestService={handleRequestService}
        hideHeader
      />
    </div>
  );
};
