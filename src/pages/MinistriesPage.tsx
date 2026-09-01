import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { PageHeader } from '../components/PageHeader';
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
      <PageHeader
        language={language}
        badge={language === 'zh' ? '五大关怀事工' : 'Our 5 Core Ministries'}
        title={t.ministries.sectionTitle}
        description={t.ministries.sectionSubtitle}
        currentPageName={language === 'zh' ? '五大事工' : 'Ministries'}
      />

      <MinistriesSection
        language={language}
        onRequestService={handleRequestService}
      />
    </div>
  );
};
