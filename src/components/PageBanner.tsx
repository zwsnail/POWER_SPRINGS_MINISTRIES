import React from 'react';
import { CloudWaterMotif, ChristianCrossMotif } from './WaterMotifs';

interface PageBannerProps {
  title: string;
  subtitle: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-850 to-slate-800 text-white py-14 sm:py-20 border-b border-slate-700 relative overflow-hidden">
      {/* 简笔圣十字架活水微水印 (左侧) */}
      <div className="absolute -left-4 sm:left-4 -bottom-4 pointer-events-none opacity-15 sm:opacity-20 text-accent-theme">
        <ChristianCrossMotif className="w-32 h-44 sm:w-40 sm:h-52" strokeWidth={1.1} />
      </div>

      {/* 祥云流水简笔水纹微水印 (右侧) */}
      <div className="absolute right-4 sm:right-16 lg:right-28 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 sm:opacity-25 text-accent-theme">
        <CloudWaterMotif className="w-52 h-26 sm:w-72 sm:h-36" strokeWidth={1.2} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-left space-y-3">
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-slate-400 font-mono font-medium">
            <span className="text-accent-theme">✝</span>
            <span>POWER SPRING MINISTRIES INC</span>
          </div>
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight tracking-normal">
            {title}
          </h1>

          {/* Dual-color Classical Divider with subtle cross & water wave */}
          <div className="flex items-center gap-2 my-2.5 text-accent-theme">
            <div className="w-12 h-0.5 bg-primary-theme" />
            <svg
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3.5 shrink-0 opacity-80"
              aria-hidden="true"
            >
              <line x1="8" y1="1" x2="8" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="6" x2="13" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div className="w-4 h-0.5 bg-accent-theme" />
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
