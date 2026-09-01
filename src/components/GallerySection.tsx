import React, { useState } from 'react';
import { translations } from '../locales/translations';
import { Language, GalleryItem } from '../types';
import { Sparkles, Maximize2, X, Image as ImageIcon, Calendar } from 'lucide-react';

interface GallerySectionProps {
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const t = translations[language];
  const g = t.gallery;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);

  const filterButtons = [
    { key: 'all', label: g.filterAll },
    { key: 'housing', label: g.filterHousing },
    { key: 'meals', label: g.filterMeals },
    { key: 'mobility', label: g.filterMobility },
    { key: 'counseling', label: g.filterCounseling },
    { key: 'community', label: g.filterCommunity },
  ];

  const filteredItems = activeCategory === 'all'
    ? g.items
    : g.items.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 badge-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{g.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {g.sectionTitle}
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            {g.sectionSubtitle}
          </p>

          {/* Friendly Note */}
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 text-amber-900 text-xs px-4 py-2 rounded-xl text-left">
            <ImageIcon className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{g.note}</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveCategory(btn.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === btn.key
                  ? 'btn-primary shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewItem(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={language === 'zh' ? item.titleZh : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-white/90 text-slate-800 shadow-md">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-xs">
                    {language === 'zh' ? item.categoryZh : item.categoryEn}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-primary-theme transition-colors">
                    {language === 'zh' ? item.titleZh : item.titleEn}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {language === 'zh' ? item.descZh : item.descEn}
                  </p>
                </div>
              </div>

              {item.dateZh && (
                <div className="px-5 pb-4 pt-1 flex items-center gap-1.5 text-xs text-slate-400 border-t border-slate-100">
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
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative border border-slate-700 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-80 sm:h-96 w-full bg-slate-100">
              <img
                src={previewItem.image}
                alt={language === 'zh' ? previewItem.titleZh : previewItem.titleEn}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="badge-primary px-2.5 py-0.5 rounded-md text-xs font-bold">
                  {language === 'zh' ? previewItem.categoryZh : previewItem.categoryEn}
                </span>
                {previewItem.dateZh && (
                  <span className="text-xs text-slate-400">
                    {language === 'zh' ? previewItem.dateZh : previewItem.dateEn}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {language === 'zh' ? previewItem.titleZh : previewItem.titleEn}
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                {language === 'zh' ? previewItem.descZh : previewItem.descEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
