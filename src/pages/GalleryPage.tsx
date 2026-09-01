import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { PageHeader } from '../components/PageHeader';
import { GallerySection } from '../components/GallerySection';

interface GalleryPageProps {
  language: Language;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="animate-in fade-in duration-200">
      <PageHeader
        language={language}
        badge={language === 'zh' ? '事工剪影与爱心记录' : 'Visual Stories'}
        title={t.gallery.sectionTitle}
        description={t.gallery.sectionSubtitle}
        currentPageName={language === 'zh' ? '爱心图集' : 'Gallery'}
      />

      <GallerySection language={language} />
    </div>
  );
};
