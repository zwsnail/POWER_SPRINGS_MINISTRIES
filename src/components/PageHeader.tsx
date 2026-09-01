import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface PageHeaderProps {
  language: Language;
  badge: string;
  title: string;
  description: string;
  currentPageName: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  language,
  badge,
  title,
  description,
  currentPageName,
}) => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 sm:py-16 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>{language === 'zh' ? '首页' : 'Home'}</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-amber-400 font-semibold">{currentPageName}</span>
        </nav>

        {/* Title & Description */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
