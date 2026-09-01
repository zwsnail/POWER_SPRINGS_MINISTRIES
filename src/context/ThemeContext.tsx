import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemePalette } from '../types';

export const THEME_PRESETS: ThemePalette[] = [
  {
    id: 'spring-blue',
    nameZh: '涌泉蔚蓝 (经典标准)',
    nameEn: 'Spring Blue (Classic)',
    primary: '#0284c7',
    primaryHover: '#0369a1',
    primaryLight: '#f0f9ff',
    accent: '#10b981',
    bgWarm: '#fbfbf9',
  },
  {
    id: 'forest-emerald',
    nameZh: '常青希望 (生机与平安)',
    nameEn: 'Forest Emerald (Hope & Peace)',
    primary: '#059669',
    primaryHover: '#047857',
    primaryLight: '#ecfdf5',
    accent: '#d97706',
    bgWarm: '#fafaf8',
  },
  {
    id: 'warm-amber',
    nameZh: '暖阳金曦 (温情与热情)',
    nameEn: 'Warm Sunshine (Warmth & Energy)',
    primary: '#ea580c',
    primaryHover: '#c2410c',
    primaryLight: '#fff7ed',
    accent: '#0284c7',
    bgWarm: '#fffcf7',
  },
  {
    id: 'royal-indigo',
    nameZh: '典雅靛蓝 (庄重与专业)',
    nameEn: 'Royal Indigo (Trust & Dignity)',
    primary: '#4f46e5',
    primaryHover: '#4338ca',
    primaryLight: '#eef2ff',
    accent: '#059669',
    bgWarm: '#f8fafc',
  },
  {
    id: 'compassion-rose',
    nameZh: '仁爱红枫 (关怀与怜悯)',
    nameEn: 'Rose Compassion (Love & Grace)',
    primary: '#e11d48',
    primaryHover: '#be123c',
    primaryLight: '#fff1f2',
    accent: '#d97706',
    bgWarm: '#fffbfb',
  },
];

interface ThemeContextType {
  currentTheme: ThemePalette;
  setThemeById: (id: string) => void;
  setCustomPrimary: (hex: string) => void;
  isThemeModalOpen: boolean;
  setIsThemeModalOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemePalette>(THEME_PRESETS[0]);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  // Apply CSS variables to root element
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', currentTheme.primary);
    root.style.setProperty('--color-primary-hover', currentTheme.primaryHover);
    root.style.setProperty('--color-primary-light', currentTheme.primaryLight);
    root.style.setProperty('--color-accent', currentTheme.accent);
    root.style.setProperty('--color-bg-base', currentTheme.bgWarm);
    root.style.setProperty(
      '--color-primary-ring',
      currentTheme.primary.startsWith('#')
        ? `${currentTheme.primary}40`
        : 'rgba(2, 132, 199, 0.25)'
    );
  }, [currentTheme]);

  const setThemeById = (id: string) => {
    const found = THEME_PRESETS.find((p) => p.id === id);
    if (found) {
      setCurrentTheme(found);
    }
  };

  const setCustomPrimary = (hex: string) => {
    setCurrentTheme((prev) => ({
      ...prev,
      id: 'custom',
      nameZh: '自定义主题色',
      nameEn: 'Custom Theme Color',
      primary: hex,
      primaryHover: hex,
      primaryLight: `${hex}15`,
    }));
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setThemeById,
        setCustomPrimary,
        isThemeModalOpen,
        setIsThemeModalOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
