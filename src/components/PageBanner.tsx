import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-850 to-slate-800 text-white py-14 sm:py-20 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left space-y-3">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium">
            POWER SPRING MINISTRIES INC
          </div>
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight tracking-normal">
            {title}
          </h1>

          {/* Dual-color Classical Divider */}
          <div className="flex items-center gap-2 my-2.5">
            <div className="w-12 h-0.5 bg-primary-theme" />
            <div className="w-3.5 h-0.5 bg-accent-theme" />
            <div className="w-1.5 h-0.5 bg-accent-theme/60" />
          </div>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
