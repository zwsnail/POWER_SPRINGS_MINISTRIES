import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { PageBanner } from '../components/PageBanner';
import { GallerySection } from '../components/GallerySection';

interface GalleryPageProps {
  language: Language;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="animate-in fade-in duration-200">
      <PageBanner
        title={t.gallery.sectionTitle}
        subtitle={t.gallery.sectionSubtitle}
      />
      <GallerySection language={language} hideHeader />
    </div>
  );
};
