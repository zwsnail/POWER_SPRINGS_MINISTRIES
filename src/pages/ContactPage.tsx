import React from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="animate-in fade-in duration-200">
      <PageHeader
        language={language}
        badge={language === 'zh' ? '联系与资讯' : 'Contact & Info'}
        title={language === 'zh' ? '联系我们' : 'Contact Us'}
        description={
          language === 'zh' 
            ? '欢迎通过电子邮箱随时与涌泉事工取得联系，负责人 Peter Qu 将尽快为您答复。' 
            : 'Feel free to contact Power Springs Ministries via email. Director Peter Qu will respond promptly.'
        }
        currentPageName={language === 'zh' ? '联系我们' : 'Contact Us'}
      />

      <ContactSection language={language} />
    </div>
  );
};
