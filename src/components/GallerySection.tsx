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
    <section id="gallery" className={`${hideHeader ? 'py-12 sm:py-16' : 'py-20'} bg-slate-50/60 border-b border-slate-200/80`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-1">
              MINISTRY IN ACTION · PHOTO ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-normal">
              {g.sectionTitle}
            </h2>
            <div className="w-12 h-0.5 bg-primary-theme/60 mx-auto my-3" />
            <p className="text-slate-600 text-base">
              {g.sectionSubtitle}
            </p>
          </div>
        )}

        {/* Filter Tabs (Classical Segmented Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveCategory(btn.key)}
              className={`px-3.5 py-1.5 rounded-xs text-xs sm:text-sm font-medium transition-colors cursor-pointer border ${
                activeCategory === btn.key
                  ? 'btn-primary border-primary-theme'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid: Classical Framed Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewItem(item)}
              className="bg-white rounded-xs overflow-hidden border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={item.image}
                    alt={language === 'zh' ? item.titleZh : item.titleEn}
                    className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-xs bg-white/95 text-slate-800 shadow-xs border border-slate-300">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-xs border border-slate-200 text-[11px] font-mono uppercase tracking-wider font-medium text-slate-700 shadow-2xs">
                    {language === 'zh' ? item.categoryZh : item.categoryEn}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 group-hover:text-primary-theme transition-colors">
                    {language === 'zh' ? item.titleZh : item.titleEn}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {language === 'zh' ? item.descZh : item.descEn}
                  </p>
                </div>
              </div>

              {item.dateZh && (
                <div className="px-5 pb-4 pt-1 flex items-center gap-1.5 text-xs text-slate-400 border-t border-slate-100 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{language === 'zh' ? item.dateZh : item.dateEn}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal: Dignified Plaque Modal */}
      {previewItem && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPreviewItem(null)}
        >
          <div 
            className="bg-white rounded-xs overflow-hidden max-w-3xl w-full shadow-2xl relative border border-slate-300 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-xs bg-slate-900/80 hover:bg-slate-900 text-white transition-colors cursor-pointer border border-slate-700"
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

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-xs bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-mono uppercase tracking-wider font-medium">
                  {language === 'zh' ? previewItem.categoryZh : previewItem.categoryEn}
                </span>
                {previewItem.dateZh && (
                  <span className="text-xs text-slate-400 font-mono">
                    {language === 'zh' ? previewItem.dateZh : previewItem.dateEn}
                  </span>
                )}
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
                {language === 'zh' ? previewItem.titleZh : previewItem.titleEn}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                {language === 'zh' ? previewItem.descZh : previewItem.descEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
