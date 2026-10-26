import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-b from-[#091424] via-[#0d1d33] to-[#0a1628] text-white py-20 sm:py-28 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-left space-y-4">

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight text-balance">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-2xl pt-1">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
