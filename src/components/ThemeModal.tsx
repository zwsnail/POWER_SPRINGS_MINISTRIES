import React, { useState } from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { useTheme, THEME_PRESETS } from '../context/ThemeContext';
import { X, Check, Copy, Palette, Sparkles } from 'lucide-react';

interface ThemeModalProps {
  language: Language;
}

export const ThemeModal: React.FC<ThemeModalProps> = ({ language }) => {
  const { currentTheme, setThemeById, setCustomPrimary, isThemeModalOpen, setIsThemeModalOpen } = useTheme();
  const [copied, setCopied] = useState(false);
  const [customHex, setCustomHex] = useState(currentTheme.primary);
  const t = translations[language];
  const tm = t.themeModal;

  if (!isThemeModalOpen) return null;

  const cssSnippet = `:root {
  --color-primary: ${currentTheme.primary};
  --color-primary-hover: ${currentTheme.primaryHover};
  --color-primary-light: ${currentTheme.primaryLight};
  --color-accent: ${currentTheme.accent};
  --color-bg-base: ${currentTheme.bgWarm};
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomHex(val);
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      setCustomPrimary(val);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-primary-light-theme text-primary-theme">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">
                {tm.title}
              </h3>
              <p className="text-xs text-slate-500">
                {tm.desc}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsThemeModalOpen(false)}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Presets List */}
        <div className="py-5 space-y-4">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
            {tm.presetsTitle}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {THEME_PRESETS.map((preset) => {
              const isSelected = currentTheme.id === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    setThemeById(preset.id);
                    setCustomHex(preset.primary);
                  }}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-primary-theme bg-primary-light-theme shadow-xs ring-2 ring-primary-theme/30'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-6 h-6 rounded-full shadow-xs border border-white shrink-0"
                      style={{ backgroundColor: preset.primary }}
                    />
                    <span className="text-xs font-bold text-slate-800">
                      {language === 'zh' ? preset.nameZh : preset.nameEn}
                    </span>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-primary-theme shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Custom Color Picker */}
          <div className="pt-2">
            <div className="flex items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-xs font-semibold text-slate-700">
                {language === 'zh' ? '自定义主色调 (Custom Hex):' : 'Custom Primary Color:'}
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={customHex}
                  onChange={(e) => {
                    setCustomHex(e.target.value);
                    setCustomPrimary(e.target.value);
                  }}
                  className="w-8 h-8 rounded-lg cursor-pointer border border-slate-300 p-0"
                />
                <input
                  type="text"
                  value={customHex}
                  onChange={handleCustomChange}
                  className="w-24 px-2 py-1 text-xs font-mono rounded-lg border border-slate-300 uppercase"
                />
              </div>
            </div>
          </div>

          {/* CSS Variables Box */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-700">
                {tm.cssVarsTitle}
              </label>
              <button
                onClick={handleCopy}
                className="text-xs text-primary-theme hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? tm.copied : tm.copyBtn}</span>
              </button>
            </div>
            <pre className="bg-slate-900 text-sky-300 p-3 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800">
              {cssSnippet}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={() => setIsThemeModalOpen(false)}
            className="btn-primary px-6 py-2.5 rounded-xl text-xs font-bold shadow-xs cursor-pointer"
          >
            {tm.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
