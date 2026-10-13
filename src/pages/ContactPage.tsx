import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { PageBanner } from '../components/PageBanner';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="animate-in fade-in duration-200">
      <PageBanner
        title={t.contact.sectionTitle}
        subtitle={
          language === 'zh'
            ? '欢迎通过电子邮箱与涌泉事工取得联系，负责人 Peter Qu 将尽快为您答复。'
            : 'Feel free to contact Power Spring Ministries via email. Director Peter Qu will respond promptly.'
        }
      />
      <ContactSection language={language} hideHeader />
    </div>
  );
};
