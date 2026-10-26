import React, { useState } from 'react';
import { translations } from '../locales/translations';
import { Language, GalleryItem } from '../types';
import { Maximize2, X, Calendar } from 'lucide-react';

interface GallerySectionProps {
  language: Language;
  hideHeader?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  language,
  hideHeader = false,
}) => {
  const t = translations[language];
  const g = t.gallery;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);

  const filterButtons = [
    { key: 'all', label: g.filterAll },
    { key: 'community', label: g.filterCommunity },
    { key: 'counseling', label: g.filterCounseling },
    { key: 'housing', label: g.filterHousing },
    { key: 'meals', label: g.filterMeals },
    { key: 'mobility', label: g.filterMobility },
  ];

  const filteredItems = activeCategory === 'all'
    ? g.items
    : g.items.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className={`${hideHeader ? 'py-16 sm:py-20' : 'py-24 sm:py-32'} bg-[#FBFBF8] border-b border-slate-200/70`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-3">
              MINISTRY IN ACTION · PHOTO ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              {g.sectionTitle}
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              {g.sectionSubtitle}
            </p>
          </div>
        )}

        {/* Filter Tabs: Linear-style Segmented Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-12 bg-slate-100/80 p-1.5 rounded-[8px] border border-slate-200/80 w-fit">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveCategory(btn.key)}
              className={`px-3.5 py-1.5 rounded-[6px] text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === btn.key
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid: Linear / Vercel Craftsmanship Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewItem(item)}
              className="craft-card overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={item.image}
                    alt={language === 'zh' ? item.titleZh : item.titleEn}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-[6px] bg-white/95 text-slate-800 shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-[4px] border border-slate-200/80 text-[11px] font-mono uppercase tracking-wider font-medium text-slate-700 shadow-xs">
                    {language === 'zh' ? item.categoryZh : item.categoryEn}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 group-hover:text-primary-theme transition-colors tracking-tight">
                    {language === 'zh' ? item.titleZh : item.titleEn}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed font-light">
                    {language === 'zh' ? item.descZh : item.descEn}
                  </p>
                </div>
              </div>

              {item.dateZh && (
                <div className="px-6 pb-4 pt-1 flex items-center gap-2 text-xs text-slate-400 border-t border-slate-100 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{language === 'zh' ? item.dateZh : item.dateEn}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {previewItem && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPreviewItem(null)}
        >
          <div 
            className="bg-white rounded-[8px] overflow-hidden max-w-3xl w-full shadow-2xl relative border border-slate-200 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-[6px] bg-slate-900/80 hover:bg-slate-900 text-white transition-colors cursor-pointer border border-slate-700"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-80 sm:h-96 w-full bg-slate-100 border-b border-slate-200">
              <img
                src={previewItem.image}
                alt={language === 'zh' ? previewItem.titleZh : previewItem.titleEn}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-[4px] bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-mono uppercase tracking-wider font-medium">
                  {language === 'zh' ? previewItem.categoryZh : previewItem.categoryEn}
                </span>
                {previewItem.dateZh && (
                  <span className="text-xs text-slate-400 font-mono">
                    {language === 'zh' ? previewItem.dateZh : previewItem.dateEn}
                  </span>
                )}
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
                {language === 'zh' ? previewItem.titleZh : previewItem.titleEn}
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed font-light">
                {language === 'zh' ? previewItem.descZh : previewItem.descEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
