import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface NotFoundPageProps {
  language: Language;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ language }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-5">
        <div className="w-20 h-20 rounded-3xl bg-primary-light-theme text-primary-theme flex items-center justify-center mx-auto text-3xl font-black">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          {language === 'zh' ? '页面未找到' : 'Page Not Found'}
        </h1>
        <p className="text-slate-600 text-sm">
          {language === 'zh' 
            ? '抱歉，您访问的页面不存在或已被移动。' 
            : 'Sorry, the page you are looking for does not exist or has been moved.'}
        </p>
        <div>
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold shadow-xs cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>{language === 'zh' ? '返回网站首页' : 'Back to Home'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
