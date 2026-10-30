import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-b from-[#091424] via-[#0d1d33] to-[#0a1628] text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 flex flex-col items-center">

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight text-balance text-center">
            {title}
          </h1>

          {/* Symmetrical Brand Divider */}
          <div className="flex items-center justify-center gap-2 my-1">
            <div className="w-1.5 h-0.5 bg-accent-theme/60" />
            <div className="w-4 h-0.5 bg-accent-theme" />
            <div className="w-16 h-0.5 bg-primary-theme" />
            <div className="w-4 h-0.5 bg-accent-theme" />
            <div className="w-1.5 h-0.5 bg-accent-theme/60" />
          </div>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light max-w-2xl text-center">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
