import React, { useState } from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { useTheme, THEME_PRESETS } from '../context/ThemeContext';
import { X, Check, Copy, Palette, Sparkles, Heart, ShieldCheck } from 'lucide-react';

interface ThemeModalProps {
  language: Language;
}

export const ThemeModal: React.FC<ThemeModalProps> = ({ language }) => {
  const { 
    currentTheme, 
    setThemeById, 
    setCustomPrimary, 
    setCustomAccent,
    isThemeModalOpen, 
    setIsThemeModalOpen 
  } = useTheme();

  const [copied, setCopied] = useState(false);
  const [customPrimaryHex, setCustomPrimaryHex] = useState(currentTheme.primary);
  const [customAccentHex, setCustomAccentHex] = useState(currentTheme.accent);

  const t = translations[language];
  const tm = t.themeModal;

  if (!isThemeModalOpen) return null;

  const cssSnippet = `:root {
  --color-primary: ${currentTheme.primary};
  --color-primary-hover: ${currentTheme.primaryHover};
  --color-primary-light: ${currentTheme.primaryLight};
  --color-accent: ${currentTheme.accent};
  --color-accent-light: ${currentTheme.accentLight || currentTheme.accent + '18'};
  --color-bg-base: ${currentTheme.bgWarm};
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrimaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomPrimaryHex(val);
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      setCustomPrimary(val);
    }
  };

  const handleAccentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAccentHex(val);
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      setCustomAccent(val);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-xs max-w-2xl w-full p-5 sm:p-7 shadow-2xl border border-slate-300 animate-in fade-in zoom-in-95 duration-150 my-6">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xs bg-primary-light-theme text-primary-theme border border-primary-theme/20 shadow-2xs">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-lg sm:text-xl">
                {language === 'zh' ? '中国传统色方案 · 能量泉主题调色盘' : 'Traditional Chinese Blue Palettes'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'zh' 
                  ? '精选自 chinavid 中国传统色谱 · 经典双色搭配（主色深蓝 + 辅色点睛）' 
                  : 'Curated traditional Chinese heritage blues paired with mud gold, jade, and antique bronze'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsThemeModalOpen(false)}
            className="p-1.5 rounded-xs hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer border border-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live Preview Box - Shows how Donate Button and Accents will look */}
        <div className="my-4 p-4 rounded-xs border border-slate-200 bg-slate-50/70 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent-theme" />
              <span>{language === 'zh' ? '当前生效配色实时预览' : 'Current Active Theme Preview'}</span>
            </span>
            <span className="text-xs font-serif font-semibold text-slate-700">
              {currentTheme.nameZh.split('(')[0]}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            {/* Live Donate Button */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">爱心捐赠:</span>
              <button className="btn-donate px-3.5 py-1.5 rounded-xs text-xs font-semibold flex items-center gap-1.5 shadow-2xs pointer-events-none">
                <Heart className="w-3.5 h-3.5" />
                <span>{t.nav.donate}</span>
              </button>
            </div>

            {/* Live Accent Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">辅色标牌:</span>
              <span className="badge-accent px-2.5 py-1 rounded-xs text-xs font-medium font-serif">
                {currentTheme.accentNameZh || '辅色高亮'}
              </span>
            </div>

            {/* Live Primary Button */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">主色按钮:</span>
              <button className="btn-primary px-3 py-1.5 rounded-xs text-xs font-semibold shadow-2xs pointer-events-none">
                事工行动
              </button>
            </div>
          </div>
        </div>

        {/* Presets List */}
        <div className="py-2 space-y-3">
          <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider font-mono">
            {language === 'zh' ? '五大经典传统色搭配 (点击直接切换):' : '5 Traditional Blue Schemes (Click to apply):'}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {THEME_PRESETS.map((preset) => {
              const isSelected = currentTheme.id === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    setThemeById(preset.id);
                    setCustomPrimaryHex(preset.primary);
                    setCustomAccentHex(preset.accent);
                  }}
                  className={`p-3 rounded-xs border text-left flex items-center justify-between gap-2.5 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-primary-theme bg-primary-light-theme shadow-xs ring-1 ring-primary-theme/30'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {/* Dual Swatch Display: Primary + Accent side-by-side */}
                    <div className="flex items-center -space-x-1 shrink-0">
                      <span
                        className="w-5 h-5 rounded-xs shadow-xs border border-white z-10"
                        style={{ backgroundColor: preset.primary }}
                        title="主色 (Primary)"
                      />
                      <span
                        className="w-4 h-4 rounded-xs shadow-xs border border-white z-20"
                        style={{ backgroundColor: preset.accent }}
                        title="辅色 (Accent)"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-serif font-bold text-slate-900 truncate">
                        {language === 'zh' ? preset.nameZh.split(' ')[0] : preset.nameEn}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">
                        {language === 'zh' 
                          ? `主色: ${preset.primary} | 辅色: ${preset.accentNameZh || preset.accent}`
                          : `Primary: ${preset.primary} | Accent: ${preset.accent}`}
                      </div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-primary-theme shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Custom Color Pickers: Both Primary & Accent */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Custom Primary */}
            <div className="flex items-center justify-between gap-2 bg-slate-50 p-2.5 rounded-xs border border-slate-200">
              <span className="text-xs font-medium text-slate-700">
                {language === 'zh' ? '自定义主色 (Primary):' : 'Custom Primary:'}
              </span>
              <div className="flex items-center gap-1.5">
                <input
                  type="color"
                  value={customPrimaryHex}
                  onChange={(e) => {
                    setCustomPrimaryHex(e.target.value);
                    setCustomPrimary(e.target.value);
                  }}
                  className="w-6 h-6 rounded-xs cursor-pointer border border-slate-300 p-0"
                />
                <input
                  type="text"
                  value={customPrimaryHex}
                  onChange={handlePrimaryChange}
                  className="w-20 px-1.5 py-0.5 text-xs font-mono rounded-xs border border-slate-300 uppercase"
                />
              </div>
            </div>

            {/* Custom Accent */}
            <div className="flex items-center justify-between gap-2 bg-slate-50 p-2.5 rounded-xs border border-slate-200">
              <span className="text-xs font-medium text-slate-700">
                {language === 'zh' ? '自定义辅色 (Accent/爱心):' : 'Custom Accent:'}
              </span>
              <div className="flex items-center gap-1.5">
                <input
                  type="color"
                  value={customAccentHex}
                  onChange={(e) => {
                    setCustomAccentHex(e.target.value);
                    setCustomAccent(e.target.value);
                  }}
                  className="w-6 h-6 rounded-xs cursor-pointer border border-slate-300 p-0"
                />
                <input
                  type="text"
                  value={customAccentHex}
                  onChange={handleAccentChange}
                  className="w-20 px-1.5 py-0.5 text-xs font-mono rounded-xs border border-slate-300 uppercase"
                />
              </div>
            </div>
          </div>

          {/* CSS Variables Box */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-semibold text-slate-600 font-mono">
                {tm.cssVarsTitle}
              </label>
              <button
                onClick={handleCopy}
                className="text-xs text-primary-theme hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? tm.copied : tm.copyBtn}</span>
              </button>
            </div>
            <pre className="bg-slate-900 text-sky-300 p-2.5 rounded-xs text-[11px] font-mono overflow-x-auto border border-slate-800">
              {cssSnippet}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={() => setIsThemeModalOpen(false)}
            className="btn-primary px-6 py-2.5 rounded-xs text-xs font-semibold shadow-xs cursor-pointer tracking-wide"
          >
            {tm.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
